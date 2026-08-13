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
            ENGINEERING STACK
          </p>
          <div className="max-w-2xl space-y-3">
            <Heading level={2} className="max-w-[18ch]">Technologies I use to design, build and ship software.</Heading>
            <p className="text-body text-muted-foreground text-pretty">
              Languages, frameworks, and tools I use to design, build, and ship software.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-10 sm:gap-12 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.category} className="flex flex-col gap-6">
              <SkillCategory group={group} />
            </div>
          ))}
        </div>
      </Container>
    </Section>
  );
}
