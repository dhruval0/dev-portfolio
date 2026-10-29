export const commandSearchStyles = {
  overlay:
    "fixed inset-0 z-50 flex items-start justify-center bg-black/55 px-4 pt-[12vh] backdrop-blur-sm sm:pt-[15vh]",
  dialog:
    "flex w-full max-w-xl flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl",
  inputRow: "flex items-center gap-3 border-b border-[var(--border)] px-4 py-3",
  searchIcon: "text-[var(--muted)]",
  input:
    "min-w-0 flex-1 bg-transparent text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--faint)]",
  esc: "rounded border border-[var(--border)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--muted)] hover:text-[var(--foreground)]",
  results: "max-h-[min(50vh,360px)] min-h-[160px] overflow-y-auto px-2 py-2",
  empty:
    "flex h-36 items-center justify-center px-4 text-center text-sm text-[var(--faint)]",
  section: "mb-2",
  groupLabel:
    "px-2 py-1.5 font-[family-name:var(--font-script)] text-sm text-[var(--accent)] sm:text-base",
  hit: "flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left transition-colors",
  hitActive: "bg-[var(--elevated)]",
  hitIdle: "hover:bg-[var(--card)]",
  hitBody: "min-w-0 flex-1",
  hitTop: "flex items-center justify-between gap-2",
  hitTitle: "truncate font-medium text-[var(--foreground)]",
  hitTag:
    "shrink-0 rounded border border-[var(--border)] px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-[var(--muted)]",
  hitSnippet: "mt-0.5 line-clamp-1 text-xs text-[var(--muted)]",
  footer:
    "flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[var(--border)] px-4 py-2.5 text-xs text-[var(--muted)]",
  shortcut: "inline-flex items-center gap-1.5",
  kbd: "inline-flex min-w-[1.25rem] items-center justify-center rounded border border-[var(--border)] bg-[var(--elevated)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--muted)]",
} as const;
