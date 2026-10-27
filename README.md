# rougevif.ma

Next.js site for Rougevif — vêtement de travail / workwear, Casablanca.

Implemented from the Claude Design canvas (kept under `design/`). App Router,
TypeScript, hand-written CSS — no UI framework, no CSS framework.

Bilingual **French / English**, French-first.

## Run it

```
npm install
npm run dev          # http://localhost:3000 → redirects to /fr
```

```
npm run build && npm start
npm run check        # crawls both locale trees (needs the server up on :3000)
```

## Layout

```
app/
  [locale]/
    layout.tsx               html shell, fonts, skip link, per-locale metadata
    page.tsx                 accueil / home
    catalogue/page.tsx       the 21 references
    catalogue/[metier]/      one static page per métier (7)
    metiers/page.tsx         the 7 métiers and their pieces
    piece/[slot]/page.tsx    one static page per reference (21)
    sur-mesure/ atelier/ contact/
    not-found.tsx
  globals.css                design tokens + every component

components/
  SiteHeader.tsx             header + nav, shared by every page
  LocaleSwitcher.tsx         client — FR / EN, plain links
  CatalogueView.tsx          catalogue listing, filtered or not
  ProductCard.tsx            grid card, full and "related" variants
  DevisForm.tsx              client — quote form → mailto
  Bands.tsx                  dark CTA band, closer, footer bar, contact constants
  home/                      client — Loader, HeadlineCycler, HomeEffects,
                             CookieNotice, and the motion hooks they share

lib/
  rv-data.ts                 the catalogue in French: 21 references, 7 métiers
  i18n/config.ts             locales, html lang tags, path helpers
  i18n/messages.ts           every UI string, both locales
  i18n/catalogue.ts          English catalogue copy + the locale-aware accessors
  media.ts                   video, poster and the Pexels URLs

public/uploads/              photography and video
tools/check.mjs              crawler: links, landmarks, lang, overflow, errors
design/                      the original Claude Design canvas, for reference
```

## Languages

`/fr/...` and `/en/...` are both fully prerendered — 70 static pages. `/`
redirects to `/fr`.

The switcher in the header swaps only the first path segment, so it keeps the
visitor exactly where they were (`/fr/piece/i1` → `/en/piece/i1`). Both options
are real links: switching works with JavaScript off.

**Adding a string:** add it to the `Messages` interface in
`lib/i18n/messages.ts`. TypeScript then refuses to compile until both `fr` and
`en` define it — a missing translation is a build error, never a blank on the
page.

**Adding a reference:** add it to `ITEMS` in `lib/rv-data.ts` (French), then add
the matching entry to `EN_ITEMS` in `lib/i18n/catalogue.ts`. That file is typed
`Record<Slot, ItemText>`, so a forgotten slot fails the build. You get the new
catalogue card, métier chip and `/{locale}/piece/<slot>` page automatically —
`generateStaticParams` picks it up.

Two things are *not* data-driven and need a manual edit:

- the eight-reference teaser on the home page — `TEASER` in `app/[locale]/page.tsx`
- the three métier tiles — `TILE_LINKS` / `TILE_IMAGES` there, with their copy
  under `home.tiles` in the messages file

## Notes

- **Filtering is routing.** `/en/catalogue/cuisine` is its own prerendered page,
  so every filtered view is linkable, indexable, and works without JavaScript.
- **Rendering.** Every route is static (SSG). `next start` serves them; nothing
  is computed per request. `next/image` optimises on demand, which is why the
  first hit of a page is slower than the rest.
- **The quote form has no backend.** It composes a `mailto:` to
  `m.moungid@rougevif.ma` (cc `rougevif.vif@gmail.com`), matching the design,
  with the body labelled in the visitor's language. Wire it to a real endpoint
  before launch if you want delivery you can track.
- **Progressive enhancement.** The loader and cookie notice are never in the
  server HTML, so a visitor without JavaScript is never left with a black
  overlay or a stuck banner. All motion is skipped under
  `prefers-reduced-motion`.
- Fonts are self-hosted by `next/font`. Five editorial photos on the home page
  and `/atelier` are hot-linked from Pexels, as in the original design; they are
  allow-listed in `next.config.ts`.
