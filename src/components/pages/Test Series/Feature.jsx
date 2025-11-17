import React from "react";
import CardTest from "../../atom/CardTest";
import testSeriesData from "../../../../public/db/testSeries.json";

const Feature = () => {
  return (
    <section className="w-full py-10 px-4 sm:px-6 md:px-8 lg:px-12 bg-gray-50">

      {/* Heading */}
      <h1 className="font-inter font-bold text-[22px] sm:text-[28px] md:text-[32px] text-center md:text-left mb-8 text-gray-900">
        Featured Test Series
      </h1>

      {/* Responsive Grid - No Overlap Fix */}
      <div
        className="
          grid
          grid-cols-1
          sm:grid-cols-2
          md:grid-cols-2
          lg:grid-cols-3
          xl:grid-cols-4
          gap-6 sm:gap-8 md:gap-10
          w-full
        "
      >
        {testSeriesData.map((item, i) => (
          <div key={i} className="w-full flex justify-center">
            <CardTest
              img={item.img}
              title={item.title}
              description={item.description}
              currentPrice={item.currentPrice}
              originalPrice={item.originalPrice}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
