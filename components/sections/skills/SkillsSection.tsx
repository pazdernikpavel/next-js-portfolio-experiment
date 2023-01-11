import CircleAnimations from "@/components/animations/Circles";
import SkillBadge from "@/components/sections/skills/SkillBadge";

export default function SkillsSection() {
  return (
    <section className="bg-primary-color flex justify-center gap-10 relative">
      <div className="flex justify-center container my-24 md:my-40 z-20 gap-4 xl:gap-8 flex-wrap">
        <SkillBadge skill="Angular"></SkillBadge>
        <SkillBadge skill="React"></SkillBadge>
        <SkillBadge skill="Redux"></SkillBadge>
        <SkillBadge skill="GraphQL"></SkillBadge>
        <SkillBadge skill="CSS"></SkillBadge>
        <SkillBadge skill="Tailwind"></SkillBadge>
        <SkillBadge skill="UI/UX Design"></SkillBadge>
        <SkillBadge skill="Motion Design"></SkillBadge>
        <SkillBadge skill="CI/CD"></SkillBadge>
        <SkillBadge skill="Team Management"></SkillBadge>
        <SkillBadge skill="Cypress"></SkillBadge>
        <SkillBadge skill="Next.js"></SkillBadge>
        <SkillBadge skill="Angular Universal"></SkillBadge>
        <SkillBadge skill="Architektura"></SkillBadge>
        <SkillBadge skill="Node.js"></SkillBadge>
        <SkillBadge skill=".NET"></SkillBadge>
        <SkillBadge skill="SQL / NoSQL Databáze"></SkillBadge>
        <SkillBadge skill="Redis"></SkillBadge>
        <SkillBadge skill="Firebase"></SkillBadge>
        <SkillBadge skill="GCP"></SkillBadge>
        <SkillBadge skill="AWS"></SkillBadge>
      </div>
      <CircleAnimations></CircleAnimations>
    </section>
  );
}
