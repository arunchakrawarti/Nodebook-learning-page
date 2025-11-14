import Image from 'next/image';
import React from 'react';

const LargeTrendingCard = ({ img, title, buttonText }) => {
  return (
    <div className="relative w-full h-[380px] sm:h-[450px] md:h-[530px] lg:h-[632px] 
                    rounded-lg overflow-hidden shadow-xl">

      <Image
        src={img}
        alt={title}
        fill
        className="object-cover brightness-75"
      />

      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-8 text-white">
        <h2 className="font-inter font-bold 
                       text-[24px] md:text-[30px] lg:text-[36px]
                       leading-[32px] md:leading-[38px] lg:leading-[44px]
                       mb-4 md:mb-6">
          {title}
        </h2>

        <button className="bg-[#4F46E5] text-white font-medium 
                           text-[14px] md:text-[15px] lg:text-[16px]
                           px-4 md:px-6 py-2.5 md:py-3 rounded-lg
                           hover:bg-[#6366F1] transition-all duration-200 w-fit">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default LargeTrendingCard;
