import type { PaperDocument } from "@/types";

export const fault_tolerance_1Note: PaperDocument = {
  id: "fault-tolerance-1",
  eyebrow: "from the vault",
  topic: "Reliability",
  title: "Fault Tolerance \u2014 HA vs Fault Tolerance",
  blocks: [
    { type: "heading", text: "HA vs Fault Tolerance" },
    { type: "heading", text: "High Availability                     Fault Tolerance" },
    { type: "flow", text: "Goal                              Minimize downtime                     Continue correctly DESPITE\nfaults" },
    { type: "flow", text: "Approach                          Redundancy + failover                 Replication + consensus +\nidempotency" },
    { type: "flow", text: "Metric                            Uptime % (99.99%)                     Failures tolerated (survives 2\nnode failures)" },
    { type: "paragraph", text: "Tradeoff Brief disruption during failover No disruption, but more complex" },
    { type: "flow", text: "Analogy                           Flat tire → roadside assistance →     Run-flat tires → keep driving →\n45 min stop                           zero stop" },
    { type: "heading", text: "Types of Faults" },
    { type: "paragraph", text: "Fault What happens Difficulty Detection Fix" },
    { type: "flow", text: "Crash       Component stops               Easiest                     Heartbeat timeout       Failover to\ncompletely                                                                        replica" },
    { type: "flow", text: "Omission    Messages lost (packet         Medium                      Timeout on              Retry +\ndrop)                                                     expected response       idempotency" },
    { type: "flow", text: "Timing      Too slow (alive but           Hardest                     Latency monitoring      Timeout +\nuseless)                                                                          circuit\n                                                                                  breaker +\n                                                                                  bulkhead" },
    { type: "flow", text: "Byzantine   Wrong/corrupted data          Extreme                     Cross-validation        3F+1 nodes.\nBlockchain/\naircraft only" },
    { type: "flow", text: "A slow service is WORSE than a dead service. A dead service fails fast (immediate error).\nA slow service holds threads, fills connection pools, and cascades the failure to every\nupstream service." },
    { type: "heading", text: "Strategy 1: Replication" },
    { type: "paragraph", text: "Rule: To tolerate F crash faults, need F+1 copies." },
    { type: "flow", text: "# Kafka: replication factor 3\n# Each partition exists on 3 brokers\n# 2 brokers can die, data still safe" },
    { type: "flow", text: "# PostgreSQL: primary + 2 replicas\n# Primary dies: promote replica (zero data loss with sync replication)" },
    { type: "flow", text: "# Redis Sentinel: primary + 2 replicas + 3 sentinels\n# Primary dies: sentinels vote, promote replica (~10 seconds)" },
  ],
};
