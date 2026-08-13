const processSteps = ["Problem", "Research", "Design", "Build", "Test", "Deploy", "Improve"];

export function EngineeringProcess() {
  return (
    <aside className="relative overflow-hidden rounded-2xl border border-border bg-secondary p-6 sm:p-8" aria-labelledby="engineering-process-heading">
      <div className="hero-grid-overlay pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="relative">
        <p className="text-caption font-medium text-muted-foreground">Working model</p>
        <h3 id="engineering-process-heading" className="mt-3 text-h3">A practical engineering loop</h3>
        <ol className="mt-8 grid gap-0">
          {processSteps.map((step, index) => (
            <li key={step} className="grid grid-cols-[2rem_1fr] gap-3">
              <span className="relative flex justify-center" aria-hidden="true">
                <span className="z-10 mt-0.5 flex h-5 w-5 items-center justify-center rounded-full border border-primary/35 bg-card text-[0.65rem] font-medium text-primary">{index + 1}</span>
                {index < processSteps.length - 1 ? <span className="absolute top-6 h-[calc(100%-0.25rem)] w-px bg-border" /> : null}
              </span>
              <span className="pb-5 text-small font-medium text-foreground">{step}</span>
            </li>
          ))}
        </ol>
      </div>
    </aside>
  );
}
