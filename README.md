# गोलघर पटना यात्रा मार्गदर्शिका

Astro + Tailwind CSS + TypeScript static site for Cloudflare Workers static assets.

## Commands

```bash
corepack enable
CI=1 corepack pnpm install --frozen-lockfile
pnpm check
pnpm build
pnpm deploy
```

## Domain configuration

Set the production domain only once in `astro.config.mjs` (`SITE`). When empty, canonical/OG absolute URLs are omitted and sitemap integration is disabled. When a real domain is set, canonical/OG/JSON-LD URLs and sitemap derive from Astro `site`.

## Analytics consent

GA4 measurement ID: `G-HXM22WWPKP`. Google Analytics loads only when the visitor enables Analytics on `/cookies/`.

## Photos

All site image references are local under `public/images/`. See `PHOTO_SOURCES.md` for researched attribution/source information.
