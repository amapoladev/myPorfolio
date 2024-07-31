import React from 'react';
import AboutmeImage from '../../assets/images/johanaDraw.svg';

const Aboutme = () => {
  return (
    <>
      <div className="bg-cyan-950 h-auto flex flex-col md:flex-row justify-center items-center py-12">
        <img
          src={AboutmeImage}
          alt="johana illustration"
          className="h-52 mb-6 md:mb-0 md:pl-24 md:pr-4"
        />
        <div className="flex flex-col items-center md:items-start px-4 md:px-24">
          <h1 className="text-4xl font-sister text-white text-center md:text-left">
            Who I am?
          </h1>
          <h2 className="pt-6 text-lg font-sister text-white text-center md:text-left">
            I’m Johana, a web developer completely immersed in the world of code and design. I love creating digital solutions that are both functional and visually appealing.
          </h2>
        </div>
      </div>
    </>
  );
};

export default Aboutme;
