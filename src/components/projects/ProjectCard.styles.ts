import { hover } from "@/styles/hover";

export const projectCardStyles = {
  article: [
    "group flex flex-col rounded-lg border border-[var(--border)] bg-[var(--card)] p-5",
    hover.card,
  ].join(" "),
  title: "mt-3 font-[family-name:var(--font-display)] text-2xl",
  description: "mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]",
  status: "mt-4 font-[family-name:var(--font-script)] text-[var(--accent)]",
  link: ["mt-3 text-sm text-[var(--link)]", hover.text].join(" "),
} as const;
