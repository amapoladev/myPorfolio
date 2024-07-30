import React from "react";
import background from "../../assets/images/backgroundWhale.svg";

const Background = () => {
  return (
    <>
      <div className="flex">
        <img src={background} alt="" className="w-auto h-screen" />
      </div>
    </>
  );
};

export default Background;
