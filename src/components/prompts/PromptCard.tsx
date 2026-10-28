"use client";

import { Button } from "@/components/ui/Button";
import type { PromptItem } from "@/types";
import { promptCardStyles as s } from "./PromptCard.styles";
import { usePromptCard } from "./usePromptCard";

type PromptCardProps = {
  prompt: PromptItem;
};

export function PromptCard({ prompt }: PromptCardProps) {
  const { copied, handleCopy } = usePromptCard(prompt.fullPrompt);

  return (
    <article className={s.article}>
      {copied ? <span className={s.stamp}>copied!</span> : null}

      <div className={s.header}>
        <p className={s.category}>{prompt.category}</p>
        <span className={s.copies}>copied {prompt.copyCount}x</span>
      </div>

      <h3 className={s.title}>{prompt.title}</h3>
      <div className={s.preview}>{prompt.preview}</div>

      <div className={s.actions}>
        <Button type="button" onClick={handleCopy}>
          Copy prompt
        </Button>
      </div>
    </article>
  );
}
