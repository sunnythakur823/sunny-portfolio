import Link from "next/link";

import { getProjectBySlug } from "@/data/projects";
import type { SkillTechnology } from "@/types";

export function SkillItem({ skill }: Readonly<{ skill: SkillTechnology }>) {
  const relatedProjects = skill.relatedProjects
    ?.map((slug) => getProjectBySlug(slug))
    .filter((project): project is NonNullable<typeof project> => Boolean(project));

  const content = (
    <>
      <span className="text-small font-medium text-foreground">{skill.name}</span>
      {relatedProjects?.length ? (
        <span aria-hidden="true" className="text-primary transition-transform duration-200 motion-reduce:transition-none group-hover:translate-x-0.5">
          ↗
        </span>
      ) : null}
    </>
  );

  if (relatedProjects?.length) {
    return (
      <li className="group">
        <Link
          href={`/projects/${relatedProjects[0].slug}`}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/80 px-3 py-2 text-small transition-[border-color,background-color,transform,box-shadow] duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:border-primary/40 hover:bg-accent/40 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          aria-label={`View ${skill.name} project work`}
        >
          {content}
        </Link>
      </li>
    );
  }

  return (
    <li className="inline-flex items-center rounded-full border border-border bg-secondary/80 px-3 py-2 text-small transition-[border-color,background-color] duration-200 motion-reduce:transition-none hover:border-primary/40 hover:bg-accent/40">
      {content}
    </li>
  );
}
