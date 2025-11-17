"use client"
import React, { useState } from "react";
import PopularCard from "../../atom/PopularCard";
import courseData from "../../../../public/db/PopularCourses.json";

const Browser = () => {

     const tabs = ["Design", "Developer", "Business", "Marketing", "Photography"];
  const [activeTab, setActiveTab] = useState("Design");

  return (
    <div className="p-4 md:p-9 mt-30 md:mt-20 lg:mt-2 ">
      <h1 className="font-work-sans font-bold text-[30px] mt-20  text-center leading-[100%] mb-6">
       Browse Our Top Courses
      </h1>

       <div className="flex justify-center mb-10 overflow-x-auto whitespace-nowrap">
        <div className="flex space-x-8 border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`
                font-medium text-lg pb-3 transition-colors duration-200
                ${
                  activeTab === tab
                    ? "text-blue-600 border-b-2 border-blue-600 font-semibold"
                    : "text-gray-500 hover:text-gray-700"
                }
              `}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>
      

      <div className="flex flex-wrap justify-between gap-y-6">
        {courseData.map((course, index) => (
          <PopularCard
            key={index}
            img={course.img}
            title={course.title}
            price={course.price}
            originalPrice={course.originalPrice}
            badges={course.badges}
          />
        ))}
      </div>

      <div className="text-end">
        <button className="font-urbanist font-medium text-[16px] leading-[24px] mt-5 bg-[#003566] text-white px-6 py-3 rounded-lg hover:bg-purple-900 transition-all duration-300">
          Explore Course
        </button>
      </div>
    </div>
  );
};

export default Browser;
