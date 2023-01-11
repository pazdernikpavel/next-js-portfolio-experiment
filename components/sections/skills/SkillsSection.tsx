"use client";

import { useLayoutEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

import CircleAnimations from "@/components/animations/Circles";
import SkillBadge from "@/components/sections/skills/SkillBadge";

gsap.registerPlugin(ScrollTrigger);

export default function SkillsSection() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".skill", { y: 120, opacity: 0 });
      ScrollTrigger.batch(".skill", {
        start: "start bottom",
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            duration: 0.4,
            y: 0,
            stagger: { each: 0.2, grid: [1, 3] },
            overwrite: true,
          }),
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-primary-color flex justify-center gap-10 relative overflow-hidden">
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
