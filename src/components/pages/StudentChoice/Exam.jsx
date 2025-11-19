import React from "react";
import Card from "../../atom/Card"; 
import studentChoice from "../../../../public/db/studentChoice.json";

const Exam = () => {
  return (
    <div className="px-4 sm:px-6 md:px-2 py-10 max-w-[1440px] mx-auto">

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none !important; }
        .no-scrollbar { scrollbar-width: none !important; -ms-overflow-style: none !important; }
      `}</style>

     
      <div
        className="flex mt-27 gap-6 overflow-x-auto no-scrollbar scroll-smooth py-4 cursor-grab active:cursor-grabbing"
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

    </div>
  );
};

export default Exam;
