import type { Project } from "@/types";

export const projects: Project[] = [
  {
    slug: "careerwise-ai",
    title: "CareerWise AI",
    shortDescription: "Intelligent Career Guidance & Skill Gap Analysis Platform.",
    category: "AI Product",
    technologies: ["Python", "Flask", "AI", "NLP"],
    featured: true,
    overview:
      "CareerWise AI is a practical learning and career guidance platform designed to help students map their strengths against real-world career needs.",
    problem:
      "Many students are unsure which skills and career paths match their interests, strengths, and learning goals.",
    solution:
      "The system focuses on guided recommendations, role-fit reasoning, and actionable skill-gap feedback to make career planning more practical and understandable.",
    features: [
      "Career recommendation flow",
      "Skill gap analysis",
      "AI-assisted guidance",
      "User-focused career planning",
    ],
  },
  {
    slug: "fake-news-cyber-propaganda-detection",
    title: "Fake News and Cyber Propaganda Detection",
    shortDescription: "AI/NLP-based project focused on detecting fake news and cyber propaganda.",
    category: "AI / NLP",
    technologies: ["Python", "AI", "NLP"],
    featured: true,
    overview:
      "This project explores how AI and NLP can support information security by identifying misleading and manipulative content patterns in text.",
    problem:
      "Misinformation and coordinated propaganda can spread quickly online, making it difficult to assess credibility and intent at scale.",
    solution:
      "The project applies NLP-driven analysis to detect suspicious patterns and support safer information consumption through automated text assessment.",
    features: [
      "Fake news detection workflow",
      "NLP-based text analysis",
      "Cyber propaganda pattern review",
      "Practical AI security use case",
    ],
  },
  {
    slug: "creator-directory",
    title: "Creator Directory",
    shortDescription: "Full-stack creator directory application.",
    category: "Full-Stack App",
    technologies: ["Python", "Flask"],
    featured: false,
    overview:
      "A directory-style application for organizing and discovering creators in a clean, searchable interface.",
    problem:
      "Creator information and profiles can become fragmented across different channels, making discovery less efficient.",
    solution:
      "The project centralizes creator details in a structured directory and provides a cleaner browsing experience for users.",
    features: [
      "Creator profile listing",
      "Searchable directory structure",
      "Responsive user experience",
      "Practical full-stack structure",
    ],
  },
  {
    slug: "sentiment-analysis-api",
    title: "Sentiment Analysis API",
    shortDescription: "API project using Python/Flask/NLP for sentiment analysis.",
    category: "API / NLP",
    technologies: ["Python", "Flask", "NLP"],
    featured: false,
    overview:
      "A backend service built for analyzing sentiment in text input and returning structured results from an NLP workflow.",
    problem:
      "Applications often need quick sentiment understanding to interpret user feedback or content tone from text.",
    solution:
      "The project packages sentiment analysis behind a small API so text-based insights can be consumed in other applications or services.",
    features: [
      "REST-style API endpoints",
      "Text sentiment analysis",
      "Python and Flask backend",
      "NLP-driven response handling",
    ],
  },
  {
    slug: "salon-business-website",
    title: "Salon Business Website",
    shortDescription: "Real-world website created for a men's salon business.",
    category: "Business Website",
    technologies: [],
    featured: false,
    overview:
      "A practical business website created for a salon to present services and support customer discovery in a clear, accessible format.",
    problem:
      "Small businesses often need a clean online presence to present services and contact details clearly to customers.",
    solution:
      "The project provides a straightforward landing experience focused on usability, trust, and quick business discovery.",
    features: [
      "Service-focused landing page",
      "Business presentation layout",
      "Responsive client-facing design",
      "Clear contact and brand visibility",
    ],
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