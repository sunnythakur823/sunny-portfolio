export type SiteRoute =
  | "/"
  | "/about"
  | "/projects"
  | "/experience"
  | "/certifications"
  | "/lab"
  | "/blog"
  | "/contact"
  | `/projects/${string}`;

export interface NavItem {
  label: string;
  href: SiteRoute;
}

export interface ExternalNavItem {
  label: string;
  href: string;
}

export interface NavActionItem {
  label: string;
  href: string;
  variant?: "ghost" | "secondary" | "primary";
  external?: boolean;
}

export interface Project {
  slug: string;
  title: string;
  shortDescription: string;
  category: string;
  technologies: string[];
  featured: boolean;
  /** Optional case-study content. Add only verified project details here. */
  overview?: string;
  features?: string[];
  problem?: string;
  solution?: string;
  challenges?: string[];
  learnings?: string[];
  githubUrl?: string;
  liveUrl?: string;
  image?: string;
  caseStudyUrl?: string;
}

export interface ProjectLinkSet {
  live?: string;
  source?: string;
  caseStudy?: string;
}

export interface SkillGroup {
  category: string;
  description?: string;
  skills: SkillTechnology[];
}

export interface SkillTechnology {
  name: string;
  relatedProjects?: Project["slug"][];
}

export interface ExperienceEntry {
  title: string;
  organization?: string;
  type: "Internship" | "Job simulation" | "Workshop";
  startDate: string;
  endDate?: string;
  description?: string;
  skills?: string[];
  credentialUrl?: string;
}

export interface CertificationEntry {
  name: string;
  organization?: string;
  date: string;
  type: "Learning" | "Certification";
  description?: string;
  skills?: string[];
  credentialId?: string;
  credentialUrl?: string;
}

export interface EducationEntry {
  program: string;
  institution: string;
  expectedGraduation?: string;
  academicBackground?: string[];
}

export interface AchievementEntry {
  title: string;
  date?: string;
  description?: string;
}

export type LabExperimentStatus = "EXPERIMENT" | "PROTOTYPE" | "IN PROGRESS" | "ARCHIVED";

export interface LabExperiment {
  id: string;
  title: string;
  slug: string;
  description: string;
  category: "AI" | "WEB" | "UI/UX" | "API" | "CLOUD" | "SECURITY" | "AUTOMATION";
  technologies?: string[];
  status?: LabExperimentStatus;
  date?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
  visual?: string;
}

export interface GitHubRepositorySummary {
  name: string;
  fullName?: string;
  url: string;
  description?: string;
  language?: string;
  homepageUrl?: string;
  stars?: number;
  forks?: number;
  updatedAt?: string;
}

export interface GitHubUserProfile {
  login: string;
  name?: string;
  avatarUrl?: string;
  bio?: string;
  profileUrl: string;
}
