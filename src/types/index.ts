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

/** Building blocks inside a paper note modal */
export type NoteBlock =
  | { type: "heading"; text: string }
  | { type: "paragraph"; text: string }
  | { type: "callout"; text: string }
  | { type: "flow"; text: string }
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

export type BlogItem = {
  id: string;
  title: string;
  platform: "Substack" | "Medium" | "Other";
  excerpt: string;
  href: string;
  date: string;
};

export type SiteInfo = {
  name: string;
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
