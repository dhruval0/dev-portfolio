import { PageHeader } from "@/components/layout/PageHeader";
import { SearchBar } from "@/components/layout/SearchBar";
import { SubpageNav } from "@/components/layout/SubpageNav";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { Reveal } from "@/components/ui/Reveal";
import { StaggerItem } from "@/components/ui/Stagger";
import { projects } from "@/data/projects";
import { projectsPageStyles as s } from "./page.styles";

export default function ProjectsPage() {
  return (
    <div className={s.root}>
      <Reveal delay={20}>
        <SubpageNav />
      </Reveal>
      <Reveal delay={70}>
        <PageHeader
          title="Projects"
          description="Things I've shipped — or am still shipping — while learning. Some for practice, some that might help others too."
        />
      </Reveal>
      <Reveal delay={120}>
        <SearchBar placeholder="Search projects..." />
      </Reveal>

      <Reveal as="div" className={s.tray} delay={160}>
        <p className={s.trayLabel}>— from the tray —</p>
        <h2 className={s.heading}>Shipped, mostly working</h2>
        <p className={s.sub}>The ones I&apos;m actively tending right now.</p>

        <div className={s.grid}>
          {projects.map((project, index) => (
            <StaggerItem
              key={project.id}
              index={index}
              baseDelay={40}
              step={60}
              className="h-full"
            >
              <ProjectCard project={project} />
            </StaggerItem>
          ))}
        </div>

        <p className={s.count}>
          that&apos;s everything — {projects.length} in all
        </p>
      </Reveal>
    </div>
  );
}
