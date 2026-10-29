import { hover } from "@/styles/hover";

export const searchBarStyles = {
  button: [
    "group relative mx-auto flex w-full max-w-xl items-center",
    "rounded-full border border-[var(--border)]",
    "bg-[color-mix(in_srgb,var(--surface)_90%,transparent)]",
    "py-3.5 pl-11 pr-20 text-left text-sm text-[var(--faint)] shadow-sm",
    hover.card,
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)]",
  ].join(" "),

  icon: [
    "pointer-events-none absolute left-4 text-[var(--muted)]",
    "transition-colors duration-200 group-hover:text-[var(--accent)]",
  ].join(" "),

  label: "truncate",

  keys: "pointer-events-none absolute right-3 hidden items-center gap-1 sm:flex",

  kbd: [
    "rounded border border-[var(--border)] bg-[var(--card)]",
    "px-1.5 py-0.5 text-[10px] text-[var(--muted)]",
    "transition-colors duration-200 group-hover:text-[var(--accent)]",
  ].join(" "),
} as const;
