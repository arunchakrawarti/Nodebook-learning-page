import React from "react";
import Image from "next/image";
import HexCard from "../../atom/HexCard";

import impactData from "../../../../public/db/ImpactData.json";

const Impact = () => {
  return (
    <div className="relative w-full min-h-[450px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[400px] overflow-hidden">
      
      <Image
        src="/img/Imapct.png"
        alt="Impact background"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        className="z-0"
      />

      <div className="relative z-10 w-full flex flex-col items-center justify-center py-10 sm:py-16 px-4">
        
        <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-10 sm:mb-16 text-center">
          Our Impact
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-15 max-w-8xl mx-auto">
          {impactData.map((item, index) => (
            <HexCard
              key={index}
              number={item.number}
              text={item.text}
              bgColor={item.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Impact;


