import Image from 'next/image';
import React from 'react';

const Learn = () => {
  return (
    <div className="relative top-27 w-full h-[500px] md:h-[550px] bg-gray-900 overflow-visible">

      
      <Image
        src="/img/Course.png"
        fill
        alt="Learning banner"
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-white">
        <h1 className="font-sans font-extrabold text-4xl sm:text-5xl md:text-6xl text-center mb-3 leading-tight">
          Learn something new everyday.
        </h1>
        <p className="font-sans font-normal text-lg sm:text-xl mb-10 md:mb-10 lg:mb-1  md:text-2xl text-center">
          Become professionals and ready to join the world.
        </p>
      </div>

     
      <div
        className="
          absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2
          w-[92%]  sm:w-[90%] lg:max-w-8xl 
          bg-white p-5 sm:p-6 md:p-8 
          rounded-xl shadow-xl z-20
        "
      >
        <h3 className="text-gray-900 font-semibold text-base sm:text-lg mb-4">
          What do you want to learn?
        </h3>

        <div
          className="
            flex flex-col md:flex-row 
            gap-3 md:gap-4
            bg-white
          "
        >

          {/* Input 1 */}
          <input
            type="text"
            placeholder="Find courses, skills, software, etc"
            className="
              flex-1 p-3 sm:p-4 bg-gray-100 rounded-md
              placeholder-gray-500 text-gray-700 
              focus:outline-none focus:ring-2 focus:ring-teal-300
              w-full
            "
          />

          {/* Input 2 */}
          <input
            type="text"
            placeholder="Categories"
            className="
              flex-1 p-3 sm:p-4 bg-gray-100 rounded-md
              placeholder-gray-500 text-gray-700
              focus:outline-none focus:ring-2 focus:ring-teal-300
              w-full
            "
          />

          {/* Input 3 */}
          <input
            type="text"
            placeholder="Topic"
            className="
              flex-1 p-3 sm:p-4 bg-gray-100 rounded-md
              placeholder-gray-500 text-gray-700
              focus:outline-none focus:ring-2 focus:ring-teal-300
              w-full
            "
          />

          {/* Search Button */}
          <button
            className="
              bg-teal-400 text-white font-bold 
              py-3 sm:py-4 px-8
              rounded-lg hover:bg-teal-500 transition duration-300 
              shadow-lg
              w-full md:w-auto
            "
          >
            Search
          </button>
        </div>
      </div>

    </div>
  );
};

export default Learn;
