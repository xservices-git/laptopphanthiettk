// Move optimized files OUT of subfolders into public/ root, with .webp/.avif suffix matching original
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, 'public-optimized');
const DST = path.join(__dirname, 'public');

// Clean up old subfolders in public/
['hero', 'product', 'misc'].forEach(sub => {
  const p = path.join(DST, sub);
  if (fs.existsSync(p)) fs.rmSync(p, { recursive: true, force: true });
});

// Clean up if previously copied
['hero', 'product', 'misc'].forEach(sub => {
  const p = path.join(SRC, sub);
  if (fs.existsSync(p)) {
    for (const f of fs.readdirSync(p)) {
      const src = path.join(p, f);
      const dst = path.join(DST, f);
      fs.copyFileSync(src, dst);
      const size = fs.statSync(dst).size;
      console.log(`copied: ${f} -> ${(size/1024).toFixed(1)}KB`);
    }
  }
});

// Replace big _preview.png with webp
const previewWebp = path.join(DST, '_preview.webp');
const previewPng = path.join(DST, '_preview.png');
if (fs.existsSync(previewWebp) && fs.existsSync(previewPng)) {
  fs.unlinkSync(previewPng);
  fs.renameSync(previewWebp, path.join(DST, 'preview.webp'));
  console.log('replaced _preview.png -> preview.webp');
}

// Remove source PNG (large favicon-source.png)
const favSrc = path.join(DST, 'favicon-source.png');
if (fs.existsSync(favSrc)) {
  fs.unlinkSync(favSrc);
  console.log('removed favicon-source.png');
}

// Delete optimize-imgs temp
fs.rmSync(SRC, { recursive: true, force: true });

console.log('\nFinal public/ images:');
fs.readdirSync(DST).filter(f => /\.(webp|avif|jpg|png|ico|svg)$/.test(f)).forEach(f => {
  const size = fs.statSync(path.join(DST, f)).size;
  console.log(`  ${f.padEnd(28)} ${(size/1024).toFixed(1)}KB`);
});
