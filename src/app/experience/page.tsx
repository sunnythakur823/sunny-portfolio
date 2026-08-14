import type { Metadata } from "next";

import { CareerGrowthSection } from "@/components/experience";

export const metadata: Metadata = {
  title: "Experience",
  description:
    "Professional learning journey and academic experience for Sunny Kumar in software development, AI, cloud, and technology-focused problem solving.",
  openGraph: {
    title: "Experience | Sunny Kumar",
    description:
      "Professional learning journey and academic experience for Sunny Kumar in software development, AI, cloud, and technology-focused problem solving.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Experience | Sunny Kumar",
    description:
      "Professional learning journey and academic experience for Sunny Kumar in software development, AI, cloud, and technology-focused problem solving.",
  },
};

export default function ExperiencePage() {
  return (
    <main>
      <CareerGrowthSection />
    </main>
  );
}