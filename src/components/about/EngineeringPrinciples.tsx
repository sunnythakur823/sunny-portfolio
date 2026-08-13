type EngineeringPrinciplesProps = Readonly<{ principles: string[] }>;

export function EngineeringPrinciples({ principles }: EngineeringPrinciplesProps) {
  return (
    <section className="border-t border-border/70 pt-8" aria-labelledby="engineering-principles-heading">
      <p className="text-caption font-medium text-muted-foreground">Engineering principles</p>
      <h3 id="engineering-principles-heading" className="mt-3 text-h3">How I approach the work</h3>
      <ol className="mt-6 grid gap-3 sm:grid-cols-2">
        {principles.map((principle, index) => (
          <li key={principle} className="flex gap-3 border-t border-border/70 py-3 text-small text-muted-foreground">
            <span className="font-mono text-caption text-primary" aria-hidden="true">0{index + 1}</span>
            <span>{principle}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
