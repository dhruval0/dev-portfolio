"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { useNoteModal } from "@/components/note/useNoteModal";
import { useSearch } from "@/components/search/SearchProvider";
import { prompts } from "@/data/prompts";
import { ritualEntries } from "@/data/ritual";
import {
  filterSearchIndex,
  groupHits,
  type SearchHit,
} from "@/data/searchIndex";
import {
  promptToPaper,
  ritualToPaper,
  vaultToPaper,
} from "@/data/toPaperDocument";
import { getVaultItemById } from "@/data/vault";

export function useCommandSearch() {
  const { open, closeSearch } = useSearch();
  const { openDocument } = useNoteModal();
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);

  const hits = useMemo(() => filterSearchIndex(query), [query]);
  const sections = useMemo(() => groupHits(hits), [hits]);
  const flatHits = useMemo(
    () => sections.flatMap((section) => section.items),
    [sections],
  );

  function openHit(hit: SearchHit) {
    closeSearch();

    if (hit.group === "Vault" && hit.sourceId) {
      const item = getVaultItemById(hit.sourceId);
      if (item) {
        openDocument(vaultToPaper(item));
        return;
      }
    }

    if (hit.group === "Prompts" && hit.sourceId) {
      const prompt = prompts.find((p) => p.id === hit.sourceId);
      if (prompt) {
        openDocument(promptToPaper(prompt));
        return;
      }
    }

    if (hit.group === "Ritual" && hit.sourceId) {
      const entry = ritualEntries.find((r) => r.id === hit.sourceId);
      if (entry) {
        openDocument(ritualToPaper(entry));
        return;
      }
    }

    if (hit.href.startsWith("http")) {
      window.open(hit.href, "_blank", "noopener,noreferrer");
      return;
    }

    router.push(hit.href);
  }

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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [open, flatHits, activeIndex, closeSearch]);

  return {
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
  };
}
