import type { PaperDocument } from "@/types";
import { cacheAsideSnippets } from "@/data/codeSamples";

export const scalabilityStages46Note: PaperDocument = {
  id: "scalability-stages-4-6",
  eyebrow: "from the vault",
  topic: "System Design · Scalability",
  title: "Scalability — Stages 4–6",
  blocks: [
    { type: "heading", text: "Stage 4: Database Read Replicas" },
    {
      type: "paragraph",
      text: "Distribute read queries across replicas. Writes always go to the primary.",
    },
    {
      type: "flow",
      text: "          [App Servers]\n          /           \\\n[DB Primary]    [DB Replica 1]\n(writes)        [DB Replica 2]\n                (reads)",
    },
    {
      type: "callout",
      text: "Tradeoff: Replication lag means replicas might serve slightly stale data. OK for listings and profiles — not for balances or inventory.",
    },
    {
      type: "pin",
      text: "Bottleneck: Repeated queries for the same data still waste DB resources. Need a cache.",
    },

    { type: "divider" },
    { type: "heading", text: "Stage 5: Cache Layer" },
    {
      type: "paragraph",
      text: "Add Redis between app servers and the database (cache-aside).",
    },
    { type: "codeCell", snippets: cacheAsideSnippets },
    {
      type: "paragraph",
      text: "Impact: With 95% cache hit rate, DB load drops ~95%. Average latency drops from ~50ms to ~3ms.",
    },
    {
      type: "pin",
      text: "Bottleneck: Static assets still served from origin. Global users feel high latency → CDN.",
    },

    { type: "divider" },
    { type: "heading", text: "Stage 6: CDN" },
    {
      type: "paragraph",
      text: "Static assets served from edge nodes worldwide. A user in Mumbai gets images from a Mumbai edge (~5ms) instead of a US origin (~200ms). Origin bandwidth can drop ~80%.",
    },
  ],
};
