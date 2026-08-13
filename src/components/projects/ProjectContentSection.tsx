import type { ReactNode } from "react";

type ProjectContentSectionProps = Readonly<{
  eyebrow: string;
  title: string;
  children: ReactNode;
}>;

export function ProjectContentSection({ eyebrow, title, children }: ProjectContentSectionProps) {
  return (
    <section className="border-t border-border/70 py-10 first:border-t-0 sm:py-14" aria-labelledby={`${eyebrow}-heading`}>
      <div className="grid gap-5 lg:grid-cols-[11rem_minmax(0,1fr)] lg:gap-10">
        <p className="text-caption font-medium text-muted-foreground">{eyebrow}</p>
        <div>
          <h2 id={`${eyebrow}-heading`} className="text-h2 text-balance">{title}</h2>
          <div className="mt-5 max-w-3xl text-body text-muted-foreground text-pretty">{children}</div>
        </div>
      </div>
    </section>
  );
}
