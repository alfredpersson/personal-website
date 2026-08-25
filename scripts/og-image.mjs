import sharp from 'sharp';
const svg = `<svg width="1200" height="630" xmlns="http://www.w3.org/2000/svg">
  <rect width="1200" height="630" fill="#101418"/>
  <rect x="0" y="0" width="12" height="630" fill="#6ca4e0"/>
  <text x="90" y="290" font-family="Helvetica, Arial, sans-serif" font-size="76" font-weight="bold" fill="#e8eaed">Alfred Persson</text>
  <text x="90" y="375" font-family="Helvetica, Arial, sans-serif" font-size="42" fill="#9aa5b1">Senior AI Engineer</text>
  <text x="90" y="480" font-family="Helvetica, Arial, sans-serif" font-size="30" fill="#5a6470">alfredpersson.com</text>
</svg>`;
await sharp(Buffer.from(svg)).png().toFile('public/og-default.png');
console.log('wrote public/og-default.png');
