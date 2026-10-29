import { hover } from "@/styles/hover";

export const ritualCardStyles = {
  article: [
    "rounded-lg border border-[var(--border)] border-l-[3px] border-l-[var(--link)] bg-[var(--card)]",
    hover.soft,
  ].join(" "),
  toggle: [
    "flex w-full flex-col gap-2 px-4 py-4 text-left sm:flex-row sm:items-center sm:justify-between sm:gap-6",
    "transition-colors duration-200 hover:bg-[color-mix(in_srgb,var(--elevated)_35%,transparent)]",
  ].join(" "),
  title: "font-medium leading-snug",
  meta: "flex shrink-0 items-center gap-3 text-sm text-[var(--muted)]",
  action: [
    "font-[family-name:var(--font-script)] text-[var(--accent)]",
    hover.text,
  ].join(" "),
  body: "flex flex-col items-start gap-3 border-t border-[var(--border)] px-4 py-4 text-sm leading-relaxed text-[var(--muted)]",
} as const;
