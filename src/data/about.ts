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
    "Sunny Kumar is a BCA student and software developer focused on building practical applications across AI/ML, full-stack development, cloud technologies, and modern web engineering. I prefer solving real problems with clear architecture, maintainable code, and product-minded thinking rather than building for the sake of complexity.",
  principles: [
    "Keep solutions simple, useful, and maintainable.",
    "Understand the problem before choosing the stack.",
    "Build for usability, performance, and long-term clarity.",
    "Learn by shipping projects and improving through iteration.",
    "Think in product terms while engineering with discipline.",
    "Stay curious and keep growing through practical work.",
  ],
  technicalFocus: [
    { label: "Frontend", technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
    { label: "Backend", technologies: ["Python", "Flask", "REST APIs"] },
    { label: "AI / ML", technologies: ["Python", "AI", "NLP"] },
    { label: "Cloud & Systems", technologies: ["Cloud", "Scalable Architecture"] },
  ],
  learningAreas: [
    "Software Engineering",
    "AI/ML",
    "Full-Stack Development",
    "Cloud Technologies",
    "Product-Focused Problem Solving",
  ],
};
