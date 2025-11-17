// import React from "react";
// import Image from "next/image";
// import { Phone, Mail, MapPin } from "lucide-react";

// const ExploreCard = ({
//   title,
//   address,
//   phone,
//   email,
//   mapLink,
//   iconSrc,
//   bgColorClass,
// }) => {
//   return (
//     <div
//       className={`
//         w-full  
//         ${bgColorClass} 
//         p-4 sm:p-6 
//         rounded-xl 
//         shadow-md 
//         flex flex-col gap-4
//       `}
//     >
//       {/* TOP CONTENT */}
//       <div
//         className="
//           flex 
//           flex-col sm:flex-row 
//           sm:items-start 
//           items-center 
//           gap-4 sm:gap-6
//           text-center sm:text-left
//         "
//       >
//         <Image
//           src={iconSrc}
//           alt="icon"
//           width={70}
//           height={70}
//           className="
//             w-16 h-16 
//             sm:w-20 sm:h-20 
//             object-contain
//           "
//         />

//         {/* TEXT CONTENT */}
//         <div className="flex flex-col gap-2">
//           <h4 className="font-montserrat font-bold text-lg sm:text-xl text-gray-900">
//             {title}
//           </h4>

//           <p className="font-montserrat text-gray-700 text-xs           leading-snug">
//             {address}
//           </p>

//           {/* PHONE */}
//           <div className="flex items-center gap-2 justify-center sm:justify-start">
//             <Phone size={18} className="text-gray-600" />
//             <p className="text-sm sm:text-base text-gray-800">{phone}</p>
//           </div>

//           {/* EMAIL */}
//           <div className="flex items-center gap-2 justify-center sm:justify-start">
//             <Mail size={18} className="text-gray-600" />
//             <p className="text-sm sm:text-base text-gray-800">{email}</p>
//           </div>
//         </div>
//       </div>

//       {/* BOTTOM LINK */}
//       <div className="flex justify-end sm:justify-end justify-center">
//         <a
//           href={mapLink}
//           target="_blank"
//           className="flex items-center gap-1 text-indigo-900 font-semibold hover:opacity-80"
//         >
//           <MapPin size={22} />
//           Google Map
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ExploreCard;



import React from "react";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

const ExploreCard = ({
  title,
  address,
  phone,
  email,
  mapLink,
  iconSrc,
  bgColorClass,
}) => {
  return (
    <div
      className={`
        w-full  
        ${bgColorClass} 
        p-4 sm:p-6 
        rounded-xl 
        shadow-md 
        flex flex-col gap-5
      `}
    >
      {/* TOP CONTENT */}
      <div
        className="
          flex 
          flex-col sm:flex-row 
          items-center sm:items-start 
          gap-5 sm:gap-6
          text-center sm:text-left
        "
      >
        <Image
          src={iconSrc}
          alt="icon"
          width={70}
          height={70}
          className="
            w-16 h-16 
            sm:w-20 sm:h-20 
            object-contain
          "
        />

        {/* TEXT CONTENT */}
        <div className="flex flex-col gap-3 w-full">
          {/* TITLE */}
          <h4 className="font-montserrat font-bold 
            text-base sm:text-lg md:text-xl 
            text-gray-900
          ">
            {title}
          </h4>

          {/* ADDRESS */}
          <p
            className="
              font-montserrat text-gray-700
              text-xs sm:text-sm md:text-base
              leading-relaxed
            "
          >
            {address}
          </p>

          {/* PHONE */}
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <Phone size={18} className="text-gray-600" />
            <p className="text-sm sm:text-base text-gray-800">{phone}</p>
          </div>

          {/* EMAIL */}
          <div className="flex items-center gap-2 justify-center sm:justify-start">
            <Mail size={18} className="text-gray-600" />
            <p className="text-sm sm:text-base text-gray-800">{email}</p>
          </div>
        </div>
      </div>

      {/* BOTTOM LINK */}
      <div className="flex justify-center sm:justify-end">
        <a
          href={mapLink}
          target="_blank"
          className="flex items-center gap-1 text-indigo-900 font-semibold hover:opacity-80"
        >
          <MapPin size={22} />
          Google Map
        </a>
      </div>
    </div>
  );
};

export default ExploreCard;
