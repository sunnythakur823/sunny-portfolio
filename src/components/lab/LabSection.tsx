import { Container, Section } from "@/components/ui";
import { labExperiments } from "@/data/lab";

import { LabExperimentCard } from "./LabExperimentCard";

export function LabSection() {
  const displayedExperiments = labExperiments.filter((experiment) => experiment.featured !== false);
  return (
    <Section id="lab" className="relative overflow-hidden border-t border-border/70">
      <div className="hero-grid-overlay pointer-events-none absolute inset-0 -z-10 opacity-40" aria-hidden="true" />
      <Container>
        <div className="border-b border-border/70 pb-8 sm:pb-10">
          <p className="font-mono text-caption font-medium tracking-[0.24em] text-muted-foreground">LAB</p>
          <h2 className="mt-4 max-w-[17ch] text-h1 text-balance">Experiments, prototypes and technical explorations.</h2>
          <p className="mt-6 max-w-2xl text-body text-muted-foreground text-pretty">A space for verified exploratory work, kept separate from polished project case studies.</p>
        </div>
        {displayedExperiments.length ? <div className="mt-10 grid gap-x-8 gap-y-10 md:grid-cols-2 xl:grid-cols-3">{displayedExperiments.map((experiment, index) => <LabExperimentCard key={experiment.id} experiment={experiment} index={index} />)}</div> : <div className="mt-10 border-t border-border/70 py-8"><p className="font-mono text-caption text-muted-foreground">LAB / PENDING</p><p className="mt-3 text-body text-muted-foreground">More experiments are coming soon.</p></div>}
      </Container>
    </Section>
  );
}
