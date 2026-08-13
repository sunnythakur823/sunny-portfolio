import type { NavItem } from "@/types";

export const SITE_OWNER = "Sunny Kumar";
export const SITE_ROLE = "Software Developer";
export const SITE_NAME = `${SITE_OWNER} — ${SITE_ROLE} Portfolio`;
export const SITE_DESCRIPTION =
  "Professional portfolio site for Sunny Kumar.";

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
  { label: "LinkedIn", href: "https://www.linkedin.com/in/sunny-kumar-31552833/" },
] as const;

export const RESUME_HREF = "/resume.pdf";