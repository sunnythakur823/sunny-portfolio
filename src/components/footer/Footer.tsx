import Link from "next/link";

import { contactData } from "@/data/contact";
import { Container } from "@/components/ui";

const internalLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

const socialLinks = [
  { label: "GitHub", href: contactData.github },
  { label: "LinkedIn", href: contactData.linkedin },
] as const;

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-border/70 bg-secondary/20" aria-label="Site footer">
      <Container className="py-8 sm:py-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-md">
            <p className="text-caption font-medium tracking-[0.2em] text-muted-foreground">PORTFOLIO</p>
            <p className="mt-3 text-h3 text-foreground">{contactData.name}</p>
            <p className="mt-1 text-body text-muted-foreground">{contactData.role}</p>
            <p className="mt-4 text-small leading-6 text-muted-foreground">
              Building thoughtful software with a practical engineering mindset.
            </p>
          </div>

          <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between lg:items-end">
            <nav aria-label="Footer navigation" className="flex flex-wrap gap-x-5 gap-y-3 text-small">
              {internalLinks.map((link) => (
                <Link key={link.href} href={link.href} className="link-base">
                  {link.label}
                </Link>
              ))}
            </nav>

            <nav aria-label="Social links" className="flex flex-wrap gap-x-5 gap-y-3 text-small">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-base"
                >
                  {link.label}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ))}
            </nav>
          </div>
        </div>

        <div className="mt-8 flex flex-col gap-3 border-t border-border/70 pt-5 text-small text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {currentYear} {contactData.name}. All rights reserved.</p>
          <p>Built with Next.js and TypeScript.</p>
        </div>
      </Container>
    </footer>
  );
}
