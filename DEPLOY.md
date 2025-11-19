# 部署指南 / Deployment Guide

本文档提供了快速部署和运行您的个人网站的详细步骤。

## 快速开始

### 1. 安装依赖

```bash
npm install --legacy-peer-deps
```

> **注意**：使用 `--legacy-peer-deps` 标志以确保与 React 19 的兼容性

### 2. 本地运行

```bash
npm run dev
```

然后打开浏览器访问 `http://localhost:5173`

### 3. 构建生产版本

```bash
npm run build
```

构建完成后，生成的文件会在 `dist` 目录中。

## GitHub Pages 部署

### 方法一：使用 GitHub Actions（推荐）

1. 在您的 GitHub 仓库中，进入 Settings > Pages
2. 在 "Source" 下选择 "GitHub Actions"
3. 项目已包含 `.github/workflows/deploy.yml` 文件
4. 每次推送到 `main` 分支时，网站会自动部署

### 方法二：手动部署

1. 构建项目：
```bash
npm run build
```

2. 部署到 GitHub Pages：
```bash
# 安装 gh-pages
npm install -D gh-pages

# 部署
npx gh-pages -d dist
```

3. 在 GitHub 仓库设置中，将 Pages 的 source 设置为 `gh-pages` 分支

## Vercel 部署（替代方案）

1. 在 [Vercel](https://vercel.com) 上注册账号
2. 导入您的 GitHub 仓库
3. Vercel 会自动检测 Vite 项目并进行配置
4. 点击 "Deploy" 即可

## Netlify 部署（替代方案）

1. 在 [Netlify](https://netlify.com) 上注册账号
2. 点击 "Add new site" > "Import an existing project"
3. 连接您的 GitHub 仓库
4. 构建设置：
   - Build command: `npm run build`
   - Publish directory: `dist`
5. 点击 "Deploy site"

## 环境要求

- Node.js 18.0 或更高版本
- npm 或 yarn

## 自定义配置

### 修改基础 URL（如果不是根域名）

如果您的网站不是部署在 `username.github.io` 而是 `username.github.io/repo-name`，需要修改 `vite.config.ts`：

```typescript
export default defineConfig({
  plugins: [react()],
  base: '/repo-name/', // 改为您的仓库名
});
```

### 更新个人信息

所有个人信息都在 `constants.ts` 文件中，修改后保存即可。

## 常见问题

### 问：部署后页面空白？
答：检查 `vite.config.ts` 中的 `base` 配置是否正确。

### 问：如何更新网站内容？
答：修改 `constants.ts` 文件中的数据，然后重新部署即可。

### 问：如何添加自定义域名？
答：
1. 在 GitHub 仓库的 `public` 目录下创建 `CNAME` 文件
2. 在文件中写入您的域名（如 `www.example.com`）
3. 在您的域名提供商处配置 DNS 记录指向 GitHub Pages

## 技术栈

- React 19
- TypeScript
- Vite
- Tailwind CSS（通过内联样式实现）
- Lucide React（图标库）
- Recharts（图表库）

## 支持

如有问题，请查看：
- [Vite 文档](https://vitejs.dev/)
- [GitHub Pages 文档](https://docs.github.com/en/pages)
- [React 文档](https://react.dev/)

