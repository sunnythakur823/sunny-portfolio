import { Card, Container, Heading, Section, TextLink } from "@/components/ui";
import { contactData } from "@/data/contact";

import { ContactCTA } from "./ContactCTA";

const socialLinks = [
  {
    label: "LinkedIn",
    href: contactData.linkedin,
    description: "Professional background, product work, and collaboration opportunities.",
  },
  {
    label: "GitHub",
    href: contactData.github,
    description: "Code, projects, experiments, and technical decision-making.",
  },
].filter((link) => Boolean(link.href));

export function ContactSection() {
  return (
    <Section id="contact" className="relative overflow-hidden border-t border-border/70 bg-secondary/30">
      <div className="hero-grid-overlay pointer-events-none absolute inset-0 -z-10 opacity-40" aria-hidden="true" />
      <Container className="relative">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,0.8fr)] lg:items-start">
          <div className="max-w-2xl">
            <p className="text-caption font-medium tracking-[0.24em] text-muted-foreground">CONTACT / 01</p>
            <Heading level={1} className="mt-5 max-w-[12ch] text-display text-balance">
              Let&apos;s build something useful.
            </Heading>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              I&apos;m open to product engineering conversations, technical collaboration, and thoughtful opportunities where software can solve real problems.
            </p>

            {contactData.availability ? (
              <div className="mt-8 border-l-2 border-primary pl-4">
                <p className="text-caption font-medium text-primary">{contactData.availability.label}</p>
                {contactData.availability.description ? (
                  <p className="mt-2 text-small text-muted-foreground">{contactData.availability.description}</p>
                ) : null}
              </div>
            ) : null}

            <div className="mt-8">
              <ContactCTA email={contactData.email} linkedin={contactData.linkedin} github={contactData.github} />
            </div>
          </div>

          <Card className="p-5 sm:p-6" elevated>
            <div className="space-y-5">
              <div>
                <p className="text-caption font-medium tracking-[0.2em] text-muted-foreground">Primary channels</p>
                <p className="mt-2 text-h3 text-foreground">{contactData.name}</p>
                <p className="mt-1 text-small text-muted-foreground">{contactData.role}</p>
              </div>

              <div className="space-y-3">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block rounded-2xl border border-border bg-secondary/40 p-4 transition-colors hover:border-primary/40 hover:bg-secondary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background"
                    aria-label={`${link.label} profile (opens in a new tab)`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span className="text-body font-medium text-foreground">{link.label}</span>
                      <span aria-hidden="true" className="text-primary transition-transform group-hover:translate-x-0.5">→</span>
                    </div>
                    <p className="mt-2 text-small leading-6 text-muted-foreground">{link.description}</p>
                  </a>
                ))}
              </div>

              {contactData.email ? (
                <div className="border-t border-border/70 pt-4">
                  <TextLink href={`mailto:${contactData.email}`} className="text-small">
                    {contactData.email}
                  </TextLink>
                </div>
              ) : null}
            </div>
          </Card>
        </div>
      </Container>
    </Section>
  );
}
