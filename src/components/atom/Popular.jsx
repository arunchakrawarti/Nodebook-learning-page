import React from 'react';
import Image from 'next/image';

const Popular = ({ imgSrc, title, description }) => {
  return (
    <div className="flex items-start p-3 bg-white w-full rounded-lg border-b border-gray-200">

      {/* LEFT IMAGE */}
      <div className="relative w-20 h-16 flex-shrink-0 rounded-md overflow-hidden">
        <Image
          src={imgSrc}
          alt="Popular Post"
          fill
          className="object-cover rounded-md"
        />
      </div>

      {/* RIGHT TEXT */}
      <div className="ml-4 flex flex-col">

        {/* DATE */}
        <h3 className="font-nunito text-[13px] leading-[19px] uppercase text-gray-500">
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p className="font-nunito font-extrabold text-[17px] leading-[23px] text-gray-800">
          {description}
        </p>

      </div>

    </div>
  );
};

export default Popular;
