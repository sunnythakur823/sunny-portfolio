import { Container, Section } from "@/components/ui";
import { ContactCTA } from "./ContactCTA";
import { contactData } from "@/data/contact";

export function ContactSection() {
  return (
    <Section id="contact" className="relative overflow-hidden border-t border-border/70 bg-secondary/40">
      <div className="hero-grid-overlay pointer-events-none absolute inset-0 -z-10 opacity-40" aria-hidden="true" />
      <Container>
        <div className="max-w-4xl">
          <p className="font-mono text-caption font-medium tracking-[0.24em] text-muted-foreground">CONTACT / 01</p>
          <h2 className="mt-5 max-w-[12ch] text-display text-balance">LET&apos;S BUILD SOMETHING USEFUL.</h2>
          <p className="mt-6 max-w-xl text-lg leading-8 text-muted-foreground text-pretty">Have a project, opportunity, or technical problem in mind? Let&apos;s connect.</p>
          {contactData.availability ? <div className="mt-8 border-l-2 border-primary pl-4"><p className="text-caption font-medium text-primary">{contactData.availability.label}</p>{contactData.availability.description ? <p className="mt-2 text-small text-muted-foreground">{contactData.availability.description}</p> : null}</div> : null}
          <div className="mt-10">
            <ContactCTA email={contactData.email} linkedin={contactData.linkedin} github={contactData.github} />
          </div>
        </div>
      </Container>
    </Section>
  );
}
