import type { SkillGroup } from "@/types";

import { SkillItem } from "./SkillItem";

type SkillCategoryProps = Readonly<{ group: SkillGroup }>;

export function SkillCategory({ group }: SkillCategoryProps) {
  return (
    <section className="flex flex-col gap-4 border-t border-border/70 pt-6 sm:gap-5" aria-labelledby={`${group.category}-heading`}>
      <div className="space-y-2">
        <h3 id={`${group.category}-heading`} className="text-h3 font-semibold tracking-tight">{group.category}</h3>
        {group.description ? <p className="text-body text-muted-foreground text-pretty">{group.description}</p> : null}
      </div>
      <ul className="grid gap-3">
        {group.skills.map((skill) => <SkillItem key={skill.name} skill={skill} />)}
      </ul>
    </section>
  );
}
