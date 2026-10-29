import { hover } from "@/styles/hover";

export const skillCardStyles = {
  root: "flex flex-col gap-3",
  label: [
    "text-xs font-bold uppercase tracking-[0.14em] text-[var(--accent)]",
  ].join(" "),
  list: "flex flex-wrap gap-2",
  pill: [
    "inline-flex cursor-default items-center gap-2 rounded-md",
    "border border-[var(--border)] bg-[var(--card)]",
    "px-2.5 py-1.5 text-sm text-[var(--foreground)] shadow-sm",
    hover.card,
  ].join(" "),
  iconWrap: "inline-flex",
  iconWrapPad: "inline-flex rounded-sm bg-white p-0.5",
  icon: "h-3.5 w-3.5 shrink-0",
} as const;
