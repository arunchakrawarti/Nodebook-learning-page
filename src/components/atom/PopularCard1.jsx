import Image from 'next/image';
import React from 'react';

const PopularCard1 = ({ img, title, subtitle, price, originalPrice, badges, rating, reviews }) => {
  return (
    <div className="w-full bg-white rounded-lg shadow-md overflow-hidden 
                    border border-gray-100 hover:shadow-lg transition">

      <div className="relative w-full h-[150px] sm:h-[170px] md:h-[180px]">
        <Image src={img} alt={title} fill className="object-cover" />

        <div className="absolute top-2 left-2 flex flex-wrap gap-1">
          {badges.map((badge, i) => (
            <span key={i} className={`text-white text-[10px] sm:text-xs px-2 py-1 rounded-full 
              ${badge.includes("Best Seller") ? "bg-[#EF4444]" : "bg-[#10B981]"}
            `}>
              {badge}
            </span>
          ))}
        </div>
      </div>

      <div className="p-4">
        <h3 className="font-work-sans font-semibold text-[15px] md:text-base 
                       text-[#1A202C] mb-1 line-clamp-1">
          {title}
        </h3>

        <div className="flex items-center text-sm text-[#4A5568] mb-2">
          <span className="mr-1">🧑‍💻</span> {subtitle}
        </div>

        <p className="text-xs text-gray-500 mb-2 line-clamp-2">
          More than 8yr Experience as Illustrator...
        </p>

        <div className="flex justify-between items-center">

          <div className="text-xs text-yellow-500 flex items-center">
            ⭐⭐⭐⭐⭐ <span className="ml-1">{rating}</span>
            <span className="text-gray-500 ml-1">({reviews})</span>
          </div>

          <div className="flex items-baseline gap-1">
            <span className="font-bold text-lg">Rs{price}</span>
            <span className="text-gray-400 text-xs line-through">Rs{originalPrice}</span>
          </div>

        </div>
      </div>

    </div>
  );
};

export default PopularCard1;
