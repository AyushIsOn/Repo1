#!/bin/bash

echo "🔄 Building PG Hostel Tracker with WebP Images..."
echo "📁 Working Directory: $(pwd)"

# Install dependencies if needed
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Convert images to WebP
echo "🖼️ Converting images to WebP..."
node scripts/convert-website-images.js

# Build the static site
echo "🏗️ Building static site..."
npm run build:static

echo "✅ Build complete! Check the dist/ folder for output."
echo "🌐 Deploy to GitHub Pages by pushing to main branch."
