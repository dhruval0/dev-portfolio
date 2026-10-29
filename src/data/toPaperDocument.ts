import type { PaperDocument, PromptItem, RitualItem, VaultItem } from "@/types";

export function vaultToPaper(item: VaultItem): PaperDocument {
  return item.note;
}

export function promptToPaper(prompt: PromptItem): PaperDocument {
  return {
    id: prompt.id,
    eyebrow: "prompt",
    topic: prompt.category,
    title: prompt.title,
    blocks: [
      { type: "heading", text: "1️⃣ Full prompt" },
      { type: "flow", text: prompt.fullPrompt },
      {
        type: "list",
        items: prompt.tags.map((tag) => `#${tag}`),
      },
    ],
  };
}

export function ritualToPaper(entry: RitualItem): PaperDocument {
  return {
    id: entry.id,
    eyebrow: "from the ritual",
    topic: "Weekly note",
    title: entry.title,
    blocks: [
      { type: "paragraph", text: entry.date },
      { type: "divider" },
      { type: "paragraph", text: entry.summary },
    ],
  };
}
