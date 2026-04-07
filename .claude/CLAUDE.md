# PurensisRX Website

## Project Overview
Static marketing website for **Purensis** — a spatial biology service offering automated tissue imaging and laser microdissection. Customers send tissue samples and receive spatially-resolved images and molecular data.

**Live URL:** https://purensis.com
**Contact:** purensis.official@gmail.com

## Deployment
- **Host:** Cloudflare Workers (static assets)
- **Cloudflare dashboard:** https://dash.cloudflare.com/b8b32bf90f8ac233ad90329dcfadef5d/home/overview
- **GitHub repo:** https://github.com/nicolaidorka/purensisrx-website
- **Auto-deploy:** every push to `main` triggers a Cloudflare rebuild (~30s)
- **No build step** — Cloudflare serves files directly

## Tech Stack
- Vanilla HTML/CSS/JS — no frameworks, no bundlers
- Font: Inter (Google Fonts)
- `.github/workflows/deploy.yml` is legacy (GitHub Pages) — Cloudflare is the active host

## File Structure
```
index.html              # Homepage — hero, workflow, proof section, team, CTA
pages/platform.html     # PurePath login page
pages/technology.html   # Technology breakdown
css/styles.css          # Main stylesheet (shared, CSS variables in :root)
css/platform.css        # Platform page styles
css/technology.css      # Technology page styles
js/main.js              # Shared JS (scroll animations, nav)
js/platform.js          # Platform page JS
sitemap.xml             # Created — needs to be submitted to Google Search Console
purepath/               # Git submodule (purepath_platform repo) — disabled, ignore = all
```

## Design System
- **Primary:** `#0066cc` (blue)
- **Primary Dark:** `#004c99`
- **Secondary:** `#00cc99` (teal)
- **Accent:** `#ff6b6b` (coral)
- **Text Dark:** `#1a1a1a`
- **Text Light:** `#666666`
- **Hero gradient:** `linear-gradient(135deg, #667eea 0%, #764ba2 100%)`
- **Border radius:** 8px buttons, 12px cards
- **Font weights:** 300, 400, 600, 700

## Guidelines
- Keep it vanilla — no frameworks, bundlers, or package managers
- Mobile-responsive: breakpoints at 768px and 480px
- Use CSS variables for colors/shadows — don't hardcode values
- SVG icons are inline (no icon library)
- Navigation is manually duplicated across pages (no templating)
- Use the `/frontend-design` skill for design-intensive work

## PurePath Platform
- `pages/platform.html` is a login/info page for PurePath
- PurePath platform URL: not yet deployed — redirect to be added later
- The `purepath/` submodule is kept but disabled (`ignore = all`) until platform is deployed
