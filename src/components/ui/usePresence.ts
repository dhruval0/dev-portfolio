"use client";

import { useEffect, useState } from "react";

/**
 * Keep a modal mounted through its exit animation.
 * `visible` tracks `open` synchronously so the *enter* class is present
 * on the first painted frame (no one-frame "leaving" flash).
 */
export function usePresence(open: boolean, exitMs = 280) {
  const [keepMounted, setKeepMounted] = useState(open);

  useEffect(() => {
    if (open) {
      setKeepMounted(true);
      return;
    }

    const id = window.setTimeout(() => setKeepMounted(false), exitMs);
    return () => window.clearTimeout(id);
  }, [open, exitMs]);

  return {
    mounted: open || keepMounted,
    visible: open,
  };
}
