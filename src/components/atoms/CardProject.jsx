import React from 'react';
import { Link } from 'react-router-dom';

const CardProject = ({ projectName, imageValue, width = 80, height = 80 }) => {
  return (
    <div
      className={`relative overflow-hidden rounded-md shadow-md`}
      style={{ width: `${width}px`, height: `${height}px` }} // Use the props to set size
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${imageValue})` }}
      />

      {/* Overlay with Text and Button */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex">
        <div className="text-center text-white p-4">
          <Link to={`/projects/${projectName}`} className="text-2xl font-bold hover:underline">
            {projectName}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CardProject;