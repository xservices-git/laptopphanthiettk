// Post-build: inline CSS file into HTML, remove link tag, drop font preloads that are not critical
const fs = require('fs');
const path = require('path');

const distDir = path.join(__dirname, 'dist');
const htmlPath = path.join(distDir, 'index.html');
let html = fs.readFileSync(htmlPath, 'utf8');

// Find all CSS asset files referenced from index.html
const cssLinkMatches = [...html.matchAll(/<link[^>]+rel="stylesheet"[^>]+href="(\/assets\/[^"]+\.css)"[^>]*>/g)];
console.log(`Found ${cssLinkMatches.length} CSS link(s) to inline`);

let totalInlined = 0;
for (const m of cssLinkMatches) {
  const cssFile = m[1];
  const cssPath = path.join(distDir, cssFile);
  if (!fs.existsSync(cssPath)) { console.log(`  skip ${cssFile} (not found)`); continue; }
  const cssContent = fs.readFileSync(cssPath, 'utf8');
  // Only inline CSS < 50KB
  if (cssContent.length > 50 * 1024) { console.log(`  skip ${cssFile} (too large)`); continue; }
  // Replace the <link> with <style>
  html = html.replace(m[0], `<style>${cssContent}</style>`);
  totalInlined += cssContent.length;
  console.log(`  inlined ${cssFile} (${cssContent.length}B)`);
}

// Drop font preload for pjs-latin.woff2 (Vietnamese site, latin less critical)
html = html.replace(/\s*<link rel="preload" as="font" href="\/fonts\/pjs-latin\.woff2"[^>]*>/, '');

fs.writeFileSync(htmlPath, html);
console.log(`\nInlined ${totalInlined}B CSS into HTML. New HTML size: ${html.length}B`);