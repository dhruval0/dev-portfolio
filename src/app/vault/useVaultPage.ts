"use client";

import { useEffect, useMemo, useState } from "react";
import { vaultItems } from "@/data/vault";

const VAULT_PAGE_SIZE = 6;

export function useVaultPage() {
  const [filter, setFilter] = useState("everything");
  const [visible, setVisible] = useState(VAULT_PAGE_SIZE);

  const filtered = useMemo(
    () =>
      vaultItems.filter(
        (item) => filter === "everything" || item.category === filter,
      ),
    [filter],
  );

  useEffect(() => {
    setVisible(VAULT_PAGE_SIZE);
  }, [filter]);

  const shown = filtered.slice(0, visible);
  const remaining = Math.max(0, filtered.length - shown.length);

  return {
    filter,
    setFilter,
    shown,
    remaining,
    hasMore: remaining > 0,
    loadMore: () =>
      setVisible((count) => Math.min(filtered.length, count + VAULT_PAGE_SIZE)),
  };
}
