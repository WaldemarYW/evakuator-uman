# evakuator-uman

## Performance + SEO updates
- Added responsive `webp` assets with size variants and switched markup to `srcset`/`sizes` (hero, cards, services, steps, floating UI).
- Replaced CSS hero background with a responsive `<picture>` to serve mobile/desktop variants.
- Fixed heading order (single `h1`, section `h2`, nested `h3`) and added `hreflang` + `x-default`.
- Moved inline scripts into `scripts/main.js` to remove `unsafe-inline` from CSP.
- Added a valid `robots.txt` and `_headers` (for hosts that support response headers).

## CSP modes
Mode A (strict, no third-party):
- Remove the Google Tag Manager script tag from `index.html` and `privacy.html`.
- Remove the analytics initializer in `scripts/main.js`.
- Use a CSP without any Google domains.

Mode B (analytics enabled):
- Keep the current CSP entries for `googletagmanager.com`, `google-analytics.com`, `stats.g.doubleclick.net`, and `google.com`.

If you can set headers (Netlify/Cloudflare Pages), update `_headers`. If you are on GitHub Pages, use Cloudflare Transform Rules/Worker to inject the CSP header.

## Development
Static site, no build step. Open `index.html` directly or serve the folder with any static server.
