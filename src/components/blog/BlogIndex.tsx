import type { BlogArticle } from "@/types/blog";
import { Container, Section } from "@/components/ui";

import { BlogCard } from "./BlogCard";

export function BlogIndex({ articles }: Readonly<{ articles: BlogArticle[] }>) {
  const featured = articles.find((article) => article.featured);
  const recent = articles.filter((article) => article !== featured);
  return (
    <main>
      <Section className="relative overflow-hidden">
        <div className="hero-grid-overlay pointer-events-none absolute inset-0 -z-10 opacity-40" aria-hidden="true" />
        <Container>
          <p className="text-caption font-medium tracking-[0.24em] text-muted-foreground">BLOG / NOTES</p>
          <h1 className="mt-4 max-w-[16ch] text-display text-balance">Things I&apos;m learning, building, and thinking about.</h1>
          <p className="mt-6 max-w-2xl text-body text-muted-foreground text-pretty">Development notes, project breakdowns, and technical learning—published when there is verified work to share.</p>
          {featured ? <div className="mt-12 max-w-4xl"><p className="text-caption font-medium text-muted-foreground">Featured note</p><BlogCard article={featured} featured /></div> : null}
        </Container>
      </Section>
      <Section compact className="border-t border-border/70">
        <Container>
          <h2 className="text-h2">{featured ? "Recent notes" : "Notes in progress"}</h2>
          {recent.length ? <div className="mt-8 grid gap-x-8 gap-y-10 md:grid-cols-2 xl:grid-cols-3">{recent.map((article) => <BlogCard key={article.slug} article={article} />)}</div> : <p className="mt-6 border-t border-border/70 pt-6 text-body text-muted-foreground">More notes are coming soon.</p>}
        </Container>
      </Section>
    </main>
  );
}
