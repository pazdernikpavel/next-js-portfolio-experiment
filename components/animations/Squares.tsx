"use client";

import Lottie from "react-lottie";
import * as squaresData from "../../public/squares.json";

export default function SquareAnimations() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: squaresData,
  };

  return (
    <div className="absolute z-10 left-0 top-0 hidden lg:block">
      <Lottie
        options={defaultOptions}
        height="170%"
        width="170%"
        speed={0.2}
        isClickToPauseDisabled={true}
        ariaRole="img"
      />
    </div>
  );
}
