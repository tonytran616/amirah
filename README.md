# Amirah Financial

Marketing site for Amirah Financial — institutional-grade fintech software for predictive markets.

Built with [Next.js](https://nextjs.org) and originally bootstrapped from [v0](https://v0.app).

## Live site

GitHub Pages: [https://fluffy9.github.io/amirah/](https://fluffy9.github.io/amirah/)

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command       | Description                                      |
| ------------- | ------------------------------------------------ |
| `pnpm dev`    | Local development server                         |
| `pnpm build`  | Production static export to `out/`                |
| `pnpm start`  | Not used for static export — serve `out/` instead |

## Content

Editable copy for the giving-back section lives in [`data/message.json`](data/message.json).

## GitHub Pages

The site is statically exported (`output: 'export'`) and deployed with GitHub Actions on every push to `main`.

For project Pages under `/amirah`, the build sets `GITHUB_PAGES=true` so Next.js applies the correct `basePath`.

Local preview of the Pages build:

```bash
GITHUB_PAGES=true pnpm build
npx serve out
```

## v0

Continue iterating in v0:

[Continue working on v0 →](https://v0.app/chat/projects/prj_DeVyQEAnLig6HebPHnYO9WIRpxyC)
