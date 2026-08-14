import type { CertificationEntry, EducationEntry, ExperienceEntry } from "@/types";

import { TimelineItem } from "./TimelineItem";
import { TimelineYear } from "./TimelineYear";

type CareerTimelineProps = Readonly<{
  experiences: ExperienceEntry[];
  certifications: CertificationEntry[];
  education: EducationEntry;
}>;

type TimelineEntry = {
  year: string;
  month: string;
  label: string;
  title: string;
  organization?: string;
  description?: string;
  skills?: string[];
  credentialUrl?: string;
};

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", { month: "long", year: "numeric", timeZone: "UTC" }).format(new Date(`${date}-01T00:00:00Z`));
}

export function CareerTimeline({ experiences, certifications, education }: CareerTimelineProps) {
  const entries: TimelineEntry[] = [
    ...experiences.map((entry) => ({
      year: entry.startDate.slice(0, 4),
      month: entry.startDate,
      label: `${entry.type} · ${entry.endDate ? `${formatDate(entry.startDate)} – ${formatDate(entry.endDate)}` : formatDate(entry.startDate)}`,
      title: entry.title,
      organization: entry.organization,
      description: entry.description,
      skills: entry.skills,
      credentialUrl: entry.credentialUrl,
    })),
    ...certifications.map((entry) => ({
      year: entry.date.slice(0, 4),
      month: entry.date,
      label: `${entry.type} · ${formatDate(entry.date)}`,
      title: entry.name,
      organization: entry.organization,
      description: entry.description,
      skills: entry.skills,
      credentialUrl: entry.credentialUrl,
    })),
    ...(education.expectedGraduation
      ? [{
          year: education.expectedGraduation,
          month: `${education.expectedGraduation}-12`,
          label: "Academic experience · Expected graduation",
          title: education.program,
          organization: education.institution,
          description: education.academicBackground?.join(" · "),
        }]
      : []),
  ].sort((a, b) => a.month.localeCompare(b.month));

  const groupedEntries = Object.entries(Object.groupBy(entries, (entry) => entry.year));

  return (
    <div className="space-y-10" aria-label="Career and learning timeline">
      {groupedEntries.map(([year, yearEntries]) => (
        <TimelineYear key={year} year={year}>
          {yearEntries?.map((entry, index) => (
            <TimelineItem
              key={`${entry.month}-${entry.title}`}
              label={entry.label}
              title={entry.title}
              organization={entry.organization}
              isLast={index === yearEntries.length - 1}
            >
              {entry.description ? <p className="mt-3 text-body text-muted-foreground text-pretty">{entry.description}</p> : null}

              {entry.skills?.length ? (
                <div className="mt-4 flex flex-wrap gap-2" aria-label={`${entry.title} skills`}>
                  {entry.skills.map((skill) => (
                    <span key={skill} className="rounded-full border border-border bg-secondary px-2.5 py-1 text-caption text-foreground">
                      {skill}
                    </span>
                  ))}
                </div>
              ) : null}

              {entry.credentialUrl ? (
                <div className="mt-4">
                  <a href={entry.credentialUrl} target="_blank" rel="noreferrer noopener" className="link-base inline-flex items-center gap-1.5 text-small">
                    View credential
                    <span aria-hidden="true">↗</span>
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </div>
              ) : null}
            </TimelineItem>
          ))}
        </TimelineYear>
      ))}
    </div>
  );
}
