export const filterPillsStyles = {
  root: "flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4",
  label: "shrink-0 font-[family-name:var(--font-script)] text-[var(--muted)]",
  list: "flex flex-wrap gap-2",
  pill: "rounded-full border px-3 py-1.5 text-sm transition-colors",
  active: "border-transparent bg-[var(--success)] text-[var(--desk-bg)]",
  inactive:
    "border-[var(--border)] text-[var(--muted)] hover:text-[var(--foreground)]",
} as const;
