import { Container, Heading, Section } from "@/components/ui";
import { skillGroups } from "@/data/skills";

import { SkillCategory } from "./SkillCategory";

export function SkillsSection() {
  return (
    <Section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-border/70" aria-hidden="true" />
      <Container>
        <div className="flex flex-col gap-3 border-b border-border/70 pb-8 sm:pb-10">
          <p className="text-caption font-medium tracking-[0.24em] text-muted-foreground">
            TECHNICAL STACK
          </p>
          <div className="max-w-3xl space-y-3">
            <Heading level={2} className="max-w-[18ch]">Technology stack built around practical product work.</Heading>
            <p className="text-body text-muted-foreground text-pretty">
              A concise description of the technologies and engineering areas I currently work with and learn through projects.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <SkillCategory key={group.category} group={group} index={index} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
