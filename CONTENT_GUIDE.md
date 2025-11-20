# Content Management Guide

This guide explains how to add and manage content for your website.

## Adding Blog Posts

Blog posts are stored as Markdown files in the `content/blog/` directory.

### Creating a New Post

1. Create a new `.md` file in `content/blog/` directory
2. Add frontmatter at the top of the file:

```markdown
---
title: Your Post Title
title_zh: 你的文章标题
date: 2025-01-20
tags: [Tag1, Tag2]
excerpt: A short summary of your post.
excerpt_zh: 文章简短摘要。
---

# Your Post Title

Your content here...
```

### Frontmatter Fields

- `title`: Post title in English (required)
- `title_zh`: Post title in Chinese (optional)
- `date`: Publication date in YYYY-MM-DD format (required)
- `tags`: Array of tags (required)
- `excerpt`: Short summary in English (required)
- `excerpt_zh`: Short summary in Chinese (optional)

### Example Post

See `content/blog/welcome.md` for a complete example.

## Managing Projects

Edit the `projects` array in `constants.ts`:

```typescript
projects: [
  {
    id: "unique-id",
    title: { en: "Project Name", zh: "项目名称" },
    description: { 
      en: "Project description in English",
      zh: "项目中文描述"
    },
    category: "Web App",
    tech: ["React", "TypeScript", "Node.js"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/username/repo",
    status: "active" // or "in-progress" or "archived"
  }
]
```

## Managing Lists

### Books

Add books to the `lists.books` array in `constants.ts`:

```typescript
books: [
  { 
    title: "Book Title", 
    author: "Author Name", 
    completed: false 
  }
]
```

### Movies

Add movies to the `lists.movies` array:

```typescript
movies: [
  { 
    title: "Movie Title", 
    year: "2024", 
    completed: false 
  }
]
```

### Skills

Add skills to the `lists.skills` array:

```typescript
skills: [
  { 
    name: "Skill Name", 
    progress: 50,  // 0-100
    completed: false 
  }
]
```

### Goals

Add goals to the `lists.goals` array:

```typescript
goals: [
  { 
    title: "Goal description", 
    deadline: "2025-12-31", 
    completed: false 
  }
]
```

## Managing Publications

Edit the `publications` array in `constants.ts`:

```typescript
publications: [
  {
    id: "unique-id",
    title: "Paper Title",
    authors: ["Author 1", "Author 2"],
    venue: "Conference/Journal Name",
    year: 2024,
    abstract: {
      en: "English abstract",
      zh: "中文摘要"
    },
    link: "https://doi.org/...",
    tags: ["Tag1", "Tag2"]
  }
]
```

## Managing Resources

Edit the `resources` array in `constants.ts`:

```typescript
resources: [
  {
    id: "category-id",
    name: { en: "Category Name", zh: "分类名称" },
    links: [
      { 
        title: "Resource Title", 
        url: "https://example.com", 
        description: "Brief description" 
      }
    ]
  }
]
```

## Managing Timeline

Edit the `timeline` array in `constants.ts`:

```typescript
timeline: [
  {
    id: "event-id",
    year: "2025",
    title: { en: "Event Title", zh: "事件标题" },
    description: { 
      en: "Event description",
      zh: "事件描述"
    },
    type: "education" // or "career" or "award"
  }
]
```

## Updating Profile

Edit the `profile` object in `constants.ts`:

```typescript
profile: {
  name: { en: "Your Name", zh: "你的名字" },
  title: { en: "Your Title", zh: "你的职位" },
  affiliation: { en: "Your Institution", zh: "你的机构" },
  email: "your.email@example.com",
  location: { en: "Location", zh: "位置" },
  bio: {
    en: "Your bio in English",
    zh: "你的中文简介"
  },
  researchInterests: [
    { en: "Interest 1", zh: "兴趣1" },
    { en: "Interest 2", zh: "兴趣2" }
  ],
  avatarUrl: "/your-photo.jpg",
  linkedin: "https://linkedin.com/in/yourprofile",
  googleScholar: "https://scholar.google.com/...",
  github: "https://github.com/username"
}
```

## Tips

- **Keep backups**: Always backup `constants.ts` before major edits
- **Consistent formatting**: Follow the existing patterns for consistency
- **Test locally**: Run `npm run dev` to preview changes before deploying
- **Rebuild**: Run `npm run build` after making changes to ensure everything compiles

## File Structure

```
├── content/
│   └── blog/              # Markdown blog posts
│       └── *.md
├── pages/                 # Page components
│   ├── Home.tsx
│   ├── BlogPage.tsx
│   ├── BlogPost.tsx
│   ├── ProjectsPage.tsx
│   ├── ListsPage.tsx
│   └── ResourcesPage.tsx
├── components/            # Reusable components
├── constants.ts           # Main content configuration
├── types.ts              # TypeScript definitions
└── App.tsx               # Main app with routing
```

