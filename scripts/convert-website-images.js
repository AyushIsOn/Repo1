const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

// Images actually used in the website components
const usedImages = [
  // Gallery images
  'WhatsApp Image 2025-07-05 at 6.15.03 AM_1751727421470.jpeg',
  'WhatsApp Image 2025-07-05 at 6.15.02 AM_1751727425482.jpeg',
  'WhatsApp Image 2025-07-05 at 6.15.00 AM_1751727429452.jpeg',
  '20250705_111711_1751727472907.jpg',
  '20250705_111434_1751727492174.jpg',
  '20250705_111415_1751727496435.jpg',
  '20250705_111302_1751727510189.jpg',
  '2021-08-02_1751727639668.jpg',
  'WhatsApp Image 2025-07-05 at 9.24.49 PM_1751731408158.jpeg',
  '20250705_112050_1751727258654.jpg',
  '20250705_112137_1751727258654.jpg',
  '20250705_112151_1751727258654.jpg',
  '20250705_112450_1751727285725.jpg',
  '20250705_112846_1751727285725.jpg',
  '20250705_113024_1751727285725.jpg',
  '20250705_103605_1751716360876.jpg',
  '20250705_103901_1751716360877.jpg',
  '20250705_103916_1751716360877.jpg',
  '20250705_104258_1751716360877.jpg',
  '20250705_104552_1751716360877.jpg',
  '20250705_104754_1751716360877.jpg',
  '20250705_111513_1751731261770.jpg',
  // Properties images
  '2023-07-14_1751728409526.jpg',
  '20250705_104903_1751728288595.jpg',
  '20250705_113142_1751728478634.jpg',
  // Location images
  'Girls - 1_1751727828946.png',
  'WhatsApp Image 2025-07-05 at 12.49.55 PM (1)_1751728025300.jpeg',
  'WhatsApp Image 2025-07-05 at 12.49.55 PM_1751728025300.jpeg',
  'WhatsApp Image 2025-07-05 at 12.49.56 PM (1)_1751728025300.jpeg',
  'WhatsApp Image 2025-07-05 at 12.49.56 PM_1751728025300.jpeg',
  // Amenities images
  'cctv-new.jpg',
  'mandir-park-correct.jpg'
];

async function convertImages() {
  const sourceDir = path.join(__dirname, '../client/public/images');
  const targetDir = path.join(__dirname, '../client/public/webp-images');
  
  console.log('🔄 Converting website images to WebP format...');
  console.log(`Source: ${sourceDir}`);
  console.log(`Target: ${targetDir}`);
  
  // Ensure target directory exists
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  let convertedCount = 0;
  let totalSavings = 0;

  for (const imageFile of usedImages) {
    const sourcePath = path.join(sourceDir, imageFile);
    const targetFile = imageFile.replace(/\.(jpg|jpeg|png)$/i, '.webp');
    const targetPath = path.join(targetDir, targetFile);

    if (!fs.existsSync(sourcePath)) {
      console.log(`⚠️  Source image not found: ${imageFile}`);
      continue;
    }

    try {
      // Get original file size
      const originalStats = fs.statSync(sourcePath);
      const originalSize = originalStats.size;

      // Convert to WebP
      await sharp(sourcePath)
        .webp({ 
          quality: 85,
          effort: 6 
        })
        .toFile(targetPath);

      // Get converted file size
      const convertedStats = fs.statSync(targetPath);
      const convertedSize = convertedStats.size;
      const savings = ((originalSize - convertedSize) / originalSize * 100).toFixed(1);
      
      totalSavings += (originalSize - convertedSize);
      convertedCount++;

      console.log(`✅ ${imageFile} → ${targetFile} (${savings}% smaller)`);
    } catch (error) {
      console.error(`❌ Failed to convert ${imageFile}:`, error.message);
    }
  }

  const totalSavingsMB = (totalSavings / (1024 * 1024)).toFixed(2);
  console.log(`\n🎉 Conversion complete!`);
  console.log(`📊 Converted ${convertedCount} images`);
  console.log(`💾 Total space saved: ${totalSavingsMB} MB`);
}

convertImages().catch(console.error);
