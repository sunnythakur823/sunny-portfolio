import type { GitHubRepository } from "@/types/github";

function formatDate(date: string) {
  const parsedDate = new Date(date);
  return Number.isNaN(parsedDate.valueOf()) ? undefined : new Intl.DateTimeFormat("en", { month: "short", year: "numeric", timeZone: "UTC" }).format(parsedDate);
}

export function GitHubRepositoryCard({ repository }: Readonly<{ repository: GitHubRepository }>) {
  const updatedDate = formatDate(repository.updatedAt);
  return (
    <article className="surface-card group flex h-full flex-col p-5 transition-[border-color,transform,box-shadow] duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_14px_32px_rgb(15_23_42/0.07)]">
      <div className="flex items-start justify-between gap-4">
        <h3 className="text-h3 text-balance">{repository.name}</h3>
        <a href={repository.url} target="_blank" rel="noreferrer noopener" className="link-base shrink-0 text-small no-underline" aria-label={`Open ${repository.fullName} on GitHub`}><span aria-hidden="true">↗</span><span className="sr-only">Open on GitHub (new tab)</span></a>
      </div>
      {repository.description ? <p className="mt-4 text-small leading-6 text-muted-foreground text-pretty">{repository.description}</p> : null}
      {repository.topics.length ? <ul className="mt-5 flex flex-wrap gap-2" aria-label="Repository topics">{repository.topics.slice(0, 4).map((topic) => <li key={topic} className="badge-base bg-secondary">{topic}</li>)}</ul> : null}
      <div className="mt-auto flex flex-wrap gap-x-4 gap-y-2 border-t border-border/70 pt-4 text-small text-muted-foreground">
        {repository.language ? <span>{repository.language}</span> : null}
        <span>Stars {repository.stars}</span><span>Forks {repository.forks}</span>
        {updatedDate ? <span>Updated {updatedDate}</span> : null}
      </div>
    </article>
  );
}
