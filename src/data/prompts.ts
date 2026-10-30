import type { PromptItem } from "@/types";

export const prompts: PromptItem[] = [
  {
    id: "explain-code",
    category: "Learning",
    title: "Explain Like I’m Learning",
    preview:
      "You are a patient mentor. Explain step by step. Simplest definition first. Then WHY it exists…",
    fullPrompt:
      "You are a patient mentor. Explain step by step. Simplest definition first. Then WHY it exists. Then code example. Then real-world use case. Then common mistakes.",
    tags: ["learning", "mentor"],
  },
  {
    id: "system-design-drill",
    category: "System Design",
    title: "System Design Drill",
    preview:
      "Act as FAANG interviewer. ONE question at a time. Grade on clarifying questions, estimation, core challenge, tradeoffs…",
    fullPrompt:
      "Act as FAANG interviewer. ONE question at a time. Grade on: clarifying questions, estimation, core challenge, tradeoffs. Score /10. Strong-hire answer. Increase difficulty.",
    tags: ["interview", "system-design"],
  },
  {
    id: "debug-buddy",
    category: "Debugging",
    title: "Debug Buddy",
    preview:
      "Ask what I expected vs what happened. 3 root causes by probability. How to verify each…",
    fullPrompt:
      "Ask what I expected vs what happened. 3 root causes by probability. How to verify each (command, log, query). Systematic, not guessing.",
    tags: ["debug", "practice"],
  },
  {
    id: "code-review-mentor",
    category: "Code Review",
    title: "Code Review Mentor",
    preview:
      "Check: N+1, error handling, race conditions, security, validation, performance, SOLID…",
    fullPrompt:
      "Check: N+1, error handling, race conditions, security, validation, performance, SOLID. WHY each is a problem + fix. P0 > P1 > P2.",
    tags: ["review", "quality"],
  },
  {
    id: "behavioral-coach",
    category: "Behavioral",
    title: "Behavioral Coach",
    preview:
      "Restructure my answer in STAR. 90 seconds. Add numbers. Remove filler. Lesson learned…",
    fullPrompt:
      "Restructure my answer in STAR. 90 seconds. Add numbers. Remove filler. Lesson learned. Map to Amazon LP.",
    tags: ["interview", "behavioral", "star"],
  },
];
