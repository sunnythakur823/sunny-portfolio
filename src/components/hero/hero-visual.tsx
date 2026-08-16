import Image from "next/image";

import { Card } from "@/components/ui";

const technicalLabels = [
  "React",
  "Next.js",
  "TypeScript",
  "Python",
  "AI/ML",
  "AWS",
];

export function HeroVisual() {
  return (
    <div className="hero-fade-up-delay-2 relative lg:pl-8">
      <div className="hero-visual-panel hero-lift relative mx-auto w-full max-w-full p-3 sm:p-4">
        <div
          className="hero-grid-overlay absolute inset-0 opacity-70"
          aria-hidden="true"
        />
        <div
          className="hero-noise pointer-events-none absolute inset-0"
          aria-hidden="true"
        />

        <div className="relative grid gap-4">
          <Card className="overflow-hidden p-0" elevated>
            <div className="grid sm:grid-cols-[0.9fr_1.1fr]">
              <div className="relative aspect-[4/5] min-h-[360px] overflow-hidden sm:min-h-[400px]">
                <Image
                  src="/images/profile.png"
                  alt="Sunny Kumar - BCA Developer"
                  fill
                  priority
                  sizes="(max-width: 640px) 100vw, 45vw"
                  className="object-cover object-top"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent p-5 pt-20">
                  <p className="text-caption font-medium uppercase tracking-[0.18em] text-white/70">
                    Sunny Kumar
                  </p>
                  <p className="mt-1 text-small font-medium text-white">
                    BCA Developer
                  </p>
                </div>
              </div>

              <div className="flex flex-col justify-between p-5 sm:p-6">
                <div>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-2">
                      <span
                        className="h-2.5 w-2.5 rounded-full bg-primary"
                        aria-hidden="true"
                      />
                      <span className="text-caption text-muted-foreground">
                        Developer profile
                      </span>
                    </div>

                    <span className="rounded-full border border-border bg-secondary px-2.5 py-1 text-caption text-muted-foreground">
                      2026
                    </span>
                  </div>

                  <h3 className="mt-6 text-h2">
                    Building practical software products.
                  </h3>

                  <p className="mt-4 text-small leading-6 text-muted-foreground">
                    Focused on AI/ML, full-stack development, modern web
                    engineering, and cloud technologies.
                  </p>
                </div>

                <div className="mt-8">
                  <p className="text-caption text-muted-foreground">
                    Technical focus
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {technicalLabels.map((label) => (
                      <span
                        key={label}
                        className="rounded-full border border-border bg-card px-3 py-1.5 text-caption text-foreground"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              ["AI / ML", "Practical intelligent systems"],
              ["Full-Stack", "Modern web applications"],
              ["Cloud", "Scalable engineering"],
            ].map(([label, value]) => (
              <div
                key={label}
                className="rounded-2xl border border-border/70 bg-background/60 px-4 py-4 backdrop-blur-sm"
              >
                <p className="text-caption text-muted-foreground">{label}</p>
                <p className="mt-1 text-small font-medium text-foreground">
                  {value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
