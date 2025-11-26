import React from "react";
import Image from "next/image";

const PopularCard = ({ img, title, price, originalPrice, badges }) => {
  const activeBadges = Array.isArray(badges) ? badges : [];

  return (
    <div className="w-full sm:w-[48%] lg:w-[23%] p-2 border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition duration-300 ease-in-out bg-white">
      {/* Image Section */}
      <div className="relative w-full aspect-[285/161] mb-2">
        <Image
          src={img}
          alt={title || "Product Image"}
          fill
          className="rounded-md object-cover"
        />

        {/* Badges Overlay */}
        <div className="absolute top-2 left-2 flex space-x-2">
          {activeBadges.map((badge, index) => (
            <span
              key={index}
              className={`text-white text-xs font-semibold py-1 px-2 rounded-full ${
                badge.toLowerCase().includes("best seller")
                  ? "bg-green-500"
                  : badge.toLowerCase().includes("off")
                  ? "bg-purple-600"
                  : "bg-gray-700"
              }`}
            >
              {badge}
            </span>
          ))}
        </div>
      </div>

      {/* Title */}
      <h3 className="font-inter font-bold text-[16px] leading-[21px] text-gray-800 mb-2 truncate">
        {title}
      </h3>

      {/* Studio Info */}
      <div className="flex items-center space-x-1 mb-2">
        <Image
          src="/img/manlogo.png"
          height={18}
          width={18}
          alt="Kitani Studio Logo"
          className="rounded-full"
        />
        <p className="font-inter font-normal text-[14px] leading-[18px] text-[#3DCBB1]">
          Kitani Studio
        </p>
      </div>

      {/* Price Info */}
      <div className="flex items-center space-x-2">
        <p className="font-inter font-bold text-[20px] leading-[26px]">
          Rs{price || "0.00"}
        </p>

        {originalPrice && (
          <p className="font-inter font-normal text-[16px] leading-[24px] line-through text-gray-400">
            Rs{originalPrice}
          </p>
        )}
      </div>
    </div>
  );
};

export default PopularCard;
