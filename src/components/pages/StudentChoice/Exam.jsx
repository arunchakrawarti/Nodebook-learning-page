import React from "react";
import Card from "../../atom/Card"; 
import studentChoice from "../../../../public/db/studentChoice.json";

const Exam = () => {
  return (
    <div className="px-4 sm:px-6 md:px-2 py-10 max-w-[1440px] mx-auto">

      {/* Inline CSS to Hide Scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none !important; }
        .no-scrollbar { scrollbar-width: none !important; -ms-overflow-style: none !important; }
      `}</style>

      {/* Horizontal Slider */}
      <div
        className="flex gap-6 overflow-x-auto no-scrollbar scroll-smooth py-4 cursor-grab active:cursor-grabbing"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {studentChoice.map((item, i) => (
          <div
            key={i}
            className="min-w-[220px] sm:min-w-[240px] scroll-snap-align-start"
          >
            {/* SAME CARD UI AS BEFORE */}
            <Card 
              img={item.img} 
              title={item.title} 
            />
          </div>
        ))}
      </div>

      {/* Explore Button */}
      <div className="flex justify-center md:justify-end mt-10">
        <button className="font-urbanist font-medium text-[15px] sm:text-[16px] leading-[24px] bg-[#003566] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-purple-900 transition-all duration-300">
          Explore Course
        </button>
      </div>

    </div>
  );
};

export default Exam;
