# jhannesreimann.github.io — Jhannes Ernesto Reimann

Terminal-austere portfolio for Jhannes Ernesto Reimann (MSc HPI Security Engineering). Next.js 16 App Router + TypeScript + Tailwind v4 + Motion + Lenis.

**Live:** https://jhannesreimann.github.io/ (auto-deploys on push to `main` via `.github/workflows/deploy.yml`)
**Repo:** `jhannesreimann/jhannesreimann.github.io` (public)

## Stack
- Next.js 16.3 (App Router, Turbopack, static `output: "export"`)
- React 19, TypeScript 5 strict
- Tailwind CSS 4 (`@import "tailwindcss"`)
- Motion (`motion/react`) + Lenis (smooth scroll, reduced-motion safe)
- Fonts: JetBrains Mono + Inter via `next/font`
- i18n: hand-rolled EN/DE dictionary in `src/lib/i18n.ts` (no em dashes anywhere in `src/`)

## Dev
```bash
pnpm install
pnpm dev    # http://localhost:3000
pnpm build  # static export to out/
pnpm start  # serve production
pnpm lint
```

Node 20+, pnpm 10.33+.

## Deploy
Push to `main` — the Actions workflow builds the static export and deploys to GitHub Pages. Live after about 1 minute. No env vars, no secrets.

## Content sources
- Projects: `dns-resolver-recommender`, `chonkyflipper`, `therapyalert`, `email-client-selftest-service`, `inclu-go` — screenshots in `public/screenshots/`, chonky case as looping mp4
- Thesis: DOI `10.25932/publishup-68510` — metrics from repo, not invented
- Awards: HackHPI 2025 WIN (IncluGo) — trophy photos in `public/awards/`

## Privacy
Phone/DOB not published on site — only email + GitHub + LinkedIn.

## License
MIT — personal site content © Jhannes Ernesto Reimann 2026.
