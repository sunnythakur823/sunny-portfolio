import type { Metadata } from "next";

import { BlogIndex } from "@/components/blog";
import { getPublishedArticles } from "@/data/blog";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Engineering notes, software learning updates, and practical reflections from Sunny Kumar on AI, web development, full-stack engineering, and product thinking.",
  openGraph: {
    title: "Blog | Sunny Kumar",
    description:
      "Engineering notes, software learning updates, and practical reflections from Sunny Kumar on AI, web development, full-stack engineering, and product thinking.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Blog | Sunny Kumar",
    description:
      "Engineering notes, software learning updates, and practical reflections from Sunny Kumar on AI, web development, full-stack engineering, and product thinking.",
  },
};

export default function BlogPage() {
  return <BlogIndex articles={getPublishedArticles()} />;
}
