import React from "react";
import Image from "next/image";

const Lerning = () => {
  return (
    <section className="flex flex-col lg:flex-row w-full mx-auto h-auto px-4 sm:px-6 lg:px-12 py-10 lg:py-16 items-center gap-10 lg:gap-0">
      
      {/* Left Section - Text Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center text-left">
        <p className="font-urbanist font-semibold text-[28px] sm:text-[34px] md:text-[40px] leading-[38px] sm:leading-[46px] md:leading-[51.84px] text-gray-900 mb-4">
          The most trusted learning platform on your phone
        </p>

        <span className="font-poppins font-normal text-[14px] sm:text-[15px] md:text-[16px] leading-[21px] sm:leading-[23px] md:leading-[25px] text-gray-700 block mb-8">
          With our training programs, learning online can be a very exciting experience! 
          Take the next step toward achieving your professional and personal objectives.
        </span>

        {/* Buttons/Logos */}
        <div className="flex flex-wrap gap-4 sm:gap-6 items-center">
          <Image
            src="/img/Most.png"
            height={55}
            width={200}
            alt="Icon"
            className="w-[150px] sm:w-[180px] md:w-[200px] h-auto"
          />
          <Image
            src="/img/Most1.png"
            height={55}
            width={200}
            alt="Icon1"
            className="w-[150px] sm:w-[180px] md:w-[200px] h-auto"
          />
        </div>
      </div>

      {/* Right Section - Image */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <Image
          src="/img/Most2.png"
          height={600}
          width={676}
          alt="Learning illustration"
          className="w-full max-w-[500px] sm:max-w-[600px] lg:max-w-[676px] h-auto"
        />
      </div>
    </section>
  );
};

export default Lerning;
