type BadgeProps = {
  children: React.ReactNode;
  tone?: "default" | "success" | "accent" | "muted";
};

const tones = {
  default: "bg-[var(--elevated)] text-[var(--muted)] border-[var(--border)]",
  success: "bg-[var(--success)] text-[var(--desk-bg)] border-transparent",
  accent: "bg-[color-mix(in_srgb,var(--accent)_20%,transparent)] text-[var(--accent)] border-transparent",
  muted: "border-[var(--border)] text-[var(--muted)]",
};

export function Badge({ children, tone = "default" }: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
