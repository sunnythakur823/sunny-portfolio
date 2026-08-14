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
      <article className="rounded-2xl border border-border bg-card/80 p-4 shadow-[0_1px_2px_rgba(15,23,42,0.04)] transition-[border-color,transform,box-shadow] duration-200 motion-reduce:transition-none group-hover:-translate-y-0.5 group-hover:border-primary/35 group-hover:shadow-[0_12px_24px_rgba(15,23,42,0.06)] sm:p-5">
        <p className="text-caption font-medium tracking-[0.2em] text-muted-foreground">{label}</p>
        <h3 className="mt-3 text-h3 text-foreground">{title}</h3>
        {organization ? <p className="mt-2 text-small text-muted-foreground">{organization}</p> : null}
        {children}
      </article>
    </li>
  );
}
