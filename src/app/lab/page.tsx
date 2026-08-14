import type { Metadata } from "next";

import { LabSection } from "@/components/lab";

export const metadata: Metadata = {
  title: "Engineering Lab",
  description: "Engineering experiments, prototypes, and technical exploration from Sunny Kumar.",
  openGraph: {
    title: "Engineering Lab | Sunny Kumar",
    description: "Engineering experiments, prototypes, and technical exploration from Sunny Kumar.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineering Lab | Sunny Kumar",
    description: "Engineering experiments, prototypes, and technical exploration from Sunny Kumar.",
  },
};

export default function LabPage() {
  return (
    <main>
      <LabSection />
    </main>
  );
}