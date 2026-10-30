"use client";

import type { TechUpdate } from "@/types";
import { cn } from "@/lib/cn";
import { techUpdateCardStyles as s } from "./TechUpdateCard.styles";
import { useTechUpdateCard } from "./useTechUpdateCard";

type TechUpdateCardProps = {
  update: TechUpdate;
  defaultOpen?: boolean;
};

function formatDate(iso: string) {
  try {
    return new Intl.DateTimeFormat("en", {
      month: "short",
      day: "numeric",
      year: "numeric",
    }).format(new Date(iso));
  } catch {
    return iso;
  }
}

export function TechUpdateCard({
  update,
  defaultOpen = false,
}: TechUpdateCardProps) {
  const { open, toggle, foldLabel } = useTechUpdateCard(defaultOpen);

  return (
    <article className={s.article}>
      <button
        type="button"
        onClick={toggle}
        className={cn(s.header, open && s.headerOpen)}
        aria-expanded={open}
      >
        <div className={s.titleRow}>
          <div className={s.badges}>
            <span className={s.stack}>{update.stack}</span>
            <span className={s.version}>{update.version}</span>
            {update.isPrerelease ? <span className={s.pre}>pre-release</span> : null}
          </div>
          <h3 className={s.title}>{update.title}</h3>
        </div>
        <span className={s.meta}>
          <span>{formatDate(update.publishedAt)}</span>
          <span className={s.fold}>{foldLabel}</span>
        </span>
      </button>

      {open ? (
        <div className={s.body}>
          <p className={s.summary}>{update.summary}</p>
          <div className={s.detail}>{update.detail}</div>
          <a
            href={update.href}
            target="_blank"
            rel="noopener noreferrer"
            className={s.link}
          >
            Read full notes on GitHub →
          </a>
        </div>
      ) : null}
    </article>
  );
}
