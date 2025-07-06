import fs from 'fs';
import path from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Image sizes for responsive images
const IMAGE_SIZES = {
  thumbnail: { width: 300, height: 200, quality: 75 },
  small: { width: 600, height: 400, quality: 80 },
  medium: { width: 1200, height: 800, quality: 85 },
  large: { width: 1920, height: 1280, quality: 85 }
};

async function optimizeImages() {
  const sourceDir = path.join(__dirname, '../client/public/webp-images');
  const targetDir = path.join(__dirname, '../client/public/optimized-images');
  
  console.log('🚀 Starting image optimization...');
  console.log(`Source: ${sourceDir}`);
  console.log(`Target: ${targetDir}`);
  
  // Create target directory structure
  for (const sizeName of Object.keys(IMAGE_SIZES)) {
    const sizeDir = path.join(targetDir, sizeName);
    if (!fs.existsSync(sizeDir)) {
      fs.mkdirSync(sizeDir, { recursive: true });
    }
  }

  const files = fs.readdirSync(sourceDir).filter(file => file.endsWith('.webp'));
  console.log(`Found ${files.length} images to optimize`);

  let totalSavings = 0;
  let processedCount = 0;

  for (const file of files) {
    const sourcePath = path.join(sourceDir, file);
    const fileName = path.parse(file).name;
    
    try {
      // Get original file size
      const originalStats = fs.statSync(sourcePath);
      const originalSize = originalStats.size;
      
      console.log(`\n📸 Processing: ${file} (${(originalSize / 1024).toFixed(1)}KB)`);
      
      let fileSavings = 0;
      
      // Generate different sizes
      for (const [sizeName, config] of Object.entries(IMAGE_SIZES)) {
        const outputPath = path.join(targetDir, sizeName, `${fileName}.webp`);
        
        await sharp(sourcePath)
          .resize(config.width, config.height, {
            fit: 'cover',
            position: 'center'
          })
          .webp({ 
            quality: config.quality,
            effort: 6,
            smartSubsample: true
          })
          .toFile(outputPath);
        
        // Check optimized file size
        const optimizedStats = fs.statSync(outputPath);
        const optimizedSize = optimizedStats.size;
        const savings = originalSize - optimizedSize;
        fileSavings += savings;
        
        console.log(`  ✅ ${sizeName}: ${config.width}x${config.height} - ${(optimizedSize / 1024).toFixed(1)}KB`);
      }
      
      totalSavings += fileSavings;
      processedCount++;
      
    } catch (error) {
      console.error(`❌ Failed to process ${file}:`, error.message);
    }
  }

  const totalSavingsMB = (totalSavings / (1024 * 1024)).toFixed(2);
  console.log(`\n🎉 Optimization complete!`);
  console.log(`📊 Processed ${processedCount} images`);
  console.log(`💾 Total space optimized: ${totalSavingsMB} MB`);
  console.log(`\n📁 Generated image sizes:`);
  Object.entries(IMAGE_SIZES).forEach(([size, config]) => {
    console.log(`  ${size}: ${config.width}x${config.height} (${config.quality}% quality)`);
  });
}

optimizeImages().catch(console.error);
