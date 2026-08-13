import { AboutSection } from "@/components/about";
import { CareerGrowthSection } from "@/components/experience";
import { ContactSection } from "@/components/contact";
import { GitHubSection } from "@/components/github";
import { Hero } from "@/components/hero";
import { LabSection } from "@/components/lab";
import { ProjectsSection } from "@/components/projects";
import { SkillsSection } from "@/components/skills";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <ProjectsSection />
      <SkillsSection />
      <AboutSection />
      <CareerGrowthSection />
      <GitHubSection />
      <LabSection />
      <ContactSection />
    </main>
  );
}
