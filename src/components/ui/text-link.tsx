import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/utils";

type TextLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  children: ReactNode;
};

export function TextLink({ className, ...props }: TextLinkProps) {
  return <a className={cn("link-base", className)} {...props} />;
}