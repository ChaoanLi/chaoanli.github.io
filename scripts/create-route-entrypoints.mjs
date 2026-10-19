// GitHub Pages has no SPA rewrite rule. Give each top-level route a real
// entry point so shared research links return 200 instead of the 404 fallback.
import { copyFile, mkdir } from 'node:fs/promises';

const routes = ['research', 'projects', 'blog', 'history', 'lists', 'resources'];
for (const route of routes) {
  await mkdir(`dist/${route}`, { recursive: true });
  await copyFile('dist/index.html', `dist/${route}/index.html`);
}
await copyFile('dist/index.html', 'dist/404.html');
console.log(`Created ${routes.length} top-level route entry points and the fallback.`);
