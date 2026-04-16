# nloureiro.com

Personal portfolio for Nuno Loureiro. Built with [Astro](https://astro.build) and deployed to [Cloudflare Workers](https://developers.cloudflare.com/workers/static-assets/).

## Develop

```bash
nvm use            # Node 20
npm install
npm run dev        # http://localhost:4321
```

## Build

```bash
npm run build      # outputs to dist/
npm run preview    # preview the built site locally
```

## Deploy

Pushes to `master` auto-deploy via the GitHub Actions workflow at `.github/workflows/deploy.yml`. Required repo secrets:

- `CLOUDFLARE_API_TOKEN` — API token with Workers write permission
- `CLOUDFLARE_ACCOUNT_ID` — your Cloudflare account ID

Manual deploy from your machine:

```bash
npm run deploy     # astro build + wrangler deploy
```

The Worker is configured in `wrangler.jsonc`.

## Project layout

```
src/
├─ components/         Shared .astro components
├─ data/               portfolio + navigation metadata
├─ layouts/            page layouts (Default, AboutPage, Portfolio)
├─ pages/              file-based routes
├─ portfolio-bodies/   raw HTML bodies for case studies
└─ styles/             SCSS (main.scss + partials)

public/                static files served as-is (fonts, favicon, /assets/img/*)
dist/                  build output (gitignored)
```

## History

Migrated from Jekyll 3.8 / Ruby 2.7 / Netlify to Astro 5 / Node 20 / Cloudflare Workers. The legacy Jekyll source is tagged as `jekyll-legacy` and archived in the sibling `nloureiro_site-jekyll-backup/` directory.
