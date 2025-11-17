import Image from "next/image";
import React from "react";

const TestCard = ({ title, description, currentPrice, originalPrice, imgSrc, imgAlt }) => {
  return (
    <div className="border-b p-4 sm:p-6 lg:p-5 max-w-4xl  shadow-lg bg-white rounded-lg">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6">
        
        {/* Text Section */}
        <div className="flex-grow flex flex-col">
          <h2 className="font-inter font-bold text-[16px] leading-[20px] tracking-[0px] text-gray-900">
            {title}
          </h2>
          <p className="font-inter font-normal text-[14px] leading-[21px] tracking-[0px] text-gray-700 mt-1">
            {description}
          </p>

          {/* Price + Button */}
          <div className="mt-4  flex-col sm:flex-row sm:items-center sm:space-x-4 gap-2">
            <div className="flex items-center gap-3">
              <span className="font-bold text-lg sm:text-xl text-gray-900">{currentPrice}</span>
              <span className="font-normal text-sm sm:text-base text-gray-500 line-through">{originalPrice}</span>
            </div>
            <button className="bg-[#0f4d7f] hover:bg-[#0c3c63] text-[#FFD60A] font-semibold py-2 px-4 rounded text-sm transition-colors shadow-md">
              Enroll Now
            </button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-shrink-0 w-full sm:w-[306px] h-[171px] relative rounded overflow-hidden">
          <Image
            src={imgSrc}
            alt={imgAlt}
            fill
            className="object-cover rounded"
          />
        </div>

      </div>
    </div>
  );
};

export default TestCard;
