import React from 'react';
import Image from "next/image";

const ChannelCard = ({ img, title }) => {
  return (
    <div className="w-full max-w-sm rounded-lg shadow-md overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
      
      {/* Thumbnail */}
      <div className="relative w-full aspect-video flex justify-center items-center">
        <Image
          src={img} 
          alt={`Thumbnail for ${title}`}
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute top-2 left-2 sm:top-18 sm:left-35  lg:top-16 lg:left-30">
          <Image
            src="/img/Channelogo.png"
            width={50}
            height={35}
            alt="YouTube icon"
            className="w-12 h-8 sm:w-14 sm:h-10 md:w-16 md:h-12 object-contain"
          />
        </div>
      </div>

      {/* Video title */}
      <div className="p-3">
        <p className="font-workSans font-medium text-sm sm:text-base md:text-base lg:text-lg leading-5 sm:leading-6 md:leading-6 lg:leading-7 text-gray-900">
          {title}
        </p>
      </div>
    </div>
  );
};

export default ChannelCard;
