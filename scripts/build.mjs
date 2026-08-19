import { cp, mkdir, rm } from "node:fs/promises";

await rm("dist", { recursive: true, force: true });
await mkdir("dist/assets", { recursive: true });

await Promise.all([
  cp("salepage.html", "dist/index.html"),
  cp("404.html", "dist/404.html"),
  cp("robots.txt", "dist/robots.txt"),
  cp("sitemap.xml", "dist/sitemap.xml"),
  cp("assets", "dist/assets", { recursive: true })
]);
