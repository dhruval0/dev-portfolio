export const socialTagStyles = {
  link: "flex items-start gap-3 rounded-lg border border-[var(--border)] bg-[var(--card)] p-4 transition-colors hover:border-[var(--accent-soft)]",
  hole: "mt-1 h-3 w-3 shrink-0 rounded-full border-2 border-[var(--border)]",
  body: "min-w-0",
  platform:
    "text-[10px] font-semibold uppercase tracking-wider text-[var(--accent)]",
  handle: "truncate font-medium",
  description: "mt-1 text-sm text-[var(--muted)]",
} as const;
