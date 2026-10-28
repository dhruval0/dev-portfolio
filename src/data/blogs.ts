import type { BlogItem } from "@/types";

/** Paste real Substack / Medium URLs when you publish */

export const blogs: BlogItem[] = [
  {
    id: "first-post",
    title: "Why I'm Learning TypeScript With Next.js",
    platform: "Substack",
    excerpt:
      "Starting a public learning log — what I'm building and what still confuses me.",
    href: "#",
    date: "Coming soon",
  },
  {
    id: "second-post",
    title: "File-Based Routing Finally Clicked",
    platform: "Medium",
    excerpt:
      "How folders in src/app became real URLs — and why layout.tsx matters.",
    href: "#",
    date: "Coming soon",
  },
];
