# StackNova Technologies — Deployment Guide

This project is a **Next.js 14 static export**. It produces a plain HTML/CSS/JS
site in the `dist/` folder, so it runs on **GoDaddy shared hosting** (no Node.js
required) and equally well on any **Node.js host** or CDN.

---

## 1. Build

```bash
npm install
npm run generate      # = next build, outputs the static site into dist/
```

`npm run build` does exactly the same thing — `generate` exists as a familiar
alias from older Next.js tutorials.

> **Important:** Next.js 14 **removed** the `next export` command.
> `"generate": "next build && next export"` will fail with
> *"next export is no longer supported"*. The `output: 'export'` option in
> `next.config.mjs` already performs the export.

Local preview of the real build output:

```bash
npm run preview       # serves dist/ at http://localhost:3000
```

---

## 2. GoDaddy shared hosting (cPanel)

GoDaddy shared plans are Apache/LiteSpeed and **cannot run Node.js**, but they
serve static files perfectly.

1. Run `npm run generate`.
2. Open **cPanel → File Manager → `public_html`**.
3. Delete GoDaddy's placeholder `index.html` / `default.html` if present.
4. **Select the *contents* of `dist/`** (not the folder itself) and upload them
   into `public_html`, preserving structure, or zip `dist/`, upload the zip and
   use **Extract** in File Manager.
5. Enable a free SSL certificate in cPanel → **SSL/TLS Status** (the included
   `.htaccess` force-redirects HTTP → HTTPS).

That's it — `https://stacknova.in` now serves the site.

### Why `trailingSlash: true` matters

With `trailingSlash: true`, Next writes `dist/about/index.html` instead of
`dist/about.html`. If you reload a deep URL like `/about/`, Apache looks for an
`about` **directory** — which exists — so the page resolves. Without it, direct
reloads of inner pages return 404. Our site is a single page with hash anchors,
but the flag is kept so any future route (`/thank-you/`, `/careers/`) works
immediately.

### Sub-folder deployments

Only if the site lives at `https://example.com/stacknova/`:

```bash
# Windows PowerShell
$env:ASSET_PREFIX="/stacknova"; npm run generate
```
```bash
# macOS / Linux
ASSET_PREFIX=/stacknova npm run generate
```

Then also update the two paths at the top of `public/.htaccess`
(`/stacknova/404.html`). **Deploying to the domain root is recommended** — do not
use the old `assetPrefix: '.'` shortcut, because relative asset URLs
(`./_next/...`) break CSS/JS on nested routes.

### `.htaccess`

`public/.htaccess` is copied into `dist/` on every build. It provides:

- `ErrorDocument 404 /404.html` → your branded 404 page (`app/not-found.tsx`)
- gzip/Brotli compression + immutable caching for hashed `_next/static` assets
- `X-Content-Type-Options`, `Referrer-Policy`, `X-Frame-Options`
- HTTPS + non-www canonical redirects

---

## 3. Node.js hosting (VPS, Render, Railway, cPanel "Setup Node.js App")

Shared GoDaddy is static-only, but if you move to a Node host you can serve the
same export with any static file server:

```bash
npm ci
npm run generate
npm run preview        # or: npx serve dist -s
```

Put Nginx/Apache in front of it and proxy to the port. Because the export is
fully static, this is also the correct setup for Vercel, Netlify, Cloudflare
Pages, GitHub Pages or S3 + CloudFront — just publish `dist/` as the output
directory.

> `next start` is **not** compatible with `output: 'export'` (there is no server
> build), which is why the `start` script was replaced by `preview`.

---

## 4. Checklist before going live

- [ ] `public/logo.png` — the supplied StackNova logo (referenced by the navbar and footer).
      The untouched 2170×725 master and the alternative files live in `brand/` (not deployed).
- [ ] `public/og.png` — 1200×630 social share image
- [ ] Phone number in `components/Contact.tsx` (`+91 XXXXX XXXXX`)
- [ ] Social URLs in `components/Footer.tsx` (LinkedIn / GitHub / Instagram)
- [ ] Contact form: the static build opens a pre-filled email to `care@stacknova.com`.
      For real form submissions, point `handleSubmit` in `components/Contact.tsx`
      at a Formspree / Web3Forms endpoint.