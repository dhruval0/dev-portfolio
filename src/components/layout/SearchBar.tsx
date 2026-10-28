"use client";

import { useSearch } from "@/components/search/SearchProvider";

type SearchBarProps = {
  placeholder?: string;
};

/** Click or ⌘K opens the command-palette search */
export function SearchBar({
  placeholder = "Search the vault, prompts & ritual...",
}: SearchBarProps) {
  const { openSearch } = useSearch();

  return (
    <button
      type="button"
      onClick={openSearch}
      className="relative mx-auto flex w-full max-w-xl items-center rounded-full border border-[var(--border)] bg-[var(--surface)] py-3 pl-10 pr-20 text-left text-sm text-[var(--faint)] transition-colors hover:border-[var(--accent-soft)]"
    >
      <span className="pointer-events-none absolute left-4 text-[var(--muted)]" aria-hidden>
        ⌕
      </span>
      <span className="truncate">{placeholder}</span>
      <span className="pointer-events-none absolute right-3 hidden items-center gap-1 sm:flex">
        <kbd className="rounded border border-[var(--border)] bg-[var(--card)] px-1.5 py-0.5 text-[10px] text-[var(--muted)]">
          ⌘
        </kbd>
        <kbd className="rounded border border-[var(--border)] bg-[var(--card)] px-1.5 py-0.5 text-[10px] text-[var(--muted)]">
          K
        </kbd>
      </span>
    </button>
  );
}
