// GitHub Pages has no SPA rewrite rule. Give each top-level route a real
// entry point so shared research links return 200 instead of the 404 fallback.
import { copyFile, mkdir, readFile } from "node:fs/promises";
import { organizeNowEntries } from "../data/now-archive.mjs";

const snapshots = organizeNowEntries(JSON.parse(await readFile(new URL("../data/now.json", import.meta.url), "utf8")));
const routes = ["start", "research", "projects", "news", "now", "now/archive", "now/2026-10-19", ...snapshots.entries.map(entry => `now/${entry.date}`)];
for (const route of routes) {
  await mkdir(`dist/${route}`, { recursive: true });
  await copyFile("dist/index.html", `dist/${route}/index.html`);
}
await copyFile("dist/index.html", "dist/404.html");
console.log(
  `Created ${routes.length} top-level route entry points and the fallback.`,
);
