import type { Metadata } from "next";

import { ContactSection } from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with Sunny Kumar for software development opportunities, project collaboration, internships, and technical conversations across AI, full-stack, and cloud work.",
  openGraph: {
    title: "Contact | Sunny Kumar",
    description:
      "Connect with Sunny Kumar for software development opportunities, project collaboration, internships, and technical conversations across AI, full-stack, and cloud work.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Sunny Kumar",
    description:
      "Connect with Sunny Kumar for software development opportunities, project collaboration, internships, and technical conversations across AI, full-stack, and cloud work.",
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
    </main>
  );
}
