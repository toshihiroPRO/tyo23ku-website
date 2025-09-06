// ESM 用の import
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

// __dirname の代替
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const BASE_URL = "https://tyo23ku.netlify.app";

// ← ここを修正（2つ上に戻る）
const routesFile = path.join(__dirname, "..", "..", "routes.txt");

// ← ここを修正（1つ上に戻って public/sitemap.xml）
const sitemapFile = path.join(__dirname, "..", "sitemap.xml");

// routes.txt を読み込み
const routes = fs.readFileSync(routesFile, "utf-8")
  .split("\n")
  .map(line => line.trim())
  .filter(line => line.length > 0);

// 今日の日付
const today = new Date().toISOString().split("T")[0];

// XML生成
const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes.map(route => `  <url>
    <loc>${BASE_URL}${route === "/" ? "" : route}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === "/" ? "1.0" : "0.8"}</priority>
  </url>`).join("\n")}
</urlset>`;

// ファイル出力
fs.writeFileSync(sitemapFile, xml, "utf-8");
console.log(`✅ sitemap.xml を更新しました → ${sitemapFile}`);