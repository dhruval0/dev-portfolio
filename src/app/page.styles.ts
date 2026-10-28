export const deskPageStyles = {
  root: "flex flex-col gap-12 sm:gap-14",
  hero: "grid items-start gap-8 lg:grid-cols-[1fr_auto] lg:gap-12",
  bio: "flex flex-col gap-5",
  name: "text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]",
  title:
    "max-w-xl font-[family-name:var(--font-display)] text-4xl leading-tight tracking-tight sm:text-5xl",
  titleAccent: "text-[var(--accent)]",
  intro: "max-w-md text-base leading-relaxed text-[var(--muted)] sm:text-lg",
  handwritten:
    "font-[family-name:var(--font-script)] text-xl text-[var(--accent)] sm:text-2xl",
  nowBlock: "flex flex-col gap-2 pt-1",
  nowLabel: "font-[family-name:var(--font-script)] text-[var(--muted)]",
  portraitWrap: "flex justify-center lg:justify-end lg:pt-2",
  searchSection: "flex flex-col items-center gap-2",
  searchEyebrow:
    "text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--faint)]",
  searchHeading: "mb-1 font-[family-name:var(--font-display)] text-lg",
  section: "flex flex-col gap-4",
  sectionLabel:
    "font-[family-name:var(--font-script)] text-lg text-[var(--muted)]",
  drawersGrid: "grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
  socialsGrid: "grid gap-3 sm:grid-cols-2",
  skillsSection: "flex flex-col gap-6",
  skillsIntro: "flex flex-col gap-1",
  skillsHint: "text-sm text-[var(--faint)]",
  skillsPanel:
    "flex flex-col gap-8 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6",
} as const;
