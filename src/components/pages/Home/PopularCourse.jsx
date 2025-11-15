import React from "react";
import PopularCard from "../../atom/PopularCard";
import Link from "next/link";
import courseData from "../../../../public/db/PopularCourses.json";

const PopularCourse = () => {
  return (
    <div className="p-4 md:p-8">
      <h1 className="font-work-sans font-bold text-[30px] leading-[100%] mb-6">
        Popular Courses
      </h1>

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

export default PopularCourse;
