export const skillCardStyles = {
  shelf: [
    "group/shelf relative grid gap-5 sm:grid-cols-[7.5rem_1fr]",
    "rounded-lg border border-[var(--border)]",
    "bg-[color-mix(in_srgb,var(--card)_70%,transparent)]",
    "p-4 sm:p-5",
    "transition-colors duration-300",
    "hover:border-[color-mix(in_srgb,var(--accent)_40%,var(--border))]",
  ].join(" "),

  spine: "flex flex-row items-center gap-3 sm:flex-col sm:items-start sm:gap-2",

  mark: [
    "inline-flex h-8 w-8 items-center justify-center rounded-md",
    "border border-[color-mix(in_srgb,var(--accent)_45%,var(--border))]",
    "bg-[color-mix(in_srgb,var(--accent)_14%,transparent)]",
    "font-[family-name:var(--font-display)] text-sm text-[var(--accent)]",
  ].join(" "),

  label: [
    "font-[family-name:var(--font-script)] text-2xl leading-none text-[var(--accent)]",
  ].join(" "),

  meta: "text-[11px] uppercase tracking-[0.16em] text-[var(--faint)]",

  rail: [
    "mt-auto hidden h-px w-full bg-[color-mix(in_srgb,var(--accent)_35%,transparent)]",
    "sm:mt-4 sm:block",
  ].join(" "),

  board: [
    "relative rounded-md",
    "bg-[color-mix(in_srgb,var(--surface)_55%,transparent)]",
    "p-3 sm:p-4",
    "[background-image:radial-gradient(circle_at_1px_1px,color-mix(in_srgb,var(--accent)_18%,transparent)_1px,transparent_0)]",
    "[background-size:14px_14px]",
  ].join(" "),

  tools:
    "grid grid-cols-3 gap-3 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-7",

  tool: [
    "group/tool flex flex-col items-center gap-2 rounded-md p-2 outline-none",
    "transition-transform duration-200 ease-out",
    "hover:-translate-y-1",
    "focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2",
    "focus-visible:ring-offset-[var(--background)]",
  ].join(" "),

  medal: [
    "relative flex h-12 w-12 items-center justify-center rounded-full",
    "border border-[var(--border)]",
    "bg-[color-mix(in_srgb,var(--elevated)_90%,transparent)]",
    "shadow-[inset_0_1px_0_color-mix(in_srgb,var(--accent)_20%,transparent)]",
    "transition-all duration-200",
    "group-hover/tool:border-[color-mix(in_srgb,var(--accent)_55%,var(--border))]",
    "group-hover/tool:shadow-[0_0_0_3px_color-mix(in_srgb,var(--accent)_16%,transparent)]",
  ].join(" "),

  medalExpert: "h-14 w-14",

  iconWrap: "inline-flex",
  iconWrapPad: "inline-flex rounded-sm bg-white p-0.5",
  icon: "h-5 w-5 shrink-0 transition-transform duration-200 group-hover/tool:scale-110",
  iconExpert: "h-6 w-6",

  name: [
    "max-w-[5.5rem] text-center text-[11px] leading-tight text-[var(--muted)]",
    "transition-colors duration-200 group-hover/tool:text-[var(--accent)]",
  ].join(" "),
} as const;
