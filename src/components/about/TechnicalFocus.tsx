import type { TechnicalFocusArea } from "@/data/about";

type TechnicalFocusProps = Readonly<{ areas: TechnicalFocusArea[] }>;

export function TechnicalFocus({ areas }: TechnicalFocusProps) {
  return (
    <section className="border-t border-border/70 pt-8" aria-labelledby="technical-focus-heading">
      <p className="text-caption font-medium text-muted-foreground">Technical focus</p>
      <h3 id="technical-focus-heading" className="mt-3 text-h3">Areas I am exploring</h3>
      <div className="mt-6 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
        {areas.map((area) => (
          <div key={area.label} className="min-h-32 bg-card p-5">
            <p className="text-caption font-medium text-muted-foreground">{area.label}</p>
            {area.technologies.length ? (
              <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${area.label} technologies`}>
                {area.technologies.map((technology) => <li key={technology} className="badge-base bg-secondary">{technology}</li>)}
              </ul>
            ) : (
              <p className="mt-4 text-small text-muted-foreground">Technologies will be added as they are verified.</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
