import Image from "next/image";
import React from "react";

const Purchased = () => {
  return (
    <div className="mx-4 mt-40 sm:mx-6 md:mx-8 lg:mx-10 max-w-sm sm:max-w-xs md:max-w-md lg:max-w-md">
      <h1 className="font-inter font-bold ml-3 mt-5 text-[28px] leading-[28px] tracking-[0px]">
        Continue Practice
      </h1>
      <div className="w-full mt-3 relative h-[0] pb-[52%] sm:pb-[50%] md:pb-[52%] rounded-xl">
        <Image
          src="/img/Material.png"
          alt="All India Govt Exam Banner"
          fill
          className="object-contain"
        />
      </div>

      <h1
        className="mt-4 ml-3 font-inter font-medium text-[22px] leading-[24px] tracking-[0px] underline decoration-solid decoration-1 underline-offset-0 decoration-auto"
      >
        Upsc Exam Syllabus
      </h1>

      <p
        className="mt-2 ml-3 font-inter
  font-normal
  text-[16px]
  leading-[21px]
  tracking-[0px]
  underline
  decoration-solid
  decoration-1
  underline-offset-0
  decoration-auto"
      >
        Measure your growth after each test...
      </p>
    </div>
  );
};

export default Purchased;
