export const siteFooterStyles = {
  root: "mt-16 border-t border-[var(--border)]",
  inner:
    "mx-auto flex max-w-5xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6",
  thanks:
    "font-[family-name:var(--font-script)] text-lg text-[var(--muted)]",
  nav: "flex flex-wrap gap-x-4 gap-y-2 text-sm text-[var(--foreground)]",
  link: "transition-colors hover:text-[var(--accent)]",
} as const;
