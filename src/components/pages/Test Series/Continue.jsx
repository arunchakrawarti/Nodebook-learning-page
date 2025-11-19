import Image from "next/image";
import Link from "next/link";
import React from "react";

const ConceptBuilder = () => {
  return (
    <div className="mx-4 sm:mx-6 md:mx-8 lg:mx-10 max-w-sm sm:max-w-xs md:max-w-md lg:max-w-md">
        <h1 className="font-inter font-bold ml-3 text-[28px] leading-[28px] tracking-[0px]">
  Continue Practice
</h1>
      <div className="w-full mt-3 relative h-[0] pb-[52%] sm:pb-[50%] md:pb-[52%] rounded-xl">
        <Link href='test-seriess/#footar'>
        <Image
          src="/img/Test.png"
          alt="All India Govt Exam Banner"
          fill
          className="object-contain"
        />
        </Link>
      </div>

      <h1 className="mt-4 font-inter font-medium text-[16px] ml-3 sm:text-[16px] md:text-[18px] leading-[24px] sm:leading-[24px] md:leading-[26px] tracking-[0px]">
        Concept Builder Test Series
      </h1>

      <p className="mt-2 font-inter font-normal text-[14px] ml-3 sm:text-[14px] md:text-[16px] leading-[21px] sm:leading-[21px] md:leading-[24px] tracking-[0px] text-gray-700">
        Strengthen your foundation with topic-wise tests...
      </p>

      <div className="flex items-center mt-3 w-full">
        <div className="flex-grow h-2 bg-gray-300 ml-3 rounded overflow-hidden">
          <div className="h-full bg-green-600" style={{ width: "80%" }} />
        </div>
        <span className="ml-2 lg:ml-2 font-inter font-bold text-[14px] sm:text-[14px] md:text-[16px]">
          80%
        </span>
      </div>
    </div>
  );
};

export default ConceptBuilder;
