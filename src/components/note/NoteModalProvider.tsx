"use client";

import type { ReactNode } from "react";
import { NoteModal } from "@/components/note/NoteModal";
import {
  NoteModalContext,
  useNoteModalState,
} from "@/components/note/useNoteModal";

export function NoteModalProvider({ children }: { children: ReactNode }) {
  const value = useNoteModalState();

  return (
    <NoteModalContext.Provider value={value}>
      {children}
      <NoteModal />
    </NoteModalContext.Provider>
  );
}
