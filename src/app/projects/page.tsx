import { BackToDesk } from "@/components/layout/BackToDesk";
import { PageHeader } from "@/components/layout/PageHeader";
import { SearchBar } from "@/components/layout/SearchBar";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { projects } from "@/data/projects";

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-8">
      <BackToDesk />
      <PageHeader
        title="Projects"
        description="Things I've shipped — or am still shipping — while learning. Some for practice, some that might help others too."
      />
      <SearchBar placeholder="Search projects..." />

      <div className="rounded-xl border border-[var(--border)] bg-[var(--surface)] p-4 sm:p-6">
        <p className="mb-4 text-center font-[family-name:var(--font-script)] text-[var(--muted)]">
          — from the tray —
        </p>
        <h2 className="font-[family-name:var(--font-display)] text-xl">
          Shipped, mostly working
        </h2>
        <p className="mt-1 text-sm text-[var(--muted)]">
          The ones I&apos;m actively tending right now.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <p className="mt-8 text-center font-[family-name:var(--font-script)] text-[var(--muted)]">
          that&apos;s everything — {projects.length} in all
        </p>
      </div>
    </div>
  );
}
