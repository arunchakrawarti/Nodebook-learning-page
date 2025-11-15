import React from "react";
import DayCard from "../../atom/DayCard";
import TrendingCard from "../../atom/TrendingCard";
import dayCardData from "../../../../public/db/dayCardData.json";
import trendingData1 from "../../../../public/db/trendingData1.json";

const DayCardList = () => {
  return (
    <div className="w-full flex gap-10 p-4 md:p-8 lg:px-12 bg-gray-100">
     <div>
       <div>
        <h1 class="font-urbanist font-semibold text-[30.4px] leading-[42.56px] tracking-normal align-middle">
          Saturday, 25 Oct 2025
        </h1>

        <div className="flex flex-col items-center gap-6">
          {dayCardData.slice(0, 3).map((card) => (
            <DayCard
              key={card.id}
              imgSrc={card.imgSrc}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
       <div>
        <h1 class="font-urbanist font-semibold text-[30.4px] leading-[42.56px] tracking-normal align-middle">
          Friday, 24 Oct 2025
        </h1>

        <div className="flex flex-col items-center gap-6">
          {dayCardData.slice(3,10).map((card) => (
            <DayCard
              key={card.id}
              imgSrc={card.imgSrc}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
       <div>
        <h1 class="font-urbanist font-semibold text-[30.4px] leading-[42.56px] tracking-normal align-middle">
          Thursday, 23 Oct 2025
        </h1>

        <div className="flex flex-col items-center gap-6">
          {dayCardData.slice(10,14).map((card) => (
            <DayCard
              key={card.id}
              imgSrc={card.imgSrc}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
     </div>
      <div>
        <h1 class="font-urbanist font-semibold text-[30.4px] leading-[42.56px] tracking-normal align-middle">
          Trending Current Affairs
        </h1>
        <div className="flex flex-col gap-4">
          {trendingData1.map((card) => (
            <TrendingCard
              key={card.id}
              imgSrc={card.imgSrc}
              title={card.title}
              description={card.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default DayCardList;
