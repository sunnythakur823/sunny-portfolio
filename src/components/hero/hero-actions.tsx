import Link from "next/link";

import { cn } from "@/lib/utils";
import { NAVBAR_SECONDARY_LINKS, RESUME_HREF } from "@/lib/constants";

type HeroActionsProps = Readonly<{
  resumeHref?: string;
}>;

export function HeroActions({ resumeHref = RESUME_HREF }: HeroActionsProps) {
  return (
    <div className="hero-fade-up-delay-3 flex flex-col gap-3 sm:flex-row sm:items-center">
      <Link
        className={cn("button-base px-5 py-3 text-sm sm:px-6", "bg-primary text-white hover:translate-y-[-1px]")}
        href="/projects"
      >
        Explore My Work
      </Link>

      <Link
        className={cn("button-base px-5 py-3 text-sm sm:px-6", "border-border bg-secondary text-foreground")}
        href={resumeHref}
      >
        Download Resume
      </Link>

      <div className="flex flex-wrap gap-3 pt-1 text-small text-muted-foreground sm:pt-0">
        <a
          className="link-base rounded-full px-1 py-1 no-underline"
          href={NAVBAR_SECONDARY_LINKS[0].href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Sunny Kumar on GitHub"
        >
          GitHub
        </a>
        <a
          className="link-base rounded-full px-1 py-1 no-underline"
          href={NAVBAR_SECONDARY_LINKS[1].href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Sunny Kumar on LinkedIn"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}