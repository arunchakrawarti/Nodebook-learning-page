import React from "react";

const CurrentButton = () => {
  return (
    <div className="w-full mt-30 overflow-x-auto">
      <div
        className="
        flex items-center justify-between gap-3 
        min-w-max 
        px-10 py-3 
      "
      >
        <button
          className="
            px-4 py-2 
            text-white 
            bg-[#002A9F] 
            rounded-full 
            text-sm sm:text-base 
            font-medium 
            whitespace-nowrap
          "
        >
          Daily Current Affairs
        </button>

        <button
          className="
            px-4 py-2 
            bg-white 
            border border-gray-300 
            rounded-full 
            text-sm sm:text-base 
            font-medium 
            whitespace-nowrap
          "
        >
          Daily News Highlights
        </button>

        <button
          className="
            px-4 py-2 
            bg-white 
            border border-gray-300 
            rounded-full 
            text-sm sm:text-base 
            font-medium 
            whitespace-nowrap
          "
        >
          MPPSC Special
        </button>

        <button
          className="
            px-4 py-2 
            bg-white 
            border border-gray-300 
            rounded-full 
            text-sm sm:text-base 
            font-medium 
            whitespace-nowrap
          "
        >
          UPPSC Special
        </button>

        <button
          className="
            px-4 py-2 
            bg-white 
            border  
            border-gray-300
            rounded-full 
            text-sm sm:text-base 
            font-medium 
            whitespace-nowrap
          "
        >
          MPPSC Special
        </button>

        <div
          className="
            flex items-center gap-2 
            px-4 py-2 
            bg-white 
            border border-gray-300 
            rounded-full 
            whitespace-nowrap
          "
        >
          <input
            type="date"
            className="cursor-pointer outline-none bg-transparent"
          />
        </div>
      </div>
    </div>
  );
};

export default CurrentButton;
