import { aboutProfile } from "@/data/about";
import { projects } from "@/data/projects";
import { Container, Section } from "@/components/ui";

import { EngineeringPrinciples } from "./EngineeringPrinciples";
import { EngineeringProcess } from "./EngineeringProcess";
import { TechnicalFocus } from "./TechnicalFocus";

export function AboutSection() {
  const hasWeb = projects.some((project) => /Full-Stack|Full-Stack App|Business Website|Website/i.test(project.category));
  const hasApi = projects.some((project) => /API/i.test(project.category) || project.technologies?.some((technology) => /Python|Flask/i.test(technology)));
  const hasAi = projects.some((project) => project.technologies?.some((technology) => /AI|NLP/i.test(technology)));

  const projectCategories = [
    hasWeb ? { title: "Web Applications", description: "Full‑stack apps and business websites that deliver real value." } : null,
    hasApi ? { title: "APIs & Backend", description: "APIs and backend services for data-driven features." } : null,
    hasAi ? { title: "AI & NLP", description: "AI and NLP projects focused on practical problem solving." } : null,
  ].filter(Boolean) as Array<{ title: string; description: string }>;

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
                  {projectCategories.map((item) => (
                    <div key={item.title} className="rounded-2xl border border-border/70 bg-card p-5">
                      <p className="text-caption font-medium text-muted-foreground">{item.title}</p>
                      <p className="mt-3 text-small text-foreground">{item.description}</p>
                    </div>
                  ))}
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
