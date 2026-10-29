/**
 * Shared minimal hover — light border + tiny lift, no big glow/scale.
 * Use these in *.styles.ts for a consistent, quiet interaction.
 */
export const hover = {
  card: [
    "transition-all duration-200 ease-out",
    "hover:-translate-y-0.5",
    "hover:border-[color-mix(in_srgb,var(--accent)_40%,var(--border))]",
  ].join(" "),

  soft: [
    "transition-colors duration-200",
    "hover:border-[color-mix(in_srgb,var(--accent)_35%,var(--border))]",
  ].join(" "),

  text: "transition-colors duration-200 hover:text-[var(--accent)]",

  press: "transition-opacity duration-200 hover:opacity-85",
} as const;
