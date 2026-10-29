import { hover } from "@/styles/hover";

export const promptCardStyles = {
  article: [
    "group relative flex flex-col rounded-lg border border-[var(--border)] bg-[var(--card)] p-5",
    hover.card,
  ].join(" "),
  stamp:
    "shrink-0 rotate-6 rounded border border-[var(--accent)] px-2 py-0.5 font-[family-name:var(--font-script)] text-sm text-[var(--accent)]",
  header: "flex items-center justify-between gap-2",
  category:
    "text-[10px] font-semibold uppercase tracking-wider text-[var(--accent)]",
  title: "mt-2 font-[family-name:var(--font-display)] text-xl",
  preview:
    "mt-4 rounded-md border border-dashed border-[var(--border)] bg-[var(--surface)] p-3 font-mono text-xs leading-relaxed text-[var(--muted)]",
  actions: "mt-4 flex flex-wrap gap-2",
} as const;
