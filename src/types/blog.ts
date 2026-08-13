export type BlogContentBlock =
  | { type: "paragraph"; text: string }
  | { type: "heading"; id: string; level: 2 | 3; text: string }
  | { type: "list"; items: string[]; ordered?: boolean }
  | { type: "code"; language: string; code: string };

export type BlogTableOfContentsItem = {
  id: string;
  label: string;
  level?: 2 | 3;
};

export interface BlogArticle {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  tags: string[];
  content: BlogContentBlock[];
  featured?: boolean;
  /** Add only a confirmed publication date; it is never inferred by the UI. */
  date?: string;
  /** Add only a verified reading time; it is never calculated or assumed. */
  readTime?: string;
  coverImage?: string;
  tableOfContents?: BlogTableOfContentsItem[];
  published?: boolean;
}
