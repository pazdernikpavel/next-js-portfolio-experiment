"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function AboutRightColumn() {
  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".author-image", {
        x: 40,
        opacity: 0,
        duration: 0.8,
        delay: 1.2,
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-80 xl:w-96 ml-10 flex-col justify-center relative hidden md:flex shrink-0 ">
      <Image
        className="absolute inset-y-auto left-0 author-image"
        src="/portrait.png"
        alt="portrait image in triangle shape"
        width={700}
        height={700}
      ></Image>
    </div>
  );
}
