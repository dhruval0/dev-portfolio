import { BackToDesk } from "@/components/layout/BackToDesk";
import { PageHeader } from "@/components/layout/PageHeader";
import { SearchBar } from "@/components/layout/SearchBar";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";
import { projectsPageStyles as s } from "./page.styles";

export default function ProjectsPage() {
  return (
    <div className={s.root}>
      <BackToDesk />
      <PageHeader
        title="Projects"
        description="Things I've shipped — or am still shipping — while learning. Some for practice, some that might help others too."
      />
      <SearchBar placeholder="Search projects..." />

      <div className={s.tray}>
        <p className={s.trayLabel}>— from the tray —</p>
        <h2 className={s.heading}>Shipped, mostly working</h2>
        <p className={s.sub}>The ones I&apos;m actively tending right now.</p>

        <div className={s.grid}>
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <p className={s.count}>
          that&apos;s everything — {projects.length} in all
        </p>
      </div>
    </div>
  );
}
