"use client";

import type { RitualItem } from "@/types";
import { ritualCardStyles as s } from "./RitualCard.styles";
import { useRitualCard } from "./useRitualCard";

type RitualCardProps = {
  entry: RitualItem;
};

export function RitualCard({ entry }: RitualCardProps) {
  const { open, toggle, actionLabel } = useRitualCard();

  return (
    <article className={s.article}>
      <button type="button" onClick={toggle} className={s.toggle}>
        <h3 className={s.title}>{entry.title}</h3>
        <span className={s.meta}>
          <span>{entry.date}</span>
          <span className={s.action}>{actionLabel}</span>
        </span>
      </button>
      {open ? <p className={s.body}>{entry.summary}</p> : null}
    </article>
  );
}
