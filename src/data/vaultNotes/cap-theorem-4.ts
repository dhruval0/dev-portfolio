import type { PaperDocument } from "@/types";

export const cap_theorem_4Note: PaperDocument = {
  id: "cap-theorem-4",
  eyebrow: "from the vault",
  topic: "System Design \u00b7 CAP",
  title: "CAP Theorem \u2014 Search indexes                     Brief staleness ac\u2026",
  blocks: [
    { type: "heading", text: "Search indexes                     Brief staleness acceptable" },
    { type: "paragraph", text: "Metrics and logging Approximate counts are fine" },
    { type: "paragraph", text: "Key indicators for AP: System must handle high traffic. Downtime is more costly than inconsistency. Conflicts can be resolved automatically." },
    { type: "heading", text: "Real-World Examples" },
    { type: "heading", text: "CP Systems" },
    { type: "heading", text: "System                                               Why CP" },
    { type: "flow", text: "Google Spanner                                       Globally distributed database with strong\n                                                     consistency for financial applications" },
    { type: "flow", text: "Apache ZooKeeper                                     Configuration management and coordination\n                                                     requiring strong consistency" },
    { type: "flow", text: "etcd                                                 Distributed key-value store for critical configuration\n                                                     data (Kubernetes uses this)" },
    { type: "paragraph", text: "MongoDB (default) Configurable, but defaults to consistency" },
    { type: "paragraph", text: "PostgreSQL (sync repl) Traditional RDBMS with synchronous replication" },
  ],
};
