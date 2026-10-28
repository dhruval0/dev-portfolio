export const buttonStyles = {
  base: "inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium transition-opacity",
  variants: {
    primary: "bg-[var(--desk-text)] text-[var(--desk-bg)] hover:opacity-90",
    secondary:
      "border border-[var(--border)] text-[var(--foreground)] hover:bg-[var(--surface)]",
    ghost: "text-[var(--link)] hover:underline underline-offset-4",
  },
} as const;
