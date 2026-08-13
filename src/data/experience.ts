import type { AchievementEntry, EducationEntry, ExperienceEntry } from "@/types";

export const experienceEntries: ExperienceEntry[] = [
  {
    title: "AI & Prompt Engineering Internship",
    organization: "VaultofCodes",
    type: "Internship",
    startDate: "2025-05",
    endDate: "2025-06",
  },
  {
    title: "AWS Solutions Architecture Job Simulation",
    organization: "Forage",
    type: "Job simulation",
    startDate: "2025-06",
  },
  {
    title: "Deloitte Cyber Job Simulation",
    organization: "Forage",
    type: "Job simulation",
    startDate: "2025-06",
  },
  {
    title: "Cyber Security Workshop",
    organization: "BIT Mesra",
    type: "Workshop",
    startDate: "2026-03",
  },
];

export const education: EducationEntry = {
  program: "BCA",
  institution: "Amity University Jharkhand",
  expectedGraduation: "2027",
  academicBackground: ["Class 10: 84.8%", "Class 12: 68.2% — Commerce"],
};

/** Add only confirmed achievements; the UI remains hidden while this is empty. */
export const achievements: AchievementEntry[] = [];
