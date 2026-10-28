# Learning Path — Learning Desk

Inspired by a simple “desk” UI, built with **your** copy, data, and structure.

| Lesson | Topic | Status |
|--------|--------|--------|
| 1 | Project map + JS / TS / React / Next | Done |
| 2 | Data vs UI folders + theme tokens | Done |
| 3 | Segregate logic / styles / JSX | **You are here** |
| 4 | React components & props | Next |
| 5 | Routing & layouts | Later |
| 6 | Client state (`useState`) & filters | Later |
| 7 | Build a feature yourself | Later |

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

---

## Lesson 3 — Segregate logic, styles, JSX

Every feature follows three files (when needed):

| File | Holds |
|------|--------|
| `Component.tsx` | HTML / JSX only (what you see) |
| `Component.styles.ts` | Tailwind class strings |
| `useComponent.ts` | Logic (state, handlers, filters) |

Example — Prompt card:

```
components/prompts/
  PromptCard.tsx        → markup
  PromptCard.styles.ts  → classes
  usePromptCard.ts      → copy-to-clipboard logic
```

Helpers:

- `src/lib/cn.ts` — join class names
- `src/lib/color.ts` — shared color helpers

**Practice:** Open `SkillCard.styles.ts`, change `pill` padding, save, refresh. No logic touched.
