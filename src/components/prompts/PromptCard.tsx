"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import type { PromptItem } from "@/types";

type PromptCardProps = {
  prompt: PromptItem;
};

export function PromptCard({ prompt }: PromptCardProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(prompt.fullPrompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <article className="relative flex flex-col rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
      {copied ? (
        <span className="absolute right-4 top-4 rotate-6 rounded border border-[var(--accent)] px-2 py-1 font-[family-name:var(--font-script)] text-sm text-[var(--accent)]">
          copied!
        </span>
      ) : null}

      <div className="flex items-center justify-between gap-2">
        <p className="text-[10px] font-semibold uppercase tracking-wider text-[var(--muted)]">
          {prompt.category}
        </p>
        <span className="font-[family-name:var(--font-script)] text-sm text-[var(--accent)]">
          copied {prompt.copyCount}x
        </span>
      </div>

      <h3 className="mt-2 font-[family-name:var(--font-display)] text-xl">
        {prompt.title}
      </h3>

      <div className="mt-4 rounded-md border border-dashed border-[var(--border)] bg-[var(--surface)] p-3 font-mono text-xs leading-relaxed text-[var(--muted)]">
        {prompt.preview}
      </div>

      <div className="mt-4 flex flex-wrap gap-2">
        <Button type="button" onClick={handleCopy}>
          Copy prompt
        </Button>
      </div>
    </article>
  );
}
