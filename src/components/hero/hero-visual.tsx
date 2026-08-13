import { Card } from "@/components/ui";

const technicalLabels = ["React", "Next.js", "TypeScript", "Tailwind", "AI", "Cloud"];

export function HeroVisual() {
  return (
    <div className="hero-fade-up-delay-2 relative lg:pl-8">
      <div className="hero-visual-panel hero-lift relative mx-auto w-full max-w-[34rem] p-4 sm:p-6">
        <div className="hero-grid-overlay absolute inset-0 opacity-70" aria-hidden="true" />
        <div className="hero-noise absolute inset-0 pointer-events-none" aria-hidden="true" />

        <div className="relative grid gap-4">
          <div className="flex items-center justify-between gap-4 rounded-2xl border border-border/70 bg-background/60 px-4 py-3 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <span className="h-2.5 w-2.5 rounded-full bg-primary" aria-hidden="true" />
              <div>
                <p className="text-small font-medium text-foreground">System overview</p>
                <p className="text-caption text-muted-foreground">Portfolio engineering stack</p>
              </div>
            </div>
            <span className="text-caption text-muted-foreground">v1</span>
          </div>

          <div className="grid gap-4 sm:grid-cols-[1.2fr_0.8fr]">
            <Card className="relative overflow-hidden p-4 sm:p-5" elevated>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <p className="text-caption text-muted-foreground">Build focus</p>
                  <p className="mt-1 text-h3">Software products</p>
                </div>
                <span className="rounded-full border border-border bg-secondary px-2.5 py-1 text-caption text-muted-foreground">
                  Stable
                </span>
              </div>

              <div className="mt-5 space-y-3">
                <div className="h-px w-full bg-border/70" />
                <div className="grid gap-2 text-small text-muted-foreground">
                  <div className="flex items-center justify-between">
                    <span>Architecture</span>
                    <span className="text-foreground">App Router</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>UI language</span>
                    <span className="text-foreground">Minimal, premium</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Focus</span>
                    <span className="text-foreground">Product + engineering</span>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-4 sm:p-5" elevated>
              <p className="text-caption text-muted-foreground">Technical stack</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {technicalLabels.map((label) => (
                  <span
                    key={label}
                    className="rounded-full border border-border bg-card px-3 py-1.5 text-caption text-foreground"
                  >
                    {label}
                  </span>
                ))}
              </div>

              <div className="mt-6 rounded-2xl border border-border/70 bg-background/70 p-4">
                <div className="flex items-center justify-between text-caption text-muted-foreground">
                  <span>Current direction</span>
                  <span>2026</span>
                </div>
                <pre className="text-code mt-3 overflow-x-auto text-small text-foreground/90">
{`focus: "full-stack"
interest: ["AI", "cloud"]
style: "premium product"`}
                </pre>
              </div>
            </Card>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["Delivery", "Modern web experiences"],
              ["Systems", "Scalable architecture"],
              ["Interface", "Technical clarity"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-border/70 bg-background/60 px-4 py-3 backdrop-blur-sm"
              >
                <p className="text-caption text-muted-foreground">{label}</p>
                <p className="mt-1 text-small font-medium text-foreground">{value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}