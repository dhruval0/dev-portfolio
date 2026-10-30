import type { DrawerItem } from "@/types";

/** Home page "drawers" — each opens a section of the desk */

export const drawers: DrawerItem[] = [
  {
    id: "vault",
    title: "Vault",
    description: "DSA, system design, behavioral prep, and notes from experience.",
    href: "/vault",
  },
  {
    id: "prompts",
    title: "Prompts",
    description: "Reusable AI prompts I use while learning and building.",
    href: "/prompts",
  },
  {
    id: "ritual",
    title: "Ritual",
    description:
      "Live stack releases — Python, LLM, FastAPI, Docker, and more.",
    href: "/ritual",
  },
  {
    id: "projects",
    title: "Projects",
    description: "Things I've shipped (or am still shipping) in public.",
    href: "/projects",
  },
  {
    id: "blogs",
    title: "Blogs",
    description: "Medium posts — Elasticsearch, Docker, Git, Nginx, and more.",
    href: "/blogs",
  },
];
