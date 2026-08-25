import sharp from 'sharp';
const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#16120e"/>
  <rect x="0" y="0" width="12" height="630" fill="#bd684f"/>
  <text x="90" y="290" font-family="Helvetica, Arial, sans-serif" font-size="76" font-weight="bold" fill="#ece7df">Alfred Persson</text>
  <text x="90" y="375" font-family="Helvetica, Arial, sans-serif" font-size="42" fill="#a89c8e">Senior AI Engineer</text>
  <text x="90" y="480" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="#a89c8e">alfredpersson.com</text>
</svg>`;
await sharp(Buffer.from(svg)).png().toFile('public/og-default.png');
console.log('wrote public/og-default.png');
