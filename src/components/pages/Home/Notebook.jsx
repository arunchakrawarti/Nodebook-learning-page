"use client";
import React from "react";
import Card4 from "../../atom/Card4";

import chooseData from "../../../../public/db/ChooseData.json";

const Notebook = () => {
  return (
    <div className="lg:py-20 md:py-10 sm:py-10 px-4 md:px-15 lg:px-12 overflow-hidden">

  
      <h1
        className="font-work-sans font-bold text-[24px] leading-[28px] tracking-[0px] text-blue-950"
      >
        Why Choose Notesbook Global Academy
      </h1>

     
      <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10 flex-wrap">
        {chooseData.map((itemData, i) => (
          <div key={i}>
            <Card4
              img={itemData.img}
              label={itemData.label}
              description={itemData.description}
              bgColor={itemData.bgColor}
              cardWidth="100%"
              cardMaxWidth="335px"
              cardHeight="224px"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notebook;
