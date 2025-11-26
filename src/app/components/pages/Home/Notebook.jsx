"use client";
import React from "react";
import { motion } from "framer-motion";
import Card4 from "../../atom/Card4";

const Notebook = () => {
  const arr = [
    {
      img: "/img/Chose.png",
      label: "Ace your Preparation by Learning from the experts",
      description:
        "Ace your Preparation by Learning from the",
      bgColor: "#FFFBE1",
    },
    {
      img: "/img/Chose1.png",
      label: "Specially Crafted Courses to Meet every aspirants Need",
      description:
        "Ace your Preparation by Learning from the.",
      bgColor: "#F5F0FF",
    },
    {
      img: "/img/Chose2.png",
      label: "Learn At your Own Pace, Anytime & Anywhere",
      description:
        "Ace your Preparation by Learning from the",
      bgColor: " #FFF0FA",
    },
     {
      img: "/img/Chose3.png",
      label: "Interactive & Innovative Learning Methods",
      description:
        "Ace your Preparation by Learning from the",
      bgColor: "#EFF7FF",
    },
  ];

  
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
    <div className="lg:py-20 md:py-10 sm:py-10 px-4 overflow-hidden">
      {/* Heading with Fade-in */}
      <motion.h1
        className="font-work-sans font-bold ml-2 text-[24px] leading-[28px] tracking-[0px] text-blue-950"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        Why Choose Notesbook Global Academy
      </motion.h1>

      {/* Animated Cards */}
      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-6 mt-10 flex-wrap"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {arr.map((itemData, i) => (
          <motion.div key={i} variants={item}>
            <Card4
              img={itemData.img}
              label={itemData.label}
              description={itemData.description}
              bgColor={itemData.bgColor}
              cardWidth="100%"
              cardMaxWidth="330px"
              cardHeight="224px"
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default Notebook;
