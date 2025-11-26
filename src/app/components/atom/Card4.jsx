import Image from "next/image";
import React from "react";
const Card4 = ({
  img,
  label,
  description,
  button,
  bgColor,
  buttonColor,
  cardWidth = "100%",      
  cardMaxWidth = "355px", 
  cardHeight = "auto",
}) => {
  return (
    <div
      className="rounded-xl p-6 shadow-md flex flex-col justify-between"
      style={{
        backgroundColor: bgColor || "#FFFFFF",
        width: cardWidth,     
        maxWidth: cardMaxWidth,
        height: cardHeight,    
      }}
    >
      {/* Content */}
      <div>
        <Image src={img} height={40} width={40} alt="icon" />
        <h1 className="font-[Font_2] font-medium text-[16px] leading-[24px] mt-7 tracking-[0] align-middle">
          {label}
        </h1>
        <p className="font-[Font_2] font-normal mt-2 text-[12.8px] leading-[19.2px] tracking-[0] align-middle mt-3 text-gray-700">
          {description}
        </p>
      </div>

      {/* Button */}
      {button && (
        <div
          className="w-[141px] h-[40px] rounded-[6px] text-white text-center font-sans font-semibold flex items-center justify-center mt-5 cursor-pointer hover:opacity-90 transition"
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


export default Card4;
