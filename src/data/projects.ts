import type { ProjectItem } from "@/types";

/** Edit titles/descriptions here — ProjectCard only displays this data */

export const projects: ProjectItem[] = [
  {
    id: "learning-desk",
    title: "learning-desk",
    description:
      "This site — a practice ground for Next.js routing, TypeScript types, and reusable React components.",
    tag: "Learning",
    status: "actively building — v0.1",
    href: "/",
  },
  {
    id: "todo-typed",
    title: "todo-typed",
    description:
      "A small todo app to practice state, forms, and TypeScript event types.",
    tag: "Practice",
    status: "planned — next up",
  },
];
