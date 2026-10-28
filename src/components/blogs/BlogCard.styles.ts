export const blogCardStyles = {
  link: "block rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 transition-colors hover:border-[var(--accent-soft)]",
  meta: "flex flex-wrap items-center gap-2",
  date: "text-xs text-[var(--muted)]",
  title: "mt-3 font-[family-name:var(--font-display)] text-xl",
  excerpt: "mt-2 text-sm leading-relaxed text-[var(--muted)]",
  cta: "mt-4 inline-block text-sm text-[var(--link)]",
} as const;
