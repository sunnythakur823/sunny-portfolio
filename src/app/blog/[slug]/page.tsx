import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { BlogArticlePage } from "@/components/blog";
import { getPublishedArticleBySlug, getPublishedArticles } from "@/data/blog";

type BlogArticleRouteProps = Readonly<{ params: Promise<{ slug: string }> }>;

export function generateStaticParams() {
  return getPublishedArticles().map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: BlogArticleRouteProps): Promise<Metadata> {
  const article = getPublishedArticleBySlug((await params).slug);
  if (!article) return {};
  return { title: `${article.title} | Blog`, description: article.excerpt, openGraph: { title: article.title, description: article.excerpt, type: "article" }, twitter: { card: "summary", title: article.title, description: article.excerpt } };
}

export default async function BlogArticleRoute({ params }: BlogArticleRouteProps) {
  const article = getPublishedArticleBySlug((await params).slug);
  if (!article) notFound();
  const articles = getPublishedArticles();
  const currentIndex = articles.findIndex((item) => item.slug === article.slug);
  const relatedArticles = articles.filter((item) => item.slug !== article.slug && (item.category === article.category || item.tags.some((tag) => article.tags.includes(tag)))).slice(0, 2);
  return <BlogArticlePage article={article} relatedArticles={relatedArticles} previousArticle={articles[currentIndex - 1]} nextArticle={articles[currentIndex + 1]} />;
}
