"use client";

import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { gsap } from "gsap";

import SecondaryHeading from "@/components/typography/SecondaryHeading";
import Experience, {
  ExperienceName,
} from "@/components/sections/experience/Experience";
import SquareAnimations from "@/components/animations/Squares";

gsap.registerPlugin(ScrollTrigger);

export default function ExperienceSection() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".experience-heading", {
        scrollTrigger: {
          trigger: ".experience-heading",
          start: "center bottom",
          end: "150% center",
          scrub: true,
          onLeave: (self) => {
            self.disable();
            self?.animation?.progress(1);
          },
        },
        y: 40,
        opacity: 0,
        duration: 0.4,
      });

      gsap.from(".timeline", {
        scrollTrigger: {
          trigger: ".timeline",
          start: "-50% bottom",
          end: "center center",
          scrub: true,
          onLeave: (self) => {
            self.disable();
            self?.animation?.progress(1);
          },
        },
        y: 40,
        opacity: 0,
        duration: 0.4,
      });

      gsap.set(".experience", { y: 120, opacity: 0 });
      ScrollTrigger.batch(".experience", {
        start: "center bottom",
        onEnter: (batch) =>
          gsap.to(batch, {
            opacity: 1,
            duration: 0.4,
            y: 0,
            overwrite: true,
          }),
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="bg-tertiary-color flex justify-center relative overflow-hidden">
      <div className="flex flex-col justify-center container gap-10 xl:gap-16 my-24 md:my-40 z-20">
        <SecondaryHeading
          text="Zkušenosti"
          className="experience-heading"
        ></SecondaryHeading>
        <div className="flex justify-start xl:justify-center">
          <div className="hidden sm:flex mr-10 xl:mr-20">
            <span className="h-100 h-max-full w-3 bg-quaternary-color rounded-full timeline"></span>
          </div>
          <div className="max-w-md flex flex-col gap-10 xl:gap-20 sm:my-10 xl:my-20">
            <Experience
              experiences={[
                ExperienceName.NODE_JS,
                ExperienceName.ANGULAR,
                ExperienceName.REACT,
                ExperienceName.CYPRESS,
                ExperienceName.TYPESCRIPT,
              ]}
              textChunks={[
                { type: "normal", text: "Front-end developer pro " },
                { type: "bold", text: "open-bean.com" },
                {
                  type: "normal",
                  text: ". Externí vývoj Big Data dashboardových aplikací řízených AI pro největší technologické hráče na trhu.",
                },
              ]}
            ></Experience>
            <Experience
              experiences={[
                ExperienceName.NODE_JS,
                ExperienceName.DOTNET,
                ExperienceName.GQL,
                ExperienceName.TYPESCRIPT,
              ]}
              textChunks={[
                { type: "normal", text: "Back-end developer pro " },
                { type: "bold", text: "strv.com" },
                {
                  type: "normal",
                  text: ". Vývoj a přepis API několika aplikací pro zákazníky z USA.",
                },
              ]}
            ></Experience>
            <Experience
              experiences={[
                ExperienceName.NODE_JS,
                ExperienceName.ANGULAR,
                ExperienceName.FIGMA,
                ExperienceName.TYPESCRIPT,
                ExperienceName.CYPRESS,
              ]}
              textChunks={[
                { type: "normal", text: "Front-end team lead pro " },
                { type: "bold", text: "mytitle.com" },
                {
                  type: "normal",
                  text: ". Vývoj blockchainových řešení, vedení týmu 4 juniorních developerů, spolupráce s vedením a pomoc při designu produktu.",
                },
              ]}
            ></Experience>
            <Experience
              experiences={[
                ExperienceName.ANGULAR,
                ExperienceName.DOTNET,
                ExperienceName.REACT,
                ExperienceName.TYPESCRIPT,
              ]}
              textChunks={[
                { type: "normal", text: "Front-end developer pro " },
                { type: "bold", text: "linksoft.eu" },
                {
                  type: "normal",
                  text: ". Zakázkový vývoj CRM systémů pro největší dodavatele na českém trhu.",
                },
              ]}
            ></Experience>
            <Experience
              experiences={[ExperienceName.ANGULAR, ExperienceName.DOTNET]}
              textChunks={[
                { type: "normal", text: "IT konzultant pro " },
                { type: "bold", text: "provys.com" },
                {
                  type: "normal",
                  text: ". Konfigurace a školení klíčových uživatel v systémech, vývoj interních aplikací.",
                },
              ]}
            ></Experience>
          </div>
        </div>
      </div>
      <SquareAnimations></SquareAnimations>
    </section>
  );
}
