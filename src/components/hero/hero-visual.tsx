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

const engineeringSnapshot = [
  ["AI / ML", "Intelligent systems"],
  ["Full-Stack", "Modern applications"],
  ["Cloud", "Scalable engineering"],
];

export function HeroVisual() {
  return (
    <div className="hero-fade-up-delay-2 relative w-full lg:pl-8">
      <div className="hero-visual-panel hero-lift relative mx-auto w-full max-w-[360px] p-2.5 sm:p-3">
        <div
          className="hero-grid-overlay pointer-events-none absolute inset-0 rounded-[inherit] opacity-50"
          aria-hidden="true"
        />

        <div
          className="hero-noise pointer-events-none absolute inset-0 rounded-[inherit]"
          aria-hidden="true"
        />

        <div className="relative flex flex-col gap-3">
          <Card
            className="overflow-hidden rounded-3xl p-0"
            elevated
          >
            <div className="flex flex-col">
              <div className="relative mx-auto mt-2 aspect-[4/5] w-full max-w-[245px] overflow-hidden rounded-2xl">
                <Image
                  src="/images/profile.png"
                  alt="Sunny Kumar - BCA Developer"
                  fill
                  priority
                  sizes="210px"
                  className="object-cover object-[50%_24%]"
                />

                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent p-4 pt-14">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-white/70">
                    Sunny Kumar
                  </p>

                  <p className="mt-1 text-xs font-medium text-white">
                    BCA Developer
                  </p>
                </div>
              </div>

              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span
                      className="h-2 w-2 rounded-full bg-primary"
                      aria-hidden="true"
                    />

                    <span className="text-[10px] font-medium uppercase tracking-[0.14em] text-muted-foreground">
                      Developer Profile
                    </span>
                  </div>

                  <span className="rounded-full border border-border bg-secondary px-2.5 py-1 text-[10px] text-muted-foreground">
                    2026
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-semibold leading-tight tracking-tight">
                  Building practical software products.
                </h3>

                <p className="mt-2.5 max-w-[34rem] text-xs leading-5 text-muted-foreground">
                  Focused on AI/ML, full-stack development, modern web
                  engineering, and cloud technologies.
                </p>

                <div className="mt-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                    Technical Focus
                  </p>

                  <div className="mt-2.5 flex flex-wrap gap-1.5">
                    {technicalLabels.map((label) => (
                      <span
                        key={label}
                        className="rounded-full border border-border bg-card px-2.5 py-1 text-[10px] font-medium text-foreground"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="grid grid-cols-3 gap-2">
            {engineeringSnapshot.map(([label, value]) => (
              <div
                key={label}
                className="min-h-[68px] rounded-xl border border-border/70 bg-background/60 px-2.5 py-2.5 backdrop-blur-sm"
              >
                <p className="text-[9px] font-semibold uppercase tracking-[0.1em] text-muted-foreground">
                  {label}
                </p>

                <p className="mt-1.5 text-[10px] font-medium leading-4 text-foreground">
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
