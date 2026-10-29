"use client";

import { useNoteModal } from "@/components/note/useNoteModal";
import { Button } from "@/components/ui/Button";
import { promptToPaper } from "@/data/toPaperDocument";
import type { PromptItem } from "@/types";
import { promptCardStyles as s } from "./PromptCard.styles";
import { usePromptCard } from "./usePromptCard";

type PromptCardProps = {
  prompt: PromptItem;
};

export function PromptCard({ prompt }: PromptCardProps) {
  const { copied, handleCopy } = usePromptCard(prompt.fullPrompt);
  const { openDocument } = useNoteModal();

  return (
    <article className={s.article}>
      <div className={s.header}>
        <p className={s.category}>{prompt.category}</p>
        {copied ? <span className={s.stamp}>copied!</span> : null}
      </div>

      <h3 className={s.title}>{prompt.title}</h3>
      <div className={s.preview}>{prompt.preview}</div>

      <div className={s.actions}>
        <Button type="button" onClick={handleCopy}>
          Copy prompt
        </Button>
        <Button
          type="button"
          variant="ghost"
          onClick={() => openDocument(promptToPaper(prompt))}
        >
          read full prompt →
        </Button>
      </div>
    </article>
  );
}
