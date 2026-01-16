# evakuator-uman

## Performance + SEO updates
- Added responsive `webp` assets with size variants and switched markup to `srcset`/`sizes` (hero, cards, services, steps, floating UI).
- Moved hero background out of CSS into a responsive `<picture>` so LCP is discoverable in HTML.
- Fixed heading order (single `h1`, section `h2`, nested `h3`) and added `hreflang` + `x-default`.
- Preloaded CSS non-blocking and added LCP image preloads.
- Added a valid `robots.txt` and `_headers` (CSP + cache TTL for hosts that support response headers).

## CSP + cache headers
Mode A (strict, no third-party):
- Remove the Google Tag Manager script tag from `index.html` and `privacy.html`.
- Remove the analytics initializer in `scripts/main.js`.
- Use a CSP without any Google domains.

Mode B (Ads/analytics enabled):
- Keep the CSP entries in `_headers` for Google Ads/Tag Manager domains.
- `script-src` includes `'unsafe-inline'` because the non-blocking CSS preload uses an inline `onload`.

Cache TTL:
- Static assets (images/CSS/JS) are set to `Cache-Control: public, max-age=31536000, immutable`.
- HTML uses `max-age=0, must-revalidate`.

If you can set headers (Netlify/Cloudflare Pages), `_headers` is applied automatically. If you are on GitHub Pages, use Cloudflare Transform Rules/Worker or Cloudflare Pages as a proxy to inject CSP/cache headers.

## Development
Static site, no build step. Open `index.html` directly or serve the folder with any static server.
