import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  elevated?: boolean;
};

export function Card({ className, elevated = false, ...props }: CardProps) {
  return (
    <div
      className={cn("surface-card", className)}
      data-elevated={elevated ? "true" : "false"}
      {...props}
    />
  );
}