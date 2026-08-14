import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "PROGRAMMING LANGUAGES",
    description: "Languages I use for problem solving, scripting, and application development.",
    skills: [
      {
        name: "Python",
        relatedProjects: ["sentiment-analysis-api", "fake-news-cyber-propaganda-detection", "careerwise-ai"],
      },
    ],
  },
  {
    category: "WEB DEVELOPMENT",
    description: "Frameworks and backend patterns I use to build and ship practical web applications.",
    skills: [{ name: "Flask", relatedProjects: ["sentiment-analysis-api"] }],
  },
  {
    category: "AI / MACHINE LEARNING",
    description: "Core AI and NLP capabilities used in the projects I build and iterate on.",
    skills: [
      { name: "AI", relatedProjects: ["careerwise-ai", "fake-news-cyber-propaganda-detection"] },
      { name: "NLP", relatedProjects: ["fake-news-cyber-propaganda-detection", "sentiment-analysis-api"] },
    ],
  },
];
