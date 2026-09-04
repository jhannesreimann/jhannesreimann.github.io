# personal-site — Jhannes Reimann

Terminal-austere portfolio for Jhannes Reimann (MSc HPI Security Engineering). Next.js 16 App Router + TypeScript + Tailwind v4 + Motion + Lenis + Embla.

**Live:** — to deploy (Vercel/Cloudflare one-click)
**Repo:** `jhannesreimann/personal-site` (private → make public when ready)

## Stack
- Next.js 16.3 (App Router, Turbopack)
- React 19, TypeScript 5 strict
- Tailwind CSS 4 (`@import "tailwindcss"`)
- Motion (`motion/react`) + Lenis (smooth scroll, reduced-motion safe) + Embla Carousel
- Fonts: JetBrains Mono + Inter via `next/font`

## Dev
```bash
pnpm install
pnpm dev    # http://localhost:3000
pnpm build  # next build (static)
pnpm start  # serve production
pnpm lint
```

Node 20+, pnpm 10.33+.

## Content sources
- Projects: `dns-resolver-recommender`, `chonkyflipper`, `therapyalert`, `email-client-selftest-service`, `inclu-go` — screenshots in `public/screenshots/` (captured via Playwright, real `<figure>` with hairline border, no fake chrome)
- Thesis: DOI `10.25932/publishup-68510` — metrics from repo, not invented
- Awards: HackHPI 2025 WIN (IncluGo) — trophy placeholders in `public/awards/` (replace with your higher-res when ready)

## Capture screenshots
```bash
pnpm add -D playwright
npx playwright install chromium
node /tmp/capture3.cjs  # see repo history for script — 1280×800 viewport, 4–6s wait
```
Images land in `public/screenshots/*.png` and are referenced by `ProjectsCarousel.tsx`.

## Deploy
- **Vercel:** Import `jhannesreimann/personal-site`, framework preset Next.js, `pnpm build`. No env vars.
- **Cloudflare Pages:** Build command `pnpm build`, output `next` (or use `@cloudflare/next-on-pages`).

## Make public
```bash
gh repo edit jhannesreimann/personal-site --visibility public --accept-visibility-change-conformance
```
Or via GitHub Settings → Danger Zone → Change visibility.

## Hallmark
- Macrostructure: Workbench · Theme: Terminal (tuned, light paper + phosphor accent) · Nav: N8 Terminal command · Footer: Ft2 Inline rule · Genre: modern-minimal
- Mobile: verified 320/375/414/768 (no h-scroll, `overflow-x: clip`, `minmax(0,1fr)`)
- Stamp: `/* Hallmark · pre-emit critique: P5 H4 E5 S4 R5 V5 */` in `src/app/page.tsx` + tokens via `var(--*)` only

## Privacy
Phone/DOB not published on site — only email + GitHub + LinkedIn. Keep `reimann.jhannes@gmail.com` as contact; phone on request.

## License
MIT — personal site content © Jhannes Reimann 2026.
