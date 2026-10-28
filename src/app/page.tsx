import { DrawerCard } from "@/components/desk/DrawerCard";
import { PolaroidPortrait } from "@/components/desk/PolaroidPortrait";
import { SkillCard } from "@/components/desk/SkillCard";
import { SocialTag } from "@/components/desk/SocialTag";
import { StatusPills } from "@/components/desk/StatusPills";
import { SearchBar } from "@/components/layout/SearchBar";
import { drawers } from "@/data/drawers";
import { site, nowStatus } from "@/data/site";
import { skillGroups } from "@/data/skills";
import { socials } from "@/data/socials";

export default function DeskPage() {
  return (
    <div className="flex flex-col gap-12 sm:gap-14">
      {/* Top: bio (left) + portrait (right) */}
      <section className="grid items-start gap-8 lg:grid-cols-[1fr_auto] lg:gap-12">
        <div className="flex flex-col gap-5">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[var(--muted)]">
            {site.name}
          </p>

          <h1 className="max-w-xl font-[family-name:var(--font-display)] text-4xl leading-tight tracking-tight sm:text-5xl">
            {site.roleLine}{" "}
            <span className="text-[var(--accent)]">{site.roleHighlight}</span>
          </h1>

          <p className="max-w-md text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            {site.intro}
          </p>

          <p className="font-[family-name:var(--font-script)] text-xl text-[var(--accent)] sm:text-2xl">
            {site.handwrittenNote}
          </p>

          <div className="flex flex-col gap-2 pt-1">
            <p className="font-[family-name:var(--font-script)] text-[var(--muted)]">
              Now
            </p>
            <StatusPills items={nowStatus} />
          </div>
        </div>

        <div className="flex justify-center lg:justify-end lg:pt-2">
          <PolaroidPortrait
            src={site.portraitSrc}
            caption={site.portraitCaption}
            alt={site.name}
          />
        </div>
      </section>

      {/* Search */}
      <section className="flex flex-col items-center gap-2">
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-[var(--faint)]">
          Search
        </p>
        <p className="mb-1 font-[family-name:var(--font-display)] text-lg">
          Looking for something?
        </p>
        <SearchBar />
      </section>

      {/* Drawers */}
      <section className="flex flex-col gap-4">
        <p className="font-[family-name:var(--font-script)] text-lg text-[var(--muted)]">
          In the drawers
        </p>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {drawers.map((drawer) => (
            <DrawerCard key={drawer.id} drawer={drawer} />
          ))}
        </div>
      </section>

      {/* Socials */}
      <section className="flex flex-col gap-4">
        <p className="font-[family-name:var(--font-script)] text-lg text-[var(--muted)]">
          Where to find me
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {socials.map((social) => (
            <SocialTag key={social.id} social={social} />
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <p className="font-[family-name:var(--font-script)] text-lg text-[var(--muted)]">
            Skill set
          </p>
          <p className="text-sm text-[var(--faint)]">
            Tools I use day to day — grouped by depth, not buzzwords.
          </p>
        </div>
        <div className="flex flex-col gap-8 rounded-xl border border-[var(--border)] bg-[var(--surface)] p-5 sm:p-6">
          {skillGroups.map((group) => (
            <SkillCard key={group.id} group={group} />
          ))}
        </div>
      </section>
    </div>
  );
}
