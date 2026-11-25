"use client";

import type { TechUpdate } from "@/types";
import { StaggerItem } from "@/components/ui/Stagger";
import { TechUpdateCard } from "./TechUpdateCard";
import { techUpdateFeedStyles as s } from "./TechUpdateFeed.styles";
import { useTechUpdateFeed } from "./useTechUpdateFeed";

type TechUpdateFeedProps = {
  updates: TechUpdate[];
};

export function TechUpdateFeed({ updates }: TechUpdateFeedProps) {
  const { shown, remaining, hasMore, loadMore } = useTechUpdateFeed(updates);

  if (updates.length === 0) {
    return (
      <p className={s.empty}>
        no stack updates yet — check back after the next release…
      </p>
    );
  }

  return (
    <div className={s.root}>
      <div className={s.list}>
        {shown.map((update, index) => (
          <StaggerItem key={update.id} index={index} step={55}>
            <TechUpdateCard
              update={update}
              defaultOpen={index === 0}
            />
          </StaggerItem>
        ))}
      </div>

      {hasMore ? (
        <div className={s.moreWrap}>
          <button type="button" className={s.more} onClick={loadMore}>
            load more ({remaining} more)
          </button>
        </div>
      ) : null}
    </div>
  );
}
