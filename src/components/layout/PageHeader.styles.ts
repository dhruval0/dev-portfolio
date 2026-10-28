export const pageHeaderStyles = {
  root: "flex flex-col items-center gap-4 text-center",
  titleWrap: "relative mt-2",
  tape: "absolute -top-2 left-1/2 z-10 h-3 w-16 -translate-x-1/2 rotate-[-2deg] rounded-sm bg-[var(--tape)] opacity-90",
  title:
    "rounded-md bg-[var(--card)] px-8 py-3 font-[family-name:var(--font-display)] text-3xl tracking-tight shadow-lg sm:text-4xl",
  description:
    "max-w-xl text-base leading-relaxed text-[var(--muted)] sm:text-lg",
} as const;

export const pageHeaderTapeBackground = {
  backgroundImage:
    "repeating-linear-gradient(90deg, transparent, transparent 3px, color-mix(in srgb, black 12%, transparent) 3px, color-mix(in srgb, black 12%, transparent) 5px)",
} as const;
