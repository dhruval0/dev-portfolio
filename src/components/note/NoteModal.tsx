"use client";

import { NoteBlocks } from "@/components/note/NoteBlocks";
import {
  noteModalStyles as s,
  noteTapeBackground,
} from "@/components/note/NoteModal.styles";
import { useNoteModal } from "@/components/note/useNoteModal";
import { cn } from "@/lib/cn";

export function NoteModal() {
  const { document, loading, closeDocument } = useNoteModal();

  if (!document) return null;

  const toc = document.blocks
    .map((block, index) =>
      block.type === "heading" ? { index, text: block.text } : null,
    )
    .filter(Boolean) as { index: number; text: string }[];

  const showToc = !loading && toc.length > 1;

  return (
    <div
      className={s.overlay}
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) closeDocument();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-label={document.title}
        className={cn(s.paper, s.paperSurface)}
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
              <>
                <p className={s.eyebrow}>{document.eyebrow}</p>
                <p className={s.topic}>{document.topic}</p>
                <h2 className={s.title}>{document.title}</h2>
                <NoteBlocks blocks={document.blocks} />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
