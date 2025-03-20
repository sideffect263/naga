const fs = require('fs');
const path = require('path');
const sharp = require('sharp');
const { promisify } = require('util');
const readFile = promisify(fs.readFile);
const writeFile = promisify(fs.writeFile);

console.log('Generating favicons from SVG...');

// Ensure favicon directory exists
const faviconDir = path.resolve(__dirname, '../public/favicon');
if (!fs.existsSync(faviconDir)) {
  fs.mkdirSync(faviconDir, { recursive: true });
}

// Path to the SVG favicon
const svgPath = path.resolve(__dirname, '../public/favicon/favicon.svg');

// Check if the SVG file exists
if (!fs.existsSync(svgPath)) {
  console.error(`Error: SVG favicon not found at ${svgPath}`);
  process.exit(1);
}

// Define the favicon sizes to generate
const sizes = [
  { name: 'favicon-16x16.png', size: 16 },
  { name: 'favicon-32x32.png', size: 32 },
  { name: 'apple-touch-icon.png', size: 180 },
  { name: 'android-chrome-192x192.png', size: 192 },
  { name: 'android-chrome-512x512.png', size: 512 }
];

// Create a simple function to generate a PNG from the SVG
async function generatePNG(svgPath, outputPath, size) {
  try {
    console.log(`Generating ${outputPath} (${size}x${size})...`);
    
    await sharp(svgPath)
      .resize(size, size)
      .png()
      .toFile(outputPath);
    
    console.log(`Successfully created ${outputPath}`);
    return true;
  } catch (error) {
    console.error(`Error generating ${outputPath}:`, error.message);
    return false;
  }
}

// Generate all favicons
async function generateFavicons() {
  console.log('Starting favicon generation...');
  
  // Process each size
  for (const { name, size } of sizes) {
    const outputPath = path.resolve(faviconDir, name);
    await generatePNG(svgPath, outputPath, size);
  }
  
  console.log('Favicon generation complete!');
  console.log(`
===================================================
FAVICON GENERATION RESULTS
===================================================

The following favicon files have been generated:

${sizes.map(({ name, size }) => `- ${name}: ${size}x${size}px`).join('\n')}

Note: favicon.ico for legacy browsers was not generated.
For a complete favicon set including .ico format, visit:
https://realfavicongenerator.net/ and upload your SVG file.

===================================================
`);
}

// Run the generator
generateFavicons().catch(err => {
  console.error('Favicon generation failed:', err);
  process.exit(1);
}); 