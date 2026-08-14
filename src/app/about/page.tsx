import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Sunny Kumar, a BCA student and software developer exploring AI, web development, cloud technologies, and practical product engineering.",
  openGraph: {
    title: "About | Sunny Kumar",
    description:
      "Learn about Sunny Kumar, a BCA student and software developer exploring AI, web development, cloud technologies, and practical product engineering.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About | Sunny Kumar",
    description:
      "Learn about Sunny Kumar, a BCA student and software developer exploring AI, web development, cloud technologies, and practical product engineering.",
  },
};

export default function AboutPage() {
  return (
    <main>
      <h1>About</h1>
      <p>About content will be added here.</p>
    </main>
  );
}