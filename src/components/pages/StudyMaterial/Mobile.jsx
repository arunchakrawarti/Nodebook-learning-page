import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const Mobile = () => {
  return (
    <div className="w-full bg-white py-12 md:py-20 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12 lg:gap-20">

       
        <div className="text-center md:text-left">
          <h1 className="font-poppins font-bold text-[32px] sm:text-[40px] lg:text-[50px] leading-[130%] tracking-[-2%] text-gray-900">
            Get The Mobile App Today!
          </h1>

          <p className="font-mulish font-normal text-[15px] sm:text-[17px] md:text-[19px] lg:text-[21px] leading-[150%] text-gray-700 mt-4">
            The NotesBook Global Academy App is your one-stop solution for competitive exam success.
            Access expert video lectures, detailed notes, mock tests, and personalized learning insights — 
            all in one app. Study smarter, track your progress, and stay ahead with India’s most trusted 
            learning companion.
          </p>

          <button className="bg-[#009379] text-white px-6 py-3 rounded-md flex items-center gap-2 mt-6 w-fit mx-auto md:mx-0 shadow-md hover:bg-[#007c68] transition">
            <span>Get Started</span>
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
        <div className="relative flex justify-center md:justify-end">
          <Image
            src="/img/Visuals.png"
            alt="mobile app"
            width={450}
            height={450}
            className="relative z-20 w-[260px] sm:w-[330px] md:w-[380px] lg:w-[450px] h-auto"
          />
        </div>

      </div>
    </div>
  );
};

export default Mobile;
