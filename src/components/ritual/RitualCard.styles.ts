export const ritualCardStyles = {
  article:
    "rounded-lg border border-[var(--border)] border-l-[3px] border-l-[var(--link)] bg-[var(--card)]",
  toggle:
    "flex w-full flex-col gap-2 px-4 py-4 text-left sm:flex-row sm:items-center sm:justify-between sm:gap-6",
  title: "font-medium leading-snug",
  meta: "flex shrink-0 items-center gap-3 text-sm text-[var(--muted)]",
  action: "font-[family-name:var(--font-script)] text-[var(--accent)]",
  body: "border-t border-[var(--border)] px-4 py-4 text-sm leading-relaxed text-[var(--muted)]",
} as const;
