import type { VaultItem } from "@/types";

/**
 * YOUR TURN LATER: add more notes here.
 * UI reads this array — no component edits needed for new cards.
 */
export const vaultItems: VaultItem[] = [
  {
    id: "arrays-basics",
    title: "Arrays & Hash Maps",
    description: "Patterns I use first when a DSA problem shows up.",
    category: "notes",
    openedCount: 12,
    bodyPreview: "Start with the brute force, then look for a map or set.",
  },
  {
    id: "cap-theorem",
    title: "CAP Theorem (plain English)",
    description: "Consistency vs availability — when each trade-off shows up.",
    category: "notes",
    openedCount: 8,
  },
  {
    id: "jwt-sessions",
    title: "JWT vs Sessions",
    description: "Auth choices for apps I'm building while learning Next.js.",
    category: "notes",
    openedCount: 5,
  },
  {
    id: "react-props",
    title: "React Props Cheat Sheet",
    description: "Passing typed props without overcomplicating components.",
    category: "notes",
    openedCount: 15,
  },
  {
    id: "ts-types",
    title: "TypeScript Types I Actually Use",
    description: "type vs interface, optional props, and union variants.",
    category: "notes",
    openedCount: 20,
  },
  {
    id: "load-balancer",
    title: "Load Balancer Basics",
    description: "What sits in front of servers and why it matters.",
    category: "reads",
    openedCount: 3,
  },
];

export const vaultFilters = [
  { id: "everything", label: "Everything" },
  { id: "notes", label: "My notes" },
  { id: "tools", label: "Tools" },
  { id: "reads", label: "Reads" },
  { id: "experience", label: "Experience" },
] as const;
