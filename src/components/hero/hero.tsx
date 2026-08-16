import fs from "fs";
import path from "path";

import { Container, Section } from "@/components/ui";
import { SITE_ROLE, RESUME_HREF } from "@/lib/constants";
import { contactData } from "@/data/contact";

import { HeroContent } from "./hero-content";
import { HeroVisual } from "./hero-visual";

export function Hero() {
  const hasResume = (() => {
    try {
      return fs.existsSync(path.join(process.cwd(), "public", RESUME_HREF.replace(/^\//, "")));
    } catch {
      return false;
    }
  })();

  const statusLabel = contactData.availability?.label;

  return (
    <Section className="relative overflow-hidden pt-10 sm:pt-14 lg:pt-16">
      <div className="hero-glow absolute inset-0 -z-10" aria-hidden="true" />
      <div className="hero-noise pointer-events-none absolute inset-0 -z-10 opacity-30" aria-hidden="true" />

      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(22rem,0.95fr)] lg:gap-10 xl:gap-16">
          <HeroContent statusLabel={statusLabel} resumeHref={hasResume ? RESUME_HREF : undefined} />
          <HeroVisual />
        </div>

        <div className="mt-8 border-t border-border/70 pt-6 text-small text-muted-foreground sm:mt-10 sm:pt-8">
          <p className="hero-fade-up-delay-4 max-w-2xl">
            {SITE_ROLE} portfolio focused on clear product thinking, modern engineering, and a premium technical presentation.
          </p>
        </div>
      </Container>
    </Section>
  );
}