"use client";

import { useEffect, useState } from "react";

export function useThemeToggle() {
  const [light, setLight] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("light", light);
  }, [light]);

  return {
    light,
    label: light ? "dark" : "☀ light",
    toggle: () => setLight((v) => !v),
  };
}
