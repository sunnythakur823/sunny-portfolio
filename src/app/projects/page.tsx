import type { Metadata } from "next";
import Link from "next/link";

import { ProjectCard } from "@/components/projects";
import { Container, Heading, Section } from "@/components/ui";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected software projects by Sunny Kumar covering AI, machine learning, full-stack development, APIs, and practical product engineering.",
  openGraph: {
    title: "Projects | Sunny Kumar",
    description:
      "Selected software projects by Sunny Kumar covering AI, machine learning, full-stack development, APIs, and practical product engineering.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Projects | Sunny Kumar",
    description:
      "Selected software projects by Sunny Kumar covering AI, machine learning, full-stack development, APIs, and practical product engineering.",
  },
};

const featuredProjects = projects.filter((project) => project.featured);
const supportingProjects = projects.filter((project) => !project.featured);

export default function ProjectsPage() {
  return (
    <main>
      <Section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-border/70" aria-hidden="true" />
        <Container>
          <div className="flex flex-col gap-6 border-b border-border/70 pb-8 sm:pb-10">
            <p className="text-caption font-medium tracking-[0.24em] text-muted-foreground">SELECTED WORK</p>
            <div className="max-w-3xl space-y-3">
              <Heading level={1} className="max-w-[14ch]">Projects built around practical problem solving.</Heading>
              <p className="text-body text-muted-foreground text-pretty">
                A collection of software projects focused on AI, NLP, backend systems, and polished product work.
              </p>
            </div>
          </div>

          {featuredProjects.length > 0 ? (
            <div className="mt-8 grid gap-5 lg:grid-cols-2">
              {featuredProjects.map((project) => (
                <ProjectCard key={project.slug} project={project} featured />
              ))}
            </div>
          ) : null}

          {supportingProjects.length > 0 ? (
            <div className="mt-8">
              <div className="mb-5 flex items-center justify-between gap-3">
                <h2 className="text-h3 font-semibold tracking-tight">Additional projects</h2>
                <Link href="/" className="link-base text-small">Back home</Link>
              </div>
              <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
                {supportingProjects.map((project) => (
                  <ProjectCard key={project.slug} project={project} />
                ))}
              </div>
            </div>
          ) : null}
        </Container>
      </Section>
    </main>
  );
}