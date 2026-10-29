export const buttonStyles = {
  base: [
    "inline-flex items-center justify-center rounded-full px-5 py-2.5",
    "text-sm font-medium transition-all duration-200",
  ].join(" "),
  variants: {
    primary:
      "bg-[var(--desk-text)] text-[var(--desk-bg)] hover:opacity-85 active:opacity-75",
    secondary: [
      "border border-[var(--border)] text-[var(--foreground)]",
      "hover:border-[color-mix(in_srgb,var(--accent)_35%,var(--border))]",
      "hover:bg-[var(--surface)]",
    ].join(" "),
    ghost: "text-[var(--link)] hover:text-[var(--accent)]",
  },
} as const;
