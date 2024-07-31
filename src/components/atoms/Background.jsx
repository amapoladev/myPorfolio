import React from "react";
import background from "../../assets/images/backgroundWhale.svg";

const Background = () => {
  return (
    <>
      <div className="flex h-screen">
        <img src={background} alt="" className="w-auto size-11/12" />
      </div>
    </>
  );
};

export default Background;
