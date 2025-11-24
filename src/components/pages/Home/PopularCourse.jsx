import React from "react";
import PopularCard from "../../atom/PopularCard";
import Link from "next/link";
import courseData from "../../../../public/db/PopularCourses.json";
import { Button } from "../../common/Button";  

const PopularCourse = () => {
  return (
    <div className="p-4 mt-30 md:p-12">
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
        <Link href="/course">
          <Button>
            Explore Course
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default PopularCourse;
