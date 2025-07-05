#!/bin/bash

# 🚀 Quick Deploy Script for PG Hostel Tracker
# Run this script to prepare your project for GitHub Pages

echo "🏠 PG Hostel Tracker - GitHub Pages Deployment Prep"
echo "=================================================="

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the PgHostelTracker directory"
    exit 1
fi

echo "📂 Current directory: $(pwd)"

# Check git status
echo ""
echo "📋 Step 1: Checking Git status..."
git status

echo ""
echo "📦 Step 2: Adding all files to Git..."
git add .

echo ""
echo "💾 Step 3: Committing changes..."
git commit -m "Complete PG Hostel website ready for GitHub Pages deployment

Features included:
- WebP optimized images (40-91% size reduction)
- Image protection with watermarks
- Responsive design for all devices
- Google Maps integration
- WhatsApp contact integration
- Fraud warning system
- Performance optimizations"

echo ""
echo "✅ Your project is ready for GitHub!"
echo ""
echo "🔗 Next steps:"
echo "1. Create a new repository on GitHub.com"
echo "2. Run these commands (replace YOURUSERNAME):"
echo "   git remote add origin https://github.com/YOURUSERNAME/PgHostelTracker.git"
echo "   git branch -M main"
echo "   git push -u origin main"
echo "3. Enable GitHub Pages in repository settings"
echo ""
echo "🌐 Your site will be live at: https://YOURUSERNAME.github.io/PgHostelTracker/"
echo ""
echo "📖 See GIT_DEPLOYMENT_STEPS.md for detailed instructions"
