import type { PaperDocument } from "@/types";

export const behavioral_starNote: PaperDocument = {
  id: "behavioral-star",
  eyebrow: "from the vault",
  topic: "Interview",
  title: "Behavioral Interview — STAR Quick Reference",
  blocks: [
    {
      type: "callout",
      text: "Rules: Under 90 seconds. Numbers always. “I” not “we”. End with a lesson.",
    },
    {
      type: "table",
      headers: ["#", "Story", "For these questions"],
      rows: [
        [
          "1",
          "ksqlDB vs Python script (400 to 15 lines)",
          "Disagreed, simplified",
        ],
        [
          "2",
          "Lambda to EC2 (99.7% improvement)",
          "Decision without data",
        ],
        ["3", "Python team 0 to 10 engineers", "Mentorship, hiring"],
        [
          "4",
          "94% latency fix (4.5s to 278ms)",
          "Complex project, stakeholder",
        ],
        [
          "5",
          "Redis connection pool incident",
          "Failure, production incident",
        ],
        ["6", "Payment reconciliation $200", "Debugging, incident"],
        [
          "7",
          "Pushed back on product (no PRD)",
          "Said NO, tight deadline",
        ],
      ],
    },
    {
      type: "pin",
      text: "STAR = Situation → Task → Action → Result. Keep it timed, numbered, and mapped to leadership principles.",
    },
  ],
};
