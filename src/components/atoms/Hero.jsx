import React from "react";
import ImageHero from "../../assets/images/Whale.svg";

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center text-neutral-content pt-24">
      {/* H1 appears first on mobile */}
      <h1 className="order-1 md:order-2 font-sister text-4xl">
        Johana Sandoval <br /> Portfolio
      </h1>
      {/* Image appears first on desktop */}
      <img src={ImageHero} alt="" className="order-2 md:order-1 h-80" />
    </div>
  );
};

export default Hero;
