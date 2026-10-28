export const polaroidStyles = {
  figure:
    "relative mx-auto w-[200px] rotate-2 sm:w-[220px] lg:mx-0 lg:ml-auto",
  tape: "absolute -top-2 left-1/2 z-10 h-4 w-20 -translate-x-1/2 -rotate-1 rounded-sm bg-[var(--tape)] shadow-sm",
  frame: "rounded-sm bg-[var(--desk-text)] p-2.5 pb-10 shadow-xl",
  photoWrap: "relative aspect-square overflow-hidden bg-[var(--elevated)]",
  image: "h-full w-full object-cover",
  fallback:
    "flex h-full w-full flex-col items-center justify-center gap-2 bg-[var(--card)] p-4 text-center",
  fallbackInitials:
    "font-[family-name:var(--font-display)] text-3xl text-[var(--muted)]",
  fallbackHint: "text-[10px] leading-snug text-[var(--faint)]",
  caption:
    "mt-3 text-center font-[family-name:var(--font-script)] text-xl text-[var(--accent)]",
} as const;

export const tapeBackground = {
  backgroundImage:
    "repeating-linear-gradient(115deg, transparent, transparent 4px, color-mix(in srgb, black 14%, transparent) 4px, color-mix(in srgb, black 14%, transparent) 6px)",
} as const;
