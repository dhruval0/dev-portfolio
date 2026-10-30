import { hover } from "@/styles/hover";

export const techUpdateCardStyles = {
  article: [
    "overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)]",
    hover.soft,
  ].join(" "),
  header: [
    "flex w-full flex-col gap-2 px-4 py-4 text-left sm:flex-row sm:items-start sm:justify-between sm:gap-6",
    "transition-colors duration-200 hover:bg-[color-mix(in_srgb,var(--accent)_6%,transparent)]",
  ].join(" "),
  headerOpen:
    "border-b border-[color-mix(in_srgb,var(--accent)_25%,var(--border))]",
  titleRow: "flex min-w-0 flex-col gap-1.5",
  badges: "flex flex-wrap items-center gap-2",
  stack: [
    "rounded-full border border-[color-mix(in_srgb,var(--accent)_35%,var(--border))]",
    "bg-[color-mix(in_srgb,var(--accent)_12%,transparent)]",
    "px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-[var(--accent)]",
  ].join(" "),
  version:
    "font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]",
  pre: [
    "rounded-full border border-[var(--border)] px-2 py-0.5",
    "text-[10px] font-semibold uppercase tracking-wider text-[var(--faint)]",
  ].join(" "),
  title: "font-[family-name:var(--font-display)] text-lg leading-snug",
  meta: "flex shrink-0 items-center gap-3 text-sm text-[var(--muted)]",
  fold: [
    "font-[family-name:var(--font-script)] text-[var(--accent)]",
    hover.text,
  ].join(" "),
  body: "flex flex-col gap-4 px-4 py-4",
  summary: "text-sm leading-relaxed text-[var(--muted)]",
  detail: [
    "rounded-md border border-[var(--border)] bg-[var(--surface)]",
    "px-3 py-3 text-sm leading-relaxed text-[var(--muted)] whitespace-pre-wrap",
  ].join(" "),
  link: ["text-sm text-[var(--link)]", hover.text].join(" "),
} as const;
