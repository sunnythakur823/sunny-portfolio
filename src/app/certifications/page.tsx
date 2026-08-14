import type { Metadata } from "next";

import { CertificationsSection } from "@/components/certifications";

export const metadata: Metadata = {
  title: "Certifications & Learning | Sunny Kumar",
  description: "Learning credentials and technical foundations in database design, analytics, and business technology learning.",
};

export default function CertificationsPage() {
  return (
    <main>
      <CertificationsSection />
    </main>
  );
}