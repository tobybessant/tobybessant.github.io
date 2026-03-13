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
├── baseof.html         ← base HTML shell
├── index.html          ← root template, includes all partials
├── 404.html
├── _markup/
│   └── render-link.html
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

## Deployment

Hosted on GitHub Pages at `tobybessant.co.uk`. Deploys automatically via GitHub Actions (`.github/workflows/deploy.yml`) on push to `main`. The workflow runs `hugo --minify` and uploads `public/` as the Pages artifact.

CI runs on pull requests via `.github/workflows/ci.yml` — three concurrent jobs: build, spell-check (`crate-ci/typos`), and YAML lint (`yamllint`).

### Hugo version

`HUGO_VERSION` is defined as a top-level `env` var in **both** `deploy.yml` and `ci.yml`. Bump it in both files when upgrading Hugo.

### GitHub Actions convention

All actions are pinned to exact commit hashes (not tag aliases) with the version as a comment, e.g.:

```yaml
uses: actions/checkout@34e114876b0b11c390a56381ad16ebd13914f8d5 # v4
```

When adding or updating actions, always look up and use the commit hash.
