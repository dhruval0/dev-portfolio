import type { PaperDocument } from "@/types";

export const scalabilityOverviewNote: PaperDocument = {
  id: "scalability-overview",
  eyebrow: "from the vault",
  topic: "System Design · Scalability",
  title: "Scalability — Overview & Scale Up vs Out",
  blocks: [
    {
      type: "callout",
      text: "Definition: Scalability is a system’s ability to handle increased load by adding resources while maintaining acceptable performance.",
    },
    {
      type: "paragraph",
      text: "Why it exists: Every successful product grows. A system built for 100 users will break at 10,000 if it wasn’t designed to scale. Scalability is about tomorrow’s traffic — without a rewrite.",
    },
    {
      type: "pin",
      text: "The core insight: Scaling is not one decision. It’s a progression of architectural changes, each solving the bottleneck of the previous stage.",
    },
    { type: "divider" },
    { type: "heading", text: "Vertical Scaling (Scale Up)" },
    {
      type: "paragraph",
      text: "Increase the capacity of a single machine — more CPU, more RAM, faster SSDs. Same application code, bigger hardware.",
    },
    {
      type: "table",
      headers: ["Pros", "Cons"],
      rows: [
        ["Zero code changes", "Single point of failure"],
        ["Simple operations", "Hardware ceiling exists"],
        ["No distributed complexity", "Exponential cost curve"],
        ["Strong consistency (one machine)", "Downtime during upgrade"],
        ["Easy debugging", "Can’t scale beyond one machine"],
      ],
    },
    {
      type: "list",
      items: [
        "When to use: Traffic < 10K QPS, small team, data < 500GB, early-stage speed over scale",
        "When to stop: Biggest instance isn’t enough, need fault tolerance, or cost is unreasonable",
      ],
    },
    { type: "heading", text: "Horizontal Scaling (Scale Out)" },
    {
      type: "paragraph",
      text: "Add more machines behind a load balancer. Each server handles a fraction of total traffic.",
    },
    {
      type: "table",
      headers: ["Pros", "Cons"],
      rows: [
        ["No ceiling (infinite scale)", "Requires stateless design"],
        ["Fault tolerant", "Data consistency challenges"],
        ["Linear cost curve", "Complex operations"],
        ["Geographic distribution possible", "Harder debugging across machines"],
        ["Independent scaling per component", "Need LB + service discovery"],
      ],
    },
    {
      type: "list",
      items: [
        "Stateless servers — sessions/files not on local disk",
        "Health checks — remove unhealthy servers",
        "Shared storage — Redis, S3, centralized DB",
        "Identical config across all servers",
      ],
    },
    {
      type: "pin",
      text: "Common mistakes: local sessions, local files, per-server caches with no shared layer, missing health checks.",
    },
  ],
};
