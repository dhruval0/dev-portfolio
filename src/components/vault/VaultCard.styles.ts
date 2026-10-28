export const vaultCardStyles = {
  article:
    "flex flex-col rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 shadow-sm transition-colors hover:border-[var(--accent-soft)]",
  type: "font-mono text-[10px] uppercase tracking-wider text-[var(--muted)]",
  title: "mt-3 font-[family-name:var(--font-display)] text-xl",
  description: "mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]",
  footer: "mt-4 flex items-end justify-between gap-3",
  open: "text-sm text-[var(--foreground)] hover:text-[var(--link)]",
  opened:
    "font-[family-name:var(--font-script)] text-sm text-[var(--accent)]",
} as const;
