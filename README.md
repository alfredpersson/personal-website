# alfredpersson.com

Personal website and portfolio built with [MkDocs Material](https://squidfunk.github.io/mkdocs-material/).

## Local Development

**Prerequisites:** Python 3, pip (or uv), and on macOS: `brew install cairo freetype libffi libjpeg libpng zlib pngquant`

```bash
pip install "mkdocs-material[imaging]"

# macOS Apple Silicon
export DYLD_FALLBACK_LIBRARY_PATH=/opt/homebrew/lib

mkdocs serve
```

Site will be available at `http://localhost:8000`.

### Docker Alternative

```bash
chmod +x start_server.sh
./start_server.sh
```

## Project Structure

```
docs/
├── index.md              # Homepage
├── portfolio/            # Case studies
│   └── projects/         # Individual project write-ups
├── blog/                 # Blog posts
├── assets/               # Images and media
└── stylesheets/          # Custom CSS
mkdocs.yml                # Site configuration
```

## Deployment

The site is deployed to GitHub Pages. Pushing to `main` triggers a build via GitHub Actions.

- **Custom domain:** configured via `docs/CNAME`
- **Deployment guide:** [Publishing your site](https://squidfunk.github.io/mkdocs-material/publishing-your-site/)

## Useful Links

- [MkDocs Material docs](https://squidfunk.github.io/mkdocs-material/)
- [Icons & Emojis](https://squidfunk.github.io/mkdocs-material/reference/icons-emojis/)
- [Blog plugin](https://squidfunk.github.io/mkdocs-material/blog/)
