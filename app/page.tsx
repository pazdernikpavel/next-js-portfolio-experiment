"use client";

import MainHeading from "@/components/typography/MainHeading";
import AboutSection from "@/components/sections/about/AboutSection";
import SkillsSection from "@/components/sections/skills/SkillsSection";
import ExperienceSection from "@/components/sections/experience/ExperienceSection";

export default function Home() {
  return (
    <main className="w-100 max-w-full overflow-hidden min-h-screen flex flex-col">
      <MainHeading text="Pavel Pazderník - Software Developer"></MainHeading>
      <AboutSection></AboutSection>
      <SkillsSection></SkillsSection>
      <ExperienceSection></ExperienceSection>
    </main>
  );
}
