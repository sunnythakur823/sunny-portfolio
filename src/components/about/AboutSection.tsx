import Link from "next/link";

import { aboutProfile } from "@/data/about";
import { projects } from "@/data/projects";
import { Container, Section } from "@/components/ui";
import { ResumeAccess } from "./ResumeAccess";

import { EngineeringPrinciples } from "./EngineeringPrinciples";
import { EngineeringProcess } from "./EngineeringProcess";
import { TechnicalFocus } from "./TechnicalFocus";

export function AboutSection() {
  const hasWeb = projects.some((project) =>
    /Full-Stack|Full-Stack App|Business Website|Website/i.test(project.category),
  );

  const hasApi = projects.some(
    (project) =>
      /API/i.test(project.category) ||
      project.technologies?.some((technology) => /Python|Flask/i.test(technology)),
  );

  const hasAi = projects.some((project) =>
    project.technologies?.some((technology) => /AI|NLP/i.test(technology)),
  );

  const projectCategories = [
    hasWeb
      ? {
          title: "Full-Stack Web Applications",
          description:
            "I build practical web products focused on usability, maintainability, and clear product value.",
        }
      : null,
    hasApi
      ? {
          title: "APIs & Backend Systems",
          description:
            "I enjoy building backend logic, APIs, and data flows that support real user-facing features.",
        }
      : null,
    hasAi
      ? {
          title: "AI / ML Applications",
          description:
            "I explore AI and NLP projects that help solve meaningful problems with intelligent workflows.",
        }
      : null,
    {
      title: "Cloud-Oriented Solutions",
      description:
        "I am learning how cloud platforms and scalable systems support modern software delivery.",
    },
  ].filter(Boolean) as Array<{ title: string; description: string }>;

  return (
    <Section
      id="about"
      className="relative overflow-hidden border-t border-border/70"
    >
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.15fr)_22rem] lg:gap-14 xl:gap-20">
          <div className="space-y-12">
            <header className="space-y-6">
              <p className="text-caption font-medium tracking-[0.24em] text-muted-foreground">
                ABOUT
              </p>

              <h1 className="max-w-[18ch] text-h1 text-balance">
                Building practical software with an engineering mindset.
              </h1>

              <p className="max-w-3xl text-body leading-7 text-muted-foreground text-pretty">
                {aboutProfile.introduction}
              </p>
            </header>

            <section
              className="space-y-5"
              aria-labelledby="profile-summary-heading"
            >
              <p className="text-caption font-medium tracking-[0.16em] text-muted-foreground">
                PROFILE
              </p>

              <div className="rounded-3xl border border-border/70 bg-card p-6 sm:p-7">
                <h2
                  id="profile-summary-heading"
                  className="max-w-2xl text-h3 text-balance"
                >
                  A BCA developer focused on solving real problems.
                </h2>

                <p className="mt-4 max-w-3xl text-small leading-7 text-muted-foreground">
                  I am a BCA student and software developer who learns by
                  building practical projects rather than only academically.
                  My interests include AI/ML, full-stack development, backend
                  systems, cloud technologies, and modern web products. I enjoy
                  working through real engineering decisions: architecture,
                  usability, reliability, and performance.
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-2xl border border-border/70 bg-secondary p-4">
                    <p className="text-caption text-muted-foreground">
                      Education
                    </p>
                    <p className="mt-2 text-small font-semibold text-foreground">
                      BCA
                    </p>
                    <p className="mt-1 text-small text-muted-foreground">
                      Amity University Jharkhand
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border/70 bg-secondary p-4">
                    <p className="text-caption text-muted-foreground">
                      Graduation
                    </p>
                    <p className="mt-2 text-small font-semibold text-foreground">
                      2027
                    </p>
                    <p className="mt-1 text-small text-muted-foreground">
                      Expected
                    </p>
                  </div>

                  <div className="rounded-2xl border border-border/70 bg-secondary p-4">
                    <p className="text-caption text-muted-foreground">
                      Focus
                    </p>
                    <p className="mt-2 text-small font-semibold text-foreground">
                      AI / Full-Stack
                    </p>
                    <p className="mt-1 text-small text-muted-foreground">
                      Cloud & backend
                    </p>
                  </div>
                </div>
              </div>
            </section>

            <section aria-labelledby="what-i-build-heading">
              <p className="text-caption font-medium tracking-[0.16em] text-muted-foreground">
                WHAT I BUILD
              </p>

              <h3
                id="what-i-build-heading"
                className="mt-3 max-w-2xl text-h3 text-balance"
              >
                Practical applications with product thinking.
              </h3>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {projectCategories.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-border/70 bg-card p-5 transition-colors hover:border-border"
                  >
                    <p className="text-caption font-medium text-muted-foreground">
                      {item.title}
                    </p>

                    <p className="mt-3 text-small leading-6 text-foreground">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            <EngineeringPrinciples principles={aboutProfile.principles} />

            <TechnicalFocus areas={aboutProfile.technicalFocus} />

            <section
              className="border-t border-border/70 pt-9"
              aria-labelledby="learning-direction-heading"
            >
              <p className="text-caption font-medium tracking-[0.16em] text-muted-foreground">
                CURRENT LEARNING DIRECTION
              </p>

              <h3
                id="learning-direction-heading"
                className="mt-3 max-w-2xl text-h3 text-balance"
              >
                Continuously building depth through real work.
              </h3>

              <ul
                className="mt-6 flex flex-wrap gap-2"
                aria-label="Current learning areas"
              >
                {aboutProfile.learningAreas.map((area) => (
                  <li key={area} className="badge-base bg-card">
                    {area}
                  </li>
                ))}
              </ul>
            </section>

            <section
              className="border-t border-border/70 pt-9"
              aria-labelledby="career-direction-heading"
            >
              <p className="text-caption font-medium tracking-[0.16em] text-muted-foreground">
                CAREER DIRECTION
              </p>

              <h3
                id="career-direction-heading"
                className="mt-3 max-w-3xl text-h3 text-balance"
              >
                Building toward software engineering roles with strong
                problem-solving fundamentals.
              </h3>

              <p className="mt-4 max-w-3xl text-body leading-7 text-muted-foreground text-pretty">
                I am actively building toward opportunities in full-stack
                development, backend engineering, AI/ML, cloud-focused
                software, and product-oriented engineering work. My goal is to
                grow as a practical software developer who can translate ideas
                into useful, maintainable solutions.
              </p>
            </section>

            <div className="flex flex-col gap-3 border-t border-border/70 pt-9 sm:flex-row">
              <Link
                href="/projects"
                className="button-base bg-primary px-5 py-3 text-sm text-white"
              >
                View Projects
              </Link>
              <ResumeAccess />

              <Link
                href="/contact"
                className="button-base border-border bg-transparent px-5 py-3 text-sm text-muted-foreground hover:text-foreground"
              >
                Contact Me
              </Link>
            </div>
          </div>

          <aside className="space-y-6 lg:pt-12">
            <EngineeringProcess />
          </aside>
        </div>
      </Container>
    </Section>
  );
}



