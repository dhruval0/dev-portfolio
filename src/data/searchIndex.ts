import { blogs } from "@/data/blogs";
import { projects } from "@/data/projects";
import { prompts } from "@/data/prompts";
import { ritualEntries } from "@/data/ritual";
import { vaultItems } from "@/data/vault";

export type SearchGroup = "Vault" | "Prompts" | "Ritual" | "Projects" | "Blogs";

export type SearchHit = {
  id: string;
  group: SearchGroup;
  title: string;
  snippet: string;
  tag: string;
  href: string;
};

/** Flat index — Command Search filters this list */
export const searchIndex: SearchHit[] = [
  ...vaultItems.map((item) => ({
    id: `vault-${item.id}`,
    group: "Vault" as const,
    title: item.title,
    snippet: item.description,
    tag: "note",
    href: "/vault",
  })),
  ...prompts.map((item) => ({
    id: `prompt-${item.id}`,
    group: "Prompts" as const,
    title: item.title,
    snippet: item.preview,
    tag: "prompt",
    href: "/prompts",
  })),
  ...ritualEntries.map((item) => ({
    id: `ritual-${item.id}`,
    group: "Ritual" as const,
    title: item.title,
    snippet: item.summary,
    tag: "ritual",
    href: "/ritual",
  })),
  ...projects.map((item) => ({
    id: `project-${item.id}`,
    group: "Projects" as const,
    title: item.title,
    snippet: item.description,
    tag: "project",
    href: "/projects",
  })),
  ...blogs.map((item) => ({
    id: `blog-${item.id}`,
    group: "Blogs" as const,
    title: item.title,
    snippet: item.excerpt,
    tag: item.platform.toLowerCase(),
    href: item.href.startsWith("http") ? item.href : "/blogs",
  })),
];

export function filterSearchIndex(query: string): SearchHit[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];

  return searchIndex.filter((hit) => {
    const haystack = `${hit.title} ${hit.snippet} ${hit.group} ${hit.tag}`.toLowerCase();
    return haystack.includes(q);
  });
}

export function groupHits(hits: SearchHit[]): { group: SearchGroup; items: SearchHit[] }[] {
  const order: SearchGroup[] = ["Vault", "Prompts", "Ritual", "Projects", "Blogs"];
  return order
    .map((group) => ({
      group,
      items: hits.filter((h) => h.group === group),
    }))
    .filter((section) => section.items.length > 0);
}
