import { cn } from "@/lib/utils";

type ContactCTAProps = Readonly<{
  email?: string;
  linkedin: string;
  github?: string;
  className?: string;
}>;

export function ContactCTA({ email, linkedin, github, className }: ContactCTAProps) {
  return (
    <div className={cn("flex flex-col sm:flex-row sm:items-center sm:gap-3", className)}>
      {email ? (
        <a
          href={`mailto:${email}`}
          className="button-base"
          aria-label={`Email ${email}`}
        >
          Email Me
        </a>
      ) : null}

      <a
        href={linkedin}
        target="_blank"
        rel="noopener noreferrer"
        className="button-base !bg-transparent !text-foreground border border-border"
        aria-label="Connect on LinkedIn (opens in a new tab)"
      >
        Connect on LinkedIn
      </a>

      {github ? (
        <a
          href={github}
          target="_blank"
          rel="noopener noreferrer"
          className="link-base mt-3 sm:mt-0 sm:ml-3 text-small"
          aria-label="View GitHub profile (opens in a new tab)"
        >
          View GitHub
        </a>
      ) : null}
    </div>
  );
}
