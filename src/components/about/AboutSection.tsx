import { aboutProfile } from "@/data/about";
import { projects } from "@/data/projects";
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
            <h2 className="mt-4 max-w-[18ch] text-h1 text-balance">Engineering mindset. Practical execution.</h2>
            <p className="mt-6 max-w-2xl text-body text-muted-foreground text-pretty">{aboutProfile.introduction}</p>

            <div className="mt-10 space-y-10">
              <section aria-labelledby="what-i-build-heading">
                <p className="text-caption font-medium text-muted-foreground">WHAT I BUILD</p>
                <h3 id="what-i-build-heading" className="mt-3 text-h3">Practical applications with clear value</h3>
                <div className="mt-6 grid gap-4 sm:grid-cols-2">
                  {/* Derive categories from existing projects and present concise descriptions */}
                  {(() => {
                    const hasWeb = projects.some((p) => /Full-Stack|Full-Stack App|Business Website|Website/i.test(p.category));
                    const hasAI = projects.some((p) => p.technologies?.some((t) => /AI|NLP/i.test(t)));
                    const hasApi = projects.some((p) => /API/i.test(p.category) || p.technologies?.some((t) => /Python|Flask/i.test(t)));

                    const items: { title: string; description: string; tech?: string[] }[] = [];

                    if (hasWeb) items.push({ title: "Web Applications", description: "Full‑stack apps and business websites that deliver real value.", tech: [] });
                    if (hasApi) items.push({ title: "APIs & Backend", description: "APIs and backend services for data-driven features.", tech: [] });
                    if (hasAI) items.push({ title: "AI & NLP", description: "AI and NLP projects focused on practical problem solving.", tech: [] });

                    return items.map((it) => (
                      <div key={it.title} className="rounded-2xl border border-border/70 bg-card p-5">
                        <p className="text-caption font-medium text-muted-foreground">{it.title}</p>
                        <p className="mt-3 text-small text-foreground">{it.description}</p>
                      </div>
                    ));
                  })()}
                </div>
              </section>

              <EngineeringPrinciples principles={aboutProfile.principles} />
              <TechnicalFocus areas={aboutProfile.technicalFocus} />

              <section className="border-t border-border/70 pt-8" aria-labelledby="learning-direction-heading">
                <p className="text-caption font-medium text-muted-foreground">Current learning direction</p>
                <h3 id="learning-direction-heading" className="mt-3 text-h3">Developing depth through practice</h3>
                <ul className="mt-6 flex flex-wrap gap-2" aria-label="Current learning areas">
                  {aboutProfile.learningAreas.map((area) => (
                    <li key={area} className="badge-base bg-card">
                      {area}
                    </li>
                  ))}
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
