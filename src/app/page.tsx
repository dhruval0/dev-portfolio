import { DrawerCard } from "@/components/desk/DrawerCard";
import { PolaroidPortrait } from "@/components/desk/PolaroidPortrait";
import { SkillCard } from "@/components/desk/SkillCard";
import { SocialTag } from "@/components/desk/SocialTag";
import { StatusPills } from "@/components/desk/StatusPills";
import { SearchBar } from "@/components/layout/SearchBar";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerItem } from "@/components/ui/Stagger";
import { drawers } from "@/data/drawers";
import { site, nowStatus } from "@/data/site";
import { skillGroups } from "@/data/skills";
import { socials } from "@/data/socials";
import { deskPageStyles as s } from "./page.styles";

export default function DeskPage() {
  return (
    <div className={s.root}>
      <section className={s.hero}>
        <Reveal className={s.bio} delay={40} variant="left">
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
        </Reveal>

        <Reveal className={s.portraitWrap} delay={180} variant="polaroid">
          <PolaroidPortrait
            src={site.portraitSrc}
            caption={site.portraitCaption}
            alt={site.name}
          />
        </Reveal>
      </section>

      <Reveal as="section" className={s.searchSection} delay={280}>
        <p className={s.searchEyebrow}>Search</p>
        <p className={s.searchHeading}>Looking for something?</p>
        <SearchBar />
      </Reveal>

      <section className={s.section}>
        <Reveal>
          <p className={s.sectionLabel}>In the drawers</p>
        </Reveal>
        <div className={s.drawersGrid}>
          {drawers.map((drawer, index) => (
            <StaggerItem
              key={drawer.id}
              index={index}
              step={70}
              className="h-full"
            >
              <DrawerCard drawer={drawer} />
            </StaggerItem>
          ))}
        </div>
      </section>

      <section className={s.section}>
        <Reveal>
          <p className={s.sectionLabel}>Where to find me</p>
        </Reveal>
        <div className={s.socialsGrid}>
          {socials.map((social, index) => (
            <StaggerItem key={social.id} index={index} step={50}>
              <SocialTag social={social} />
            </StaggerItem>
          ))}
        </div>
      </section>

      <section className={s.skillsSection}>
        <Reveal className={s.skillsIntro}>
          <p className={s.sectionLabel}>Skill set — the workshop wall</p>
        </Reveal>
        <div className={s.skillsPanel}>
          {skillGroups.map((group, index) => (
            <StaggerItem key={group.id} index={index} step={90} variant="scale">
              <SkillCard group={group} />
            </StaggerItem>
          ))}
        </div>
      </section>
    </div>
  );
}
