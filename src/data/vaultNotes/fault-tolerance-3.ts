import type { PaperDocument } from "@/types";

export const fault_tolerance_3Note: PaperDocument = {
  id: "fault-tolerance-3",
  eyebrow: "from the vault",
  topic: "Reliability",
  title: "Fault Tolerance \u2014 Redundancy Decision Framework",
  blocks: [
    { type: "heading", text: "Redundancy Decision Framework" },
    { type: "paragraph", text: "Component Minimum (prod) Recommended Critical systems" },
    { type: "paragraph", text: "App servers 2 active-active N+1 with auto-scaling N+2 across multi-AZ" },
    { type: "flow", text: "Database               Primary + 1 replica    Primary + 2 (1 sync, 1     Multi-region sync replica\nasync)" },
    { type: "flow", text: "Cache                  Primary + replica +    Redis Cluster (3+          L1 local + L2 cluster + DB\nSentinel               shards)                    fallback" },
    { type: "flow", text: "Load balancer          2 active-passive       Active-active with DNS     Global LB (AWS Global\nfailover                   Accelerator)" },
    { type: "flow", text: "Kafka                  3 brokers, RF=3        5 brokers,                 Multi-region with MirrorMaker\nmin.insync=2" },
    { type: "flow", text: "Backups                Daily backup to S3     WAL archiving + daily      3-2-1 rule: 3 copies, 2 media,\nbackup                     1 offsite" },
    { type: "paragraph", text: "Cost question: “How much does 1 hour of downtime cost?” Blog: Rs 0 (single server fine). E-commerce: Rs 50 lakhs (multi-AZ minimum). Payments: Rs 10 lakhs/minute (multi-region required)." },
  ],
};
