/**
 * Utility functions for calculating and deriving data.
 * These functions are optimized to be pure and memoizable.
 */

import type { Project } from "@/types";

export type ProjectCategoryItem = Readonly<{
  title: string;
  description: string;
}>;

/**
 * Derives project category items from the projects array.
 * This is a pure function that can be memoized.
 * 
 * Extracted from AboutSection to avoid recalculation on every render.
 */
export function deriveProjectCategories(projects: Project[]): ProjectCategoryItem[] {
  const hasWeb = projects.some((p) => /Full-Stack|Full-Stack App|Business Website|Website/i.test(p.category));
  const hasAI = projects.some((p) => p.technologies?.some((t) => /AI|NLP/i.test(t)));
  const hasApi = projects.some((p) => /API/i.test(p.category) || p.technologies?.some((t) => /Python|Flask/i.test(t)));

  const items: ProjectCategoryItem[] = [];

  if (hasWeb) {
    items.push({
      title: "Web Applications",
      description: "Full‑stack apps and business websites that deliver real value.",
    });
  }

  if (hasApi) {
    items.push({
      title: "APIs & Backend",
      description: "APIs and backend services for data-driven features.",
    });
  }

  if (hasAI) {
    items.push({
      title: "AI & NLP",
      description: "AI and NLP projects focused on practical problem solving.",
    });
  }

  return items;
}
