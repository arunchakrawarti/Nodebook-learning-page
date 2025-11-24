// import React from "react";
// import CardTest from "../../atom/CardTest";

// const Achievement = () => {
//   const achievementsData = [
//     {
//       img: "/img/Our.png",
//       title: "68TH BPSC TOPPER PRERNA SINGH : DY.S.P |...",
//       linkText:
//         "68th BPSC Topper Prerna Singh : Dy.S.P | Interview I KGS IAS Hindi",
//       metaInfo:
//         "Prerna Singh, resident of Biddupur village of Hajipur, Bihar, not only saw her childhood dream but also made it come true. He got success in BPSC in her...",
//     },
//     {
//       img: "/img/Our.png",
//       title: "68TH BPSC TOPPER PRERNA SINGH : DY.S.P |...",
//       linkText:
//         "68th BPSC Topper Prerna Singh : Dy.S.P | Interview I KGS IAS Hindi",
//       metaInfo:
//         "Prerna Singh, resident of Biddupur village of Hajipur, Bihar, not only saw her childhood dream but also made it come true. He got success in BPSC in her...",
//     },
//     {
//       img: "/img/Our.png",
//       title: "68TH BPSC TOPPER PRERNA SINGH : DY.S.P |...",
//       linkText:
//         "68th BPSC Topper Prerna Singh : Dy.S.P | Interview I KGS IAS Hindi",
//       metaInfo:
//         "Prerna Singh, resident of Biddupur village of Hajipur, Bihar, not only saw her childhood dream but also made it come true. He got success in BPSC in her...",
//     },
//     {
//       img: "/img/Our.png",
//       title: "68TH BPSC TOPPER PRERNA SINGH : DY.S.P |...",
//       linkText:
//         "68th BPSC Topper Prerna Singh : Dy.S.P | Interview I KGS IAS Hindi",
//       metaInfo:
//         "Prerna Singh, resident of Biddupur village of Hajipur, Bihar, not only saw her childhood dream but also made it come true. He got success in BPSC in her...",
//     },
//   ];

//   return (
//     <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-2 py-12">
//       {/* Title */}
//       <h1 className="font-workSans font-bold text-2xl sm:text-3xl md:text-4xl leading-tight mb-8 text-center md:text-left">
//         Our Achievements
//       </h1>

//       {/* Horizontal Scroll Section */}
//       <div
//         className="
//           flex gap-6 sm:gap-8 overflow-x-auto pb-4 
//           snap-x snap-mandatory 
//           scroll-smooth
//           scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100
//         "
//       >
//         {achievementsData.map((item, i) => (
//           <div key={i} className="flex-shrink-0 snap-center">
//             <CardTest
//               img={item.img}
//               title={item.title}
//               linkText={item.linkText}
//               metaInfo={item.metaInfo}
//             />
//           </div>
//         ))}
//       </div>

//       {/* Button */}
//       <div className="flex justify-center md:justify-end mt-10">
//         <button className="font-urbanist font-medium text-sm sm:text-base bg-[linear-gradient(96.18deg,#C83300_-2.22%,#E35545_48.89%,#FFA98B_100%)] text-white px-5 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300">
//           See All Achievements
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Achievement;


"use client";
import React from "react";
import CardTest from "../../atom/CardTest";
import achievementsData from "../../../../public/db/Achievements.json";
import { Button } from "@/components/common/Button";

const Achievement = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-2 py-12">
      <h1 className="font-workSans font-bold text-2xl sm:text-3xl md:text-4xl leading-tight mb-8 text-center md:text-left">
        Our Achievements
      </h1>

      {/* Scrollable container without visible scrollbar */}
      <div
        className="flex gap-6 sm:gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scroll-smooth"
        style={{
          scrollbarWidth: "none", // For Firefox
          msOverflowStyle: "none", // For IE & Edge
        }}
      >
        {/* Hide scrollbar for Webkit browsers */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {achievementsData.map((item, i) => (
          <div key={i} className="flex-shrink-0 snap-center">
            <CardTest
              img={item.img}
              title={item.title}
              linkText={item.linkText}
              metaInfo={item.metaInfo}
            />
          </div>
        ))}
      </div>

      <div className="flex justify-center md:justify-end mt-10">
        <Button>
          See All Achievements
        </Button>
      </div>
    </section>
  );
};

export default Achievement;
