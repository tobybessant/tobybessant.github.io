# CLAUDE.md

This file provides guidance to Claude Code when working with this repository.

## Commands

```bash
hugo server        # live-reload dev server at http://localhost:1313
hugo --minify      # production build → public/
```

No npm, no build step. Hugo is a self-contained binary.

## Architecture

A Hugo static site — no theme, layouts written from scratch. Single-page portfolio; everything renders from `layouts/index.html` which includes partials per section.

### Content

All content lives in `data/*.yaml`. No CMS, no API keys. To update content, edit the relevant YAML file and commit.

- `data/landing.yaml` — hero section (name, title, links)
- `data/about.yaml` — about section
- `data/experience.yaml` — experience section (currently `enabled: false`)
- `data/projects.yaml` — projects section
- `data/contact.yaml` — contact section

Each section template checks `{{ if .enabled }}` before rendering. Markdown fields use `{{ .content | markdownify }}`, HTML fields use `{{ .content | safeHTML }}`.

### Layouts

```
layouts/
├── index.html          ← root template, includes all partials
└── partials/
    ├── head.html
    ├── nav.html
    ├── hero.html
    ├── about.html
    ├── experience.html
    ├── projects.html
    └── contact.html
```

### Styling

CSS lives in `assets/css/main.css` — processed by Hugo Pipes. Fonts: **Vollkorn Variable** (body/headings), **DM Sans** (UI/tags).

### Static assets

```
static/
├── img/        ← profile image
├── svg/        ← feather icons (keyed by name, e.g. github-brands.svg)
├── cv.pdf
└── CNAME       ← custom domain for GitHub Pages
```

Icons are inlined in templates via `{{ readFile "static/svg/<name>.svg" | safeHTML }}`.

## Deployment

Hosted on GitHub Pages at `tobybessant.co.uk`. Deploys automatically via GitHub Actions (`.github/workflows/deploy.yml`) on push to `main`. The workflow runs `hugo --minify` and uploads `public/` as the Pages artifact.
