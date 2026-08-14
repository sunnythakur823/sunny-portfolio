import type { Metadata } from "next";

import { CareerGrowthSection } from "@/components/experience";

export const metadata: Metadata = {
  title: "Experience | Sunny Kumar",
  description: "Professional journey, academic milestones, and learning experiences in software development and technology.",
};

export default function ExperiencePage() {
  return (
    <main>
      <CareerGrowthSection />
    </main>
  );
}