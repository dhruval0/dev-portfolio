"use client";

import { useMemo, useState } from "react";
import { vaultItems } from "@/data/vault";

export function useVaultPage() {
  const [filter, setFilter] = useState("everything");

  const filtered = useMemo(
    () =>
      vaultItems.filter(
        (item) => filter === "everything" || item.category === filter,
      ),
    [filter],
  );

  return { filter, setFilter, filtered };
}
