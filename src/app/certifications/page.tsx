import type { Metadata } from "next";

import { CertificationsSection } from "@/components/certifications";

export const metadata: Metadata = {
  title: "Certifications",
  description:
    "Technical learning milestones and certifications from Sunny Kumar’s continuing work in software development, AI, cloud, and modern engineering foundations.",
  openGraph: {
    title: "Certifications | Sunny Kumar",
    description:
      "Technical learning milestones and certifications from Sunny Kumar’s continuing work in software development, AI, cloud, and modern engineering foundations.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Certifications | Sunny Kumar",
    description:
      "Technical learning milestones and certifications from Sunny Kumar’s continuing work in software development, AI, cloud, and modern engineering foundations.",
  },
};

export default function CertificationsPage() {
  return (
    <main>
      <CertificationsSection />
    </main>
  );
}