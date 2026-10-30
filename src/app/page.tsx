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
import { deskPageStyles as s } from "./page.styles";

export default function DeskPage() {
  return (
    <div className={s.root}>
      <section className={s.hero}>
        <div className={s.bio}>
          <p className={s.eyebrow}>{site.eyebrow}</p>
          <h1 className={s.title}>
            {site.roleLine}{" "}
            <span className={s.titleAccent}>{site.roleHighlight}</span>
          </h1>
          <p className={s.intro}>{site.intro}</p>
          <p className={s.handwritten}>{site.handwrittenNote}</p>
          <div className={s.nowBlock}>
            <p className={s.nowLabel}>Now</p>
            <StatusPills items={nowStatus} />
          </div>
        </div>

        <div className={s.portraitWrap}>
          <PolaroidPortrait
            src={site.portraitSrc}
            caption={site.portraitCaption}
            alt={site.name}
          />
        </div>
      </section>

      <section className={s.searchSection}>
        <p className={s.searchEyebrow}>Search</p>
        <p className={s.searchHeading}>Looking for something?</p>
        <SearchBar />
      </section>

      <section className={s.section}>
        <p className={s.sectionLabel}>In the drawers</p>
        <div className={s.drawersGrid}>
          {drawers.map((drawer) => (
            <DrawerCard key={drawer.id} drawer={drawer} />
          ))}
        </div>
      </section>

      <section className={s.section}>
        <p className={s.sectionLabel}>Where to find me</p>
        <div className={s.socialsGrid}>
          {socials.map((social) => (
            <SocialTag key={social.id} social={social} />
          ))}
        </div>
      </section>

      <section className={s.skillsSection}>
        <div className={s.skillsIntro}>
          <p className={s.sectionLabel}>Skill set</p>
          <p className={s.skillsHint}>
            Tools I use day to day — grouped by depth, not buzzwords.
          </p>
        </div>
        <div className={s.skillsPanel}>
          {skillGroups.map((group) => (
            <SkillCard key={group.id} group={group} />
          ))}
        </div>
      </section>
    </div>
  );
}
