import { Container, Heading, Section } from "@/components/ui";
import { certificationEntries } from "@/data/certifications";

import { CertificationCard } from "./CertificationCard";

export function CertificationsSection() {
  return (
    <Section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-px bg-border/70" aria-hidden="true" />
      <Container>
        <div className="flex flex-col gap-3 border-b border-border/70 pb-8 sm:pb-10">
          <p className="text-caption font-medium tracking-[0.24em] text-muted-foreground">CERTIFICATIONS &amp; LEARNING</p>
          <div className="max-w-3xl space-y-3">
            <Heading level={2} className="max-w-[18ch]">Learning credentials that support my software engineering path.</Heading>
            <p className="text-body text-muted-foreground text-pretty">
              Structured learning and technology foundations I have built through verified programs, platforms, and academic-focused learning pathways.
            </p>
          </div>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {certificationEntries.map((credential) => (
            <CertificationCard key={`${credential.name}-${credential.date}`} credential={credential} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
