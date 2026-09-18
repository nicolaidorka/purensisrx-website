#!/bin/bash

# Simple local server script for PaisleyBio website
# Usage: ./serve.sh

echo "🚀 Starting PaisleyBio Website Local Server..."
echo ""

# Check if Python 3 is available
if command -v python3 &> /dev/null; then
    echo "✅ Using Python 3 HTTP server"
    echo "📡 Server running at: http://localhost:8000"
    echo "🛑 Press Ctrl+C to stop"
    echo ""
    python3 -m http.server 8000
# Check if Python 2 is available
elif command -v python &> /dev/null; then
    echo "✅ Using Python 2 HTTP server"
    echo "📡 Server running at: http://localhost:8000"
    echo "🛑 Press Ctrl+C to stop"
    echo ""
    python -m SimpleHTTPServer 8000
# Check if Node.js is available
elif command -v node &> /dev/null; then
    echo "✅ Using Node.js HTTP server"
    echo "📦 Installing http-server..."
    npx http-server -p 8000
else
    echo "❌ Error: No suitable HTTP server found!"
    echo ""
    echo "Please install one of the following:"
    echo "  - Python 3: https://www.python.org/downloads/"
    echo "  - Node.js: https://nodejs.org/"
    echo ""
    echo "Or open index.html directly in your browser."
    exit 1
fi
