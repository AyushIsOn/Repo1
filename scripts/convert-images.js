#!/usr/bin/env node

import sharp from 'sharp';
import fs from 'fs/promises';
import path from 'path';

const inputDir = './client/public/images';
const outputDir = './client/public/images/webp';

// Create output directory if it doesn't exist
async function ensureDir(dir) {
  try {
    await fs.access(dir);
  } catch {
    await fs.mkdir(dir, { recursive: true });
  }
}

// Convert image to WebP
async function convertToWebP(inputPath, outputPath) {
  try {
    await sharp(inputPath)
      .webp({ 
        quality: 85, // Good balance between quality and size
        effort: 6    // Higher effort = better compression
      })
      .toFile(outputPath);
    
    const inputStats = await fs.stat(inputPath);
    const outputStats = await fs.stat(outputPath);
    const reduction = ((inputStats.size - outputStats.size) / inputStats.size * 100).toFixed(1);
    
    console.log(`✅ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${reduction}% smaller)`);
  } catch (error) {
    console.error(`❌ Error converting ${inputPath}:`, error.message);
  }
}

// Main conversion function
async function convertImages() {
  await ensureDir(outputDir);
  
  const files = await fs.readdir(inputDir);
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file)
  );
  
  console.log(`🔄 Converting ${imageFiles.length} images to WebP...`);
  
  for (const file of imageFiles) {
    const inputPath = path.join(inputDir, file);
    const outputName = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const outputPath = path.join(outputDir, outputName);
    
    await convertToWebP(inputPath, outputPath);
  }
  
  console.log(`\n🎉 Conversion complete! Images saved to ${outputDir}`);
  console.log(`📝 Don't forget to update your component imports to use .webp files`);
}

convertImages().catch(console.error);
