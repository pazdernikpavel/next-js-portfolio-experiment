"use client";

import Lottie from "react-lottie";
import * as circlesData from "../../public/circles.json";

export default function CircleAnimations() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: circlesData,
  };

  return (
    <div className="absolute z-10 left-0 top-0 hidden lg:block">
      <Lottie
        options={defaultOptions}
        height="150%"
        width="150%"
        speed={0.5}
        isClickToPauseDisabled={true}
        ariaRole="img"
      />
    </div>
  );
}
