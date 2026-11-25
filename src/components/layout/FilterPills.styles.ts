export const filterPillsStyles = {
  root: "flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4",
  label:
    "shrink-0 font-[family-name:var(--font-script)] text-base text-[var(--accent)]",
  list: "flex flex-wrap gap-2",
  pill: "rounded-full border px-3 py-1.5 text-sm transition-[color,background-color,border-color,transform] duration-200 ease-out active:scale-[0.97]",
  active: "border-transparent bg-[var(--accent)] text-[var(--desk-bg)] shadow-[0_0_0_1px_color-mix(in_srgb,var(--accent)_40%,transparent)]",
  inactive: [
    "border-[var(--border)] text-[var(--muted)]",
    "hover:border-[color-mix(in_srgb,var(--accent)_35%,var(--border))]",
    "hover:text-[var(--accent)]",
  ].join(" "),
} as const;
