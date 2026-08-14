import type { CertificationEntry } from "@/types";
import { Badge, Card, Heading } from "@/components/ui";

function formatDate(date: string) {
  return new Intl.DateTimeFormat("en", { month: "short", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${date}-01T00:00:00Z`),
  );
}

function resolveCategory(credential: CertificationEntry) {
  const name = credential.name.toLowerCase();

  if (name.includes("power bi") || name.includes("data") || name.includes("analytics")) return "Data / Analytics";
  if (name.includes("database") || name.includes("oracle")) return "Database";
  if (name.includes("sap")) return "Professional Learning";

  return "Professional Learning";
}

type CertificationCardProps = Readonly<{ credential: CertificationEntry }>;

export function CertificationCard({ credential }: CertificationCardProps) {
  const category = resolveCategory(credential);
  const formattedDate = formatDate(credential.date);

  return (
    <Card
      elevated
      className="group h-full border border-border bg-card p-5 transition-[border-color,transform,box-shadow] duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_12px_24px_rgba(15,23,42,0.06)] sm:p-6"
    >
      <div className="flex items-start justify-between gap-3">
        <Badge tone="primary" className="text-[0.65rem] uppercase tracking-[0.18em]">
          {category}
        </Badge>
        <span className="text-caption text-muted-foreground">{credential.type}</span>
      </div>

      <div className="mt-6 space-y-3">
        <Heading level={3} className="text-balance text-foreground">
          {credential.name}
        </Heading>
        <p className="text-small text-muted-foreground">{credential.organization}</p>
      </div>

      <dl className="mt-6 space-y-3 border-t border-border/70 pt-5">
        <div className="flex items-center justify-between gap-4">
          <dt className="text-caption font-medium text-muted-foreground">Date</dt>
          <dd className="text-small text-foreground">{formattedDate}</dd>
        </div>

        {credential.skills?.length ? (
          <div className="space-y-2">
            <dt className="text-caption font-medium text-muted-foreground">Skills / topics</dt>
            <dd className="flex flex-wrap gap-2">
              {credential.skills.map((skill) => (
                <span key={skill} className="rounded-full border border-border bg-secondary px-2.5 py-1 text-caption text-foreground">
                  {skill}
                </span>
              ))}
            </dd>
          </div>
        ) : null}
      </dl>

      {credential.credentialUrl ? (
        <div className="mt-6 border-t border-border/70 pt-4">
          <a
            href={credential.credentialUrl}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-small font-medium text-foreground transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/70 focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            aria-label={`View credential for ${credential.name}`}
          >
            View credential
            <span aria-hidden="true">↗</span>
            <span className="sr-only"> (opens in a new tab)</span>
          </a>
        </div>
      ) : null}
    </Card>
  );
}
