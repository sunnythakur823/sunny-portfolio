import type { Metadata } from "next";

import { AboutSection } from "@/components/about";

export const metadata: Metadata = {
  title: "About",
  description:
    "Sunny Kumar is a BCA student and software developer focused on AI/ML, full-stack development, cloud technologies, and practical product engineering.",
  openGraph: {
    title: "About | Sunny Kumar",
    description:
      "Sunny Kumar is a BCA student and software developer focused on AI/ML, full-stack development, cloud technologies, and practical product engineering.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Sunny Kumar",
    description:
      "Sunny Kumar is a BCA student and software developer focused on AI/ML, full-stack development, cloud technologies, and practical product engineering.",
  },
};

export default function AboutPage() {
  return (
    <main>
      <AboutSection />
    </main>
  );
}