import React from "react";
import ExploreCard from "../../atom/ExploreCard";
import Cardicon from "../../atom/Cardicon";
import ExploreCardData from "../../../../public/db/ExploreCardData.json";
import CardiconData from "../../../../public/db/CardiconData.json";

const OfflineCentersSection = () => {
  return (
    <div className="relative mx-auto w-full py-12 px-4 sm:px-6 md:px-10 bg-[#F5F6FF] overflow-hidden">
     
      <div
        className="absolute inset-0 z-0 opacity-20 sm:opacity-50"
        style={{
          backgroundImage: `url('/img/Background.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 ">
       
        <h3 className="font-montserrat font-bold text-2xl sm:text-3xl md:text-4xl text-center text-[#003566] mb-10">
          Explore Offline Centers
        </h3>

        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-6">
         
          <ExploreCard {...ExploreCardData[0]} />

          
          <div className="hidden lg:block border-t-4 border-dashed border-blue-400" />

     
          <ExploreCard {...ExploreCardData[1]} />
        </div>

        
        <h3 className="font-montserrat font-bold text-2xl sm:text-3xl md:text-4xl text-center text-[#003566] mt-16 mb-10">
          Our Other Centers
        </h3>

       
        <div
          className="
          grid 
          grid-cols-2 
          sm:grid-cols-3 
          md:grid-cols-4 
          gap-5 sm:gap-7 md:gap-4 
          place-items-center
        "
        >
          {CardiconData.map((card, index) => (
            <Cardicon key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfflineCentersSection;
