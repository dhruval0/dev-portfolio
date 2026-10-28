"use client";

import { useSearch } from "@/components/search/SearchProvider";
import { searchBarStyles as s } from "./SearchBar.styles";

type SearchBarProps = {
  placeholder?: string;
};

export function SearchBar({
  placeholder = "Search the vault, prompts & ritual...",
}: SearchBarProps) {
  const { openSearch } = useSearch();

  return (
    <button type="button" onClick={openSearch} className={s.button}>
      <span className={s.icon} aria-hidden>
        ⌕
      </span>
      <span className={s.label}>{placeholder}</span>
      <span className={s.keys}>
        <kbd className={s.kbd}>⌘</kbd>
        <kbd className={s.kbd}>K</kbd>
      </span>
    </button>
  );
}
