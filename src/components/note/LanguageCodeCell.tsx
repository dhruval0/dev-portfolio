"use client";

import type { CodeLanguage, CodeSnippet } from "@/types";
import { cn } from "@/lib/cn";
import { languageCodeCellStyles as s } from "./LanguageCodeCell.styles";
import { useLanguageCodeCell } from "./useLanguageCodeCell";

const LABELS: Record<CodeLanguage, string> = {
  python: "Python",
  javascript: "JavaScript",
  go: "Go",
  java: "Java",
};

const ORDER: CodeLanguage[] = ["python", "javascript", "go", "java"];

type LanguageCodeCellProps = {
  snippets: CodeSnippet[];
};

export function LanguageCodeCell({ snippets }: LanguageCodeCellProps) {
  const languages = ORDER.filter((lang) =>
    snippets.some((snippet) => snippet.language === lang),
  );
  const { active, setActive } = useLanguageCodeCell(languages);
  const current =
    snippets.find((snippet) => snippet.language === active) ?? snippets[0];

  if (!current) return null;

  return (
    <div className={s.root}>
      <div className={s.tabs} role="tablist" aria-label="Code language">
        {languages.map((lang) => (
          <button
            key={lang}
            type="button"
            role="tab"
            aria-selected={lang === active}
            className={cn(s.tab, lang === active && s.tabActive)}
            onClick={() => setActive(lang)}
          >
            {LABELS[lang]}
          </button>
        ))}
      </div>
      <pre className={s.pre} role="tabpanel">
        <code>{current.code}</code>
      </pre>
    </div>
  );
}
