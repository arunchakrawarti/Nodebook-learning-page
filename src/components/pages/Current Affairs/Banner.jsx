import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative top-25 w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[420px] xl:h-[400px] overflow-hidden">
      
      {/* Background Image */}
      <Image
        src="/img/Pracyice.png"
        alt="Practice Banner"
        fill
        className="object-cover"
        priority
      />

      {/* CONTENT */}
      <div className="absolute inset-0 flex flex-col justify-center text-white px-4 sm:px-8 md:px-12 lg:px-16 xl:px-14">

        {/* TEXT BLOCK */}
        <div className="max-w-full md:max-w-4xl mb-6 md:mb-8">
          <h3 className="font-mulish font-black uppercase 
            text-[22px] sm:text-[26px] md:text-[32px] lg:text-[36px] xl:text-[40px]
            leading-tight mb-3">
            Explore the most diverse collection <br />
            <span>of online courses!</span>
          </h3>

          <p className="font-manrope font-medium
            text-[15px] sm:text-[17px] md:text-[19px] lg:text-[21px]
            leading-[22px] sm:leading-[26px] md:leading-[30px] lg:leading-[34px]">
            Discover our comprehensive range of courses designed to help you achieve your goals. From UPSC to Banking exams, we have everything you need for success.
          </p>
        </div>

        {/* BUTTONS */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 w-full sm:w-auto">
          
          <button className="w-full sm:w-auto px-6 py-3 
            bg-red-600 text-white rounded-full 
            text-[15px] sm:text-[17px] md:text-[19px] font-bold
            hover:bg-red-700 transition">
            Start Learning Free
          </button>

          <button className="w-full sm:w-auto px-6 py-3 
            bg-transparent border-2 border-white text-white rounded-full
            text-[15px] sm:text-[17px] md:text-[19px] font-bold
            hover:bg-white hover:text-black transition">
           Explore Courses
          </button>
        </div>
      </div>

      {/* DOTS - always bottom center */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        <div className="w-2 h-2 bg-white rounded-full"></div>
        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
        <div className="w-2 h-2 bg-white/50 rounded-full"></div>
         <div className="w-2 h-2 bg-white/50 rounded-full"></div>
      </div>

    </div>
  );
};

export default Banner;
