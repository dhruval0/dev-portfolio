import { hover } from "@/styles/hover";

export const blogCardStyles = {
  link: [
    "group block overflow-hidden rounded-lg border border-[var(--border)] bg-[var(--card)]",
    hover.card,
  ].join(" "),
  imageWrap:
    "relative aspect-[16/9] w-full overflow-hidden border-b border-[var(--border)] bg-[var(--surface)]",
  image:
    "object-cover transition-transform duration-300 group-hover:scale-[1.03]",
  body: "p-5",
  meta: "flex flex-wrap items-center gap-2",
  date: "text-xs text-[var(--muted)]",
  title: "mt-3 font-[family-name:var(--font-display)] text-xl",
  excerpt: "mt-2 text-sm leading-relaxed text-[var(--muted)]",
  cta: ["mt-4 inline-block text-sm text-[var(--link)]", hover.text].join(" "),
} as const;
