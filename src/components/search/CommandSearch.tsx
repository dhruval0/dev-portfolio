"use client";

import { cn } from "@/lib/cn";
import { commandSearchStyles as s } from "./CommandSearch.styles";
import { useCommandSearch } from "./useCommandSearch";

function Kbd({ children }: { children: React.ReactNode }) {
  return <kbd className={s.kbd}>{children}</kbd>;
}

export function CommandSearch() {
  const {
    open,
    closeSearch,
    inputRef,
    query,
    setQuery,
    activeIndex,
    setActiveIndex,
    sections,
    flatHits,
    openHit,
  } = useCommandSearch();

  if (!open) return null;

  let runningIndex = -1;

  return (
    <div
      className={s.overlay}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closeSearch();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label="Search"
        className={s.dialog}
      >
        <div className={s.inputRow}>
          <span className={s.searchIcon} aria-hidden>
            ⌕
          </span>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search vault, prompts, ritual..."
            className={s.input}
          />
          <button type="button" onClick={closeSearch} className={s.esc}>
            esc
          </button>
        </div>

        <div className={s.results}>
          {!query.trim() ? (
            <p className={s.empty}>
              type to search across the vault, prompts and ritual.
            </p>
          ) : flatHits.length === 0 ? (
            <p className={s.empty}>nothing matched “{query.trim()}”</p>
          ) : (
            sections.map((section) => (
              <div key={section.group} className={s.section}>
                <p className={s.groupLabel}>{section.group}</p>
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
                          className={cn(
                            s.hit,
                            active ? s.hitActive : s.hitIdle,
                          )}
                        >
                          <div className={s.hitBody}>
                            <div className={s.hitTop}>
                              <span className={s.hitTitle}>{hit.title}</span>
                              <span className={s.hitTag}>{hit.tag}</span>
                            </div>
                            <p className={s.hitSnippet}>{hit.snippet}</p>
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

        <div className={s.footer}>
          <span className={s.shortcut}>
            <Kbd>↑</Kbd>
            <Kbd>↓</Kbd>
            navigate
          </span>
          <span className={s.shortcut}>
            <Kbd>↵</Kbd>
            open
          </span>
          <span className={s.shortcut}>
            <Kbd>⌘</Kbd>
            <Kbd>K</Kbd>
            toggle
          </span>
        </div>
      </div>
    </div>
  );
}
