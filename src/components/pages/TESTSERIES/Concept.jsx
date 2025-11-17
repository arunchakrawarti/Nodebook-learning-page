import React from 'react';

const Concept = () => {
  return (
    <div className="w-full shadow bg-gray-50 flex flex-col sm:flex-row sm:items-center sm:justify-start p-2 sm:p-4 box-border">

      {/* Back Button */}
      <div className="flex items-center space-x-1 cursor-pointer text-blue-600 hover:text-blue-800 transition duration-150 mb-2 sm:mb-0 text-sm sm:text-base md:text-lg flex-shrink-0">
        <span className="text-lg sm:text-xl md:text-2xl">&larr;</span> 
        <span className="text-sm sm:text-base md:text-lg">back</span>
      </div>

      {/* Center Title */}
      <div className="flex-grow text-center sm:text-left md:text-center px-0 sm:px-2">
        <p className="font-bold text-base sm:text-lg text-center md:text-xl lg:text-2xl text-gray-800 break-words">
          Concept Builder Test Series
        </p>
      </div>

    </div>
  );
};

export default Concept;
