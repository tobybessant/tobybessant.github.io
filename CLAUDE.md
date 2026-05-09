# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Commands

```bash
mise install       # install Hugo at the version pinned in mise.toml
hugo server        # live-reload dev server at http://localhost:1313
hugo --minify      # production build → public/
```

No npm, no build step. Hugo is a self-contained binary, managed via `mise`.

## Architecture

A Hugo static site — no theme, layouts written from scratch. Single-page portfolio; everything renders from `layouts/index.html` which includes partials per section.

### Content

All content lives in `data/*.yaml`. No CMS, no API keys. To update content, edit the relevant YAML file and commit.

- `data/landing.yaml` — hero section (name, title, links)
- `data/about.yaml` — about section
- `data/experience.yaml` — experience section
- `data/projects.yaml` — projects section
- `data/posts.yaml` — homepage Posts preview (heading, limit, `enabled`)
- `data/contact.yaml` — contact section

Each section template checks `{{ if .enabled }}` before rendering. Markdown fields that need render hooks (e.g. external links opening in new tabs) use `{{ .RenderString $data.content }}`; plain markdown fields use `{{ .content | markdownify }}`; HTML fields use `{{ .content | safeHTML }}`.

### Layouts

Template hierarchy: `baseof.html` defines the outer HTML shell; `index.html` fills the `main` block with all section partials.

```
layouts/
├── baseof.html         ← outer HTML shell (head + main block)
├── index.html          ← fills main block, includes all partials
├── 404.html            ← not-found page
├── _default/
│   └── _markup/
│       └── render-link.html ← adds target="_blank" rel="noopener noreferrer" to external markdown links
├── partials/
│   ├── head.html
│   ├── nav.html
│   ├── hero.html
│   ├── about.html
│   ├── experience.html
│   ├── projects.html
│   ├── posts.html              ← homepage Posts preview
│   └── contact.html
├── posts/
│   ├── list.html               ← /posts/ archive page
│   └── single.html             ← individual post page
└── shortcodes/
    ├── sim-load-balancer.html  ← reusable load balancer sim
    └── embed.html              ← generic per-post-bundle widget loader
```

### Styling

CSS lives in `assets/css/main.css` — processed by Hugo Pipes. Fonts: **Vollkorn Variable** (body/headings), **DM Sans** (UI/tags), both loaded from Google Fonts CDN.

### Static assets

```
static/
├── img/            ← profile image
├── favicon.ico
└── CNAME           ← custom domain for GitHub Pages
```

### SVG icons

Icons live in `assets/svg/` (not `static/`) and are inlined via Hugo Pipes:

```
{{- with resources.Get (printf "svg/%s.svg" .featherIconKey) }}{{ .Content | safeHTML }}{{ end }}
```

They are plain SVG files keyed by name (mix of sources — not exclusively Feather icons).

### Posts & interactive sims

`/posts/` hosts technical writing with inline interactive simulations (load-balancer algorithms, etc.). The goal is *learning by building* — implementing the sim is part of how the author practices the concept. New sims and posts should be expected; the structure below is built to make adding both cheap.

Posts are Hugo **leaf bundles**: `content/posts/<slug>/index.md`. Bundle directories may also contain post-specific assets (images, bespoke widget JS/CSS — see below). Frontmatter must include `description:` — it's used by both the homepage preview and the `/posts/` archive.

**Two patterns for interactive widgets — pick deliberately:**

1. **Reusable sim.** Lives in `assets/sims/<name>/{sim.js,sim.css}` with a dedicated shortcode in `layouts/shortcodes/<name>.html`. Use when the sim could plausibly serve multiple posts — e.g. the load-balancer sim is reusable across follow-up posts on weighted RR, power-of-two-choices, etc.

2. **Bespoke per-post widget.** JS and (optional) CSS live inside the post's bundle directory. Loaded by the generic `{{< embed name="widget" extra-param="value" >}}` shortcode, which pulls files from `.Page.Resources.GetMatch`. Any named params other than `name` become `data-*` attributes on the mount div, so the widget JS can read config. Use for one-offs that won't be reused.

**Widget conventions (both patterns):**

- **JS contract:** self-initialising IIFE that finds its mount nodes via `querySelectorAll('[data-sim-…]')` or `[data-embed="…"]` and bootstraps. Guard against double-init via a `window.__<name>_loaded` flag — shortcodes may emit the script tag once per usage on a page.
- **CSS:** use the existing `--color-*` variables (defined in `assets/css/main.css`) so dark mode works for free. Don't redefine colours.
- **Don't put sim-specific CSS in `main.css`.** Reusable sim CSS goes next to its JS in `assets/sims/<name>/sim.css`; bespoke widget CSS lives in the post bundle. `main.css` is for site chrome only — keeping sim styles co-located is a deliberate refactor outcome, not a stylistic preference.
- **Asset loading inside shortcodes:** pipe through `minify | fingerprint` (Hugo Pipes) and use `.Page.Scratch` to dedupe `<link>` / `<script>` tags when the shortcode is used multiple times on the same page.

**Homepage surface:** `data/posts.yaml` (`enabled`, `heading`, `subheading`, `limit`) controls the preview block on `/` and the nav link. Disabling hides both the homepage section and the nav link but keeps `/posts/` and individual post pages reachable.

## Git

Always use conventional commit messages. This is not optional.

Examples: `fix:`, `feat:`, `chore:`, `docs:`, `refactor:`, `ci:`

## Deployment

Hosted on GitHub Pages at `tobybessant.co.uk`. Deploys automatically via GitHub Actions (`.github/workflows/deploy.yml`) on push to `main`. The workflow runs `hugo --minify` and uploads `public/` as the Pages artifact.

CI runs on pull requests via `.github/workflows/ci.yml` — three concurrent jobs: build, spell-check (`crate-ci/typos`), and YAML lint (`yamllint`).

### Hugo version

The Hugo version is pinned in `mise.toml` at the repo root — single source of truth for both local dev (`mise install`) and CI (via `jdx/mise-action`). Renovate raises bump PRs against `mise.toml` automatically.

### GitHub Actions convention

All actions are pinned to exact commit hashes (not tag aliases) with the version as a comment, e.g.:

```yaml
uses: actions/checkout@34e114876b0b11c390a56381ad16ebd13914f8d5 # v4
```

When adding or updating actions, always look up and use the commit hash.
