export const siteFooterStyles = {
  root: "mt-16 border-t border-[var(--border)]",
  inner:
    "mx-auto flex max-w-6xl flex-col gap-4 px-4 py-8 sm:flex-row sm:items-center sm:justify-between sm:px-6",
  thanks:
    "font-[family-name:var(--font-script)] text-lg text-[var(--accent)]",
  nav: "flex flex-wrap gap-x-4 gap-y-2 text-sm text-[var(--foreground)]",
  link: "transition-colors duration-300 hover:text-[var(--accent)]",
} as const;
