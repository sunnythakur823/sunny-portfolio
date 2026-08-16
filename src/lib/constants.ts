import type { NavItem } from "@/types";

export const SITE_OWNER = "Sunny Kumar";
export const SITE_ROLE = "BCA Developer";
export const SITE_NAME = "Sunny Kumar | BCA Developer | AI, Full-Stack & Cloud";
export const SITE_DESCRIPTION =
  "BCA student and software developer building practical work across AI/ML, web development, full-stack engineering, and cloud technologies.";
export const SITE_KEYWORDS = [
  "Sunny Kumar",
  "BCA student",
  "software developer",
  "AI developer",
  "full stack developer",
  "web developer",
  "cloud technologies",
  "portfolio",
  "projects",
  "certifications",
  "software engineering",
] as const;

export const LAYOUT = {
  maxContentWidth: "80rem",
  pagePaddingX: "clamp(1rem, 2.5vw, 2rem)",
  sectionSpacingY: "clamp(4.5rem, 8vw, 7.5rem)",
  sectionSpacingYSm: "clamp(3rem, 6vw, 5rem)",
} as const;

export const MOTION = {
  durationFast: 180,
  durationBase: 220,
  durationSlow: 320,
} as const;

export const NAVIGATION_ITEMS: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Experience", href: "/experience" },
  { label: "Certifications", href: "/certifications" },
  { label: "Lab", href: "/lab" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
];

export const NAVBAR_PRIMARY_LINKS: NavItem[] = [
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Experience", href: "/experience" },
  { label: "Lab", href: "/lab" },
  { label: "Blog", href: "/blog" },
];

export const NAVBAR_SECONDARY_LINKS = [
  { label: "GitHub", href: "https://github.com/sunnythakur823" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sunny-kumar-31552833a/" },
] as const;

export const RESUME_HREF = "/resume.pdf";