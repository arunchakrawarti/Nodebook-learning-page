import React from "react";
import Card from "../../atom/Card";
import studentChoice from "../../../../public/db/studentChoice.json";
import Link from "next/link";

const Category = () => {
  return (
    <div className="px-4 pt-30  sm:px-6 md:px-2 py-10 max-w-[1440px] mx-auto">
      
      <div className="w-full flex  flex-col sm:flex-row sm:items-center sm:justify-start p-2 sm:p-4 box-border">

     
      <div className="flex items-center space-x-1 cursor-pointer text-blue-900 hover:text-blue-600 transition duration-150 mb-2 sm:mb-0 text-sm sm:text-base md:text-lg flex-shrink-0">
        <span className="text-lg sm:text-xl md:text-2xl">&larr;</span> 
        <span className="text-sm sm:text-base md:text-lg">back</span>
      </div>

    
      <div className="flex-grow text-center sm:text-left md:text-center px-0 sm:px-2">
        <p className="font-bold text-base sm:text-lg text-center md:text-xl lg:text-3xl text-gray-800 break-words">
          Choose your category
        </p>
      </div>

    </div>

      {/* Cards Grid */}
      <div className="grid mt-5 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 sm:gap-8 justify-items-center">
        {studentChoice.map((item, i) => (
         <Link href='/study-material-syllabus'>
          <Card key={i} img={item.img} title={item.title} />
         </Link>
        ))}
      </div>
    </div>
  );
};

export default Category;
