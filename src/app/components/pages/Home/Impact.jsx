// import React from "react";
// import Image from "next/image";
// import HexCard from "../../atom/HexCard";

// const impactData = [
//   { number: "8K+", text: "Free Videos", bgColor: "bg-blue-600" },
//   { number: "0B+", text: "Views", bgColor: "bg-yellow-600" },
//   { number: "2M+", text: "Application Downloaded", bgColor: "bg-green-600" },
//   { number: "1M+", text: "Registered Users", bgColor: "bg-orange-600" },
//   { number: "10+", text: "Active Courses", bgColor: "bg-pink-600" },
// ];

// const Impact = () => {
//   return (
//     <div className="relative w-full min-h-[400px] sm:min-h-[500px] md:min-h-[300px] lg:min-h-[400px] overflow-hidden">
//       {/* Background Image */}
//       <Image
//         src="/img/Imapct.png"
//         alt="Impact background"
//         fill
//         style={{ objectFit: "cover", objectPosition: "center" }}
//         className="z-0"
//       />

//       {/* Content Overlay */}
//       <div className="relative z-10 w-full flex flex-col items-center justify-center py-10 sm:py-16 px-4">
//         {/* Section Title */}
//         <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-10 sm:mb-16">
//           Our Impact
//         </h2>

//         {/* Hexagon Cards Container */}
//         <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
//           {impactData.map((item, index) => (
//             <HexCard
//               key={index}
//               number={item.number}
//               text={item.text}
//               bgColor={item.bgColor}
//             />
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Impact;


// Impact.jsx
import React from "react";
import Image from "next/image";
import HexCard from "../../atom/HexCard";

const impactData = [
  { number: "8K+", text: "Free Videos", bgColor: "bg-blue-600" },
  { number: "0B+", text: "Views", bgColor: "bg-yellow-600" },
  { number: "2M+", text: "Application Downloaded", bgColor: "bg-green-600" },
  { number: "1M+", text: "Registered Users", bgColor: "bg-orange-600" },
  { number: "10+", text: "Active Courses", bgColor: "bg-pink-600" },
];

const Impact = () => {
  return (
    <div className="relative w-full min-h-[450px] sm:min-h-[500px] md:min-h-[550px] lg:min-h-[400px] overflow-hidden">
      {/* Background Image */}
      <Image
        src="/img/Imapct.png"
        alt="Impact background"
        fill
        style={{ objectFit: "cover", objectPosition: "center" }}
        className="z-0"
      />

      {/* Content Overlay */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center py-10 sm:py-16 px-4">
        {/* Section Title */}
        <h2 className="font-montserrat font-bold text-3xl sm:text-4xl md:text-5xl text-white mb-10 sm:mb-16 text-center">
          Our Impact
        </h2>

        {/* Hexagon Cards Container */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4 sm:gap-6 md:gap-8 lg:gap-10 max-w-6xl mx-auto">
          {impactData.map((item, index) => (
            <HexCard
              key={index}
              number={item.number}
              text={item.text}
              bgColor={item.bgColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Impact;
