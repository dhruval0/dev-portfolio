import { hover } from "@/styles/hover";

export const socialTagStyles = {
  link: [
    "group relative flex items-start gap-3.5 overflow-hidden",
    "rounded-xl border border-[var(--border)]",
    "bg-[color-mix(in_srgb,var(--card)_90%,transparent)]",
    "p-4 pl-5 shadow-sm",
    hover.card,
  ].join(" "),

  iconWrap: [
    "relative mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center",
    "rounded-full border border-[var(--border)]",
    "bg-[color-mix(in_srgb,var(--elevated)_85%,transparent)]",
    "transition-colors duration-200",
    "group-hover:border-[color-mix(in_srgb,var(--accent)_35%,var(--border))]",
  ].join(" "),

  icon: "h-[1.125rem] w-[1.125rem]",

  body: "relative min-w-0 flex-1",

  platform:
    "text-[10px] font-semibold uppercase tracking-[0.16em] text-[var(--accent)]",

  handle: "mt-0.5 truncate font-medium text-[var(--foreground)]",

  description: "mt-1.5 text-sm leading-relaxed text-[var(--muted)]",

  chevron: [
    "absolute right-3 top-1/2 -translate-y-1/2 text-sm text-[var(--accent)]",
    "opacity-0 transition-opacity duration-200 group-hover:opacity-100",
  ].join(" "),
} as const;
