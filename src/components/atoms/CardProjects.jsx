import React from 'react'
import { Link } from 'react-router-dom';

const CardProjects = ({ projectName, imageValue, descriptionValue }) => {
  return (
    <>
       <div className='flex flex-col items-center bg-white/30 backdrop-blur-sm border border-inherit rounded-md shadow-md w-80 h-96 overflow-hidden'>
      <div className='w-full h-48 overflow-hidden'>
        <img src={imageValue} alt={projectName} className='w-full h-full object-cover' />
      </div>
      <div className="m-4 p-2 text-center flex flex-col ">
      <h2 className="mx-2 px-4 font-bold text-xl mb-2">{projectName}</h2>
        <p className='text-white m-4 overflow-hidden text-justify line-clamp-3 '>{descriptionValue}</p>
        <Link to={`/projects/${projectName}`} className='inline-block mt-auto'>
          <button className='bg-cyan-900 hover:bg-cyan-800 text-white font-bold py-2 px-4 rounded transition duration-300'>
            More about the project
          </button>
        </Link>
      </div>
    </div>
    </>
  );
};

export default CardProjects;
