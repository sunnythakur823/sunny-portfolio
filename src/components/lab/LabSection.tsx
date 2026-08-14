import { Card, Container, Heading, Section } from "@/components/ui";
import { labExperiments } from "@/data/lab";

import { LabExperimentCard } from "./LabExperimentCard";

export function LabSection() {
  const displayedExperiments = labExperiments.filter((experiment) => experiment.featured !== false);

  return (
    <Section id="lab" className="relative overflow-hidden border-t border-border/70 bg-secondary/20">
      <div className="hero-grid-overlay pointer-events-none absolute inset-0 -z-10 opacity-40" aria-hidden="true" />
      <Container className="relative">
        <div className="border-b border-border/70 pb-8 sm:pb-10">
          <p className="text-caption font-medium tracking-[0.24em] text-muted-foreground">ENGINEERING LAB</p>
          <Heading level={1} className="mt-4 max-w-[14ch] text-balance">
            Experiments, prototypes, and technical exploration.
          </Heading>
          <p className="mt-6 max-w-2xl text-body text-muted-foreground text-pretty">
            A space for product ideas, tooling experiments, and technical learning that sits outside polished project case studies.
          </p>
        </div>

        {displayedExperiments.length ? (
          <div className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
            {displayedExperiments.map((experiment, index) => (
              <LabExperimentCard key={experiment.id} experiment={experiment} index={index} />
            ))}
          </div>
        ) : (
          <div className="mt-10 grid gap-6 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.7fr)]">
            <Card className="p-6 sm:p-8" elevated>
              <p className="text-caption font-medium tracking-[0.18em] text-muted-foreground">LAB / STATUS</p>
              <h2 className="mt-4 text-h2 text-foreground">No public experiments published yet.</h2>
              <p className="mt-4 max-w-2xl text-body text-muted-foreground text-pretty">
                This section is reserved for exploratory work, prototypes, and technical learning that is ready to share.
              </p>
            </Card>

            <Card className="p-6 sm:p-8">
              <p className="text-caption font-medium tracking-[0.18em] text-muted-foreground">WHAT BELONGS HERE</p>
              <ul className="mt-4 space-y-3 text-small leading-6 text-muted-foreground">
                <li>• Prototypes and proof-of-concepts</li>
                <li>• Technical experimentation and evaluation</li>
                <li>• Engineering learning and tooling exploration</li>
                <li>• Small iterations outside core portfolio projects</li>
              </ul>
            </Card>
          </div>
        )}
      </Container>
    </Section>
  );
}
