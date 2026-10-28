# Learning Path — Learning Desk

Inspired by a simple “desk” UI, built with **your** copy, data, and structure.

| Lesson | Topic | Status |
|--------|--------|--------|
| 1 | Project map + JS / TS / React / Next | Done |
| 2 | Data vs UI folders + theme tokens | **You are here** |
| 3 | React components & props | Next |
| 4 | Routing & layouts | Later |
| 5 | Client state (`useState`) & filters | Later |
| 6 | Build a feature yourself | Later |

Site: http://localhost:3000

---

## Lesson 2 — Structure & one-line colors

### Folder map

```
src/
  app/           → routes (URLs)
    page.tsx       /          Desk
    vault/         /vault
    projects/      /projects
    prompts/       /prompts
    ritual/        /ritual
    blogs/         /blogs
  components/    → UI only (how it looks)
    desk/ layout/ ui/ vault/ projects/ prompts/ ritual/ blogs/
  data/          → content only (what it says)
  types/         → TypeScript shapes for that content
```

**Rule:** change words in `src/data/*`. Change look in `src/components/*`.

### One-line theme change

Open `src/app/globals.css` and edit:

```css
--desk-accent: #e8a082;   /* try #7cb8a0 or #c4a0e8 */
--desk-bg: #1a1612;
```

Save → whole site recolors. Light mode uses `html.light` variables + the ☀ toggle.

### Responsive idea

We use Tailwind breakpoints:

- default = mobile
- `sm:` = bigger phones / small tablets
- `lg:` = laptop / desktop

Example: desk home is 1 column on phone, 2 columns on `lg:`.

### Your first edit (do this)

1. Open `src/data/site.ts` — change `handwrittenNote` to something you wrote.
2. Open `src/data/socials.ts` — put your real GitHub URL.
3. Open `src/data/vault.ts` — add one new note object (copy an existing one and change fields).
4. Visit `/vault` and find your new card.

When done, say **“Lesson 3”** or ask a question about any file.
