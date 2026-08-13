import Link from "next/link";

import type { BlogArticle } from "@/types/blog";

import { BlogArticleMeta } from "./BlogArticleMeta";

export function BlogCard({ article, featured = false }: Readonly<{ article: BlogArticle; featured?: boolean }>) {
  return (
    <article className={`group flex h-full flex-col border-t border-border/70 pt-5 transition-[border-color,transform] duration-200 motion-reduce:transition-none hover:-translate-y-0.5 hover:border-primary/45 ${featured ? "sm:pt-7" : ""}`}>
      <p className="text-caption font-medium text-muted-foreground">{article.category}</p>
      <h2 className={`mt-3 text-balance ${featured ? "text-h2" : "text-h3"}`}><Link href={`/blog/${article.slug}`} className="link-base no-underline">{article.title}<span aria-hidden="true" className="ml-2 inline-block text-primary transition-transform duration-200 motion-reduce:transition-none group-hover:translate-x-0.5">→</span></Link></h2>
      <p className="mt-3 max-w-2xl text-small leading-6 text-muted-foreground text-pretty">{article.excerpt}</p>
      <div className="mt-5 flex flex-wrap items-center gap-x-4 gap-y-2"><BlogArticleMeta article={article} />{article.tags.map((tag) => <span key={tag} className="badge-base bg-card">{tag}</span>)}</div>
    </article>
  );
}
