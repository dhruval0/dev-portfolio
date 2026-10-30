import type { PaperDocument } from "@/types";

export const cap_theorem_3Note: PaperDocument = {
  id: "cap-theorem-3",
  eyebrow: "from the vault",
  topic: "System Design \u00b7 CAP",
  title: "CAP Theorem \u2014 Scenario                           Reason",
  blocks: [
    { type: "heading", text: "Scenario                           Reason" },
    { type: "paragraph", text: "Social media feeds Users tolerate slightly outdated posts" },
    { type: "paragraph", text: "Content delivery Stale content acceptable for short periods" },
    { type: "heading", text: "Caching layers                     Performance over perfect accuracy" },
    { type: "heading", text: "Product catalogs                   Small delays in updates acceptable" },
    { type: "paragraph", text: "Analytics dashboards Approximate real-time data sufficient" },
    { type: "heading", text: "User profiles                      Non-critical user information" },
  ],
};
