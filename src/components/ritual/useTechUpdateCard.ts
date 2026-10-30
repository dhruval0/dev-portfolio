"use client";

import { useState } from "react";

export function useTechUpdateCard(defaultOpen = false) {
  const [open, setOpen] = useState(defaultOpen);

  return {
    open,
    toggle: () => setOpen((value) => !value),
    foldLabel: open ? "fold" : "unfold",
  };
}
