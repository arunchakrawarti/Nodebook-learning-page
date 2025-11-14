// import React from "react";
// import ExploreCard from "../../atom/ExploreCard";
// import Cardicon from "../../atom/Cardicon";
// import ExploreCardData from "../../../../public/db/ExploreCardData.json";
// import CardiconData from "../../../../public/db/CardiconData.json";

// const OfflineCentersSection = () => {
//   return (
//     <div className="relative pt-16 pb-32 px-4 min-h-screen">
      
//       <div 
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: `url('/img/Background.png')`,
//           backgroundSize: 'cover',
//           backgroundPosition: 'center',
//           backgroundRepeat: 'no-repeat',
//           backgroundColor: '#F5F6FF'
//         }}
//       />

//       <div className="relative z-10 max-w-screen-xl mx-auto w-full">
        
//         <h3 className="font-montserrat font-bold text-2xl sm:text-3xl mb-12 text-gray-900 text-center">
//           Explore Offline Centers
//         </h3>

//         {/* Explore Cards */}
//         <div className="relative flex flex-col lg:flex-row justify-center items-center lg:space-x-8 space-y-8 lg:space-y-0">
          
//           <ExploreCard {...ExploreCardData[0]} />

//           <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-10 flex justify-center items-center pointer-events-none">
//             <div className="w-full h-1 border-t-4 border-dashed border-blue-400"></div>
//           </div>

//           <ExploreCard {...ExploreCardData[1]} />
//         </div>

//         {/* Middle Section Title */}
//         <h3 className="font-montserrat font-bold text-2xl sm:text-3xl text-center mt-20 sm:mt-24 mb-10 text-gray-900">
//           Our Others Centers
//         </h3>

//         {/* Cardicon Grid */}
//         <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
//           {CardiconData.map((card, index) => (
//             <Cardicon key={index} {...card} />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OfflineCentersSection;


import React from "react";
import ExploreCard from "../../atom/ExploreCard";
import Cardicon from "../../atom/Cardicon";

import ExploreCardData from "../../../../public/db/ExploreCardData.json";
import CardiconData from "../../../../public/db/CardiconData.json";

const OfflineCentersSection = () => {
  return (
    <div className="relative w-full py-14 px-4 sm:px-6 md:px-10 lg:px-20 bg-[#F5F6FF] overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url('/img/Background.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      <div className="relative z-10 max-w-[1300px] w-full mx-auto">

        {/* Main Heading */}
        <h3 className="font-montserrat font-bold text-2xl sm:text-3xl md:text-4xl text-center text-gray-900 mb-10">
          Explore Offline Centers
        </h3>

        {/* Explore Cards Wrapper */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-10 lg:gap-20 w-full">

          {/* Card 1 */}
          <ExploreCard {...ExploreCardData[0]} />

          {/* Line — desktop only */}
          <div className="hidden lg:block w-[200px] h-[4px] border-t-4 border-dashed border-blue-400" />

          {/* Card 2 */}
          <ExploreCard {...ExploreCardData[1]} />
        </div>

        {/* Other Centers Title */}
        <h3 className="font-montserrat font-bold text-2xl sm:text-3xl md:text-4xl text-center mt-16 mb-10">
          Our Other Centers
        </h3>

        {/* Cardicon grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 place-items-center">
          {CardiconData.map((card, index) => (
            <Cardicon key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfflineCentersSection;
