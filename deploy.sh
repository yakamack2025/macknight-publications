#!/bin/bash

# Build the Angular app
echo "Building Angular app..."
npm run build

# Copy build files to fixed-deploy folder
echo "Copying files to deploy folder..."
rm -rf fixed-deploy/*
cp -r dist/macknight-publications/browser/* fixed-deploy/

# Ensure _redirects file exists
echo "/*    /index.html   200" > fixed-deploy/_redirects

echo "Deployment folder ready! Upload the contents of 'fixed-deploy' to Netlify."