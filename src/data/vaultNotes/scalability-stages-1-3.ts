import type { PaperDocument } from "@/types";
import {
  dbConnectSnippets,
  loadBalancerSnippets,
  redisSessionSnippets,
} from "@/data/codeSamples";

export const scalabilityStages13Note: PaperDocument = {
  id: "scalability-stages-1-3",
  eyebrow: "from the vault",
  topic: "System Design · Scalability",
  title: "Scalability — Stages 1–3",
  blocks: [
    { type: "heading", text: "Stage 1: Single Server" },
    {
      type: "paragraph",
      text: "Everything on one machine — web server, application, database.",
    },
    { type: "flow", text: "[Users] --> [Single Server: App + DB + Files]" },
    {
      type: "paragraph",
      text: "Bottleneck: CPU/memory shared between app processing and database queries. Under load, one starves the other.",
    },
    {
      type: "pin",
      text: "When to move past: CPU consistently above 70%, or response times degrading during peak hours.",
    },

    { type: "divider" },
    { type: "heading", text: "Stage 2: Separate Database Server" },
    {
      type: "paragraph",
      text: "Split the application and database onto different machines. App gets CPU for requests; DB gets memory for caches and indexes.",
    },
    { type: "flow", text: "[Users] --> [App Server] --> [DB Server]" },
    { type: "codeCell", snippets: dbConnectSnippets },
    {
      type: "paragraph",
      text: "Bottleneck: Single app server can’t handle peak traffic. CPU maxes out.",
    },

    { type: "divider" },
    { type: "heading", text: "Stage 3: Load Balancer + Multiple App Servers" },
    {
      type: "paragraph",
      text: "Add a load balancer and multiple application servers. Apps must be stateless — sessions in Redis, files in S3.",
    },
    {
      type: "flow",
      text: "       [Load Balancer]\n     /     |    \\\n[App 1] [App 2] [App 3]\n     \\     |    /\n       [DB Server]",
    },
    { type: "heading", text: "Stateless sessions" },
    { type: "codeCell", snippets: redisSessionSnippets },
    { type: "heading", text: "Load balancer algorithms" },
    { type: "codeCell", snippets: loadBalancerSnippets },
    {
      type: "pin",
      text: "Bottleneck: All app servers hit the same database. Read queries overwhelm it → Stage 4.",
    },
  ],
};
