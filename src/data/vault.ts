import type { VaultItem } from "@/types";

/**
 * Vault notes — cards + paper modal content.
 * Edit here; UI stays the same.
 */

export const vaultItems: VaultItem[] = [
  {
    id: "arrays-basics",
    title: "Arrays & Hash Maps",
    description: "Patterns I use first when a DSA problem shows up.",
    category: "notes",
    openedCount: 12,
    note: {
      id: "arrays-basics",
      eyebrow: "from the vault",
      topic: "DSA",
      title: "Arrays & Hash Maps — First Patterns I Reach For",
      blocks: [
        { type: "heading", text: "1️⃣ Start simple" },
        {
          type: "paragraph",
          text: "Brute force first. Then ask: can a map or set cut the nested loop?",
        },
        {
          type: "callout",
          text: "If you’re scanning twice for the same value — store it once.",
        },
        { type: "heading", text: "2️⃣ Hash map cheat moves" },
        {
          type: "list",
          items: [
            "Two Sum → value → index map",
            "Frequency count → value → count map",
            "Seen before? → Set",
          ],
        },
        { type: "divider" },
        {
          type: "pin",
          text: "Time: O(n) with a map beats O(n²) nested loops most days.",
        },
      ],
    },
  },
  {
    id: "cap-theorem",
    title: "CAP Theorem (plain English)",
    description: "Consistency vs availability — when each trade-off shows up.",
    category: "notes",
    openedCount: 8,
    note: {
      id: "cap-theorem",
      eyebrow: "from the vault",
      topic: "System Design",
      title: "CAP Theorem — Consistency vs Availability",
      blocks: [
        { type: "heading", text: "1️⃣ What CAP means" },
        {
          type: "paragraph",
          text: "In a partition (network split), you pick consistency or availability — not both at once.",
        },
        {
          type: "table",
          headers: ["Choice", "What you keep"],
          rows: [
            ["CP", "Correct data, may refuse some requests"],
            ["AP", "Always responds, may be briefly stale"],
          ],
        },
        {
          type: "callout",
          text: "Banks lean CP. Social feeds often lean AP.",
        },
      ],
    },
  },
  {
    id: "jwt-sessions",
    title: "JWT vs Sessions",
    description: "Auth choices for apps I'm building while learning Next.js.",
    category: "notes",
    openedCount: 5,
    note: {
      id: "jwt-sessions",
      eyebrow: "from the vault",
      topic: "Auth",
      title: "JWT vs Sessions — Choosing Security That Fits",
      blocks: [
        { type: "heading", text: "1️⃣ Sessions" },
        {
          type: "paragraph",
          text: "Server stores login state. Browser keeps a session id cookie.",
        },
        {
          type: "list",
          items: [
            "Easy to revoke",
            "Great with SSR (Next.js)",
            "Needs shared session store when scaling",
          ],
        },
        { type: "divider" },
        { type: "heading", text: "2️⃣ JWT" },
        {
          type: "paragraph",
          text: "Token carries claims. Server verifies signature — often no session lookup.",
        },
        {
          type: "flow",
          text: "Login → Create JWT → Client stores → Send on requests → Verify",
        },
        {
          type: "pin",
          text: "Stateless = any server can handle any request (if it has the secret).",
        },
      ],
    },
  },
  {
    id: "react-props",
    title: "React Props Cheat Sheet",
    description: "Passing typed props without overcomplicating components.",
    category: "notes",
    openedCount: 15,
    note: {
      id: "react-props",
      eyebrow: "from the vault",
      topic: "React",
      title: "React Props — Typed and Simple",
      blocks: [
        { type: "heading", text: "1️⃣ Props are inputs" },
        {
          type: "paragraph",
          text: "A component receives data from its parent. Type that shape once.",
        },
        {
          type: "flow",
          text: "Parent → props → Child renders UI",
        },
        { type: "heading", text: "2️⃣ TypeScript tip" },
        {
          type: "callout",
          text: "Prefer a Props type next to the component — keep it local until shared.",
        },
      ],
    },
  },
  {
    id: "ts-types",
    title: "TypeScript Types I Actually Use",
    description: "type vs interface, optional props, and union variants.",
    category: "notes",
    openedCount: 20,
    note: {
      id: "ts-types",
      eyebrow: "from the vault",
      topic: "TypeScript",
      title: "TypeScript Types I Actually Use",
      blocks: [
        { type: "heading", text: "1️⃣ Daily toolkit" },
        {
          type: "list",
          items: [
            "type for unions and aliases",
            "interface when extending object shapes",
            "optional props with ?",
            "string literal unions for variants",
          ],
        },
        {
          type: "pin",
          text: "Don’t over-type — type the boundaries (props, API, events).",
        },
      ],
    },
  },
  {
    id: "load-balancer",
    title: "Load Balancer Basics",
    description: "What sits in front of servers and why it matters.",
    category: "reads",
    openedCount: 3,
    note: {
      id: "load-balancer",
      eyebrow: "from the vault",
      topic: "System Design",
      title: "Load Balancer Basics",
      blocks: [
        { type: "heading", text: "1️⃣ Why it exists" },
        {
          type: "paragraph",
          text: "Spreads traffic across servers so one machine doesn’t melt.",
        },
        {
          type: "flow",
          text: "Users → Load balancer → Server A / B / C",
        },
        {
          type: "callout",
          text: "Also used for health checks and zero-downtime deploys.",
        },
      ],
    },
  },
  {
    id: "system-design",
    title: "System Design",
    description: "Easy way to learn system design — from click to storage.",
    category: "notes",
    openedCount: 76,
    note: {
      id: "system-design",
      eyebrow: "from the vault",
      topic: "System Design",
      title: "System Design — Simple Path (Cheat Sheet)",
      blocks: [
        { type: "heading", text: "1️⃣ What is System Design?" },
        {
          type: "paragraph",
          text: "System Design = Planning how an app works from user click to data storage.",
        },
        {
          type: "callout",
          text: "When millions of users click this button... what happens?",
        },
        {
          type: "paragraph",
          text: "Example: When you open Instagram and like a photo:",
        },
        {
          type: "flow",
          text: "Your phone → Instagram server → Database → Save like → Send back result",
        },
        { type: "divider" },
        { type: "heading", text: "2️⃣ Basic System Design Flow" },
        {
          type: "list",
          items: [
            "Client sends a request",
            "Server runs logic",
            "Database stores / reads data",
            "Response goes back to the user",
          ],
        },
        { type: "divider" },
        { type: "heading", text: "3️⃣ Core Components (Simple)" },
        {
          type: "table",
          headers: ["Part", "What it does"],
          rows: [
            ["Client", "Phone / browser"],
            ["DNS", "Name → IP"],
            ["Load Balancer", "Spreads traffic"],
            ["Server", "App logic"],
            ["Database", "Stores data"],
            ["Cache", "Fast memory"],
          ],
        },
        {
          type: "pin",
          text: "Interview trick: talk Users → Speed → Scale → Data → Security.",
        },
      ],
    },
  },
];

export const vaultFilters = [
  { id: "everything", label: "Everything" },
  { id: "notes", label: "My notes" },
  { id: "tools", label: "Tools" },
  { id: "reads", label: "Reads" },
  { id: "experience", label: "Experience" },
] as const;

export function getVaultItemById(id: string) {
  return vaultItems.find((item) => item.id === id);
}
