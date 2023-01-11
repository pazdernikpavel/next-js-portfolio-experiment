"use client";

// import "./about.module.css";

import AboutLeftColumn from "@/components/sections/about/AboutLeftColumn";
import AboutRightColumn from "@/components/sections/about/AboutRightColumn";
import TriangleAnimations from "@/components/animations/Triangles";

export default function AboutSection() {
  return (
    <section className="bg-quaternary-color flex justify-center gap-10 relative overflow-hidden">
      <div className="flex justify-center container my-24 md:my-40 z-20">
        <AboutLeftColumn></AboutLeftColumn>
        <AboutRightColumn></AboutRightColumn>
      </div>
      <TriangleAnimations></TriangleAnimations>
    </section>
  );
}
