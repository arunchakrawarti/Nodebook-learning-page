import React from "react";
import CardTest from "../../atom/CardTest";
import testSeriesData from "../../../../public/db/testSeries.json";

const Test = () => {
  return (
    <section className="py-10 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-10 bg-gray-50">
      {/* Heading */}
      <h1 className="font-workSans font-bold text-2xl sm:text-3xl md:text-4xl text-center md:text-left mb-10 text-gray-900">
        Test Series
      </h1>

      {/* Responsive Grid */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-3
          lg:grid-cols-4
          gap-6 sm:gap-8
          place-items-center
        "
      >
        {testSeriesData.map((item, i) => (
          <CardTest
            key={i}
            img={item.img}
            title={item.title}
            description={item.description}
            currentPrice={item.currentPrice}
            originalPrice={item.originalPrice}
          />
        ))}
      </div>

      {/* Explore Button */}
      <div className="flex justify-center md:justify-end mt-10">
        <button className="
          font-urbanist font-medium text-sm sm:text-base
          bg-[#003566] text-white px-5 sm:px-6 py-2 sm:py-3
          rounded-lg hover:bg-opacity-90 transition-all duration-300
        ">
          Explore Test Series
        </button>
      </div>
    </section>
  );
};

export default Test;
