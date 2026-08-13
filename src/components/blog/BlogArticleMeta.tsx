import type { BlogArticle } from "@/types/blog";

function formatDate(date: string) {
  const parsedDate = new Date(date);
  return Number.isNaN(parsedDate.valueOf()) ? undefined : new Intl.DateTimeFormat("en", { month: "long", day: "numeric", year: "numeric", timeZone: "UTC" }).format(parsedDate);
}

export function BlogArticleMeta({ article }: Readonly<{ article: BlogArticle }>) {
  const formattedDate = article.date ? formatDate(article.date) : undefined;
  if (!formattedDate && !article.readTime) return null;
  return <p className="text-small text-muted-foreground">{[formattedDate, article.readTime].filter(Boolean).join(" · ")}</p>;
}
