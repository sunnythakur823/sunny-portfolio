import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/ui";
import { ProjectDetails, ProjectHero, ProjectLinks, ProjectNavigation } from "@/components/projects";
import { getProjectBySlug, getProjectSlugs, projects } from "@/data/projects";

type ProjectCaseStudyPageProps = Readonly<{ params: Promise<{ slug: string }> }>;

export function generateStaticParams() {
  return getProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: ProjectCaseStudyPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);

  if (!project) return {};

  return { title: `${project.title} | Project Case Study`, description: project.shortDescription };
}

export default async function ProjectCaseStudyPage({ params }: ProjectCaseStudyPageProps) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  const projectIndex = projects.findIndex((item) => item.slug === project.slug);
  const previous = projects[projectIndex - 1];
  const next = projects[projectIndex + 1];

  return (
    <main>
      <ProjectHero project={project} />
      <Container className="max-w-5xl">
        <ProjectDetails project={project} />
        <ProjectLinks project={project} />
        <ProjectNavigation previous={previous} next={next} />
      </Container>
    </main>
  );
}
