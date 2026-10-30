export const deskPageStyles = {
  root: "flex flex-col gap-12 sm:gap-14",
  hero: "grid items-start gap-8 lg:grid-cols-[1fr_auto] lg:gap-12",
  bio: "flex flex-col gap-5",
  eyebrow:
    "text-xs font-semibold uppercase tracking-[0.22em] text-[var(--accent)]",
  title:
    "max-w-xl font-[family-name:var(--font-display)] text-4xl leading-tight tracking-tight sm:text-5xl",
  titleAccent: "text-[var(--accent)]",
  intro: "max-w-md text-base leading-relaxed text-[var(--muted)] sm:text-lg",
  handwritten:
    "font-[family-name:var(--font-script)] text-xl text-[var(--accent)] sm:text-2xl",
  nowBlock: "flex flex-col gap-2 pt-1",
  nowLabel: "font-[family-name:var(--font-script)] text-[var(--accent)]",
  portraitWrap: "flex justify-center lg:justify-end lg:pt-2",

  searchSection: "flex flex-col items-center gap-2",
  searchEyebrow:
    "text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--accent)]",
  searchHeading: [
    "mb-1 font-[family-name:var(--font-display)] text-lg text-[var(--accent)]",
  ].join(" "),

  section: "flex flex-col gap-4",
  sectionLabel:
    "font-[family-name:var(--font-script)] text-xl text-[var(--accent)]",

  drawersGrid: "grid gap-3 sm:grid-cols-2 lg:grid-cols-5",
  socialsGrid: "grid gap-3 sm:grid-cols-2",

  skillsSection: "flex flex-col gap-6",
  skillsIntro: "flex flex-col gap-1",
  skillsHint: "text-sm text-[var(--muted)]",
  skillsPanel: [
    "flex flex-col gap-8 rounded-xl border border-[var(--border)]",
    "bg-[color-mix(in_srgb,var(--surface)_92%,transparent)] p-5 sm:p-6 shadow-sm",
    "transition-colors duration-200",
    "hover:border-[color-mix(in_srgb,var(--accent)_25%,var(--border))]",
  ].join(" "),
} as const;
