"use client";

import { useMemo, useState } from "react";
import { RITUAL_PAGE_SIZE } from "@/data/techStack";
import type { TechUpdate } from "@/types";

export function useTechUpdateFeed(updates: TechUpdate[]) {
  const pageSize = RITUAL_PAGE_SIZE;
  const [visible, setVisible] = useState(pageSize);

  const shown = useMemo(
    () => updates.slice(0, visible),
    [updates, visible],
  );

  const remaining = Math.max(0, updates.length - shown.length);

  return {
    shown,
    total: updates.length,
    remaining,
    hasMore: remaining > 0,
    loadMore: () =>
      setVisible((count) => Math.min(updates.length, count + pageSize)),
  };
}
