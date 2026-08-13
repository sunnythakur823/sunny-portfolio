import { GITHUB_PROFILE_URL, GITHUB_USERNAME } from "@/data/github";
import type { GitHubProfile } from "@/types/github";

export function GitHubProfileLink({ profile }: Readonly<{ profile?: GitHubProfile }>) {
  return (
    <aside className="h-fit border-y border-border/70 py-7 lg:sticky lg:top-28" aria-label="GitHub profile">
      <p className="font-mono text-small text-foreground">@{profile?.login ?? GITHUB_USERNAME}</p>
      {profile?.publicRepositoryCount !== undefined ? <p className="mt-2 text-small text-muted-foreground">{profile.publicRepositoryCount} public repositories</p> : null}
      <a href={profile?.profileUrl ?? GITHUB_PROFILE_URL} target="_blank" rel="noreferrer noopener" className="button-base mt-6 border-border bg-secondary text-foreground hover:-translate-y-0.5">
        View GitHub profile <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span>
      </a>
    </aside>
  );
}
