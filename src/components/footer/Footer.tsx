import Link from "next/link";

import { contactData } from "@/data/contact";
import { Container } from "@/components/ui";

const internalLinks = [
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

const currentYear = new Date().getFullYear();

export function Footer() {
  return (
    <footer className="border-t border-border/70" aria-label="Site footer">
      <Container className="py-8 sm:py-10">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
          <div><p className="font-medium text-foreground">{contactData.name}</p><p className="mt-1 text-small text-muted-foreground">{contactData.role}</p></div>
          <nav className="flex flex-wrap gap-x-5 gap-y-3 text-small" aria-label="Footer navigation">
            {internalLinks.map((link) => <Link key={link.href} href={link.href} className="link-base">{link.label}</Link>)}
            <a href={contactData.github} target="_blank" rel="noopener noreferrer" className="link-base">GitHub <span className="sr-only">(opens in a new tab)</span></a>
            <a href={contactData.linkedin} target="_blank" rel="noopener noreferrer" className="link-base">LinkedIn <span className="sr-only">(opens in a new tab)</span></a>
          </nav>
        </div>
        <p className="mt-8 border-t border-border/70 pt-5 text-small text-muted-foreground">© {currentYear} {contactData.name}</p>
      </Container>
    </footer>
  );
}
