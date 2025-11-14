import React from 'react';
import PopularCard1 from "../../atom/PopularCard1";
import LargeTrendingCard from "../../atom/LargeTrendingCard";
import trendingData from "../../../../public/db/trendingData.json";

const Trending = () => {
  const largeCardData = trendingData.find(item => item.type === "large");
  const smallCardsData = trendingData.filter(item => item.type === "small");

  return (
    <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-10 py-10 sm:py-12 lg:py-16">

     
      <h1 className="
        font-inter font-bold text-[26px] sm:text-[30px] lg:text-[36px] 
        leading-tight text-center text-[#1A202C] mb-8 sm:mb-10 lg:mb-12
      ">
        Trending Courses
      </h1>

     
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">

       
        <div className="col-span-12 lg:col-span-5">
          {largeCardData && (
            <LargeTrendingCard
              img={largeCardData.img}
              title={largeCardData.title}
              buttonText={largeCardData.buttonText}
            />
          )}
        </div>

        {/* RIGHT SMALL CARDS */}
        <div className="col-span-12 lg:col-span-7">
          <div
            className="
              grid 
              grid-cols-1 
              sm:grid-cols-2 
              gap-5 sm:gap-6
            "
          >
            {smallCardsData.map((course, i) => (
              <PopularCard1
                key={i}
                img={course.img}
                title={course.title}
                subtitle={course.subtitle}
                price={course.price}
                originalPrice={course.originalPrice}
                badges={course.badges}
                rating={course.rating}
                reviews={course.reviews}
              />
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Trending;
