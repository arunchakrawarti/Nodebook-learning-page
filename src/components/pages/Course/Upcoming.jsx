import React from "react";
import PopularCard from "../../atom/PopularCard";

const courseData = [
  {
    img: "/img/popular.png",
    title: "UPSC GS Foundation Batch 2025",
    price: "24.92",
    originalPrice: "32.90",
    badges: ["Best Seller", "20% OFF"],
  },
  {
    img: "/img/popular1.png",
    title: "SSC Foundation Batch",
    price: "24.92",
    originalPrice: "32.90",
    badges: ["Best Seller", "20% OFF"],
  },
  {
    img: "/img/popular2.png",
    title: "GS Special Vision 2.0 Foundation Batch",
    price: "24.92",
    originalPrice: "32.90",
    badges: ["Best Seller", "20% OFF"],
  },
  {
    img: "/img/popular3.png",
    title: "UP SI Practise Batch 2025",
    price: "24.92",
    originalPrice: "32.90",
    badges: ["Best Seller", "20% OFF"],
  },
];

const Upcoming = () => {
  return (
    <div className="p-4 md:p-8">
      <h1 className="font-work-sans text-center font-bold text-[30px] leading-[100%] mb-6">
        Upcoming Courses
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

export default Upcoming;
