#!/bin/bash

echo "🚀 Starting PG Hostel Tracker Development Server..."
echo "📁 Working in: $(pwd)"

# Check if node_modules exists
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

echo "🔥 Starting development server..."
echo "🌐 Server will be available at: http://localhost:5000"
echo "⚡ Press Ctrl+C to stop the server"

NODE_ENV=development npx tsx server/index.ts
