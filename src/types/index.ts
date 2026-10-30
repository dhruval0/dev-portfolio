/** Shared TypeScript shapes — data files import these */

export type NavLink = {
  label: string;
  href: string;
};

export type StatusItem = {
  id: string;
  label: string;
};

export type DrawerItem = {
  id: string;
  title: string;
  description: string;
  href: string;
};

export type SocialLink = {
  id: string;
  platform: string;
  handle: string;
  description: string;
  href: string;
};

export type VaultCategory = "notes" | "tools" | "reads" | "experience";

export type CodeLanguage = "python" | "javascript" | "go" | "java";

export type CodeSnippet = {
  language: CodeLanguage;
  code: string;
};

/** Building blocks inside a paper note modal */
export type NoteBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "callout"; text: string }
  | { type: "flow"; text: string }
  | { type: "codeCell"; snippets: CodeSnippet[] }
  | { type: "pin"; text: string }
  | { type: "list"; items: string[] }
  | { type: "table"; headers: string[]; rows: string[][] }
  | { type: "divider" };

export type PaperDocument = {
  id: string;
  /** e.g. "from the vault" */
  eyebrow: string;
  topic: string;
  title: string;
  blocks: NoteBlock[];
};

export type VaultItem = {
  id: string;
  title: string;
  description: string;
  category: VaultCategory;
  openedCount: number;
  /** Shown in the paper note modal */
  note: PaperDocument;
};

export type ProjectItem = {
  id: string;
  title: string;
  description: string;
  tag: string;
  status: string;
  href?: string;
};

export type PromptItem = {
  id: string;
  category: string;
  title: string;
  preview: string;
  fullPrompt: string;
  tags: string[];
};

export type RitualItem = {
  id: string;
  title: string;
  date: string;
  summary: string;
};

/** Live tech-stack release / update shown on Ritual */
export type TechUpdate = {
  id: string;
  stack: string;
  stackId: string;
  version: string;
  title: string;
  summary: string;
  detail: string;
  publishedAt: string;
  href: string;
  isPrerelease: boolean;
};

export type TechStackSource = {
  id: string;
  name: string;
  repo: string;
};

export type BlogItem = {
  id: string;
  title: string;
  platform: "Substack" | "Medium" | "Other";
  excerpt: string;
  href: string;
  date: string;
  /** Cover image URL (e.g. Medium CDN) */
  image: string;
};

export type SiteInfo = {
  name: string;
  /** Small accent line above the hero title (not the name — name lives under the polaroid) */
  eyebrow: string;
  roleLine: string;
  roleHighlight: string;
  intro: string;
  handwrittenNote: string;
  /** Path under /public — drop your photo there */
  portraitSrc: string;
  portraitCaption: string;
  ctaLabel: string;
  ctaHref: string;
};

/** One proficiency group — skills render as pill “logos” */
export type SkillGroup = {
  id: string;
  label: string;
  items: string[];
};
