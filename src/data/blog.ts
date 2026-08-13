import type { BlogArticle } from "@/types/blog";

/**
 * Add only verified, publish-ready notes here. Draft concepts should remain
 * unpublished rather than appearing as completed technical writing.
 */
export const blogArticles: BlogArticle[] = [];

export function getPublishedArticles(): BlogArticle[] {
  return blogArticles.filter((article) => article.published);
}

export function getPublishedArticleBySlug(slug: string): BlogArticle | undefined {
  return getPublishedArticles().find((article) => article.slug === slug);
}
