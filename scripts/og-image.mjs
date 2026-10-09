// Renders public/og-image.png (1200x630), the preview image that link
// previews show, from an HTML page with headless Chrome, so it uses the
// site's own fonts, colors and photo.
// Needs a local Chrome or Chromium. Set CHROME to its path if it is not in
// the default macOS location.
import { execFileSync } from 'node:child_process';
import { mkdtempSync, readFileSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';

const chrome =
  process.env.CHROME ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';
const b64 = (path) => readFileSync(path).toString('base64');
const fonts = 'node_modules/@fontsource-variable';
const serif = b64(`${fonts}/source-serif-4/files/source-serif-4-latin-wght-normal.woff2`);
const mono = b64(`${fonts}/jetbrains-mono/files/jetbrains-mono-latin-wght-normal.woff2`);
const photo = b64('public/assets/alfredpersson.jpg');

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<style>
  @font-face { font-family: 'Serif'; src: url(data:font/woff2;base64,${serif}) format('woff2'); font-weight: 200 900; }
  @font-face { font-family: 'Mono'; src: url(data:font/woff2;base64,${mono}) format('woff2'); font-weight: 100 800; }
  html, body { margin: 0; width: 1200px; height: 630px; overflow: hidden; }
  body { position: relative; background: #16120e; color: #ece7df; font-family: 'Serif', Georgia, serif; }
  .photo { position: absolute; left: 740px; top: 125px; width: 380px; height: 380px; box-sizing: border-box; border: 6px solid #bd684f; border-radius: 50%; overflow: hidden; }
  .photo img { width: 100%; height: 100%; object-fit: cover; object-position: 46% 20%; display: block; }
  .text { position: absolute; left: 80px; top: 96px; width: 600px; }
  .tick { width: 64px; height: 7px; background: #bd684f; margin-bottom: 30px; }
  h1 { font-size: 96px; line-height: 1; font-weight: 700; letter-spacing: -0.025em; margin: 0 0 18px; }
  .role { font-size: 42px; line-height: 1.2; font-weight: 600; color: #d68a6b; margin: 0 0 26px; }
  .line { font-size: 29px; line-height: 1.4; font-weight: 600; margin: 0; max-width: 560px; }
  .domain { position: absolute; left: 80px; bottom: 56px; margin: 0; font-family: 'Mono', monospace; font-size: 22px; letter-spacing: 0.02em; color: #d68a6b; }
</style>
</head>
<body>
  <div class="photo"><img src="data:image/jpeg;base64,${photo}" alt=""></div>
  <div class="text">
    <div class="tick"></div>
    <h1>Alfred<br>Persson</h1>
    <p class="role">Senior AI Engineer</p>
    <p class="line">I build AI products that prove they work, on every change.</p>
  </div>
  <p class="domain">alfredpersson.com</p>
</body>
</html>`;

const page = join(mkdtempSync(join(tmpdir(), 'og-')), 'og.html');
writeFileSync(page, html);
execFileSync(
  chrome,
  [
    '--headless=new',
    '--disable-gpu',
    '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--window-size=1200,630',
    '--virtual-time-budget=3000',
    `--screenshot=${resolve('public/og-image.png')}`,
    `file://${page}`,
  ],
  { stdio: 'ignore' }
);
console.log('wrote public/og-image.png');
