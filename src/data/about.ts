export type TechnicalFocusArea = {
  label: string;
  technologies: string[];
};

export type AboutProfile = {
  introduction: string;
  principles: string[];
  technicalFocus: TechnicalFocusArea[];
  learningAreas: string[];
};

export const aboutProfile: AboutProfile = {
  introduction:
    "Sunny Kumar is a BCA student at Amity University Jharkhand and an aspiring Software Developer. He learns by building software and exploring practical problems across full-stack development, AI, and related technical disciplines.",
  principles: [
    "Build before over-engineering.",
    "Understand the problem before choosing the technology.",
    "Prefer maintainable systems over unnecessary complexity.",
    "Learn through real projects.",
  ],
  technicalFocus: [
    { label: "Full-stack", technologies: ["Flask"] },
    { label: "AI / ML", technologies: ["Python", "AI", "NLP"] },
    { label: "Cloud", technologies: [] },
    { label: "Security", technologies: [] },
  ],
  learningAreas: [
    "Software Engineering",
    "AI/ML",
    "Cloud Computing",
    "Cybersecurity",
    "Problem Solving",
  ],
};
