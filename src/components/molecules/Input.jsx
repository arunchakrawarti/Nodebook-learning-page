// import React from 'react'

// const Input = ({ label, placeholder }) => {
//   return (
//     <div className="w-full">
      
//       {/* Label */}
//       <p className="font-inter font-semibold text-[18px] sm:text-[20px] md:text-[22px] leading-[100%] tracking-[0px]">
//         {label}
//       </p>

//       {/* Input Placeholder Box */}
//       <div className="mt-2 w-full">
//         <p className="font-inter border border-gray-200 rounded-md px-4 py-3 
//         font-normal text-[16px] sm:text-[17px] md:text-[18px] leading-[100%] tracking-[0px]">
//           {placeholder}
//         </p>
//       </div>

//     </div>
//   )
// }

// export default Input



import React from 'react'

const Input = ({ label, placeholder }) => {
  return (
    <div className="w-full max-w-[990px]">
      <p className="font-inter font-semibold text-[18px] md:text-[20px] lg:text-[22px] leading-[100%]">
        {label}
      </p>

      <input
        type="text"
        placeholder={placeholder}
        className="
          mt-4
          w-full
          h-[55px] md:h-[60px]
          border border-gray-400 rounded-md
          px-3
          font-inter text-[16px] md:text-[18px]
          outline-none
          focus:border-[#0033ff] focus:ring-1 focus:ring-[#0033ff]
        "
      />
    </div>
  )
}

export default Input
