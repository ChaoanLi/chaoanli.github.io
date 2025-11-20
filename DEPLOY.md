# Deployment Guide

## Prerequisites

- Node.js 18.0 or higher
- npm or yarn

## Local Development

```bash
npm install --legacy-peer-deps
npm run dev
```

Visit `http://localhost:5173` to view the site.

## GitHub Pages Deployment

### Automatic Deployment (Recommended)

The repository includes a GitHub Actions workflow for automatic deployment.

1. Push changes to the `main` branch
2. Navigate to your repository's Settings > Pages
3. Under "Source", select **GitHub Actions**
4. The site will automatically build and deploy on each push

Your site will be available at `https://username.github.io`

### Manual Deployment

If you prefer manual deployment:

```bash
npm run build
npm install -D gh-pages
npx gh-pages -d dist
```

Then configure GitHub Pages to deploy from the `gh-pages` branch.

## Configuration

### Base URL

For deployment at a subpath (e.g., `username.github.io/repo-name`), update `vite.config.ts`:

```typescript
export default defineConfig({
  base: '/repo-name/',
});
```

For a root domain deployment, use:

```typescript
export default defineConfig({
  base: '/',
});
```

### Custom Domain

To use a custom domain:

1. Create a `CNAME` file in the `public/` directory
2. Add your domain name to the file (e.g., `www.example.com`)
3. Configure your DNS provider to point to GitHub Pages

## Alternative Platforms

### Vercel

1. Import your GitHub repository
2. Vercel will automatically detect Vite configuration
3. Deploy

### Netlify

1. Connect your repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Deploy

## Troubleshooting

**Blank page after deployment**: Check that the `base` configuration in `vite.config.ts` matches your deployment URL.

**Assets not loading**: Ensure all asset paths are relative or use the configured base path.

## Build Output

The production build generates optimized files in the `dist/` directory:
- Minified JavaScript bundles
- Optimized assets
- Static HTML entry point

---

For issues, refer to the [Vite documentation](https://vitejs.dev/) or [GitHub Pages documentation](https://docs.github.com/en/pages).
