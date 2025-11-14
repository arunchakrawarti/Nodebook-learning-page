import Image from 'next/image';
import React from 'react';

const Notebook = () => {
  return (
    <div
      className="w-full max-w-[1440px] bg-[#102541] rounded-[8px] 
                 relative overflow-hidden mx-auto
                 flex flex-col md:flex-row items-center md:items-start
                 px-6 md:px-10 lg:px-[60px] py-10 md:py-12 lg:py-[60px]
                 min-h-[300px] md:min-h-[260px] lg:h-[307px]"
    >

      {/* LEFT CONTENT */}
      <div className="w-full md:w-[60%] lg:w-[55%] z-10 flex flex-col justify-center">

        <h2 className="font-inter font-bold 
                       text-[24px] md:text-[28px] lg:text-[32px]
                       leading-[32px] md:leading-[38px] lg:leading-[42px]
                       text-white mb-[12px]">
          Join Notesbook Global Academy now to get 35% off
        </h2>

        <p className="font-inter font-normal
                     text-[16px] md:text-[17px] lg:text-[18px]
                     leading-[24px] md:leading-[26px] lg:leading-[28px]
                     text-white/80 mb-[20px] max-w-[900px]">
          With our responsive themes and mobile and desktop apps,
          enjoy a seamless experience on any device so will your blog the best visitors
        </p>

        <button
          className="bg-[#00C389] text-white font-inter
                     text-[14px] md:text-[15px] lg:text-[16px]
                     px-[20px] md:px-[22px] lg:px-[24px]
                     py-[9px] md:py-[10px] lg:py-[10px]
                     rounded-[5px] w-fit
                     hover:bg-[#00a875] transition"
        >
          Join Now
        </button>

      </div>

      {/* RIGHT IMAGE */}
      <div className="w-full md:w-auto flex justify-center md:justify-end mt-6 md:mt-0 
                      relative md:absolute right-0 bottom-0 md:h-full">
        <Image
          src="/img/aru.png"
          width={400}
          height={300}
          alt="decor"
          className="object-contain w-[220px] md:w-[260px] lg:w-[450px] h-auto"
        />
      </div>

    </div>
  );
};

export default Notebook;
