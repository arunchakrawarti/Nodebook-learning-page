// import React from "react";
// import Image from "next/image";

// const SidebarCard = ({ img, title, description }) => {
//   return (
//     <div
//       className="
//         flex items-center gap-3 
//         p-3 sm:p-4 border
//         border-red-900 rounded-lg 
//         bg-pink-100/50 
//         hover:bg-pink-200/40 transition
//         w-full
//       "
//     >
     
//       <div className="flex-shrink-0 w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center p-1 shadow-sm">
//         <Image
//           src={img}
//           height={40}
//           width={40}
//           alt={title}
//           className="object-contain"
//         />
//       </div>

     
//       <div className="flex flex-col justify-center overflow-hidden">
//         <h1 className="font-urbanist font-medium text-[14px] sm:text-[16px] leading-tight text-red-600 truncate">
//           {title}
//         </h1>
//         <p className="font-urbanist font-medium text-[11px] sm:text-[13px] md:text-[12px] leading-tight text-gray-700 line-clamp-2">
//           {description}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default SidebarCard;



"use client";
import React from "react";
import Image from "next/image";

const SidebarCard = ({ img, title, description }) => {
  return (
    <div
      className="
        flex items-center gap-3 
        p-3 sm:p-4 border
        border-red-900 rounded-lg 
        bg-pink-100/50 
        hover:bg-pink-200/40 transition
        w-full
      "
    >
      <div className="flex-shrink-0 w-10 h-10 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center p-1 shadow-sm">
        <Image
          src={img}
          height={40}
          width={40}
          alt={title}
          className="object-contain"
        />
      </div>

      <div className="flex flex-col justify-center overflow-hidden">
        <h1 className="font-urbanist font-medium text-[14px] sm:text-[16px] leading-tight text-red-600 truncate">
          {title}
        </h1>
        <p className="font-urbanist font-medium text-[11px] sm:text-[13px] md:text-[12px] leading-tight text-gray-700 line-clamp-2">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SidebarCard;
