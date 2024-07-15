#!/bin/bash

set -e

if [ -z "$1" ]; then
  echo "No commit message provided"
  exit 1
fi

git add .
git commit -m "$1"
git push origin main

wrangler deploy
