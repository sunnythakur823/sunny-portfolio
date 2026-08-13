import Link from "next/link";

import type { Project } from "@/types";
import { Badge, Card, Heading, TextLink } from "@/components/ui";
import { cn } from "@/lib/utils";

type ProjectCardProps = Readonly<{
  project: Project;
  featured?: boolean;
}>;

function ProjectVisual({ featured, category }: { featured?: boolean; category: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border-b border-border/70 bg-[radial-gradient(circle_at_top_left,_color-mix(in_srgb,_var(--primary)_16%,_transparent)_0%,_transparent_55%),linear-gradient(180deg,_color-mix(in_srgb,_var(--card)_96%,_transparent)_0%,_color-mix(in_srgb,_var(--secondary)_94%,_transparent)_100%)]",
        featured ? "min-h-56 sm:min-h-64" : "min-h-44",
      )}
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-50 [background-image:linear-gradient(to_right,color-mix(in_srgb,var(--border)_18%,transparent)_1px,transparent_1px),linear-gradient(to_bottom,color-mix(in_srgb,var(--border)_18%,transparent)_1px,transparent_1px)] [background-size:2.5rem_2.5rem]" />
      <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-border/80 bg-background/80 px-3 py-1 text-caption text-muted-foreground backdrop-blur-sm">
        <span className="h-2 w-2 rounded-full bg-primary" />
        Case study preview
      </div>

      <div className="absolute inset-x-5 bottom-5 grid gap-2 sm:gap-3">
        <div className="flex items-center justify-between rounded-2xl border border-border/70 bg-background/75 px-4 py-3 backdrop-blur-sm">
          <span className="text-small font-medium text-foreground">{category}</span>
          <span className="text-caption text-muted-foreground">{featured ? "Featured" : "Selected"}</span>
        </div>
        <div className="grid gap-2 sm:grid-cols-3">
          <div className="h-1.5 rounded-full bg-primary/30" />
          <div className="h-1.5 rounded-full bg-border/70" />
          <div className="h-1.5 rounded-full bg-border/50" />
        </div>
      </div>
    </div>
  );
}

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  return (
    <Card
      elevated
      className={cn(
        "group overflow-hidden transition-all duration-300 motion-reduce:transition-none hover:-translate-y-1 hover:border-primary/25 hover:shadow-[0_20px_45px_rgb(15_23_42/0.08)]",
        featured ? "h-full" : "h-full",
      )}
    >
      <article className={cn("flex h-full flex-col", featured ? "lg:grid lg:grid-rows-[auto_1fr]" : "") }>
        <ProjectVisual featured={featured} category={project.category} />

        <div className={cn("flex flex-1 flex-col gap-5 p-5 sm:p-6", featured ? "lg:p-7" : "") }>
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="primary" className="text-[0.7rem] uppercase tracking-[0.18em]">
              {project.category}
            </Badge>
            {project.featured ? (
              <span className="text-caption text-muted-foreground">Featured work</span>
            ) : (
              <span className="text-caption text-muted-foreground">Selected project</span>
            )}
          </div>

          <div className="space-y-3">
            <Heading level={3} className="max-w-[18ch] text-balance">
              {project.title}
            </Heading>
            <p className="max-w-2xl text-body text-muted-foreground text-pretty">
              {project.shortDescription}
            </p>
          </div>

          {project.technologies.length > 0 ? (
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-border bg-card px-3 py-1.5 text-caption text-foreground transition-colors group-hover:border-border/80"
                >
                  {technology}
                </span>
              ))}
            </div>
          ) : (
            <p className="text-small text-muted-foreground">
              Technologies can be configured later.
            </p>
          )}

          <div className="mt-auto flex items-center justify-between gap-4 border-t border-border/70 pt-4 text-small">
            <span className="font-mono text-[0.7rem] uppercase tracking-[0.18em] text-muted-foreground">
              {project.slug}
            </span>

            <div className="flex items-center gap-3">
              <Link
                href={`/projects/${project.slug}`}
                className="link-base inline-flex items-center gap-1.5 no-underline transition-transform duration-200 group-hover:translate-x-0.5"
                aria-label={`Read the ${project.title} case study`}
              >
                Case study
                <span aria-hidden="true">→</span>
              </Link>
              {project.githubUrl ? (
                <TextLink
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`${project.title} on GitHub`}
                  className="inline-flex items-center gap-1.5 no-underline transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  Source
                  <span aria-hidden="true">↗</span>
                </TextLink>
              ) : null}
              {project.liveUrl ? (
                <TextLink
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Open live version of ${project.title}`}
                  className="inline-flex items-center gap-1.5 no-underline transition-transform duration-200 group-hover:translate-x-0.5"
                >
                  Live
                  <span aria-hidden="true">↗</span>
                </TextLink>
              ) : null}
            </div>
          </div>
        </div>
      </article>
    </Card>
  );
}
