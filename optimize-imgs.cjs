const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const SRC = path.join(__dirname, 'public');
const OUT = path.join(__dirname, 'public-optimized');

// Resize per PageSpeed insights: hero/service ~800px, gallery ~600px, products ~400px
const targets = [
  { src: 'storefront.jpg',     w: 1200, q: 78, dir: 'hero' },
  { src: 'laptop-repair.jpg',  w: 1200, q: 78, dir: 'hero' },
  { src: 'camera-install.jpg', w: 1200, q: 78, dir: 'hero' },
  { src: 'laptop-service.jpg', w: 800,  q: 78, dir: 'product' },
  { src: 'cctv-camera.jpg',    w: 800,  q: 78, dir: 'product' },
  { src: 'pc-build.jpg',       w: 800,  q: 78, dir: 'product' },
  { src: 'tv-setup.jpg',       w: 800,  q: 78, dir: 'product' },
  { src: 'network-wifi.jpg',   w: 800,  q: 78, dir: 'product' },
  { src: 'components.jpg',     w: 800,  q: 78, dir: 'product' },
  { src: 'gaming-setup.jpg',   w: 800,  q: 78, dir: 'product' },
  { src: 'cpu-upgrade.jpg',    w: 800,  q: 78, dir: 'product' },
  { src: 'logo.jpg',           w: 200,  q: 85, dir: 'misc' },
];

(async () => {
  if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });
  for (const t of targets) {
    const srcPath = path.join(SRC, t.src);
    if (!fs.existsSync(srcPath)) { console.log('skip', t.src); continue; }
    const baseName = path.parse(t.src).name;
    const outDir = path.join(OUT, t.dir);
    if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

    // WebP
    const webpOut = path.join(outDir, `${baseName}.webp`);
    await sharp(srcPath)
      .resize({ width: t.w, withoutEnlargement: true })
      .webp({ quality: t.q, effort: 4 })
      .toFile(webpOut);

    // AVIF (smaller, slower decode but PageSpeed loves)
    const avifOut = path.join(outDir, `${baseName}.avif`);
    await sharp(srcPath)
      .resize({ width: t.w, withoutEnlargement: true })
      .avif({ quality: 60, effort: 6 })
      .toFile(avifOut);

    const wpSize = fs.statSync(webpOut).size;
    const avSize = fs.statSync(avifOut).size;
    const origSize = fs.statSync(srcPath).size;
    console.log(`${t.src.padEnd(25)} ${(origSize/1024).toFixed(1)}KB -> webp ${(wpSize/1024).toFixed(1)}KB (${((1-wpSize/origSize)*100).toFixed(0)}% smaller) -> avif ${(avSize/1024).toFixed(1)}KB`);
  }

  // Favicon from PNG
  const faviconSrc = path.join(SRC, 'favicon-source.png');
  if (fs.existsSync(faviconSrc)) {
    const outFav = path.join(OUT, 'misc');
    if (!fs.existsSync(outFav)) fs.mkdirSync(outFav, { recursive: true });
    // 32x32 ico + webp
    await sharp(faviconSrc).resize(32, 32).png().toFile(path.join(outFav, 'favicon-32.png'));
    await sharp(faviconSrc).resize(192, 192).webp({ quality: 80 }).toFile(path.join(outFav, 'favicon-192.webp'));
    await sharp(faviconSrc).resize(48, 48).webp({ quality: 85 }).toFile(path.join(outFav, 'favicon-48.webp'));
  }

  // _preview
  const preview = path.join(SRC, '_preview.png');
  if (fs.existsSync(preview)) {
    await sharp(preview).resize({ width: 800 }).webp({ quality: 75 }).toFile(path.join(OUT, 'misc', '_preview.webp'));
  }

  console.log('\nDONE. Optimized images in:', OUT);
})();
