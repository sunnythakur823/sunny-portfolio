import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  tone?: "neutral" | "accent" | "primary";
};

export function Badge({ className, tone = "neutral", ...props }: BadgeProps) {
  return (
    <span className={cn("badge-base", className)} data-tone={tone} {...props} />
  );
}