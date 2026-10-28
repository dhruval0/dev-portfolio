export const drawerCardStyles = {
  link: "group flex min-h-[160px] flex-col rounded-lg border border-[var(--border)] bg-[var(--card)] p-5 shadow-md transition-transform hover:-translate-y-0.5",
  tab: "mb-3 h-2 w-14 rounded-t-sm bg-[var(--elevated)]",
  title: "font-[family-name:var(--font-display)] text-xl",
  description: "mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]",
  action: "mt-4 text-sm text-[var(--link)] group-hover:underline",
} as const;
