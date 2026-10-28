# Learning Desk

A personal learning portfolio (Next.js + TypeScript + React).  
UI inspired by a simple “desk” layout — **content and wording are yours**.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Routes

| URL | Purpose |
|-----|---------|
| `/` | Desk (home) |
| `/vault` | DSA, system design, notes, experience |
| `/projects` | Project cards |
| `/prompts` | AI prompts |
| `/ritual` | Weekly learning notes |
| `/blogs` | Substack / Medium links |

## Change colors (one place)

Edit variables at the top of `src/app/globals.css`:

```css
--desk-accent: #e8a082;
--desk-bg: #1a1612;
```

## Change content (not UI)

Edit files under `src/data/` — components only render that data.

## Learn as you build

See `LEARNING.md`.
