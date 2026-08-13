import type { HTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type HeadingLevel = 1 | 2 | 3;

type HeadingProps = HTMLAttributes<HTMLHeadingElement> & {
  level?: HeadingLevel;
  children: ReactNode;
};

const headingStyles: Record<HeadingLevel, string> = {
  1: "text-h1",
  2: "text-h2",
  3: "text-h3",
};

export function Heading({
  className,
  level = 2,
  children,
  ...props
}: HeadingProps) {
  if (level === 1) {
    return (
      <h1 className={cn(headingStyles[level], className)} {...props}>
        {children}
      </h1>
    );
  }

  if (level === 3) {
    return (
      <h3 className={cn(headingStyles[level], className)} {...props}>
        {children}
      </h3>
    );
  }

  return (
    <h2 className={cn(headingStyles[level], className)} {...props}>
      {children}
    </h2>
  );
}