# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A personal portfolio + tech blog for Evan J. Long, deployed to GitHub Pages at `github.com/Evan-126/web2try`. It is a **static site with no build system** — there is no `package.json`, `Gemfile`, or `_config.yml`. Pages are hand-edited HTML, committed directly, and served as-is.

## Build / deploy / preview

- **No build step.** Edit HTML/CSS/JS files directly. There is no compiler, bundler, or task runner to run.
- **Deploy:** push to the `main` branch. `.github/workflows/static.yml` uploads the entire repo (`path: '.'`) to GitHub Pages. This is the only deploy workflow — keep it that way.
- **Preview locally:** open an HTML file directly in a browser, or serve the folder (e.g. `python -m http.server`). A static server is needed for the blog because `blog.js` uses `fetch()`, which fails on `file://`.

## Architecture

### Template & shared chrome (no templating engine)
Most pages are built on the **HTML5 UP "Forty"** template (see `README.txt`). There are **no layouts or includes** — the header, `#menu` nav, `#footer`, and the trailing `<script>` block are **copy-pasted into every page**. Changing the nav, footer, or script list means editing *every* template-styled HTML file (`index.html`, `portfolio.html`, `blog.html`, `contact.html`, `utexas.html`, the `courses/` pages, etc.). These pages all link `assets/css/main.css` and load the jQuery + `breakpoints`/`browser`/`util`/`main.js` stack at the bottom.

### Two distinct page styles
- **Template pages** — use `assets/css/main.css` and the shared chrome described above.
- **Standalone blog posts** in `posts/` — fully self-contained HTML with their own inline `<style>`. They do **not** use the Forty template, nav, or `main.css`. Keep them self-contained.

### Blog system
- `posts/posts.json` is the manifest: an array of `{ "title", "file" }` objects. **Add a post by dropping its HTML in `posts/` and adding an entry here.**
- `blog.html` loads `assets/js/blog.js`, which `fetch`es `posts/posts.json` and renders cards into `#posts`. The post date is derived from the **first 10 chars of the filename** (expects a `YYYY-MM-DD` prefix).
- `order_by_date.js` (repo root) is an **alternate, unused** renderer — it fetches `posts.json` (different relative path) and sorts by date via regex. `blog.html` does not load it.
- ⚠️ Filenames mix `-` and `_` separators (e.g. `2025-10-22_SuperLimbs.html`). The `file` value in `posts.json` must match the real filename **exactly** or the post link 404s — copy/paste the filename rather than retyping it. The date is parsed from the first 10 chars, so keep a literal `YYYY-MM-DD` prefix (note `2025-10-3-...` has no zero-padded day and won't parse to a valid date).

### Project content & images
- Project write-ups live in per-topic folders (`ASCEND/`, `ME302/`, `ME338/`, `ME380R/`, `makerspace/`, `goomba/`, etc.), mixing source `.md` (e.g. `ASCEND/ascend.md`, authored before hand-conversion to HTML), generated `.html`, and image/video assets in the same folder.
- Markdown/project pages often reference images by **absolute `raw.githubusercontent.com/Evan-126/web2try/main/...` URLs** rather than relative paths, so images resolve when content is reposted off-site (e.g. LinkedIn). Match this convention when adding images to those pages.

### Styling
`assets/sass/` holds the Forty SASS sources that compile to `assets/css/main.css` and `noscript.css`. **No SASS build is wired up in the repo**, so the compiled CSS in `assets/css/` is what actually ships. Small CSS tweaks are typically made directly in `assets/css/main.css`; if you edit the `.scss` sources you must compile them yourself and commit the resulting CSS.

### No generated output dir
There is no `_site/` or other build-output directory — the top-level files *are* what ships. If a `_site/` (or similar duplicate tree) reappears, it's stray cruft, not a build artifact; don't edit or commit it.
