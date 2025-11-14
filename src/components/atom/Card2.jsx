// import React from 'react';
// import Image from 'next/image';

// // Note: The original Card2 was horizontal. We are changing it to vertical and centering the icon/text.
// const Card2 = ({ img, title, bgColor }) => {
//   return (
//     <div className={`
//         ${bgColor}             
//         w-[270px]             
//         h-[124px]             
//         p-4                   
//         rounded-lg            
//         text-white           
//         shadow-sm             
        
//         // Flex properties to align content vertically and center them
//         flex 
//         flex-col 
//         items-center 
//         justify-center
//     `}>
      
//       {/* Icon container */}
//       <div className='mb-2'> 
//         <Image
//           src={img}
//           height={40} 
//           width={40}   
//           alt={title || 'icon'} 
//           className='object-contain' 
//         />
//       </div>
      
//       {/* Text for the title */}
//       <p className="font-workSans font-medium text-lg leading-6 tracking-[0px] text-center">
//         {title}
//       </p>

//     </div>
//   );
// };

// export default Card2;


import React from "react";
import Image from "next/image";

const Card2 = ({ img, title, bgColor }) => {
  return (
    <div
      className={`
        ${bgColor}
        w-full
        max-w-[240px] sm:max-w-[260px] md:max-w-[270px]
        h-[110px] sm:h-[120px] md:h-[130px]
        p-4
        rounded-xl
        text-white
        shadow-sm
        hover:shadow-md
        transition-transform
        duration-300
        ease-in-out
        transform
        hover:scale-105
        flex
        flex-col
        items-center
        justify-center
        text-center
      `}
    >
      {/* Image Section */}
      <div className="mb-2">
        <Image
          src={img}
          height={48}
          width={48}
          alt={title || "icon"}
          className="object-contain"
        />
      </div>

      {/* Title */}
      <p className="font-workSans font-medium text-sm sm:text-base md:text-lg leading-tight">
        {title}
      </p>
    </div>
  );
};

export default Card2;
