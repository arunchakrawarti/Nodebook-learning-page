"use client";
import React from "react";
import { motion } from "framer-motion";
import Card4 from "../../atom/Card4";

import chooseData from "../../../../public/db/ChooseData.json";

const Notebook = () => {

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
    <div className="lg:py-20 md:py-10 sm:py-10  px-4 md:px-15 lg:px-12 overflow-hidden">

      {/* Heading */}
      <motion.h1
        className="font-work-sans font-bold  text-[24px] leading-[28px] tracking-[0px] text-blue-950"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Why Choose Notesbook Global Academy
      </motion.h1>

      {/* Cards */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10 flex-wrap"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {chooseData.map((itemData, i) => (
          <motion.div key={i} variants={item}>
            <Card4
              img={itemData.img}
              label={itemData.label}
              description={itemData.description}
              bgColor={itemData.bgColor}
              cardWidth="100%"
              cardMaxWidth="335px"
              cardHeight="224px"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Notebook;
