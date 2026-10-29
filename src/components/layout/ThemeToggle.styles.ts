export const themeToggleStyles = {
  button: [
    "fixed right-4 top-4 z-40 rounded-full border border-[var(--border)]",
    "bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--muted)]",
    "transition-colors duration-200 hover:border-[color-mix(in_srgb,var(--accent)_35%,var(--border))] hover:text-[var(--accent)]",
    "sm:right-6 sm:top-6",
  ].join(" "),
} as const;
