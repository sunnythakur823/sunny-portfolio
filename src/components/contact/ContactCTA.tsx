import { cn } from "@/lib/utils";

type ContactCTAProps = Readonly<{
  email?: string;
  linkedin: string;
  github?: string;
  className?: string;
}>;

export function ContactCTA({ email, linkedin, github, className }: ContactCTAProps) {
  return (
    <div className={cn("flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center", className)}>
      {email ? (
        <a
          href={`mailto:${email}`}
          className="button-base bg-primary text-white"
          aria-label={`Email ${email}`}
        >
          Email me
        </a>
      ) : null}

      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="button-base border border-border bg-transparent text-foreground"
        aria-label="Connect on LinkedIn (opens in a new tab)"
      >
        Connect on LinkedIn
      </a>

      {github ? (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="button-base border border-border bg-secondary text-foreground"
          aria-label="View GitHub profile (opens in a new tab)"
        >
          View GitHub
        </a>
      ) : null}
    </div>
  );
}
