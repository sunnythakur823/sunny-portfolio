import Link from "next/link";

import type { BlogArticle } from "@/types/blog";

import { BlogArticleMeta } from "./BlogArticleMeta";

export function BlogCard({ article, featured = false }: Readonly<{ article: BlogArticle; featured?: boolean }>) {
  return (
    <article className={`group flex h-full flex-col rounded-[1.5rem] border border-border bg-card p-5 transition-[border-color,transform,box-shadow] duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:border-primary/35 hover:shadow-[0_12px_24px_rgba(15,23,42,0.06)] ${featured ? "sm:p-6" : "sm:p-5"}`}>
      <div className="flex items-center justify-between gap-3">
        <p className="text-caption font-medium tracking-[0.18em] text-muted-foreground">{article.category}</p>
        {article.featured ? <span className="text-caption text-primary">Featured</span> : null}
      </div>

      <h2 className={`mt-4 text-balance ${featured ? "text-h2" : "text-h3"}`}>
        <Link href={`/blog/${article.slug}`} className="link-base no-underline">
          {article.title}
          <span aria-hidden="true" className="ml-2 inline-block text-primary transition-transform duration-200 motion-reduce:transition-none group-hover:translate-x-0.5">→</span>
        </Link>
      </h2>

      <p className="mt-4 max-w-2xl text-small leading-6 text-muted-foreground text-pretty">{article.excerpt}</p>

      <div className="mt-5 flex flex-wrap items-center gap-2">
        {article.tags.map((tag) => (
          <span key={tag} className="rounded-full border border-border bg-secondary px-2.5 py-1 text-caption text-foreground">
            {tag}
          </span>
        ))}
      </div>

      <div className="mt-5 border-t border-border/70 pt-4">
        <BlogArticleMeta article={article} />
      </div>
    </article>
  );
}
