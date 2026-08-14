import Link from "next/link";

import type { BlogArticle } from "@/types/blog";
import { Container } from "@/components/ui";

import { BlogArticleMeta } from "./BlogArticleMeta";
import { BlogCard } from "./BlogCard";
import { BlogContent } from "./BlogContent";

export function BlogArticlePage({
  article,
  relatedArticles,
  previousArticle,
  nextArticle,
}: Readonly<{
  article: BlogArticle;
  relatedArticles: BlogArticle[];
  previousArticle?: BlogArticle;
  nextArticle?: BlogArticle;
}>) {
  return (
    <main>
      <Container className="max-w-5xl py-12 sm:py-16 lg:py-24">
        <article>
          <Link href="/blog" className="link-base inline-flex items-center gap-2 text-small">
            <span aria-hidden="true">←</span>
            Back to blog
          </Link>

          <header className="mt-10 max-w-3xl">
            <p className="text-caption font-medium tracking-[0.2em] text-muted-foreground">{article.category}</p>
            <h1 className="mt-4 text-display text-balance text-foreground">{article.title}</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">{article.excerpt}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <BlogArticleMeta article={article} />
              {article.tags.map((tag) => (
                <span key={tag} className="rounded-full border border-border bg-secondary px-2.5 py-1 text-caption text-foreground">
                  {tag}
                </span>
              ))}
            </div>
          </header>

          <div className="mt-12 grid gap-10 lg:grid-cols-[minmax(0,1fr)_12rem] lg:gap-12">
            <section className="max-w-3xl" aria-label="Article content">
              <BlogContent content={article.content} />
            </section>

            {article.tableOfContents?.length ? (
              <aside className="h-fit border-l border-border/70 pl-5 lg:sticky lg:top-28" aria-label="Table of contents">
                <p className="text-caption font-medium text-muted-foreground">On this page</p>
                <ol className="mt-4 space-y-3">
                  {article.tableOfContents.map((item) => (
                    <li key={item.id} className={item.level === 3 ? "pl-3" : ""}>
                      <a className="link-base text-small" href={`#${item.id}`}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ol>
              </aside>
            ) : null}
          </div>
        </article>

        {relatedArticles.length ? (
          <section className="mt-16 border-t border-border/70 pt-10" aria-labelledby="related-notes-heading">
            <p className="text-caption font-medium tracking-[0.2em] text-muted-foreground">RELATED NOTES</p>
            <h2 id="related-notes-heading" className="mt-3 text-h2 text-foreground">Continue reading</h2>
            <div className="mt-6 grid gap-8 md:grid-cols-2">
              {relatedArticles.map((related) => (
                <BlogCard key={related.slug} article={related} />
              ))}
            </div>
          </section>
        ) : null}

        <nav className="mt-12 grid gap-4 border-t border-border/70 pt-8 sm:grid-cols-2" aria-label="Article navigation">
          {previousArticle ? (
            <Link href={`/blog/${previousArticle.slug}`} className="link-base text-small">
              <span aria-hidden="true">←</span> Previous: {previousArticle.title}
            </Link>
          ) : (
            <span className="text-small text-muted-foreground">Start of archive</span>
          )}

          {nextArticle ? (
            <Link href={`/blog/${nextArticle.slug}`} className="link-base text-small">
              Next: {nextArticle.title} <span aria-hidden="true">→</span>
            </Link>
          ) : (
            <span className="text-small text-muted-foreground">End of archive</span>
          )}
        </nav>
      </Container>
    </main>
  );
}
