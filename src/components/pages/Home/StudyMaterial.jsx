import React from "react";
import Card2 from "../../atom/Card2";
import studyMaterials from "../../../../public/db/studyMaterials.json";
import Link from "next/link";

const StudyMaterial = () => {
  return (
    <section className="py-10 px-4 sm:px-6 md:px-10 lg:px-12 max-w-screen-2xl mx-auto">
      {/* Section Title */}
      <h2 className="font-workSans font-bold text-2xl sm:text-3xl md:text-4xl leading-tight mb-10 text-center md:text-left text-gray-900">
        Study Materials
      </h2>

      {/* Cards Grid */}
      <div
        className="
          grid
          grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5
          gap-4 sm:gap-6 md:gap-8
          justify-items-center
        "
      >
        {studyMaterials.map((item, i) => (
          <Card2 key={i} img={item.img} title={item.title} bgColor={item.bgColor} />
        ))}
      </div>

      {/* Button */}
      <div className="flex justify-center md:justify-end mt-10">
       <Link href='/study-material'>
        <button className="font-urbanist font-medium text-sm sm:text-base md:text-lg bg-[#003566] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300">
          Explore Study Materials
        </button>
       </Link>
      </div>
    </section>
  );
};

export default StudyMaterial;
