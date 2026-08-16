import Link from "next/link";

import type { Project } from "@/types";
import { cn } from "@/lib/utils";

type ProjectNavigationProps = Readonly<{ previous?: Project; next?: Project }>;

export function ProjectNavigation({ previous, next }: ProjectNavigationProps) {
  return (
    <nav className="border-t border-border/70 py-10 sm:py-14" aria-label="Project navigation">
      <Link href="/projects" className="link-base text-small">← All projects</Link>
      {(previous || next) ? (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          {previous ? <ProjectNavLink project={previous} direction="Previous project" /> : <div />}
          {next ? <ProjectNavLink project={next} direction="Next project" alignEnd /> : null}
        </div>
      ) : null}
    </nav>
  );
}

function ProjectNavLink({ project, direction, alignEnd = false }: Readonly<{ project: Project; direction: string; alignEnd?: boolean }>) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className={cn(
        "surface-card block p-5 transition-transform duration-200 motion-reduce:transition-none hover:-translate-y-0.5",
        alignEnd && "sm:text-right",
      )}
    >
      <span className="text-caption text-muted-foreground">{direction}</span>
      <span className="mt-2 block text-h3">{project.title}</span>
    </Link>
  );
}
