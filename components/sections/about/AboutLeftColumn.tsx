"use client";

import { useEffect } from "react";
import { gsap } from "gsap";

import MainText from "@/components/typography/MainText";
import NormalText from "@/components/typography/NormalText";
import SecondaryHeading from "@/components/typography/SecondaryHeading";

export default function AboutLeftColumn() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".about-heading", { y: 40, opacity: 0, visibility: "visible" });
      gsap.set(".main-text", { y: 40, opacity: 0, visibility: "visible" });
      gsap.set(".description > *", {
        y: 40,
        opacity: 0,
        visibility: "visible",
      });

      gsap.to(".about-heading", { y: 0, opacity: 1, duration: 0.4 });
      gsap.to(".main-text", { y: 0, opacity: 1, delay: 0.2, duration: 0.4 });
      gsap.to(".description > *", {
        y: 0,
        opacity: 1,
        delay: 0.4,
        duration: 0.4,
        stagger: 0.2,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="flex flex-col gap-10 xl:gap-16 justify-center">
      <SecondaryHeading
        className="about-heading"
        text="About"
      ></SecondaryHeading>
      <MainText
        className="main-text"
        textChunks={[
          { type: "normal", text: "My name is " },
          { type: "bold", text: "Pavel" },
          {
            type: "normal",
            text: " and I have been dedicated to development, mainly front-end, for ",
          },
          { type: "bold", text: "7 years" },
          { type: "normal", text: "." },
        ]}
      ></MainText>
      <div className="flex flex-col gap-5 xl:gap-10 description">
        <NormalText
          textChunks={[
            {
              type: "normal",
              text: "Senior developer 👨🏻‍💻 with experience in developing CRM systems, e-commerce, blockchain applications, Big Data dashboards, and several other projects.",
            },
          ]}
        ></NormalText>
        <NormalText
          textChunks={[
            {
              type: "normal",
              text: "As a front-end developer, I have also fallen in love with UI/UX design, including wireframing, prototyping and design in general 🛠️.",
            },
          ]}
        ></NormalText>
        <NormalText
          textChunks={[
            {
              type: "normal",
              text: "Back-end development is also not foreign to me and I am not afraid to use the most modern technologies, frameworks, and cloud solutions.",
            },
          ]}
        ></NormalText>
        <NormalText
          textChunks={[
            {
              type: "normal",
              text: "My favorite tools 🖤 include Angular, Node.js, MongoDB, AWS, Figma, and many more 🚀.",
            },
          ]}
        ></NormalText>
      </div>
    </div>
  );
}
