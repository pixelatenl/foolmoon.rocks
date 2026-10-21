# fool-moon-website

Official website of Fool Moon, a Dutch rock band (https://www.foolmoon.rocks).

Built with Nuxt 4 (Vue 3, Vite) as a single-page application (`ssr: false`),
statically generated and uploaded via FTP to an Apache host.

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
- `public/` – files served at the site root (favicons, `site.webmanifest`, `browserconfig.xml`, `.htaccess`, `shows.json`)
- `app/assets/scss/` – global styles, compiled from `main.scss` (Sass module system, `@use`)

## Updating the show list

The gigs on the Live page live in `public/shows.json` and are fetched from the
server at runtime (not baked into the build). To update the shows: edit that
file (plain JSON, no CMS, no rebuild) and upload that single file over FTP to
the site root. The `.htaccess` already marks JSON files to revalidate on every
request, so visitors see the new data on their next page load.

## Deployment

- Run `npm run generate`, then upload the contents of `.output/public/` to the
  web server.
- `public/.htaccess` ships with the generated site: it forces HTTPS, provides
  the SPA fallback (so deep links like `/live` and `/bio` do not 404 on refresh),
  sets security headers, enables compression and configures caching.
- The local `downloads/` folder (press kits, riders) is git-ignored and must
  never be committed; it is uploaded to the server separately.

## Analytics

The old Universal Analytics (UA-2100087-22) plugin was removed: Universal
Analytics was shut down by Google in 2023. If analytics are wanted again, add a
GA4 script tag (for example via Nuxt's `useHead` or the `@nuxt/scripts`
module).

## Follow-up (not configured)

A Content-Security-Policy header is deliberately not set: the Media page embeds
YouTube iframes, and a half-configured CSP would break the site. If CSP is ever
added, it must allow `frame-src https://www.youtube.com`, the Google Fonts
stylesheet, and Vite's inline bootstrapping (or use hash/nonce directives).

## Domain verification

`public/8373BCD674D9DADFD70A0C73CF2843EF.txt` is a Sectigo domain-verification
file and must stay in the site root.
