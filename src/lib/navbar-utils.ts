/**
 * Navbar utilities
 * Functions that support the Navbar component
 */

import { cn } from "@/lib/utils";

/**
 * Get CSS classes for navbar links based on active state.
 * Extracted to avoid recreation on every render.
 */
export function getNavLinkClasses(active: boolean): string {
  return cn(
    "inline-flex items-center rounded-full px-3.5 py-2 text-small font-medium transition-colors duration-200 no-underline",
    active
      ? "bg-secondary text-foreground"
      : "text-muted-foreground hover:bg-secondary/70 hover:text-foreground",
  );
}
