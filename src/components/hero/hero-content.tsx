import { Badge, Heading } from "@/components/ui";

import { HeroActions } from "./hero-actions";

type HeroContentProps = Readonly<{
  statusLabel?: string | undefined;
  resumeHref?: string | undefined;
}>;

export function HeroContent({ statusLabel, resumeHref }: HeroContentProps) {
  return (
    <div className="flex flex-col gap-7 lg:max-w-2xl">
      <div className="flex flex-col gap-4">
        <p className="hero-fade-up text-caption font-medium tracking-[0.24em] text-muted-foreground">SOFTWARE DEVELOPER</p>

        <div className="hero-lift flex flex-col gap-2">
          <Heading level={1} className="text-display max-w-[22ch] text-balance">
  Hi, I&apos;m Sunny Kumar.
  <br />
  I build practical software
  <br />
  for real-world problems.
</Heading>
        </div>

        <p className="hero-fade-up-delay-1 max-w-xl text-body text-muted-foreground text-pretty sm:text-lg">
          BCA student and aspiring software developer focused on building practical applications across software engineering, AI/ML, web development, and modern technologies.
        </p>
      </div>

      <HeroActions resumeHref={resumeHref} />

      {statusLabel ? (
        <div className="hero-fade-up-delay-4 flex flex-wrap items-center gap-3">
          <Badge tone="primary" className="text-[0.7rem] uppercase tracking-[0.18em]">{statusLabel}</Badge>
          <span className="text-small text-muted-foreground">Full-stack, AI, cloud, and product-minded engineering.</span>
        </div>
      ) : null}
    </div>
  );
}
