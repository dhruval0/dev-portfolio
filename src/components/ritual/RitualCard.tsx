"use client";

import { useState } from "react";
import type { RitualItem } from "@/types";

type RitualCardProps = {
  entry: RitualItem;
};

export function RitualCard({ entry }: RitualCardProps) {
  const [open, setOpen] = useState(false);

  return (
    <article className="rounded-lg border border-[var(--border)] border-l-[3px] border-l-[var(--link)] bg-[var(--card)]">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full flex-col gap-2 px-4 py-4 text-left sm:flex-row sm:items-center sm:justify-between sm:gap-6"
      >
        <h3 className="font-medium leading-snug">{entry.title}</h3>
        <span className="flex shrink-0 items-center gap-3 text-sm text-[var(--muted)]">
          <span>{entry.date}</span>
          <span className="font-[family-name:var(--font-script)] text-[var(--accent)]">
            {open ? "fold" : "unfold"}
          </span>
        </span>
      </button>
      {open ? (
        <p className="border-t border-[var(--border)] px-4 py-4 text-sm leading-relaxed text-[var(--muted)]">
          {entry.summary}
        </p>
      ) : null}
    </article>
  );
}
