export const filterPillsStyles = {
  root: "flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4",
  label:
    "shrink-0 font-[family-name:var(--font-script)] text-base text-[var(--accent)]",
  list: "flex flex-wrap gap-2",
  pill: "rounded-full border px-3 py-1.5 text-sm transition-colors duration-200",
  active: "border-transparent bg-[var(--accent)] text-[var(--desk-bg)]",
  inactive: [
    "border-[var(--border)] text-[var(--muted)]",
    "hover:border-[color-mix(in_srgb,var(--accent)_35%,var(--border))]",
    "hover:text-[var(--accent)]",
  ].join(" "),
} as const;
