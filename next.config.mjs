/**
 * StackNova Technologies — build config
 *
 * Deployment targets supported:
 *  A) GoDaddy shared hosting (or any static/Apache host) → `npm run generate`
 *     Upload the contents of `dist/` into `public_html/`.
 *  B) Node.js hosting (VPS, Render, Railway, cPanel Node app) → build, then serve `dist/`
 *     with any static server (`npm run preview`) behind Nginx/Apache.
 *
 * NOTE: Next 14 removed the `next export` command. `output: 'export'` IS the
 * static export — do not add `&& next export` to the script, it will fail.
 *
 * assetPrefix: only required when the site is served from a SUB-FOLDER
 * (e.g. https://example.com/stacknova/). Set it at build time:
 *   Windows PowerShell:  $env:ASSET_PREFIX="/stacknova"; npm run generate
 *   macOS/Linux:         ASSET_PREFIX=/stacknova npm run generate
 * Leave it unset when deploying to the domain root (recommended for stacknova.in).
 * Avoid the common `assetPrefix: '.'` shortcut: relative asset URLs break CSS/JS
 * on nested routes such as /about/ because `./_next/...` resolves to /about/_next/...
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: 'export',
  distDir: 'dist',

  // Generates /about/index.html instead of /about.html so direct URL reloads
  // resolve on Apache/LiteSpeed (GoDaddy) without rewrite rules.
  trailingSlash: true,

  // Optional: only for sub-folder deployments.
  assetPrefix: process.env.ASSET_PREFIX || undefined,

  // Static export has no image optimizer, so images are served as-is.
  images: { unoptimized: true },
};

export default nextConfig;

