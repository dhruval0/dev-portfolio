"use client";

import { themeToggleStyles as s } from "./ThemeToggle.styles";
import { useThemeToggle } from "./useThemeToggle";

export function ThemeToggle() {
  const { label, toggle } = useThemeToggle();

  return (
    <button
      type="button"
      onClick={toggle}
      className={s.button}
      aria-label="Toggle light or dark theme"
    >
      {label}
    </button>
  );
}
