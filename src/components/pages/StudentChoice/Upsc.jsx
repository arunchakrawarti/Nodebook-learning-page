import React from "react";
import PopularCard from "../../atom/PopularCard";
import Link from "next/link";

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
        <button className="font-urbanist font-medium text-[16px] leading-[24px] mt-5 bg-[linear-gradient(96.18deg,#C83300_-2.22%,#E35545_48.89%,#FFA98B_100%)] text-white px-6 py-3 rounded-lg hover:bg-purple-900 transition-all duration-300">
          Explore Course
        </button>
        </Link>
      </div>
    </div>
  );
};

export default Upsc;
