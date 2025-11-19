import React from "react";
import Image from "next/image";

const DayCard = ({
  imgSrc = "/img/exam_prep_bg.png",
  title = "Crack Any Competitive Exam",
  description = "Great Study Strategies. Test series, mock papers, and practice quizzes to study efficiently and score high in exams.",
}) => {
  return (
    <div
      className="
        flex 
        items-center 
        p-3 sm:p-4 
        bg-white 
        w-full 
        mx-auto 
        rounded-xl 
        border-b-2 border-gray-200
        gap-3 sm:gap-4
      "
    >
      <div
        className="
          relative 
          w-24 h-20 
          sm:w-40 sm:h-32 
          md:w-44 md:h-36
          lg:w-60 lg:h-40 
          flex-shrink-0 
          overflow-hidden 
          rounded-lg
        "
      >
        <Image
          src={imgSrc}
          alt="Competitive Exam Preparation"
          fill
          className="object-cover rounded-lg"
          priority
        />
      </div>
      <div className="flex flex-col justify-center w-full">
        <p
          className="
            font-urbanist font-semibold 
            text-[14px] leading-[18px]
            sm:text-[18px] sm:leading-[24px]
            md:text-[20px] md:leading-[28px]
            mb-1
          "
        >
          {title}
        </p>

        {/* Description */}
        <span
          className="
            font-urbanist font-normal 
            text-[11px] leading-[16px]
            sm:text-[13px] sm:leading-[18px]
            md:text-[14px] md:leading-[20px]
            text-gray-600
          "
        >
          {description}
        </span>
      </div>
    </div>
  );
};

export default DayCard;
