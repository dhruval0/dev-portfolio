export const projectsPageStyles = {
  root: "flex flex-col gap-8",
  tray: "rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-6",
  trayLabel:
    "mb-4 text-center font-[family-name:var(--font-script)] text-[var(--muted)]",
  heading: "font-[family-name:var(--font-display)] text-xl",
  sub: "mt-1 text-sm text-[var(--muted)]",
  grid: "mt-6 grid gap-4 sm:grid-cols-2",
  count:
    "mt-8 text-center font-[family-name:var(--font-script)] text-[var(--muted)]",
} as const;
