import React from "react";
import CardTest from "../../atom/CardTest";
import SyllabusData from "../../../../public/db/SyllabusData.json";

const Syllabus = () => {
  return (
    <div className="w-full max-w-8xl mx-auto overflow-hidden px-3 sm:px-4 md:px-6 lg:px-12 py-4">

      {/* ---------- Header Section ---------- */}
      <div className="flex items-center justify-between sm:justify-start gap-4 sm:gap-6 mb-6">
        
        {/* Back Button */}
        <div className="flex items-center gap-2 cursor-pointer text-blue-900 hover:text-blue-600 transition duration-150">
          <span className="text-xl sm:text-2xl md:text-3xl">&larr;</span>
          <span className="text-sm sm:text-base md:text-lg">Back</span>
        </div>

        {/* Title */}
        <h1 className="flex-grow text-center sm:text-left md:text-center font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-800">
          Syllabus
        </h1>
      </div>

      {/* ---------- Grid Section ---------- */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-3
          xl:grid-cols-4
          gap-5 sm:gap-6 md:gap-8
        "
      >
        {SyllabusData.map((item, i) => (
          <div key={i} className="w-full flex justify-center">
            <CardTest
              img={item.img}
              title={item.title}
              description={item.description}
              currentPrice={item.currentPrice}
              originalPrice={item.originalPrice}
            />
          </div>
        ))}
      </div>

    </div>
  );
};

export default Syllabus;
