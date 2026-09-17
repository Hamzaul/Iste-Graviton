# Graviton — Hack the Orbit

Official site for **Graviton**, the 24-hour hackathon hosted by the ISTE Students' Chapter at
CGC University, Mohali, 31 October – 1 November 2026, in collaboration with D4 Community.

Built with **Next.js 15 (App Router) + React 19 + TypeScript**. No UI framework, no animation
library: every interaction is written against the platform so the JavaScript payload stays small.

---

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

> The build fetches the Sora and IBM Plex Sans webfonts through `next/font/google`, so the
> machine running `npm run build` needs internet access. To build fully offline, download the
> two families into `app/fonts/` and swap `next/font/google` for `next/font/local` in
> `app/layout.tsx`.

---

## Editing content

All copy and event data lives in `lib/data/` — no text is hard-coded in components, so a change
in one file updates every page that uses it.

| File | Controls |
| --- | --- |
| `lib/data/event.ts` | Dates, venue, prize pool, team size, contacts, registration URL, countdown target, marquee strings |
| `lib/data/themes.ts` | The six themes and their prompts |
| `lib/data/schedule.ts` | The run sheet driving the pinned timeline |
| `lib/data/rules.ts` | Numbered rules |
| `lib/data/faq.ts` | FAQ questions (also feeds FAQ structured data) |
| `lib/data/sponsors.ts` | Sponsor slider cards, tier ladder, benefit matrix, reach figures |
| `lib/data/hosts.ts` | Host logos and blurbs. CGC University is the middle entry — reorder the array to move it |
| `lib/data/nav.ts` | Navigation, which also generates `sitemap.xml` |

### Things to confirm before launch

- `EVENT.entryFee` is `"To be confirmed"`.
- `EVENT.siteUrl` is a placeholder; set it to the real domain so canonical URLs, Open Graph and
  the sitemap resolve correctly.
- Session times in `schedule.ts` are provisional.
- Rules and theme prompts were drafted for this build — review them with the organising team.

---

## Structure

```
app/            routes (/, /themes, /schedule, /sponsor, /rules, /faq, /contact) + sitemap, robots, 404
components/     reusable UI
lib/data/       all content as typed data
styles/         tokens.css, base.css, components.css (imported by app/globals.css)
public/         hero image, QR code, host logos
```

## Notable components

- **`Hero`** — the wordmark animates in letter by letter and always sits on one line: its size is
  driven by the viewport (`min(13.2vw, 150px)` with `white-space: nowrap`), so it scales instead
  of wrapping. The orbit stroke draws itself once on load.
- **`Marquee`** — CSS-only infinite text scroll. The list renders twice and the track translates
  exactly `-50%`, so the loop is seamless. Pauses on hover and on keyboard focus; becomes a
  scrollable strip under `prefers-reduced-motion`.
- **`PinnedTimeline`** — the stage sticks to the viewport while page scroll is converted into
  horizontal card movement, with a progress bar and an active-card state. Falls back to a plain
  vertical timeline below 861px and whenever reduced motion is requested.
- **`SponsorSlider`** — text-only sponsor cards in a snap-scrolling rail with arrow controls.
  No third-party logos are reproduced; each card uses a monogram.
- **`ThemeExplorer`** — tablist with arrow-key support, deep-linkable via `/themes?t=T-3`.
- **`FaqAccordion`** — semantic buttons, `aria-expanded`, animated with `grid-template-rows`.

## Accessibility

Semantic landmarks, a skip link, visible focus rings, keyboard-operable tabs, accordion and
slider, `aria-current` on the active nav item, alt text on every meaningful image, and
`prefers-reduced-motion` honoured by the marquee, the pinned timeline and all reveals.

## Performance

The hero image is `priority`, everything else is lazy by default via `next/image`, fonts are
self-hosted at build time by `next/font`, and there is no animation library in the bundle.
First load JS is roughly 102 kB shared, 114 kB on the heaviest route.

## Assets

`public/hero.webp` is cropped from the official Graviton key art. `public/qr.png` is regenerated
from the Unstop registration URL in `lib/data/event.ts` — if that URL changes, regenerate the QR.
Host logos are supplied by the organising team.
