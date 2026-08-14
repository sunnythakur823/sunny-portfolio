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
    "I am a BCA student and aspiring software developer who learns by building practical software. My focus is on web applications, APIs, and AI-powered projects that solve real problems and provide clear product value.",
  principles: [
    "Build pragmatic solutions before over-engineering.",
    "Understand the problem before choosing tools.",
    "Prefer maintainable, testable systems over unnecessary complexity.",
    "Learn by shipping real projects and iterating.",
  ],
  technicalFocus: [
    { label: "Web & Full-stack", technologies: ["Flask"] },
    { label: "AI / ML", technologies: ["Python", "NLP"] },
    { label: "APIs & Backend", technologies: ["Flask"] },
    { label: "Cloud", technologies: [] },
  ],
  learningAreas: [
    "Software Engineering",
    "AI/ML",
    "Cloud Computing",
    "Cybersecurity",
    "Problem Solving",
  ],
};
