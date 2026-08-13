import Link from "next/link";

import { cn } from "@/lib/utils";
import { NAVBAR_SECONDARY_LINKS } from "@/lib/constants";

type HeroActionsProps = Readonly<{
  resumeHref?: string | undefined;
}>;

export function HeroActions({ resumeHref }: HeroActionsProps) {
  const githubHref = NAVBAR_SECONDARY_LINKS[0]?.href;
  const linkedinHref = NAVBAR_SECONDARY_LINKS[1]?.href;

  return (
    <div className="hero-fade-up-delay-3 flex flex-col gap-3 sm:flex-row sm:items-center">
      <Link
        className={cn("button-base px-5 py-3 text-sm sm:px-6", "bg-primary text-white hover:translate-y-[-1px]")}
        href="/projects"
      >
        View Projects
      </Link>

      {githubHref ? (
        <a
          className={cn("button-base px-5 py-3 text-sm sm:px-6", "border-border bg-secondary text-foreground")}
          href={githubHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View GitHub profile (opens in a new tab)"
        >
          GitHub
        </a>
      ) : null}

      {resumeHref ? (
        <Link
          className="link-base mt-2 sm:mt-0 sm:ml-3 text-small"
          href={resumeHref}
        >
          View Resume
        </Link>
      ) : null}

      {linkedinHref ? (
        <a
          className="link-base mt-2 sm:mt-0 sm:ml-3 text-small"
          href={linkedinHref}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="View LinkedIn profile (opens in a new tab)"
        >
          LinkedIn
        </a>
      ) : null}
    </div>
  );
}