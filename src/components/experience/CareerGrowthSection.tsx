import { certificationEntries } from "@/data/certifications";
import { achievements, education, experienceEntries } from "@/data/experience";
import { Container, Section } from "@/components/ui";

import { CareerTimeline } from "./CareerTimeline";

export function CareerGrowthSection() {
  return (
    <Section id="career" className="border-t border-border/70">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(18rem,0.65fr)] lg:gap-16">
          <div>
            <p className="text-caption font-medium tracking-[0.24em] text-muted-foreground">
              CAREER &amp; GROWTH
            </p>

            <h1 className="mt-4 max-w-[16ch] text-h1 text-balance">
              Building a technical foundation, one step at a time.
            </h1>

            <p className="mt-6 max-w-2xl text-body leading-7 text-muted-foreground text-pretty">
              Education, learning programs, and practical experiences that shape
              my path as an aspiring software developer.
            </p>

            <div className="mt-10">
              <CareerTimeline
                experiences={experienceEntries}
                certifications={certificationEntries}
                education={education}
              />
            </div>
          </div>

          <aside
            className="h-fit border-y border-border/70 py-8 lg:sticky lg:top-28"
            aria-labelledby="education-heading"
          >
            <p className="text-caption font-medium tracking-[0.16em] text-muted-foreground">
              EDUCATION
            </p>

            <h2 id="education-heading" className="mt-3 text-h3">
              {education.program}
            </h2>

            <p className="mt-1 text-body text-muted-foreground">
              {education.institution}
            </p>

            <div className="mt-5 inline-flex items-center rounded-full border border-border bg-secondary px-3 py-1.5 text-caption font-medium text-foreground">
              Expected Graduation · {education.expectedGraduation}
            </div>

            {education.academicBackground?.length ? (
              <div className="mt-8 border-t border-border/70 pt-6">
                <p className="text-caption font-medium tracking-[0.16em] text-muted-foreground">
                  ACADEMIC BACKGROUND
                </p>

                <div className="mt-5 space-y-4">
                  {education.academicBackground.map((item) => {
                    const isClass12 = item.startsWith("Class 12");
                    const title = isClass12
                      ? "Class 12 — Commerce"
                      : "Class 10";

                    const details = isClass12
                      ? "St. Aloysius Plus 2 School, Ranchi"
                      : "St. Kuldeep High School, Harmu";

                    const result = isClass12
                      ? "68.20% · 2024"
                      : "84.80% · 2022";

                    return (
                      <article
                        key={item}
                        className="rounded-2xl border border-border/70 bg-card p-4 transition-colors hover:border-border"
                      >
                        <div className="flex items-start justify-between gap-4">
                          <div>
                            <h3 className="text-small font-semibold text-foreground">
                              {title}
                            </h3>

                            <p className="mt-1 text-small leading-6 text-muted-foreground">
                              {details}
                            </p>
                          </div>

                          <span className="shrink-0 rounded-full bg-secondary px-2.5 py-1 text-caption font-medium text-foreground">
                            {result}
                          </span>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            ) : null}
          </aside>
        </div>

        {achievements.length ? (
          <section
            className="mt-12 border-t border-border/70 pt-9"
            aria-labelledby="achievements-heading"
          >
            <p className="text-caption font-medium tracking-[0.16em] text-muted-foreground">
              ACHIEVEMENTS
            </p>

            <h2 id="achievements-heading" className="mt-3 text-h3">
              Verified milestones.
            </h2>

            <ul className="mt-6 grid gap-3 sm:grid-cols-2">
              {achievements.map((achievement) => (
                <li
                  key={achievement.title}
                  className="rounded-2xl border border-border/70 bg-card p-5 text-small transition-colors hover:border-border"
                >
                  {achievement.title}
                </li>
              ))}
            </ul>
          </section>
        ) : null}
      </Container>
    </Section>
  );
}
