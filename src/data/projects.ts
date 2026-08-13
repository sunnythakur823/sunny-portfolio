import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "careerwise-ai",
    title: "CareerWise AI",
    shortDescription: "Intelligent Career Guidance & Skill Gap Analysis Platform.",
    category: "AI Product",
    technologies: ["AI"],
    featured: true,
  },
  {
    slug: "fake-news-cyber-propaganda-detection",
    title: "Fake News and Cyber Propaganda Detection",
    shortDescription: "AI/NLP-based project focused on detecting fake news and cyber propaganda.",
    category: "AI / NLP",
    technologies: ["AI", "NLP"],
    featured: true,
  },
  {
    slug: "creator-directory",
    title: "Creator Directory",
    shortDescription: "Full-stack creator directory application.",
    category: "Full-Stack App",
    technologies: [],
    featured: false,
  },
  {
    slug: "sentiment-analysis-api",
    title: "Sentiment Analysis API",
    shortDescription: "API project using Python/Flask/NLP for sentiment analysis.",
    category: "API / NLP",
    technologies: ["Python", "Flask", "NLP"],
    featured: false,
  },
  {
    slug: "salon-business-website",
    title: "Salon Business Website",
    shortDescription: "Real-world website created for a men's salon business.",
    category: "Business Website",
    technologies: [],
    featured: false,
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((project) => project.featured);
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getProjectSlugs(): string[] {
  return projects.map((project) => project.slug);
}