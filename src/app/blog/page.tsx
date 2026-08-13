import { BlogIndex } from "@/components/blog";
import { getPublishedArticles } from "@/data/blog";

export default function BlogPage() {
  return <BlogIndex articles={getPublishedArticles()} />;
}
