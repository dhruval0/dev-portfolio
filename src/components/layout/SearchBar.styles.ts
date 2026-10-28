export const searchBarStyles = {
  button:
    "relative mx-auto flex w-full max-w-xl items-center rounded-full border border-[var(--border)] bg-[var(--surface)] py-3 pl-10 pr-20 text-left text-sm text-[var(--faint)] transition-colors hover:border-[var(--accent-soft)]",
  icon: "pointer-events-none absolute left-4 text-[var(--muted)]",
  label: "truncate",
  keys: "pointer-events-none absolute right-3 hidden items-center gap-1 sm:flex",
  kbd: "rounded border border-[var(--border)] bg-[var(--card)] px-1.5 py-0.5 text-[10px] text-[var(--muted)]",
} as const;
