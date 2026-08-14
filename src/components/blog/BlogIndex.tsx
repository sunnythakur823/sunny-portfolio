import type { BlogArticle } from "@/types/blog";
import { Container, Heading, Section } from "@/components/ui";

import { BlogCard } from "./BlogCard";

export function BlogIndex({ articles }: Readonly<{ articles: BlogArticle[] }>) {
  const featured = articles.find((article) => article.featured);
  const recent = articles.filter((article) => article !== featured);

  return (
    <main>
      <Section className="relative overflow-hidden">
        <div className="hero-grid-overlay pointer-events-none absolute inset-0 -z-10 opacity-40" aria-hidden="true" />
        <Container>
          <div className="flex flex-col gap-4 border-b border-border/70 pb-8 sm:pb-10">
            <p className="text-caption font-medium tracking-[0.24em] text-muted-foreground">ENGINEERING NOTES</p>
            <div className="max-w-3xl space-y-3">
              <Heading level={1} className="max-w-[15ch]">Technical writing focused on real software problems.</Heading>
              <p className="text-body text-muted-foreground text-pretty">
                Notes on software engineering, AI, product thinking, and the practical decisions behind building useful systems.
              </p>
            </div>
          </div>

          {featured ? (
            <div className="mt-10 max-w-5xl">
              <p className="text-caption font-medium text-muted-foreground">Featured note</p>
              <div className="mt-4">
                <BlogCard article={featured} featured />
              </div>
            </div>
          ) : null}
        </Container>
      </Section>

      <Section compact className="border-t border-border/70">
        <Container>
          <div className="flex items-center justify-between gap-4">
            <h2 className="text-h2">{featured ? "Recent notes" : "Notes in progress"}</h2>
          </div>

          {recent.length ? (
            <div className="mt-8 grid gap-x-8 gap-y-10 md:grid-cols-2 xl:grid-cols-3">
              {recent.map((article) => (
                <BlogCard key={article.slug} article={article} />
              ))}
            </div>
          ) : (
            <div className="mt-8 rounded-[1.5rem] border border-dashed border-border bg-card p-8 sm:p-10">
              <p className="text-caption font-medium tracking-[0.18em] text-muted-foreground">Publishing queue</p>
              <h3 className="mt-4 text-h3 text-foreground">No published notes yet.</h3>
              <p className="mt-3 max-w-2xl text-body text-muted-foreground text-pretty">
                I&apos;m preparing practical engineering notes and technical write-ups as new work is completed and ready to share.
              </p>
            </div>
          )}
        </Container>
      </Section>
    </main>
  );
}
