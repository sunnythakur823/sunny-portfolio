import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type SectionProps = HTMLAttributes<HTMLElement> & {
  children: ReactNode;
  compact?: boolean;
};

export function Section({
  className,
  compact = false,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn(compact ? "section-page-sm" : "section-page", className)}
      {...props}
    />
  );
}