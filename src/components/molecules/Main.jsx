import React from "react";
import Aboutme from "../atoms/Aboutme";
import Portfolio from "../atoms/Portfolio";

const Main = () => {
  return (
    <>
      <div className="bg-custom-gradient inset-0 relative flex justify-center items-center overflow-hidden h-auto z-0"></div>
      <Aboutme />
      <Portfolio />
    </>
  );
};

export default Main;
