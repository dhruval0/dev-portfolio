"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useSearch } from "@/components/search/SearchProvider";
import {
  filterSearchIndex,
  groupHits,
  type SearchHit,
} from "@/data/searchIndex";

function Kbd({ children }: { children: React.ReactNode }) {
  return (
    <kbd className="inline-flex min-w-[1.25rem] items-center justify-center rounded border border-[var(--border)] bg-[var(--elevated)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--muted)]">
      {children}
    </kbd>
  );
}

export function CommandSearch() {
  const { open, closeSearch } = useSearch();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const hits = useMemo(() => filterSearchIndex(query), [query]);
  const sections = useMemo(() => groupHits(hits), [hits]);
  const flatHits = useMemo(
    () => sections.flatMap((s) => s.items),
    [sections],
  );

  useEffect(() => {
    if (!open) {
      setQuery("");
      setActiveIndex(0);
      return;
    }
    const id = window.setTimeout(() => inputRef.current?.focus(), 10);
    return () => window.clearTimeout(id);
  }, [open]);

  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  useEffect(() => {
    if (!open) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeSearch();
        return;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();
        setActiveIndex((i) =>
          flatHits.length === 0 ? 0 : (i + 1) % flatHits.length,
        );
        return;
      }

      if (event.key === "ArrowUp") {
        event.preventDefault();
        setActiveIndex((i) =>
          flatHits.length === 0
            ? 0
            : (i - 1 + flatHits.length) % flatHits.length,
        );
        return;
      }

      if (event.key === "Enter" && flatHits[activeIndex]) {
        event.preventDefault();
        openHit(flatHits[activeIndex]);
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, flatHits, activeIndex, closeSearch]);

  function openHit(hit: SearchHit) {
    closeSearch();
    if (hit.href.startsWith("http")) {
      window.open(hit.href, "_blank", "noopener,noreferrer");
      return;
    }
    router.push(hit.href);
  }

  if (!open) return null;

  let runningIndex = -1;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center bg-black/55 px-4 pt-[12vh] backdrop-blur-sm sm:pt-[15vh]"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closeSearch();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        className="flex w-full max-w-xl flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--surface)] shadow-2xl"
      >
        {/* Input */}
        <div className="flex items-center gap-3 border-b border-[var(--border)] px-4 py-3">
          <span className="text-[var(--muted)]" aria-hidden>
            ⌕
          </span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search vault, prompts, ritual..."
            className="min-w-0 flex-1 bg-transparent text-sm text-[var(--foreground)] outline-none placeholder:text-[var(--faint)]"
          />
          <button
            type="button"
            onClick={closeSearch}
            className="rounded border border-[var(--border)] px-1.5 py-0.5 font-mono text-[10px] text-[var(--muted)] hover:text-[var(--foreground)]"
          >
            esc
          </button>
        </div>

        {/* Results */}
        <div className="max-h-[min(50vh,360px)] min-h-[160px] overflow-y-auto px-2 py-2">
          {!query.trim() ? (
            <p className="flex h-36 items-center justify-center px-4 text-center text-sm text-[var(--faint)]">
              type to search across the vault, prompts and ritual.
            </p>
          ) : flatHits.length === 0 ? (
            <p className="flex h-36 items-center justify-center px-4 text-center text-sm text-[var(--faint)]">
              nothing matched “{query.trim()}”
            </p>
          ) : (
            sections.map((section) => (
              <div key={section.group} className="mb-2">
                <p className="px-2 py-1.5 font-[family-name:var(--font-script)] text-sm text-[var(--accent-soft)]">
                  {section.group}
                </p>
                <ul>
                  {section.items.map((hit) => {
                    runningIndex += 1;
                    const index = runningIndex;
                    const active = index === activeIndex;

                    return (
                      <li key={hit.id}>
                        <button
                          type="button"
                          onMouseEnter={() => setActiveIndex(index)}
                          onClick={() => openHit(hit)}
                          className={`flex w-full items-start gap-3 rounded-lg px-3 py-2.5 text-left transition-colors ${
                            active
                              ? "bg-[var(--elevated)]"
                              : "hover:bg-[var(--card)]"
                          }`}
                        >
                          <div className="min-w-0 flex-1">
                            <div className="flex items-center justify-between gap-2">
                              <span className="truncate font-medium text-[var(--foreground)]">
                                {hit.title}
                              </span>
                              <span className="shrink-0 rounded border border-[var(--border)] px-1.5 py-0.5 text-[10px] uppercase tracking-wide text-[var(--muted)]">
                                {hit.tag}
                              </span>
                            </div>
                            <p className="mt-0.5 line-clamp-1 text-xs text-[var(--muted)]">
                              {hit.snippet}
                            </p>
                          </div>
                        </button>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[var(--border)] px-4 py-2.5 text-xs text-[var(--muted)]">
          <span className="inline-flex items-center gap-1.5">
            <Kbd>↑</Kbd>
            <Kbd>↓</Kbd>
            navigate
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Kbd>↵</Kbd>
            open
          </span>
          <span className="inline-flex items-center gap-1.5">
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
            toggle
          </span>
        </div>
      </div>
    </div>
  );
}
