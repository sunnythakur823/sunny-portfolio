import { aboutProfile } from "@/data/about";
import { Container, Section } from "@/components/ui";

import { EngineeringPrinciples } from "./EngineeringPrinciples";
import { EngineeringProcess } from "./EngineeringProcess";
import { TechnicalFocus } from "./TechnicalFocus";

export function AboutSection() {
  return (
    <Section id="about" className="relative overflow-hidden border-t border-border/70">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.7fr)] lg:gap-16">
          <div>
            <p className="text-caption font-medium tracking-[0.24em] text-muted-foreground">ABOUT</p>
            <h2 className="mt-4 max-w-[12ch] text-h1 text-balance">Building software, learning continuously.</h2>
            <p className="mt-6 max-w-2xl text-body text-muted-foreground text-pretty">{aboutProfile.introduction}</p>

            <div className="mt-10 space-y-10">
              <EngineeringPrinciples principles={aboutProfile.principles} />
              <TechnicalFocus areas={aboutProfile.technicalFocus} />
              <section className="border-t border-border/70 pt-8" aria-labelledby="learning-direction-heading">
                <p className="text-caption font-medium text-muted-foreground">Current learning direction</p>
                <h3 id="learning-direction-heading" className="mt-3 text-h3">Developing depth through practice</h3>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Current learning areas">
                  {aboutProfile.learningAreas.map((area) => <li key={area} className="badge-base bg-card">{area}</li>)}
                </ul>
              </section>
            </div>
          </div>
          <EngineeringProcess />
        </div>
      </Container>
    </Section>
  );
}
