"use client";

import Lottie from "react-lottie";
import * as trianglesData from "../../public/triangles.json";

export default function TriangleAnimations() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: trianglesData,
  };

  return (
    <div className="absolute z-10 left-0 top-0 hidden lg:block w-screen">
      <Lottie
        options={defaultOptions}
        height="150%"
        width="150%"
        speed={0.2}
        isClickToPauseDisabled={true}
        ariaRole="img"
      />
    </div>
  );
}
