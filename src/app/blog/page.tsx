import type { Metadata } from "next";

import { BlogIndex } from "@/components/blog";
import { getPublishedArticles } from "@/data/blog";

export const metadata: Metadata = {
  title: "Engineering Notes | Sunny Kumar",
  description: "Technical notes, engineering reflections, and software learning updates from practical product work.",
  openGraph: {
    title: "Engineering Notes | Sunny Kumar",
    description: "Technical notes, engineering reflections, and software learning updates from practical product work.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Notes | Sunny Kumar",
    description: "Technical notes, engineering reflections, and software learning updates from practical product work.",
  },
};

export default function BlogPage() {
  return <BlogIndex articles={getPublishedArticles()} />;
}
