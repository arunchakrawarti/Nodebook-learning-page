"use client";
import React from "react";
import Card5 from "../../atom/Card5";

import chooseData1 from "../../../../public/db/chooseData1.json";

const Benefits = () => {
  return (
    <div className="lg:py-20 md:py-10 sm:py-10 px-4 md:px-6 lg:px-14">
      <div className="max-w-8xl mx-auto">

       
        <h1 className="font-work-sans font-bold text-[24px] leading-[28px] text-blue-950">
          Benefits Of Asking A Doubt
        </h1>

       
        <div
          className="
            mt-10 
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            gap-5 
          "
        >
          {chooseData1.map((itemData, i) => (
            <div key={i} className="w-full">
              <Card5
                label={itemData.label}
                description={itemData.description}
                bgColor={itemData.bgColor}
                cardWidth="100%"
                cardMaxWidth="100%"
                cardHeight="250px"
                padding="p-4 sm:p-5 md:p-6"
              />
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Benefits;
