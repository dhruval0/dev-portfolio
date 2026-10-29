"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import type { PaperDocument } from "@/types";

type NoteModalContextValue = {
  document: PaperDocument | null;
  loading: boolean;
  openDocument: (doc: PaperDocument) => void;
  closeDocument: () => void;
};

export const NoteModalContext = createContext<NoteModalContextValue | null>(
  null,
);

const LOAD_MS = 450;

export function useNoteModal() {
  const ctx = useContext(NoteModalContext);
  if (!ctx) {
    throw new Error("useNoteModal must be used inside NoteModalProvider");
  }
  return ctx;
}

export function useNoteModalState(): NoteModalContextValue {
  const [document, setDocument] = useState<PaperDocument | null>(null);
  const [loading, setLoading] = useState(false);

  const closeDocument = useCallback(() => {
    setDocument(null);
    setLoading(false);
  }, []);

  const openDocument = useCallback((doc: PaperDocument) => {
    setDocument(doc);
    setLoading(true);
  }, []);

  useEffect(() => {
    if (!document || !loading) return;
    const id = window.setTimeout(() => setLoading(false), LOAD_MS);
    return () => window.clearTimeout(id);
  }, [document, loading]);

  useEffect(() => {
    if (!document) return;

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") closeDocument();
    }

    const previousOverflow = window.document.body.style.overflow;
    window.document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [document, closeDocument]);

  return useMemo(
    () => ({ document, loading, openDocument, closeDocument }),
    [document, loading, openDocument, closeDocument],
  );
}
