import type { Metadata } from "next";

import { ContactSection } from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact",
  description: "Connect with Sunny Kumar for product engineering, software collaboration, and technical opportunities.",
  openGraph: {
    title: "Contact | Sunny Kumar",
    description: "Connect with Sunny Kumar for product engineering, software collaboration, and technical opportunities.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact | Sunny Kumar",
    description: "Connect with Sunny Kumar for product engineering, software collaboration, and technical opportunities.",
  },
};

export default function ContactPage() {
  return (
    <main>
      <ContactSection />
    </main>
  );
}
