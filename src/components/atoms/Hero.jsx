import React from "react";
import ImageHero from "../../assets/images/name.svg";

const Hero = () => {
  return (
    <div
      id="hero"
      className="flex flex-col md:flex-row justify-center items-center text-neutral-content pt-24"
    >
      <img src={ImageHero} alt="" className=" h-80" />
    </div>
  );
};

export default Hero;
