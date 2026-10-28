export const badgeStyles = {
  root: "inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide",
  tones: {
    default: "bg-[var(--elevated)] text-[var(--muted)] border-[var(--border)]",
    success: "bg-[var(--success)] text-[var(--desk-bg)] border-transparent",
    accent:
      "bg-[color-mix(in_srgb,var(--accent)_20%,transparent)] text-[var(--accent)] border-transparent",
    muted: "border-[var(--border)] text-[var(--muted)]",
  },
} as const;
