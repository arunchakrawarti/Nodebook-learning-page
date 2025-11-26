// import React from "react";

// const HexCard = ({ number, text, bgColor }) => {
//   return (
   
//     <div 
//          className={`w-24 h-24 sm:w-32 sm:h-32 md:w-50 md:h-45 relative flex items-center justify-center text-white font-bold transition-all duration-300 border-4 transform hover:scale-105 ${bgColor}`}
//          style={{
          
//            clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
//          }}
//     >
//       <div className="text-center p-2">
//         <div className="text-xl sm:text-2xl md:text-3xl font-extrabold leading-none">
//             {number}
//         </div>
//         <div className="text-xs sm:text-sm md:text-base font-medium mt-1 leading-snug">
//             {text}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HexCard;

// HexCard.jsx
// HexCard.jsx
import React from "react";

const HexCard = ({ number, text, bgColor }) => {
  return (
    <div
      className={`
        w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 lg:w-44 lg:h-40
        flex items-center justify-center text-white font-bold 
        transition-transform duration-300 border-4 transform hover:scale-105
        ${bgColor}
      `}
      style={{
        clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
      }}
    >
      <div className="text-center px-2">
        <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-extrabold leading-none">
          {number}
        </div>
        <div className="text-xs sm:text-sm md:text-base lg:text-lg font-medium mt-1 leading-snug">
          {text}
        </div>
      </div>
    </div>
  );
};

export default HexCard;
