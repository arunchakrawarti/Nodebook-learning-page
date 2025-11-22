import React from "react";
import Image from "next/image";

const CardTest = ({
  img,
  title,
  description,
  currentPrice,
  originalPrice,
  linkText,
  metaInfo,
}) => {
  const isPricingCard = currentPrice && originalPrice;

  return (
    <div
      className="
        w-[260px] sm:w-[300px] md:w-[320px] lg:w-[340px]
        bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl 
        transition-all duration-300 flex flex-col
      "
    >
      {/* Image */}
      <div className="relative w-full aspect-[16/9]">
        <Image
          src={img}
          alt={title || "Image content"}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 90vw, (max-width: 1024px) 45vw, 340px"
        />
      </div>

      {/* Text Section */}
      <div className="p-3 sm:p-4 flex flex-col flex-grow">
        <h1 className="font-bold text-sm sm:text-base mb-1 text-gray-900 line-clamp-1">
          {title}
        </h1>

        {isPricingCard ? (
          <>
            {/* One-line description */}
            <p className="font-normal text-sm sm:text-base text-gray-600 mb-3 truncate">
              {description}
            </p>

            {/* Prices */}
            <div className="flex items-center space-x-3 mt-auto">
              <h1 className="font-bold text-lg sm:text-xl text-gray-900">
                {currentPrice}
              </h1>
              <p className="font-normal text-sm sm:text-base text-gray-500 line-through">
                {originalPrice}
              </p>
            </div>
          </>
        ) : (
          <>
            <p className="font-medium text-xs sm:text-sm mb-1 text-blue-600 cursor-pointer hover:underline truncate">
              {linkText}
            </p>
            <p className="font-normal text-sm sm:text-base text-gray-600 line-clamp-2">
              {metaInfo}
            </p>
          </>
        )}
      </div>
    </div>
  );
};

export default CardTest;
