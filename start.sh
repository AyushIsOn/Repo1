#!/bin/bash

# PG Hostel Tracker Startup Script

echo "🏨 Starting PG Hostel Tracker..."

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install it first:"
    echo "   brew install node"
    exit 1
fi

# Check if npm is available
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not available. Please install Node.js first."
    exit 1
fi

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Check if .env file exists
if [ ! -f ".env" ]; then
    echo "⚠️  .env file not found. Please create one with your database URL."
    echo "   Example: DATABASE_URL=postgresql://username:password@localhost:5432/pg_hostel_tracker"
    exit 1
fi

# Start the development server
echo "🚀 Starting development server..."
echo "🌐 Open http://localhost:5000 in your browser"
npm run dev
