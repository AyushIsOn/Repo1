#!/usr/bin/env node

import { execSync } from 'child_process';
import { writeFileSync, readFileSync } from 'fs';
import path from 'path';

console.log('🚀 Preparing Avni PG website for GitHub Pages deployment...');

try {
  // Step 1: Convert images to WebP
  console.log('📸 Converting images to WebP format...');
  execSync('npm run convert-images', { stdio: 'inherit' });
  
  // Step 2: Build the project
  console.log('🔨 Building the project...');
  execSync('npm run build:static', { stdio: 'inherit' });
  
  // Step 3: Update HTML for GitHub Pages base path
  console.log('🔧 Updating HTML for GitHub Pages...');
  const htmlPath = path.join(process.cwd(), 'dist', 'index.html');
  let html = readFileSync(htmlPath, 'utf8');
  
  // Update base path for GitHub Pages
  html = html.replace(
    '<base href="/">',
    '<base href="/AvniPG/">'
  );
  
  // Update asset paths
  html = html.replace(
    /href="\/assets\//g,
    'href="/AvniPG/assets/'
  );
  
  html = html.replace(
    /src="\/assets\//g,
    'src="/AvniPG/assets/'
  );
  
  writeFileSync(htmlPath, html);
  
  console.log('✅ GitHub Pages deployment prepared successfully!');
  console.log('📁 Files ready in ./dist folder');
  console.log('🌐 Upload to GitHub and enable Pages to deploy');
  
} catch (error) {
  console.error('❌ Error during deployment preparation:', error.message);
  process.exit(1);
}