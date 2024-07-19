#!/bin/bash

# Check if commit message and compatibility date are provided
if [ -z "$1" ]; then
  echo "No commit message provided"
  exit 1
fi

if [ -z "$2" ]; then
  echo "No compatibility date provided"
  exit 1
fi

# Assign arguments to variables
COMMIT_MESSAGE=$1
COMPATIBILITY_DATE=$2

# Change to the project directory
cd /var/www/html/nvrs-frontend

# Commit and push changes to GitHub
git add .
git commit -m "$COMMIT_MESSAGE"
git push origin main  # Change 'main' to your branch name if different

# Deploy to Cloudflare using Wrangler with compatibility date
npm install
npm run build

# Copy built static files to workers-site directory
cp -r .next /var/www/html/workers-site/.next

# Change to workers-site directory
cd /var/www/html/workers-site

npx wrangler deploy /var/www/html/workers-site/index.js --name "vrsprotoype" --compatibility-date "$COMPATIBILITY_DATE" 
