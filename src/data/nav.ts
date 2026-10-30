import type { NavLink } from "@/types";

export type DeskNavLink = NavLink & {
  /** Tiny mark on the folder tab */
  mark: string;
  /** Soft tip under the label on hover (aria / title) */
  tip: string;
};

export const navLinks: DeskNavLink[] = [
  {
    label: "Desk",
    href: "/",
    mark: "⌂",
    tip: "Home base — the open notebook",
  },
  {
    label: "Vault",
    href: "/vault",
    mark: "◈",
    tip: "Notes on DSA, systems & craft",
  },
  {
    label: "Prompts",
    href: "/prompts",
    mark: "✦",
    tip: "AI prompts I actually reuse",
  },
  {
    label: "Ritual",
    href: "/ritual",
    mark: "◎",
    tip: "Live stack releases & version notes",
  },
  {
    label: "Projects",
    href: "/projects",
    mark: "▣",
    tip: "Things shipped (or shipping)",
  },
  {
    label: "Blogs",
    href: "/blogs",
    mark: "✎",
    tip: "Medium posts from the desk",
  },
];
