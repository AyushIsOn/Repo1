import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../client/public/images');
const outputDir = path.join(__dirname, '../client/public/images/webp');

// Create webp directory if it doesn't exist
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function convertToWebP() {
  try {
    const files = fs.readdirSync(inputDir);
    const imageFiles = files.filter(file => 
      /\.(jpg|jpeg|png)$/i.test(file) && !file.startsWith('.')
    );

    console.log(`🔄 Converting ${imageFiles.length} images to WebP...`);

    for (const file of imageFiles) {
      const inputPath = path.join(inputDir, file);
      const outputFileName = file.replace(/\.(jpg|jpeg|png)$/i, '.webp');
      const outputPath = path.join(outputDir, outputFileName);

      // Skip if WebP version already exists and is newer
      if (fs.existsSync(outputPath)) {
        const inputStat = fs.statSync(inputPath);
        const outputStat = fs.statSync(outputPath);
        if (outputStat.mtime > inputStat.mtime) {
          console.log(`⏭️  Skipping ${file} (WebP version is up to date)`);
          continue;
        }
      }

      const inputStats = fs.statSync(inputPath);
      const inputSize = inputStats.size;

      await sharp(inputPath)
        .webp({ quality: 80 })
        .toFile(outputPath);

      const outputStats = fs.statSync(outputPath);
      const outputSize = outputStats.size;
      const reduction = ((inputSize - outputSize) / inputSize * 100).toFixed(1);

      console.log(`✅ ${file} → ${outputFileName} (${reduction}% smaller)`);
    }

    console.log('🎉 Image conversion completed!');
  } catch (error) {
    console.error('❌ Error converting images:', error);
    process.exit(1);
  }
}

convertToWebP();
