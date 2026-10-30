import type { PaperDocument } from "@/types";

export const percentiles_kafka_latencyNote: PaperDocument = {
  id: "percentiles-kafka-latency",
  eyebrow: "from the vault",
  topic: "Observability",
  title: "Percentiles, Kafka Lag, Latency vs Throughput",
  blocks: [
    { type: "heading", text: "Percentiles" },
    {
      type: "callout",
      text: "Why averages lie: Average 195ms can hide 50 users waiting 2 seconds. Percentiles reveal what averages hide.",
    },
    {
      type: "table",
      headers: ["Percentile", "Meaning", "Use for", "SLO target"],
      rows: [
        ["p50", "Median. Typical user.", "Baseline", "Internal metric"],
        ["p75", "1 in 4 slower", "Early warning", "Internal"],
        ["p90", "1 in 10 slower", "Non-critical SLO", "p90 < 300ms"],
        ["p95", "1 in 20 slower", "Common SLO", "p95 < 500ms"],
        ["p99", "1 in 100 (the tail)", "FAANG SLO", "p99 < 1s"],
        ["p99.9", "1 in 1000", "Payments / trading", "p99.9 < 2s"],
      ],
    },
    {
      type: "paragraph",
      text: "At scale: p99 of 2s at 10K req/sec = 100 users EVERY SECOND frustrated. 360K/hour. 8.6M/day. “Only 1%” is millions.",
    },
    {
      type: "paragraph",
      text: "Compound effect: Request hits 5 services. Each p99 = 200ms. Probability ALL 5 are fast: 0.99^5 = 95.1%. So 4.9% of user requests have at least one slow service.",
    },
    {
      type: "pin",
      text: "p99/p50 ratio: If > 5x, you have a systematic slow path (cache miss, GC pause, one slow downstream).",
    },

    { type: "heading", text: "Kafka Lag" },
    {
      type: "paragraph",
      text: "Definition: Messages written but not yet consumed. LEO (Log End Offset) − Consumer Offset.",
    },
    {
      type: "flow",
      text: "kafka-consumer-groups.sh --describe --group my-group",
    },
    {
      type: "table",
      headers: ["Cause", "Fix"],
      rows: [
        [
          "Consumer too slow",
          "Batch DB queries (IN clause), async calls",
        ],
        ["Not enough consumers", "Scale up to partition count"],
        ["Hot partition", "Change partition key"],
        [
          "Rebalance storms",
          "Static group membership, cooperative assignor",
        ],
        [
          "Slow downstream",
          "Circuit breaker, decouple via separate topic",
        ],
      ],
    },

    { type: "heading", text: "Latency vs Throughput" },
    {
      type: "paragraph",
      text: "Latency: How long ONE request takes (ms). Throughput: How many per second (RPS).",
    },
    {
      type: "paragraph",
      text: "Adding servers increases throughput but doesn’t reduce individual request latency. Under load, when throughput hits capacity, latency EXPLODES (hockey stick curve).",
    },
    {
      type: "pin",
      text: "Cache improves BOTH: lower latency (skip DB) + higher throughput (DB freed).",
    },
  ],
};
