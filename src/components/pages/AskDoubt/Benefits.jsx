"use client";
import React from "react";
import { motion } from "framer-motion";
import Card5 from "../../atom/Card5";

import chooseData1 from "../../../../public/db/chooseData1.json";

const Benefits = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.25 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <div className="lg:py-20 md:py-10 sm:py-10 px-4 md:px-6 lg:px-14">

      {/* Heading */}
      <div className="max-w-8xl mx-auto">
        <motion.h1
          className="font-work-sans font-bold text-[24px] leading-[28px] text-blue-950"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          Benefits Of Asking A Doubt
        </motion.h1>

        {/* Cards Grid */}
        <motion.div
          className="
            mt-10 
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            md:grid-cols-3 
            lg:grid-cols-4 
            gap-5 
          "
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
        >
          {chooseData1.map((itemData, i) => (
            <motion.div 
              key={i} 
              variants={item}
              className="w-full"
            >
              <Card5
                label={itemData.label}
                description={itemData.description}
                bgColor={itemData.bgColor}

                /* FINAL FIX */
                cardWidth="100%"
                cardMaxWidth="100%"
                cardHeight="250px"
                padding="p-4 sm:p-5 md:p-6"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Benefits;
