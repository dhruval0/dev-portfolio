import type { PromptItem } from "@/types";

export const prompts: PromptItem[] = [
  {
    id: "explain-code",
    category: "Learning",
    title: "Explain Like I'm Learning",
    preview:
      "You are a patient mentor. Explain this code step by step for someone learning TypeScript and React...",
    fullPrompt:
      "You are a patient mentor. Explain this code step by step for someone learning TypeScript and React. Use short sentences, name each concept once, and end with a tiny practice task.\n\nCode:\n[PASTE CODE]",
    tags: ["learning", "typescript", "react"],
    copyCount: 4,
  },
  {
    id: "system-design-drill",
    category: "System Design",
    title: "System Design Drill",
    preview:
      "Act as an interviewer. Ask me one system design question at a time and wait for my answer...",
    fullPrompt:
      "Act as an interviewer. Ask me one system design question at a time and wait for my answer. Then give feedback: what was solid, what to improve, and one follow-up question. Keep it beginner-friendly.",
    tags: ["interview", "system-design"],
    copyCount: 2,
  },
  {
    id: "debug-buddy",
    category: "Debugging",
    title: "Debug Buddy",
    preview:
      "Help me debug. Ask what I expected vs what happened, then suggest 3 likely causes...",
    fullPrompt:
      "Help me debug. Ask what I expected vs what happened, then suggest 3 likely causes ranked by probability. Do not dump a full rewrite — guide me to find the bug.\n\nContext:\n[DESCRIBE BUG]",
    tags: ["debug", "practice"],
    copyCount: 7,
  },
];
