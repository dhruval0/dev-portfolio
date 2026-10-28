"use client";

import { useState } from "react";

export function useRitualCard() {
  const [open, setOpen] = useState(false);

  return {
    open,
    toggle: () => setOpen((v) => !v),
    actionLabel: open ? "fold" : "unfold",
  };
}
