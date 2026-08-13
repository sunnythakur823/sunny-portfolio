import type { SkillGroup } from "@/types";

export const skillGroups: SkillGroup[] = [
  {
    category: "PROGRAMMING",
    description: "Python is listed in the Sentiment Analysis API project.",
    skills: [{ name: "Python", relatedProjects: ["sentiment-analysis-api"] }],
  },
  {
    category: "BACKEND",
    description: "Flask is listed in the Sentiment Analysis API project.",
    skills: [{ name: "Flask", relatedProjects: ["sentiment-analysis-api"] }],
  },
  {
    category: "AI / MACHINE LEARNING",
    description: "NLP is listed in the Fake News Detection and Sentiment Analysis API projects.",
    skills: [
      {
        name: "NLP",
        relatedProjects: ["fake-news-cyber-propaganda-detection", "sentiment-analysis-api"],
      },
    ],
  },
];
