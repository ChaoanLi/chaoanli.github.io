# Chaoan Li - Personal Academic Website

A modern academic website with multi-page routing, blog system, and project showcase.

## Features

- Multi-page architecture with React Router
- Markdown-based blog system
- Project portfolio
- Personal lists (books, movies, skills, goals)
- Resource library
- Bilingual support (English/Chinese)
- Responsive brutalist design

## Tech Stack

- React 19 with TypeScript
- React Router for navigation
- React Markdown for blog posts
- Vite for build tooling

## Quick Start

```bash
# Install dependencies
npm install --legacy-peer-deps

# Start development server
npm run dev

# Build for production
npm run build
```

## Adding Content

### Blog Posts

Create Markdown files in `content/blog/`:

```markdown
---
title: Your Post Title
date: 2025-01-20
tags: [Tag1, Tag2]
excerpt: Post summary
---

Your content here...
```

### Projects

Edit `constants.ts`:

```typescript
projects: [
  {
    id: "project-id",
    title: { en: "Project", zh: "项目" },
    description: { en: "Description", zh: "描述" },
    tech: ["React", "TypeScript"],
    liveUrl: "https://...",
    status: "active"
  }
]
```

### Lists

Add items to `lists` in `constants.ts`:

```typescript
lists: {
  books: [{ title: "Book", author: "Author", completed: false }],
  movies: [{ title: "Movie", year: "2024", completed: false }],
  skills: [{ name: "Skill", progress: 50, completed: false }],
  goals: [{ title: "Goal", deadline: "2025-12-31", completed: false }]
}
```

For detailed content management instructions, see [CONTENT_GUIDE.md](./CONTENT_GUIDE.md).

## Pages

- `/` - Home (About & Introduction)
- `/research` - Publications and research work
- `/history` - Academic timeline and milestones
- `/blog` - Blog with archive and tags
- `/blog/:slug` - Individual blog posts
- `/projects` - Project showcase
- `/lists` - Personal lists and goals
- `/resources` - Curated resource links

## Project Structure

```
├── pages/               # Page components
│   ├── Home.tsx
│   ├── ResearchPage.tsx
│   ├── HistoryPage.tsx
│   ├── BlogPage.tsx
│   ├── BlogPost.tsx
│   ├── ProjectsPage.tsx
│   ├── ListsPage.tsx
│   └── ResourcesPage.tsx
├── components/          # Reusable components
├── content/
│   └── blog/           # Markdown blog posts
├── constants.ts        # Site configuration
├── types.ts           # TypeScript definitions
└── App.tsx            # Main app with routing
```

## Deployment

Configured for automatic deployment to GitHub Pages via GitHub Actions.

Push to `main` branch to deploy. See [DEPLOY.md](./DEPLOY.md) for details.

## License

MIT License - see [LICENSE](./LICENSE) for details.

---

**Live Site**: [chaoanli.github.io](https://chaoanli.github.io)
