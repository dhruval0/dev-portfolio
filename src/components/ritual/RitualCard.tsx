"use client";

import { useNoteModal } from "@/components/note/useNoteModal";
import { ritualToPaper } from "@/data/toPaperDocument";
import type { RitualItem } from "@/types";
import { ritualCardStyles as s } from "./RitualCard.styles";
import { useRitualCard } from "./useRitualCard";

type RitualCardProps = {
  entry: RitualItem;
};

export function RitualCard({ entry }: RitualCardProps) {
  const { open, toggle, actionLabel } = useRitualCard();
  const { openDocument } = useNoteModal();

  function handleToggle() {
    // Short notes still unfold inline; longer open as paper too via double path
    toggle();
  }

  return (
    <article className={s.article}>
      <button type="button" onClick={handleToggle} className={s.toggle}>
        <h3 className={s.title}>{entry.title}</h3>
        <span className={s.meta}>
          <span>{entry.date}</span>
          <span className={s.action}>{actionLabel}</span>
        </span>
      </button>
      {open ? (
        <div className={s.body}>
          <p>{entry.summary}</p>
          <button
            type="button"
            className={s.action}
            onClick={() => openDocument(ritualToPaper(entry))}
          >
            open on paper →
          </button>
        </div>
      ) : null}
    </article>
  );
}
