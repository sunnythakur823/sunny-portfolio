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
  academicBackground: [
    "Class 12 — Commerce — St. Aloysius Plus 2 School, Ranchi — 68.20% — 2024",
    "Class 10 — St. Kuldeep High School, Harmu — 84.80% — 2022",
  ],
};

/** Add only confirmed achievements; the UI remains hidden while this is empty. */
export const achievements: AchievementEntry[] = [];
