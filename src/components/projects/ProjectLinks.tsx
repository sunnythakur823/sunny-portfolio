import type { Project } from "@/types";

import { ProjectContentSection } from "./ProjectContentSection";

export function ProjectLinks({ project }: Readonly<{ project: Project }>) {
  if (!project.githubUrl && !project.liveUrl) return null;

  return (
    <ProjectContentSection eyebrow="08 / Links" title="Project links">
      <div className="flex flex-wrap gap-3">
        {project.githubUrl ? <ProjectLink href={project.githubUrl}>GitHub repository</ProjectLink> : null}
        {project.liveUrl ? <ProjectLink href={project.liveUrl}>Live demo</ProjectLink> : null}
      </div>
    </ProjectContentSection>
  );
}

function ProjectLink({ href, children }: Readonly<{ href: string; children: string }>) {
  return <a href={href} target="_blank" rel="noreferrer noopener" className="link-base inline-flex items-center gap-2 font-medium">{children}<span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a>;
}
