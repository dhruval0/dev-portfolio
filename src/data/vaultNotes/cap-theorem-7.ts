import type { PaperDocument } from "@/types";

export const cap_theorem_7Note: PaperDocument = {
  id: "cap-theorem-7",
  eyebrow: "from the vault",
  topic: "System Design \u00b7 CAP",
  title: "CAP Theorem \u2014 Monitoring",
  blocks: [
    { type: "heading", text: "Monitoring" },
    { type: "flow", text: "For CP Systems:" },
    { type: "flow", text: "• Consensus latency (Raft/Paxos round-trip time)\n• Transaction abort rate (conflicts causing retries)\n• Lock contention (how often locks are waited on)\n• Coordination overhead (% of time spent synchronizing)\n• Unavailability windows (how often system rejects requests)" },
    { type: "flow", text: "For AP Systems:" },
    { type: "flow", text: "• Replication lag (how far behind replicas are)\n• Conflict rate (how often conflicting writes occur)\n• Convergence time (how long until all replicas agree)\n• Stale read percentage (how often reads return old data)\n• Conflict resolution accuracy (are LWW/CRDT resolutions correct?)" },
    { type: "heading", text: "Summary: Decision Matrix" },
    { type: "paragraph", text: "Factor Choose CP Choose AP" },
    { type: "paragraph", text: "Data accuracy Critical (money, inventory) Flexible (feeds, analytics)" },
    { type: "paragraph", text: "Downtime tolerance Some downtime acceptable Zero downtime required" },
    { type: "paragraph", text: "User expectation Correct data always Fast response always" },
    { type: "paragraph", text: "Scale Small to medium Global scale" },
    { type: "paragraph", text: "Write pattern Low to medium writes High write throughput" },
    { type: "paragraph", text: "Conflict resolution Cannot tolerate conflicts Can resolve automatically" },
    { type: "paragraph", text: "Latency budget Can afford coordination delay Needs sub-10ms reads" },
    { type: "paragraph", text: "Regulatory Compliance requires accuracy No regulatory constraints" },
  ],
};
