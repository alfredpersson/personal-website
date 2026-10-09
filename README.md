# alfredpersson.com

Personal site, built with [Astro](https://astro.build) and TypeScript. Static output, no client JavaScript, deployed to GitHub Pages.

Case studies have a typed content schema: each one needs exactly three decisions, each with a reason and a measurement, or the build fails.

## Development

```bash
pnpm install
pnpm dev        # http://localhost:4321
pnpm build      # astro check + static build to dist/
```

Dependencies are installed through pnpm with a one-week minimum release age (pnpm-workspace.yaml), so freshly published package versions never enter the build.

## Deployment

Pushing to main builds and publishes dist/ to the gh-pages branch via GitHub Actions. Domain: alfredpersson.com (public/CNAME).
