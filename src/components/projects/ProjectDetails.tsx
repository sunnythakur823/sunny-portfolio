import type { Project } from "@/types";

import { ProjectContentSection } from "./ProjectContentSection";

type ProjectDetailsProps = Readonly<{ project: Project }>;

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <>
      {project.overview ? <ProjectContentSection eyebrow="01 / Overview" title="Project overview"><p>{project.overview}</p></ProjectContentSection> : null}
      {project.problem ? <ProjectContentSection eyebrow="02 / Problem" title="The problem"><p>{project.problem}</p></ProjectContentSection> : null}
      {project.solution ? <ProjectContentSection eyebrow="03 / Solution" title="The solution"><p>{project.solution}</p></ProjectContentSection> : null}
      {project.features?.length ? <ProjectContentSection eyebrow="04 / Features" title="Key features"><DetailList items={project.features} grid /></ProjectContentSection> : null}
      {project.technologies.length ? <ProjectContentSection eyebrow="05 / Stack" title="Technology stack"><DetailList items={project.technologies} /></ProjectContentSection> : null}
      {project.challenges?.length ? <ProjectContentSection eyebrow="06 / Engineering" title="Engineering challenges"><DetailList items={project.challenges} /></ProjectContentSection> : null}
      {project.learnings?.length ? <ProjectContentSection eyebrow="07 / Learnings" title="What I learned"><DetailList items={project.learnings} /></ProjectContentSection> : null}
    </>
  );
}

function DetailList({ items, grid = false }: Readonly<{ items: string[]; grid?: boolean }>) {
  return (
    <ul className={grid ? "grid gap-3 sm:grid-cols-2" : "grid gap-3"}>
      {items.map((item) => (
        <li key={item} className="rounded-xl border border-border bg-card px-4 py-3 text-small text-foreground">{item}</li>
      ))}
    </ul>
  );
}
