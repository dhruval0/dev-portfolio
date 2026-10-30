import type { SiteInfo, StatusItem } from "@/types";

/**
 * Desk home content — edit here, UI stays the same.
 * Put your photo at: public/portrait.jpg
 */

export const site: SiteInfo = {
  name: "Dhruval Dhorajia",
  eyebrow: "Architect · Builder · Writer",
  roleLine: "Software architect by title.",
  roleHighlight: "Building in public.",
  intro:
    "This is my open notebook — the systems I’m shipping, the products I’m building, the leadership craft I’m learning, and the weekly writes on compounding one honest brick at a time.",
  handwrittenNote: "still figuring it out — brick by brick, decision by decision",
  portraitSrc: "/portrait.jpg",
  portraitCaption: "that's me — Dhruval",
  ctaLabel: "See what I'm working on",
  ctaHref: "/projects",
};

export const nowStatus: StatusItem[] = [
  { id: "1", label: "improving day by day" },
  { id: "2", label: "learning AI/LLM" },
  { id: "3", label: "writing in public" },
  { id: "4", label: "filling the vault" },
];
