import React from "react";

const Portfolio = () => {

  return (
    <>
      <div id="portfolio" className="p-8">
        <h1 className="text-4xl font-sister text-white text-center ml-8 mt-12 md:text-left">
          Projects
        </h1>
      </div>
      <div className="flex flex-col w-auto mx-12 pb-4">
      <div className="flex justify-center">
    <div className="border-solid border-black border-2 bg-red-50 h-72 w-2/4"></div>
    <div className="border-solid border-black border-2  bg-red-50 h-72 w-2/4"></div>
      </div>
      <div className="flex justify-center">
    <div className="border-solid border-black border-2 bg-red-50 h-80 w-1/4"></div>
    <div className="border-solid border-black border-2  bg-red-50 h-80 w-2/4"></div>
    <div className="border-solid border-black border-2  bg-red-50 h-80 w-1/4"></div>
      </div>
      </div>
      
      
    </>
  );
};

export default Portfolio;
