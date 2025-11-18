import React from "react";
import Card from "../../atom/Card";
import studentChoice from "../../../../public/db/studentChoice.json";
import Link from "next/link";

const Student = () => {
  return (
    <div className="px-4 sm:px-6 md:px-2 py-10 max-w-[1440px] mx-auto">
      <h2 className="font-workSans font-bold text-2xl sm:text-3xl md:text-4xl leading-tight mb-8 text-center md:text-left">
        Student Choice
      </h2>

     
     <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 justify-items-center">
  {studentChoice.map((item, i) => (
    <Link href="/student-choices" key={i} className="w-full flex justify-center">
      <Card img={item.img} title={item.title} />
    </Link>
  ))}
</div>


     
      <div className="flex justify-center md:justify-end mt-10">
        <Link href='/student-choices'>
        <button className="font-urbanist font-medium text-[15px] sm:text-[16px] leading-[24px] bg-[#003566] text-white px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg hover:bg-purple-900 transition-all duration-300">
          Explore Course
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Student;
