import React from "react";
import DayCard from "../../atom/DayCard";
import TrendingCard from "../../atom/TrendingCard";

import dayCardData from "../../../../public/db/dayCardData.json";
import trendingData1 from "../../../../public/db/trendingData1.json";
import availableDatesData from "../../../../public/db/availableDatesData.json";

const DayCardList = () => {
  const { heading, data: monthList } = availableDatesData;

  const daySections = [
    { title: "Saturday, 25 Oct 2025", range: [0, 3] },
    { title: "Friday, 24 Oct 2025", range: [3, 10] },
    { title: "Thursday, 23 Oct 2025", range: [10, 14] },
  ];

  return (
    <div className="w-full mx-auto flex flex-col lg:flex-row gap-8 p-4 md:p-6 lg:p-10 bg-gray-100">
      <div className="flex flex-col gap-10 w-full lg:w-[65%]">
        {daySections.map((section, i) => (
          <div
            className="p-4 rounded-md  bg-white shadow border border-gray-200 mb-2"
            key={i}
          >
            <h1 className="font-urbanist font-semibold text-[22px] md:text-[28px] lg:text-[30px] leading-tight md:leading-[36px] lg:leading-[42px]">
              {section.title}
            </h1>

            <div className="flex flex-col items-center gap-6   ">
              {dayCardData.slice(...section.range).map((card, idx) => (
                <DayCard
                  key={`day-${i}-${idx}`}
                  imgSrc={card.imgSrc}
                  title={card.title}
                  description={card.description}
                />
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col mb-2 w-full lg:w-[35%]">
        <div className="p-4 rounded-md  bg-white shadow border border-gray-200 mb-2">
          <h1 className="font-urbanist font-semibold text-[22px] md:text-[28px] lg:text-[30px] leading-tight md:leading-[36px] lg:leading-[42px]">
            Trending Current Affairs
          </h1>

          <div className="flex  flex-col gap-4">
            {trendingData1.map((card, index) => (
              <TrendingCard
                key={`trend-${index}`}
                imgSrc={card.imgSrc}
                title={card.title}
                description={card.description}
              />
            ))}
          </div>
        </div>

        <div className="p-4 md:p-6 mt-4 bg-white rounded-xl shadow-md w-full">
          {monthList.map((monthItem, monthIndex) => (
            <div
              key={monthIndex}
              className="mb-8 pb-6 border-b last:border-b-0 last:pb-0"
            >
              <h3 className="text-lg md:text-xl font-semibold text-gray-800 mb-4">
                {monthItem.month}
              </h3>

              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-3 gap-3">
                {monthItem.dates.map((date, dateIndex) => (
                  <button
                    key={`m-${monthIndex}-d-${dateIndex}`}
                    className="
              px-3 py-2 
              bg-white 
              border border-gray-200 
              rounded-xl 
              text-xs sm:text-sm 
              font-medium text-gray-700 
              shadow-sm 
              hover:bg-gray-50 hover:border-indigo-400
              transition
            "
                  >
                    {date}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DayCardList;
