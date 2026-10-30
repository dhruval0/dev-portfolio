export const languageCodeCellStyles = {
  root: [
    "overflow-hidden rounded-md border",
    "border-[color-mix(in_srgb,var(--accent)_40%,var(--border))]",
    "bg-[var(--card)]",
  ].join(" "),
  tabs: [
    "flex flex-wrap gap-1 border-b",
    "border-[color-mix(in_srgb,var(--accent)_28%,var(--border))]",
    "bg-[color-mix(in_srgb,var(--accent)_8%,var(--card))]",
    "px-2 py-1.5",
  ].join(" "),
  tab: [
    "rounded px-2.5 py-1 text-xs font-medium tracking-wide",
    "text-[color-mix(in_srgb,var(--accent)_65%,var(--muted))]",
    "transition-all duration-200",
    "hover:bg-[color-mix(in_srgb,var(--accent)_16%,transparent)]",
    "hover:text-[var(--accent)]",
  ].join(" "),
  tabActive: [
    "bg-[color-mix(in_srgb,var(--accent)_22%,transparent)]",
    "text-[var(--accent)]",
    "shadow-[inset_0_-2px_0_0_var(--accent)]",
  ].join(" "),
  pre: [
    "note-gold-scroll max-h-[320px] overflow-auto",
    "px-3 py-2.5 font-mono text-xs leading-relaxed",
    "text-[var(--muted)] sm:text-sm",
    "whitespace-pre",
  ].join(" "),
} as const;
