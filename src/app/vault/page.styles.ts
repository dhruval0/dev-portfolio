export const vaultPageStyles = {
  root: "flex flex-col gap-8",
  empty:
    "py-16 text-center font-[family-name:var(--font-script)] text-xl text-[var(--accent)]",
  grid: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
  moreWrap: "flex justify-center pt-2",
  more: [
    "rounded-full border border-[var(--border)] bg-[var(--card)]",
    "px-5 py-2 text-sm text-[var(--foreground)] shadow-sm",
    "transition-all duration-200",
    "hover:border-[color-mix(in_srgb,var(--accent)_45%,var(--border))]",
    "hover:text-[var(--accent)]",
    "hover:-translate-y-0.5",
  ].join(" "),
} as const;
