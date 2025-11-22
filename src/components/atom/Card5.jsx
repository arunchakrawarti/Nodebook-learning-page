import React from "react";

const Card5 = ({ label, description, button, bgColor, buttonColor, cardHeight = "250px" }) => {
  return (
    <div
      className="
        rounded-xl 
        p-4 sm:p-6 
        shadow-md 
        flex 
        flex-col hover:shadow-2xl 
        justify-between 
        w-full 
        box-border 
        overflow-hidden
      "
      style={{
        background: bgColor || "#FFFFFF",
        height: cardHeight,
      }}
    >
      <div className="flex flex-col">

        {/* Auto-resizing responsive text */}
        <h1 className="
          font-inter font-bold 
          text-white 
          leading-[1.2]
          text-[18px] mt-20 sm:text-[20px] md:text-[22px] lg:text-[24px]
          clamp-text
        ">
          {label}
        </h1>

        <p className="
          font-inter font-medium 
          text-white mt-3
          leading-[1.25]
          text-[14px] sm:text-[15px] md:text-[17px] lg:text-[20px]
          line-clamp-3
        ">
          {description}
        </p>
      </div>

      {button && (
        <div
          className="
            w-[141px] 
            h-[40px] 
            rounded-[6px] 
            text-white 
            text-center 
            font-sans 
            font-semibold 
            flex 
            items-center 
            justify-center 
            mt-4 
            cursor-pointer 
            hover:opacity-90 
            transition
            text-[14px] sm:text-[15px]
          "
          style={{
            background: buttonColor
              ? buttonColor
              : "linear-gradient(126.5deg, #EC131D 0%, #2F3192 100%)",
          }}
        >
          {button}
        </div>
      )}
    </div>
  );
};

export default Card5;
