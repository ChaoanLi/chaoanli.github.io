# Chaoan Li - Personal Academic Website

A clean, minimalist academic website showcasing research, publications, and professional timeline.

## Stack

- React 19 with TypeScript
- Vite for build tooling
- Brutalist design aesthetic

## Development

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start dev server
npm run dev

# Build for production
npm run build
```

## Deployment

The site is configured for automatic deployment to GitHub Pages via GitHub Actions. Push to `main` branch to deploy.

For detailed deployment instructions, see [DEPLOY.md](./DEPLOY.md).

## Configuration

All personal information is centralized in `constants.ts`:
- Profile details and bio
- Publications list
- Timeline events
- Blog posts
- Resource links

## Project Structure

```
├── components/          # React components
├── App.tsx             # Main application
├── constants.ts        # Site configuration
├── types.ts            # TypeScript definitions
└── vite.config.ts      # Build configuration
```

## License

MIT License - see [LICENSE](./LICENSE) for details.

---

**Live Site**: [chaoanli.github.io](https://chaoanli.github.io)
