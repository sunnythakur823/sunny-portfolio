import Link from "next/link";

import { getProjectBySlug } from "@/data/projects";
import type { SkillTechnology } from "@/types";

export function SkillItem({ skill }: Readonly<{ skill: SkillTechnology }>) {
  const relatedProjects = skill.relatedProjects
    ?.map((slug) => getProjectBySlug(slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  return (
    <li className="group rounded-2xl border border-border bg-card p-4 transition-[border-color,background-color,transform] duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent/45">
      <p className="inline-flex items-center gap-2 text-small font-medium text-foreground">
        {skill.name}
        <span aria-hidden="true" className="text-primary transition-transform duration-200 motion-reduce:transition-none group-hover:translate-x-0.5">→</span>
      </p>
      {relatedProjects?.length ? (
        <div className="mt-3 flex flex-wrap gap-x-3 gap-y-2 border-t border-border/70 pt-3">
          <span className="text-caption text-muted-foreground">Related work</span>
          {relatedProjects.map((project) => (
            <Link key={project.slug} href={`/projects/${project.slug}`} className="link-base text-small">
              {project.title}
            </Link>
          ))}
        </div>
      ) : null}
    </li>
  );
}
