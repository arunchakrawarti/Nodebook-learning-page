import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const UPPCSCard = ({ title, percentage, status, onClick }) => {
  return (
    <div
      className="w-full max-w-7xl bg-white border border-gray-300 rounded-lg shadow px-2 py-8 mb-5 mx-auto cursor-pointer 
                 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3"
      onClick={onClick}
    >
     
      <p className="font-work-sans font-bold text-[24px] leading-[24px] ">
        {title}
      </p>

     
      <div className="flex items-center gap-2 sm:gap-3">

        
        <button className="px-3 py-1 rounded-full border border-blue-950 bg-[#E7F1FF] text-blue-800 font-semibold text-sm">
          {percentage}%
        </button>

        
        <button
          className={`px-3 py-1 rounded-full font-semibold text-sm ${
            status === "Test Ended"
              ? "bg-[#FFE5E5] text-[#D11A2A]"
              : "bg-green-100 text-green-700"
          }`}
        >
          {status}
        </button>

       
        <MdKeyboardArrowRight className="h-6 w-6 text-gray-700" />

      </div>
    </div>
  );
};

export default UPPCSCard;
