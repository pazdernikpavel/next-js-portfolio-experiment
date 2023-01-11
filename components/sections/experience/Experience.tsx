"use client";

import NormalText, { NormalTextType } from "@/components/typography/NormalText";
import Image from "next/image";

export enum ExperienceName {
  DOTNET = "dotnet",
  ANGULAR = "angular",
  REACT = "react",
  TYPESCRIPT = "typescript",
  NODE_JS = "nodejs",
  FIGMA = "figma",
  CYPRESS = "cypress",
  GQL = "graphql",
}

export default function Experience({
  textChunks,
  experiences,
}: {
  textChunks: NormalTextType[];
  experiences: ExperienceName[];
}) {
  return (
    <div className="experience flex flex-col gap-4">
      <NormalText textChunks={textChunks}></NormalText>
      <div className="flex gap-3">
        {experiences.map((experience) => {
          switch (experience) {
            case ExperienceName.ANGULAR: {
              return (
                <Image
                  key={experience}
                  src="./angular.svg"
                  alt="angular icon"
                  width={30}
                  height={33}
                ></Image>
              );
            }
            case ExperienceName.DOTNET: {
              return (
                <Image
                  key={experience}
                  src="./dotnet.svg"
                  alt="dotnet icon"
                  width={60}
                  height={23}
                ></Image>
              );
            }
            case ExperienceName.REACT: {
              return (
                <Image
                  key={experience}
                  src="./react.svg"
                  alt="react icon"
                  width={40}
                  height={36}
                ></Image>
              );
            }
            case ExperienceName.TYPESCRIPT: {
              return (
                <Image
                  key={experience}
                  src="./typescript.svg"
                  alt="typescript icon"
                  width={35}
                  height={35}
                ></Image>
              );
            }
            case ExperienceName.FIGMA: {
              return (
                <Image
                  key={experience}
                  src="./figma.svg"
                  alt="figma icon"
                  width={40}
                  height={40}
                ></Image>
              );
            }
            case ExperienceName.NODE_JS: {
              return (
                <Image
                  key={experience}
                  src="./nodejs.svg"
                  alt="node.js icon"
                  width={34}
                  height={40}
                ></Image>
              );
            }
            case ExperienceName.CYPRESS: {
              return (
                <Image
                  key={experience}
                  src="./cypress.svg"
                  alt="cypress icon"
                  width={40}
                  height={40}
                ></Image>
              );
            }
            case ExperienceName.GQL: {
              return (
                <Image
                  key={experience}
                  src="./graphql.svg"
                  alt="graphql icon"
                  width={37}
                  height={43}
                ></Image>
              );
            }
            default:
              return <></>;
          }
        })}
      </div>
    </div>
  );
}
