import Link from "next/link";

import type { Project } from "@/types";
import { Badge, Container } from "@/components/ui";

type ProjectHeroProps = Readonly<{ project: Project }>;

export function ProjectHero({ project }: ProjectHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-border/70 bg-secondary/45">
      <div className="hero-grid-overlay pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container className="relative py-12 sm:py-16 lg:py-24">
        <Link href="/projects" className="link-base inline-flex items-center gap-2 text-small">
          <span aria-hidden="true">←</span>
          Back to projects
        </Link>

        <div className="mt-10 max-w-4xl">
          <Badge tone="primary">{project.category}</Badge>
          <h1 className="mt-5 text-display text-balance">{project.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground text-pretty sm:text-xl">
            {project.shortDescription}
          </p>

          {project.technologies.length > 0 ? (
            <div className="mt-8 flex flex-wrap gap-2" aria-label="Technology stack">
              {project.technologies.map((technology) => (
                <span key={technology} className="badge-base bg-card">
                  {technology}
                </span>
              ))}
            </div>
          ) : null}

          {project.githubUrl || project.liveUrl ? (
            <div className="mt-8 flex flex-wrap gap-3">
              {project.githubUrl ? <ExternalProjectLink href={project.githubUrl}>GitHub repository</ExternalProjectLink> : null}
              {project.liveUrl ? <ExternalProjectLink href={project.liveUrl}>View live demo</ExternalProjectLink> : null}
            </div>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

function ExternalProjectLink({ href, children }: Readonly<{ href: string; children: string }>) {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className="button-base border-border bg-card text-foreground hover:-translate-y-0.5">
      {children}
      <span aria-hidden="true">↗</span>
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
