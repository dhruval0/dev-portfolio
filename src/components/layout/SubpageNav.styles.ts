export const subpageNavStyles = {
  root: "mb-2 flex flex-col gap-3 sm:mb-0",

  top: "flex flex-wrap items-center justify-between gap-3",

  back: [
    "inline-flex items-center rounded-full border border-[var(--border)]",
    "px-3.5 py-2 text-[var(--accent)]",
    "transition-colors duration-200",
    "hover:border-[color-mix(in_srgb,var(--accent)_35%,var(--border))]",
    "hover:bg-[color-mix(in_srgb,var(--surface)_85%,transparent)]",
  ].join(" "),

  backLabel: "font-[family-name:var(--font-script)] text-base sm:text-lg",

  trail: [
    "flex flex-wrap items-center gap-x-2.5 gap-y-1",
    "rounded-full border border-[var(--border)]",
    "bg-[color-mix(in_srgb,var(--card)_55%,transparent)]",
    "px-3.5 py-2",
  ].join(" "),

  trailLead:
    "font-[family-name:var(--font-script)] text-sm text-[var(--faint)] sm:text-base",

  link: [
    "font-[family-name:var(--font-script)] text-sm text-[var(--muted)] sm:text-base",
    "transition-colors duration-200 hover:text-[var(--accent)]",
  ].join(" "),

  linkActive: "text-[var(--accent)]",

  dot: "text-sm text-[var(--faint)] select-none sm:text-base",
} as const;
