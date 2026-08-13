import type { ReactNode } from "react";

type TimelineItemProps = Readonly<{
  label: string;
  title: string;
  organization?: string;
  isLast?: boolean;
  children?: ReactNode;
}>;

export function TimelineItem({ label, title, organization, isLast = false, children }: TimelineItemProps) {
  return (
    <li className="group relative grid grid-cols-[1.5rem_minmax(0,1fr)] gap-4 pb-7 last:pb-0">
      <span className="relative flex justify-center" aria-hidden="true">
        <span className="z-10 mt-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary transition-transform duration-200 motion-reduce:transition-none group-hover:scale-125" />
        {!isLast ? <span className="absolute top-5 bottom-0 w-px bg-border" /> : null}
      </span>
      <article className="border-b border-border/70 pb-7 transition-colors duration-200 motion-reduce:transition-none group-hover:border-primary/35">
        <p className="text-caption font-medium text-muted-foreground">{label}</p>
        <h3 className="mt-2 text-h3">{title}</h3>
        {organization ? <p className="mt-1 text-small text-muted-foreground">{organization}</p> : null}
        {children}
      </article>
    </li>
  );
}
