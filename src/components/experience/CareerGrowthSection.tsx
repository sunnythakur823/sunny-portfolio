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
            <p className="text-caption font-medium tracking-[0.24em] text-muted-foreground">CAREER &amp; GROWTH</p>
            <h2 className="mt-4 max-w-[16ch] text-h1 text-balance">Building a technical foundation, one step at a time.</h2>
            <p className="mt-6 max-w-2xl text-body text-muted-foreground text-pretty">Education, learning programs, and practical experiences that shape my path as an aspiring Software Developer.</p>
            <div className="mt-10"><CareerTimeline experiences={experienceEntries} certifications={certificationEntries} education={education} /></div>
          </div>

          <aside className="h-fit border-y border-border/70 py-8 lg:sticky lg:top-28" aria-labelledby="education-heading">
            <p className="text-caption font-medium text-muted-foreground">Education</p>
            <h3 id="education-heading" className="mt-3 text-h3">{education.program}</h3>
            <p className="mt-1 text-body text-muted-foreground">{education.institution}</p>
            {education.expectedGraduation ? <p className="mt-5 text-small"><span className="text-muted-foreground">Expected graduation </span>{education.expectedGraduation}</p> : null}
            {education.academicBackground?.length ? <div className="mt-8 border-t border-border/70 pt-5"><p className="text-caption font-medium text-muted-foreground">Academic background</p><ul className="mt-3 space-y-2 text-small text-muted-foreground">{education.academicBackground.map((item) => <li key={item}>{item}</li>)}</ul></div> : null}
          </aside>
        </div>
        {achievements.length ? <section className="mt-12 border-t border-border/70 pt-8" aria-labelledby="achievements-heading"><p className="text-caption font-medium text-muted-foreground">Achievements</p><h3 id="achievements-heading" className="mt-3 text-h3">Verified milestones</h3><ul className="mt-6 grid gap-3 sm:grid-cols-2">{achievements.map((achievement) => <li key={achievement.title} className="rounded-xl border border-border bg-card p-4 text-small">{achievement.title}</li>)}</ul></section> : null}
      </Container>
    </Section>
  );
}
