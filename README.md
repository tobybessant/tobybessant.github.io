# tobybessant.co.uk

Personal portfolio site built with [Hugo](https://gohugo.io/), hosted on GitHub Pages.

## Development

```bash
hugo server        # live-reload at http://localhost:1313
hugo --minify      # production build → public/
```

## Content

All content lives in `data/*.yaml` — no CMS, no API keys. Edit a file and push to deploy.

## Deployment

Pushes to `main` trigger a GitHub Actions workflow that builds and deploys to GitHub Pages automatically.
