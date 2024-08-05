#!/bin/bash

# Exit immediately if a command exits with a non-zero status
set -e

# Define the workers-site directory
WORKERS_SITE_DIR="/var/www/html/workers-site"

# Navigate to the workers-site directory
cd "$WORKERS_SITE_DIR"

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the Next.js application
echo "Building the Next.js application..."
npm run build

# Clean the workers-site directory of previous build artifacts
echo "Cleaning previous build artifacts..."
rm -rf .next/static .next/server .next/BUILD_ID

# Copy the built static files to the root of workers-site directory
echo "Copying built files to the root of the workers-site directory..."
mkdir -p ./static ./server ./_next
cp -r /var/www/html/workers-site/.next /var/www/html/workers-site/static
cp -r /var/www/html/workers-site/.next/server /var/www/html/workers-site//server
cp /var/www/html/workers-site/.next/BUILD_ID /var/www/html/workers-site//BUILD_ID
cp -r /var/www/html/workers-site/.next/static /var/www/html/workers-site/_next/static

# Deploy to Cloudflare using wrangler
echo "Deploying to Cloudflare..."
wrangler deploy

echo "Deployment complete!"
