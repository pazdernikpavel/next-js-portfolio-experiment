"use client";

import { useLayoutEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function AboutRightColumn() {
  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".author-image", {
        x: 40,
        opacity: 0,
        duration: 0.8,
        delay: 1.2,
      });
    });

    return () => ctx.revert();
  });

  return (
    <div className="w-64 xl:w-96 flex-col gap-10 justify-center my-24 md:my-40 relative xs:hidden hidden md:flex">
      <Image
        className="absolute inset-y-auto left-0 author-image"
        src="/portrait-large.png"
        alt="portrait image in triangle shape"
        width={700}
        height={700}
      ></Image>
    </div>
  );
}
