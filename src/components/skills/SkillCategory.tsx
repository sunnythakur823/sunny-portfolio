import type { SkillGroup } from "@/types";

import { SkillItem } from "./SkillItem";

type SkillCategoryProps = Readonly<{ group: SkillGroup; index: number }>;

export function SkillCategory({ group, index }: SkillCategoryProps) {
  const sectionId = group.category.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
  const numberLabel = String(index + 1).padStart(2, "0");

  return (
    <section
      className="flex h-full flex-col gap-5 rounded-[1.5rem] border border-border bg-card/85 p-5 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-[border-color,transform,box-shadow] duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)] sm:p-6"
      aria-labelledby={`${sectionId}-heading`}
    >
      <div className="flex items-center justify-between gap-3 border-b border-border/70 pb-4">
        <span className="text-caption font-medium tracking-[0.28em] text-primary">{numberLabel}</span>
      </div>

      <div className="space-y-3">
        <h3 id={`${sectionId}-heading`} className="text-h3 font-semibold tracking-tight text-foreground">
          {group.category}
        </h3>
        {group.description ? (
          <p className="text-small text-muted-foreground text-pretty sm:text-body">{group.description}</p>
        ) : null}
      </div>

      <ul className="mt-auto flex flex-wrap gap-2 pt-1" aria-label={`${group.category} technologies`}>
        {group.skills.map((skill) => (
          <SkillItem key={skill.name} skill={skill} />
        ))}
      </ul>
    </section>
  );
}
