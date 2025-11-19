import React from "react";

const HexCard = ({ number, text, bgColor }) => {
  return (
    <div
      className={`
        w-24 h-24 sm:w-35 sm:h-35 md:w-32 md:h-32 lg:w-60 lg:h-50
        flex items-center justify-center text-white font-bold 
        transition-transform duration-300 border-4 transform hover:scale-105
        ${bgColor}
      `}
      style={{
        clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
      }}
    >
      <div className="text-center px-2">
        <div className="text-lg sm:text-xl md:text-2xl lg:text-5xl font-extrabold leading-none">
          {number}
        </div>
        <div className="text-xs sm:text-sm md:text-base lg:text-xl font-medium mt-1 leading-snug">
          {text}
        </div>
      </div>
    </div>
  );
};

export default HexCard;

