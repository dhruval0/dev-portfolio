import type { VaultItem } from "@/types";
import { dsaLogicGuideNote } from "@/data/dsaLogicGuide";
import { scalabilityOverviewNote } from "./vaultNotes/scalability-overview";
import { scalabilityStages13Note } from "./vaultNotes/scalability-stages-1-3";
import { scalabilityStages46Note } from "./vaultNotes/scalability-stages-4-6";
import { scalabilityStages710Note } from "./vaultNotes/scalability-stages-7-10";
import { caching_1Note } from "./vaultNotes/caching-1";
import { caching_2Note } from "./vaultNotes/caching-2";
import { caching_3Note } from "./vaultNotes/caching-3";
import { caching_4Note } from "./vaultNotes/caching-4";
import { caching_5Note } from "./vaultNotes/caching-5";
import { cap_theorem_1Note } from "./vaultNotes/cap-theorem-1";
import { cap_theorem_2Note } from "./vaultNotes/cap-theorem-2";
import { cap_theorem_3Note } from "./vaultNotes/cap-theorem-3";
import { cap_theorem_4Note } from "./vaultNotes/cap-theorem-4";
import { cap_theorem_5Note } from "./vaultNotes/cap-theorem-5";
import { cap_theorem_6Note } from "./vaultNotes/cap-theorem-6";
import { cap_theorem_7Note } from "./vaultNotes/cap-theorem-7";
import { databases_sql_joins_1Note } from "./vaultNotes/databases-sql-joins-1";
import { databases_sql_joins_2Note } from "./vaultNotes/databases-sql-joins-2";
import { databases_sql_joins_3Note } from "./vaultNotes/databases-sql-joins-3";
import { databases_sql_joins_4Note } from "./vaultNotes/databases-sql-joins-4";
import { databases_sql_joins_5Note } from "./vaultNotes/databases-sql-joins-5";
import { databases_sql_joins_6Note } from "./vaultNotes/databases-sql-joins-6";
import { databases_sql_joins_7Note } from "./vaultNotes/databases-sql-joins-7";
import { fault_tolerance_1Note } from "./vaultNotes/fault-tolerance-1";
import { fault_tolerance_2Note } from "./vaultNotes/fault-tolerance-2";
import { fault_tolerance_3Note } from "./vaultNotes/fault-tolerance-3";
import { design_patternsNote } from "./vaultNotes/design-patterns";
import { percentiles_kafka_latencyNote } from "./vaultNotes/percentiles-kafka-latency";
import { behavioral_starNote } from "./vaultNotes/behavioral-star";

/** Vault cards — long topics split into shorter subtopic notes. */
export const vaultItems: VaultItem[] = [
  {
    id: "dsa-logic-building-guide",
    title: "DSA Logic Building Guide",
    description:
      "Nine phases for thinking through any DSA problem — patterns, practice system, and interview mode.",
    category: "reads",
    openedCount: 0,
    note: dsaLogicGuideNote,
  },
  {
    id: "scalability-overview",
    title: "Scalability — Overview & Scale Up vs Out",
    description: "Vertical vs horizontal scaling — when to grow the box vs add more boxes.",
    category: "notes",
    openedCount: 0,
    note: scalabilityOverviewNote,
  },
  {
    id: "scalability-stages-1-3",
    title: "Scalability — Stages 1–3",
    description: "Single server → separate DB → load balancer + stateless apps. Multi-language code cells.",
    category: "notes",
    openedCount: 0,
    note: scalabilityStages13Note,
  },
  {
    id: "scalability-stages-4-6",
    title: "Scalability — Stages 4–6",
    description: "Read replicas, cache-aside, and CDN — cut DB load and global latency.",
    category: "notes",
    openedCount: 0,
    note: scalabilityStages46Note,
  },
  {
    id: "scalability-stages-7-10",
    title: "Scalability — Stages 7–10",
    description: "Queues, sharding, independent services, and capacity planning.",
    category: "notes",
    openedCount: 0,
    note: scalabilityStages710Note,
  },
  {
    id: "caching-1",
    title: "Caching — Overview & Cache-Aside",
    description: "Why cache exists, hit-rate math, and the cache-aside pattern.",
    category: "notes",
    openedCount: 0,
    note: caching_1Note,
  },
  {
    id: "caching-2",
    title: "Caching — Write-Through & Write-Behind",
    description: "Keep cache and DB in sync — write patterns and tradeoffs.",
    category: "notes",
    openedCount: 0,
    note: caching_2Note,
  },
  {
    id: "caching-3",
    title: "Caching — Read-Through & Tradeoffs",
    description: "When the cache owns loading, and the costs that come with it.",
    category: "notes",
    openedCount: 0,
    note: caching_3Note,
  },
  {
    id: "caching-4",
    title: "Caching — Strategy Comparison",
    description: "Side-by-side view of the four caching strategies.",
    category: "notes",
    openedCount: 0,
    note: caching_4Note,
  },
  {
    id: "caching-5",
    title: "Caching — Eviction & Monitoring",
    description: "LRU and friends, plus what to watch in production.",
    category: "notes",
    openedCount: 0,
    note: caching_5Note,
  },
  {
    id: "cap-theorem-1",
    title: "CAP Theorem — Overview",
    description: "Consistency, availability, partition tolerance — the core definitions.",
    category: "notes",
    openedCount: 0,
    note: cap_theorem_1Note,
  },
  {
    id: "cap-theorem-2",
    title: "CAP Theorem — Decision Framework",
    description: "When to choose CP vs AP — practical decision rules.",
    category: "notes",
    openedCount: 0,
    note: cap_theorem_2Note,
  },
  {
    id: "cap-theorem-3",
    title: "CAP Theorem — Scenarios",
    description: "Real scenarios and which side of CAP they land on.",
    category: "notes",
    openedCount: 0,
    note: cap_theorem_3Note,
  },
  {
    id: "cap-theorem-4",
    title: "CAP Theorem — Search & Stale Reads",
    description: "Search indexes and brief staleness in the real world.",
    category: "notes",
    openedCount: 0,
    note: cap_theorem_4Note,
  },
  {
    id: "cap-theorem-5",
    title: "CAP Theorem — AP Systems",
    description: "Availability-first systems and what you give up.",
    category: "notes",
    openedCount: 0,
    note: cap_theorem_5Note,
  },
  {
    id: "cap-theorem-6",
    title: "CAP Theorem — Implementation Patterns",
    description: "Patterns you actually code when living with CAP.",
    category: "tools",
    openedCount: 0,
    note: cap_theorem_6Note,
  },
  {
    id: "cap-theorem-7",
    title: "CAP Theorem — Monitoring",
    description: "Signals that tell you which tradeoff is biting you.",
    category: "notes",
    openedCount: 0,
    note: cap_theorem_7Note,
  },
  {
    id: "databases-sql-joins-1",
    title: "Databases — Overview",
    description: "What the database is for — and how joins fit the picture.",
    category: "notes",
    openedCount: 0,
    note: databases_sql_joins_1Note,
  },
  {
    id: "databases-sql-joins-2",
    title: "Databases — Key-Value (Redis)",
    description: "When a key-value store beats a relational table.",
    category: "notes",
    openedCount: 0,
    note: databases_sql_joins_2Note,
  },
  {
    id: "databases-sql-joins-3",
    title: "Databases — Isolation Levels",
    description: "ACID isolation — what each level actually guarantees.",
    category: "notes",
    openedCount: 0,
    note: databases_sql_joins_3Note,
  },
  {
    id: "databases-sql-joins-4",
    title: "Databases — SQL Joins (Core Types)",
    description: "Inner, left, and the join shapes you use most.",
    category: "notes",
    openedCount: 0,
    note: databases_sql_joins_4Note,
  },
  {
    id: "databases-sql-joins-5",
    title: "Databases — Right, Full, Self, Cross",
    description: "The rest of the join family with when to reach for each.",
    category: "notes",
    openedCount: 0,
    note: databases_sql_joins_5Note,
  },
  {
    id: "databases-sql-joins-6",
    title: "Databases — N+1 Problem",
    description: "Why N+1 happens and how to kill it.",
    category: "notes",
    openedCount: 0,
    note: databases_sql_joins_6Note,
  },
  {
    id: "databases-sql-joins-7",
    title: "Databases — CQRS",
    description: "Split read and write models when one shape isn't enough.",
    category: "notes",
    openedCount: 0,
    note: databases_sql_joins_7Note,
  },
  {
    id: "fault-tolerance-1",
    title: "Fault Tolerance — HA vs FT",
    description: "High availability vs fault tolerance — related, not the same.",
    category: "notes",
    openedCount: 0,
    note: fault_tolerance_1Note,
  },
  {
    id: "fault-tolerance-2",
    title: "Fault Tolerance — WAL & Recovery",
    description: "Write-ahead logs and coming back after a crash.",
    category: "notes",
    openedCount: 0,
    note: fault_tolerance_2Note,
  },
  {
    id: "fault-tolerance-3",
    title: "Fault Tolerance — Redundancy",
    description: "What to duplicate and how failover actually works.",
    category: "notes",
    openedCount: 0,
    note: fault_tolerance_3Note,
  },
  {
    id: "design-patterns",
    title: "Design Patterns — Interview Quick Reference",
    description: "If you need to… use this pattern — with a Python-shaped hint.",
    category: "tools",
    openedCount: 0,
    note: design_patternsNote,
  },
  {
    id: "percentiles-kafka-latency",
    title: "Percentiles, Kafka Lag, Latency vs Throughput",
    description: "P50–P99, consumer lag causes, and the latency/throughput curve.",
    category: "tools",
    openedCount: 0,
    note: percentiles_kafka_latencyNote,
  },
  {
    id: "behavioral-star",
    title: "Behavioral Interview — STAR Quick Reference",
    description: "90-second STAR rules and story bank prompts.",
    category: "experience",
    openedCount: 0,
    note: behavioral_starNote,
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
