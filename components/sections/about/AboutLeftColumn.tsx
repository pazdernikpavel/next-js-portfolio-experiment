"use client";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";

import MainText from "@/components/typography/MainText";
import NormalText from "@/components/typography/NormalText";
import SecondaryHeading from "@/components/typography/SecondaryHeading";

export default function AboutLeftColumn() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".about-heading", { y: 40, opacity: 0, duration: 0.4 });
      gsap.from(".main-text", { y: 40, opacity: 0, delay: 0.2, duration: 0.4 });
      gsap.from(".description > *", {
        y: 40,
        opacity: 0,
        delay: 0.4,
        duration: 0.4,
        stagger: 0.2,
      });
    });

    return () => ctx.revert();
  });

  return (
    <div className="flex flex-col gap-10 xl:gap-16 justify-center">
      <SecondaryHeading
        className="about-heading"
        text="Kdo jsem?"
      ></SecondaryHeading>
      <MainText
        className="main-text"
        textChunks={[
          { type: "normal", text: "Jmenuji se " },
          { type: "bold", text: "Pavel" },
          {
            type: "normal",
            text: " a věnuji se vývoji, především tedy frontendu, již ",
          },
          { type: "bold", text: "7 rokem" },
          { type: "normal", text: "." },
        ]}
      ></MainText>
      <div className="flex flex-col gap-5 xl:gap-10 description">
        <NormalText
          textChunks={[
            {
              type: "normal",
              text: "Seniorní developer 👨🏻‍💻 se zkušenostmi z vývoje CRM systémů, e-commerce, blockchainových aplikací, Big Data dashboardů a několika dalších projektů.",
            },
          ]}
        ></NormalText>
        <NormalText
          textChunks={[
            {
              type: "normal",
              text: "Jako frontenďák jsem se také zamiloval do UI/UX designu a to včetně wireframování, prototypování a designu všeobecně 🛠️.",
            },
          ]}
        ></NormalText>
        <NormalText
          textChunks={[
            {
              type: "normal",
              text: "Vývoj backendu mi také není cizí a nebojím se použít nejmodernější technologie, frameworky a cloudová řešení.",
            },
          ]}
        ></NormalText>
        <NormalText
          textChunks={[
            {
              type: "normal",
              text: "Mezi moje nejoblíbenější 🖤 nástroje rozhodně patří Angular, Node.js, MongoDB, AWS, Figma a spoustu dalších 🚀.",
            },
          ]}
        ></NormalText>
      </div>
    </div>
  );
}
