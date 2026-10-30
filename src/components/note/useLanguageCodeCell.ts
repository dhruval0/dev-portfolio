"use client";

import { useState } from "react";
import type { CodeLanguage } from "@/types";

export function useLanguageCodeCell(languages: CodeLanguage[]) {
  const [active, setActive] = useState<CodeLanguage>(
    languages.includes("python") ? "python" : languages[0],
  );

  return {
    active,
    setActive,
  };
}
