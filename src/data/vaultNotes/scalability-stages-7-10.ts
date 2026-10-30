import type { PaperDocument } from "@/types";
import { shardSnippets } from "@/data/codeSamples";

export const scalabilityStages710Note: PaperDocument = {
  id: "scalability-stages-7-10",
  eyebrow: "from the vault",
  topic: "System Design · Scalability",
  title: "Scalability — Stages 7–10",
  blocks: [
    { type: "heading", text: "Stage 7: Message Queue" },
    {
      type: "paragraph",
      text: "Heavy work (images, email, reports) runs asynchronously so the API stays fast.",
    },
    {
      type: "flow",
      text: "API: save order → publish event → return 50ms\nWorker: consume event → process images (5s) → update status",
    },
    {
      type: "pin",
      text: "Don’t do 5-second work on the request path. Queue it.",
    },

    { type: "divider" },
    { type: "heading", text: "Stage 8: Database Sharding" },
    {
      type: "paragraph",
      text: "Split data across multiple database instances. Each shard holds a slice of users.",
    },
    { type: "codeCell", snippets: shardSnippets },
    {
      type: "table",
      headers: ["Pros", "Cons"],
      rows: [
        ["Each shard’s data fits in memory", "Resharding is painful"],
        ["Writes scale with shard count", "Cross-shard queries are hard"],
        ["Isolate hot users / tenants", "Operational complexity rises"],
      ],
    },

    { type: "divider" },
    { type: "heading", text: "Stage 9: Microservices / Independent Scaling" },
    {
      type: "paragraph",
      text: "Split hot paths into services that scale independently (e.g. search vs checkout). Communicate via APIs or events.",
    },
    {
      type: "list",
      items: [
        "Scale the busy service without scaling everything",
        "Failure isolation — one service down doesn’t take all down",
        "Cost: distributed transactions, more ops, clearer ownership needed",
      ],
    },

    { type: "divider" },
    { type: "heading", text: "Stage 10: Observe & Capacity Plan" },
    {
      type: "paragraph",
      text: "Measure before you scale. Watch p95/p99 latency, queue lag, CPU, error rate. Capacity plan from DAU × actions × size.",
    },
    {
      type: "flow",
      text: "peak_write_qps ≈ avg_write_qps * 3\ndaily_storage_gb ≈ (dau * writes_per_user * write_bytes) / 1e9",
    },
    {
      type: "pin",
      text: "Scaling without metrics is guessing. Instrument first, then pick the next stage.",
    },
  ],
};