import React from "react";
import PopularCard from "../../atom/PopularCard";
import Link from "next/link";
import { Button } from "@/components/common/Button";
import courseData from "../../../../public/db/courseData.json"


const Upsc = () => {
  return (
    <div className="p-4 md:p-8">
      <p className="font-worksans font-bold text-[42px] leading-[24px] tracking-normal text-center">UPSC</p>
      <h1 className="font-work-sans font-bold mt-5 text-[30px] leading-[100%] mb-6">
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
        <Link href='/course'>
        <Button>
          Explore Course
        </Button>
        </Link>
      </div>
    </div>
  );
};

export default Upsc;
