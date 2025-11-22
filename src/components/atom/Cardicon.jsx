import React from 'react';
import Image from "next/image";

const Cardicon = ({ img, title }) => {
  return (
    <div className="w-full p-3 sm:p-4">
      <div className="bg-amber-50 rounded-xl shadow-md flex flex-col justify-center items-center hover:shadow-2xl p-5 ">

        <Image
          src={img}
          width={45}
          height={45}
          alt={title}
          className="object-contain w-10 h-10 sm:w-12 sm:h-12"
        />

        <p className="mt-3 font-montserrat font-medium text-base sm:text-lg md:text-xl text-gray-800 text-center">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Cardicon;
