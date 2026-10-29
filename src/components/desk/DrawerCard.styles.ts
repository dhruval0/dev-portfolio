import { hover } from "@/styles/hover";

export const drawerCardStyles = {
  link: [
    "group relative flex min-h-[180px] flex-col pt-5",
    "transition-transform duration-200 ease-out",
    "hover:-translate-y-0.5",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--link)]",
  ].join(" "),

  tab: [
    "absolute left-3 top-0 z-10",
    "h-5 w-[42%] max-w-[7.5rem]",
    "rounded-t-md",
    "border border-b-0 border-[var(--border)]",
    "bg-[color-mix(in_srgb,var(--elevated)_90%,var(--accent)_10%)]",
    "transition-colors duration-200",
    "group-hover:bg-[color-mix(in_srgb,var(--elevated)_80%,var(--accent)_20%)]",
  ].join(" "),

  tabLabel: [
    "absolute inset-0 flex items-center px-2.5",
    "truncate text-[9px] font-semibold uppercase tracking-[0.14em] text-[var(--faint)]",
    "transition-colors duration-200 group-hover:text-[var(--accent)]",
  ].join(" "),

  body: [
    "relative flex flex-1 flex-col overflow-hidden rounded-lg rounded-tl-none",
    "border border-[var(--border)]",
    "bg-[color-mix(in_srgb,var(--card)_88%,transparent)]",
    "p-5 pt-6 shadow-md",
    hover.soft,
    "group-hover:border-[color-mix(in_srgb,var(--accent)_40%,var(--border))]",
  ].join(" "),

  paper: [
    "pointer-events-none absolute inset-x-3 top-2 h-2 rounded-sm",
    "bg-[color-mix(in_srgb,var(--desk-text)_8%,transparent)] opacity-60",
  ].join(" "),

  title: "relative font-[family-name:var(--font-display)] text-xl text-[var(--foreground)]",

  description:
    "relative mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]",

  action: [
    "relative mt-4 inline-flex items-center gap-1 text-sm text-[var(--link)]",
    "transition-colors duration-200 group-hover:text-[var(--accent)]",
  ].join(" "),

  arrow: "transition-transform duration-200 group-hover:translate-x-0.5",
} as const;
