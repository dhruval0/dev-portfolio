import { Badge } from "@/components/ui/Badge";
import type { ProjectItem } from "@/types";
import { projectCardStyles as s } from "./ProjectCard.styles";

type ProjectCardProps = {
  project: ProjectItem;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <article className={s.article}>
      <Badge tone="muted">{project.tag}</Badge>
      <h3 className={s.title}>{project.title}</h3>
      <p className={s.description}>{project.description}</p>
      <p className={s.status}>{project.status}</p>
      {project.href ? (
        <a href={project.href} className={s.link}>
          Open →
        </a>
      ) : null}
    </article>
  );
}
