import { Badge } from "@/components/ui/Badge";
import type { ProjectItem } from "@/types";

type ProjectCardProps = {
  project: ProjectItem;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className="flex flex-col rounded-lg border border-[var(--border)] bg-[var(--card)] p-5">
      <Badge tone="muted">{project.tag}</Badge>
      <h3 className="mt-3 font-[family-name:var(--font-display)] text-2xl">
        {project.title}
      </h3>
      <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--muted)]">
        {project.description}
      </p>
      <p className="mt-4 font-[family-name:var(--font-script)] text-[var(--accent)]">
        {project.status}
      </p>
      {project.href ? (
        <a
          href={project.href}
          className="mt-3 text-sm text-[var(--link)] hover:underline"
        >
          Open →
        </a>
      ) : null}
    </article>
  );
}
