export const noteModalStyles = {
  overlay:
    "fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-3 py-6 backdrop-blur-sm sm:px-6",
  paper:
    "relative flex max-h-[min(92vh,900px)] w-full max-w-3xl flex-col overflow-hidden rounded-lg border border-[var(--border)] shadow-2xl",
  paperSurface:
    "bg-[var(--elevated)] [background-image:repeating-linear-gradient(transparent,transparent_27px,color-mix(in_srgb,var(--border)_55%,transparent)_28px)]",
  tape: "absolute -top-1 left-1/2 z-10 h-4 w-20 -translate-x-1/2 -rotate-1 rounded-sm bg-[var(--tape)] shadow-sm",
  close:
    "absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--border)] bg-[var(--card)] text-sm text-[var(--muted)] transition-colors hover:text-[var(--foreground)]",
  body: "flex min-h-0 flex-1 overflow-hidden",
  withToc: "sm:grid sm:grid-cols-[190px_1fr]",
  scroll:
    "note-gold-scroll min-h-0 flex-1 overflow-y-auto px-5 pb-8 pt-10 sm:px-8",
  loadingWrap: "flex min-h-[220px] items-center px-2 py-16",
  loadingText:
    "font-[family-name:var(--font-script)] text-2xl text-[var(--foreground)]",
  eyebrow: "font-[family-name:var(--font-script)] text-base text-[var(--accent)]",
  topic: "mt-1 text-lg font-semibold text-[var(--foreground)]",
  title:
    "mt-3 font-[family-name:var(--font-display)] text-2xl leading-snug tracking-tight sm:text-3xl",
  blocks: "mt-8 flex flex-col gap-5",
  heading: "text-lg font-semibold text-[var(--foreground)]",
  paragraph: "text-[15px] leading-relaxed text-[var(--muted)]",
  callout:
    "border-l-2 border-[var(--accent)] pl-4 text-[15px] italic leading-relaxed text-[var(--foreground)]",
  flow: [
    "overflow-x-auto rounded-md border border-[var(--border)] bg-[var(--card)]",
    "px-3 py-2.5 font-mono text-xs leading-relaxed text-[var(--muted)] sm:text-sm",
    "whitespace-pre",
  ].join(" "),
  pin: "text-[15px] leading-relaxed text-[var(--foreground)]",
  list: "list-disc space-y-1.5 pl-5 text-[15px] leading-relaxed text-[var(--muted)]",
  table: "w-full text-left text-sm",
  th: "pb-2 pr-4 font-medium text-[var(--faint)]",
  td: "py-1.5 pr-4 text-[var(--muted)]",
  tdKey: "py-1.5 pr-4 font-medium text-[var(--foreground)]",
  divider: "border-t border-[var(--border)]",
  toc: [
    "note-gold-scroll hidden overflow-y-auto px-2.5 py-10 sm:block",
    "border-r border-[color-mix(in_srgb,var(--accent)_35%,var(--border))]",
    "bg-[color-mix(in_srgb,var(--accent)_6%,var(--card))]",
  ].join(" "),
  tocList: "sticky top-4 flex flex-col gap-1",
  tocItem: [
    "group relative truncate rounded-md px-2.5 py-1.5 text-left text-xs",
    "text-[color-mix(in_srgb,var(--accent)_72%,var(--muted))]",
    "transition-all duration-200 ease-out",
    "hover:translate-x-0.5 hover:bg-[color-mix(in_srgb,var(--accent)_14%,transparent)]",
    "hover:text-[var(--accent)]",
    "hover:shadow-[inset_2px_0_0_0_var(--accent)]",
  ].join(" "),
} as const;

export const noteTapeBackground = {
  backgroundImage:
    "repeating-linear-gradient(115deg, transparent, transparent 4px, color-mix(in srgb, black 14%, transparent) 4px, color-mix(in srgb, black 14%, transparent) 6px)",
} as const;
