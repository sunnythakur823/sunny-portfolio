import { getGitHubActivity } from "@/lib/github";
import { Container, Section } from "@/components/ui";

import { GitHubProfileLink } from "./GitHubProfileLink";
import { GitHubRepositoryCard } from "./GitHubRepositoryCard";

export async function GitHubSection() {
  const activity = await getGitHubActivity();
  return (
    <Section id="github" className="border-t border-border/70">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1fr)_15rem] lg:gap-16">
          <div>
            <p className="text-caption font-medium tracking-[0.24em] text-muted-foreground">GITHUB</p>
            <h2 className="mt-4 text-h1">Building in public.</h2>
            <p className="mt-6 max-w-2xl text-body text-muted-foreground text-pretty">A selection of public projects and experiments from my GitHub.</p>
            {activity.repositories.length ? <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-3">{activity.repositories.map((repository) => <GitHubRepositoryCard key={repository.fullName} repository={repository} />)}</div> : <p className="mt-10 border-t border-border/70 pt-6 text-small text-muted-foreground">{activity.isAvailable ? "No public repositories are available to feature yet." : "Repository activity is temporarily unavailable."}</p>}
          </div>
          <GitHubProfileLink profile={activity.profile} />
        </div>
      </Container>
    </Section>
  );
}
