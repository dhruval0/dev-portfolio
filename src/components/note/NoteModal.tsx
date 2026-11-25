"use client";

import { useEffect, useState } from "react";
import { NoteBlocks } from "@/components/note/NoteBlocks";
import {
  noteModalStyles as s,
  noteTapeBackground,
} from "@/components/note/NoteModal.styles";
import { useNoteModal } from "@/components/note/useNoteModal";
import { usePresence } from "@/components/ui/usePresence";
import { cn } from "@/lib/cn";
import type { PaperDocument } from "@/types";

export function NoteModal() {
  const { document, loading, closeDocument } = useNoteModal();
  const open = !!document;
  const { mounted, visible } = usePresence(open, 300);
  const [cached, setCached] = useState<PaperDocument | null>(document);

  useEffect(() => {
    if (document) setCached(document);
  }, [document]);

  if (!mounted || !cached) return null;

  const toc = cached.blocks
    .map((block, index) =>
      block.type === "heading" ? { index, text: block.text } : null,
    )
    .filter(Boolean) as { index: number; text: string }[];

  const showToc = !loading && toc.length > 1;
  const leaving = !visible;

  return (
    <div
      className={cn(
        s.overlay,
        leaving ? "motion-overlay is-leaving" : "motion-overlay",
      )}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closeDocument();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={cached.title}
        key={visible ? `note-${cached.id}` : `note-closing-${cached.id}`}
        className={cn(
          s.paper,
          s.paperSurface,
          leaving ? "motion-paper is-leaving" : "motion-paper",
        )}
      >
        <span aria-hidden className={s.tape} style={noteTapeBackground} />

        <button
          type="button"
          onClick={closeDocument}
          className={s.close}
          aria-label="Close note"
        >
          ×
        </button>

        <div className={cn(s.body, showToc && s.withToc)}>
          {showToc ? (
            <aside className={s.toc}>
              <nav className={s.tocList} aria-label="Note sections">
                {toc.map((item) => (
                  <a
                    key={item.index}
                    href={`#note-h-${item.index}`}
                    className={s.tocItem}
                  >
                    {item.text.replace(/^\d️⃣\s*/, "")}
                  </a>
                ))}
              </nav>
            </aside>
          ) : null}

          <div className={s.scroll}>
            {loading ? (
              <div className={s.loadingWrap}>
                <p className={s.loadingText}>loading.</p>
              </div>
            ) : (
              <div key={cached.id} className="motion-note-body">
                <p className={s.eyebrow}>{cached.eyebrow}</p>
                <p className={s.topic}>{cached.topic}</p>
                <h2 className={s.title}>{cached.title}</h2>
                <NoteBlocks blocks={cached.blocks} />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
