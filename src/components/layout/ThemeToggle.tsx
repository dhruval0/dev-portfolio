"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  return (
    <button
      type="button"
      onClick={() => setLight((v) => !v)}
      className="fixed right-4 top-4 z-20 rounded-full border border-[var(--border)] bg-[var(--surface)] px-3 py-1.5 text-xs text-[var(--muted)] transition-colors hover:text-[var(--foreground)] sm:right-6 sm:top-6"
      aria-label="Toggle light or dark theme"
    >
      {light ? "dark" : "☀ light"}
    </button>
  );
}
