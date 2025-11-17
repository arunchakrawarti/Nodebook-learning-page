// import React from "react";

// const Card5 = ({
//   label,
//   description,
//   button,
//   bgColor,
//   buttonColor,
//   cardWidth = "100%",
//   cardMaxWidth = "355px",
//   cardHeight = "auto",
// }) => {
//   return (
//     <div
//       className="rounded-xl p-6 shadow-md flex  flex-col justify-between"
//       style={{
//         background: bgColor || "#FFFFFF",   // gradient fix
//         width: cardWidth,
//         maxWidth: cardMaxWidth,
//         height: cardHeight,
//       }}
//     >
      
//       <div>

        
//         <h1 className="font-inter font-bold mt-18 text-[24px] leading-[100%] text-white tracking-[0px]">
//           {label}
//         </h1>

//         <p className="font-inter font-medium text-[20px] leading-[22px] tracking-[0px] text-white mt-4">
//           {description}
//         </p>
//       </div>

//       {button && (
//         <div
//           className="w-[141px] h-[40px] rounded-[6px] text-white text-center font-sans font-semibold flex items-center justify-center mt-5 cursor-pointer hover:opacity-90 transition"
//           style={{
//             background: buttonColor
//               ? buttonColor
//               : "linear-gradient(126.5deg, #EC131D 0%, #2F3192 100%)",
//           }}
//         >
//           {button}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Card5;


import React from "react";

const Card5 = ({ label, description, button, bgColor, buttonColor, cardHeight = "250px" }) => {
  return (
    <div
      className="rounded-xl p-4 sm:p-6 shadow-md flex flex-col justify-between w-full box-border"
      style={{
        background: bgColor || "#FFFFFF",
        height: cardHeight,
      }}
    >
      <div>
        <h1 className="font-inter font-bold text-[24px] leading-[28px] text-white">
          {label}
        </h1>
        <p className="font-inter font-medium text-[20px] leading-[22px] text-white mt-4">
          {description}
        </p>
      </div>

      {button && (
        <div
          className="w-[141px] h-[40px] rounded-[6px] text-white text-center font-sans font-semibold flex items-center justify-center mt-5 cursor-pointer hover:opacity-90 transition"
          style={{
            background: buttonColor
              ? buttonColor
              : "linear-gradient(126.5deg, #EC131D 0%, #2F3192 100%)",
          }}
        >
          {button}
        </div>
      )}
    </div>
  );
};

export default Card5;
