import type { ReactNode } from "react";

export function TimelineYear({ year, children }: Readonly<{ year: string; children: ReactNode }>) {
  return (
    <section className="grid gap-5 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-8" aria-labelledby={`timeline-${year}`}>
      <h3 id={`timeline-${year}`} className="font-mono text-h3 text-primary">{year}</h3>
      <ol className="space-y-0">{children}</ol>
    </section>
  );
}
