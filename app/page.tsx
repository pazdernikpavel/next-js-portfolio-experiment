import MainHeading from "@/components/typography/MainHeading";
import AboutSection from "@/components/sections/about/AboutSection";

export default function Home() {
  return (
    <main className="w-100 min-h-screen flex flex-col ">
      <MainHeading text="Pavel Pazderník - Software Developer"></MainHeading>
      <AboutSection></AboutSection>
    </main>
  );
}
