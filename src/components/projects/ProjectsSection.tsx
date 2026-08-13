import Link from "next/link";

import { Container, Heading, Section } from "@/components/ui";
import { projects } from "@/data/projects";

import { ProjectCard } from "./ProjectCard";

const featuredProjects = projects.filter((project) => project.featured);
const supportingProjects = projects.filter((project) => !project.featured);

export function ProjectsSection() {
  const primaryProjects = featuredProjects.slice(0, 2);

  return (
    <Section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-border/70" aria-hidden="true" />
      <Container>
        <div className="flex flex-col gap-6 border-b border-border/70 pb-8 sm:pb-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl space-y-3">
            <p className="text-caption font-medium tracking-[0.24em] text-muted-foreground">
              SELECTED WORK
            </p>
            <Heading level={2} className="max-w-[14ch]">
              Featured Projects
            </Heading>
            <p className="max-w-xl text-body text-muted-foreground text-pretty">
              A curated set of software projects presented as concise engineering case studies.
            </p>
          </div>

          <Link
            href="/projects"
            className="button-base w-fit border-border bg-secondary text-foreground transition-transform duration-200 hover:-translate-y-0.5"
          >
            View All Projects
            <span aria-hidden="true">↗</span>
          </Link>
        </div>

        <div className="mt-8 grid gap-5 lg:grid-cols-12 lg:gap-6">
          {primaryProjects[0] ? (
            <div className="lg:col-span-7">
              <ProjectCard project={primaryProjects[0]} featured />
            </div>
          ) : null}

          {primaryProjects[1] ? (
            <div className="lg:col-span-5">
              <ProjectCard project={primaryProjects[1]} featured />
            </div>
          ) : null}
        </div>

        {supportingProjects.length > 0 ? (
          <div className="mt-5 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {supportingProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        ) : null}
      </Container>
    </Section>
  );
}
