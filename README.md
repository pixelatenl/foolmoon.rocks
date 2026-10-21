# fool-moon-website

Official website of Fool Moon, a Dutch rock band (https://www.foolmoon.rocks).

Built with Nuxt 4 (Vue 3, Vite), statically generated and uploaded via FTP to an
Apache host. Pages are prerendered to static HTML (`ssr: true`, one directory
per page, e.g. `/live/`), so search engines and social platforms see the full
content without executing JavaScript.

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# generate the static site into .output/public
$ npm run generate

# serve the generated site locally (simulates the Apache host)
$ npx serve .output/public

# lint
$ npm run lint

# lint and auto-fix
$ npm run lint:fix
```

## Directory structure

- `app/` – application code (`app.vue`, `pages/`, `components/`, `layouts/`, `assets/`)
- `public/` – files served at the site root (favicons, `site.webmanifest`, `browserconfig.xml`, `.htaccess`, `shows.json`, `robots.txt`, `sitemap.xml`, `og-image.jpg`)
- `app/assets/scss/` – global styles, compiled from `main.scss` (Sass module system, `@use`)
- `server/routes/shows.json.ts` – dev/prerender-time route that serves `public/shows.json` to the prerender worker (never ships in the static output)

## Updating the show list

The gigs on the Live page live in `public/shows.json` and are fetched from the
server at runtime (not baked into the build). To update the shows: edit that
file (plain JSON, no CMS, no rebuild) and upload that single file over FTP to the
site root. The `.htaccess` already marks JSON files to revalidate on every
request, so visitors see the new data on their next page load.

Note: the prerendered page briefly shows the list from the last build before the
fresh data loads. After adding an important new show, a rebuild and full upload
(`npm run generate`) also refreshes what search engines see.

## Deployment

- Run `npm run generate`, then upload the contents of `.output/public/` to the
  web server.
- `public/.htaccess` ships with the generated site: it forces HTTPS, returns the
  styled 404 page for unknown URLs (`ErrorDocument 404 /404.html`), sets
  security headers, enables compression and configures caching (fingerprinted
  build assets for one year, HTML and JSON always revalidated).
- The local `downloads/` folder (press kits, riders) is git-ignored and must
  never be committed; it is uploaded to the server separately. Do not delete the
  `downloads/` directory on the server when deploying a new build.

## Maintenance

- Dependabot is configured for monthly npm dependency updates (`.github/dependabot.yml`).
- Known `npm audit` warnings concern build-time toolchain packages only; nothing
  affected ships in the static output.

## Copyright

All site content (text, images, music, recordings, and other band assets) is
copyright Fool Moon; all rights reserved. Source code copyright 2026 Pixelate.