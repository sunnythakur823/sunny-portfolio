import type { LabExperiment } from "@/types";

import { Card } from "@/components/ui";

function formatDate(date: string) {
  const parsedDate = new Date(date);
  return Number.isNaN(parsedDate.valueOf())
    ? undefined
    : new Intl.DateTimeFormat("en", {
        month: "short",
        year: "numeric",
        timeZone: "UTC",
      }).format(parsedDate);
}

export function LabExperimentCard({ experiment, index }: Readonly<{ experiment: LabExperiment; index: number }>) {
  const formattedDate = experiment.date ? formatDate(experiment.date) : undefined;

  return (
    <Card className="group flex h-full flex-col p-5 transition-[transform,border-color,box-shadow] duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:border-primary/40 hover:shadow-[0_12px_24px_rgba(15,23,42,0.06)] sm:p-6" elevated>
      <div className="flex items-start justify-between gap-3">
        <p className="text-caption font-medium tracking-[0.15em] text-primary">LAB / {String(index + 1).padStart(3, "0")}</p>
        {experiment.status ? (
          <span className="rounded-full border border-border bg-secondary px-2 py-1 text-caption text-foreground">
            {experiment.status}
          </span>
        ) : null}
      </div>

      <p className="mt-5 text-caption text-muted-foreground">{experiment.category}</p>
      <h3 className="mt-2 text-h3 text-balance text-foreground">{experiment.title}</h3>
      <p className="mt-3 text-small leading-6 text-muted-foreground text-pretty">{experiment.description}</p>

      {experiment.technologies?.length ? (
        <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${experiment.title} technologies`}>
          {experiment.technologies.map((technology) => (
            <li key={technology} className="rounded-full border border-border bg-secondary px-2.5 py-1 text-caption text-foreground">
              {technology}
            </li>
          ))}
        </ul>
      ) : null}

      <div className="mt-auto flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-border/70 pt-4 text-small text-muted-foreground">
        {formattedDate ? <span>{formattedDate}</span> : null}
        {experiment.githubUrl ? (
          <a href={experiment.githubUrl} target="_blank" rel="noreferrer noopener" className="link-base">
            Source <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : null}
        {experiment.liveUrl ? (
          <a href={experiment.liveUrl} target="_blank" rel="noreferrer noopener" className="link-base">
            Open experiment <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        ) : null}
      </div>
    </Card>
  );
}
