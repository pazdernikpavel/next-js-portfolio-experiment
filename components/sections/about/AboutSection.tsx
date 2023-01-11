import AboutLeftColumn from "@/components/sections/about/AboutLeftColumn";
import AboutRightColumn from "@/components/sections/about/AboutRightColumn";

export default function AboutSection() {
  return (
    <section className="bg-quaternary-color flex justify-center gap-10 ">
      <AboutLeftColumn></AboutLeftColumn>
      <AboutRightColumn></AboutRightColumn>
    </section>
  );
}
