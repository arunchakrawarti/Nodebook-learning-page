"use client";
import React from "react";
import Image from "next/image";
import main from "../../../public/db/main.json";

const MainSidebar = ({ open, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-white z-50 shadow-xl overflow-y-auto
      transition-transform duration-300 
      w-[100vw] sm:w-[80vw] md:w-[450px] lg:w-[550px] xl:w-[600px]
      ${open ? "translate-x-0" : "-translate-x-full"}`}
    >
     
      <div className="relative flex justify-between items-center p-4 bg-[#003566] text-white h-[90px] sm:h-[100px] rounded-br-3xl">
        <div>
          <h2 className="text-lg sm:text-xl font-bold">All Exams</h2>
          <p className="text-xs sm:text-sm font-medium leading-tight">
            Explore All Courses at <br />
            Notesbook Global Academy
          </p>
        </div>

        <Image
          src="/img/notebook.png"
          height={55}
          width={55}
          alt="logo"
          className="w-[40px] bg-white rounded-full mr-3 sm:w-[55px]"
        />

        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-white text-3xl font-bold"
        >
          &times;
        </button>
      </div>

      
      <div className="p-4 grid grid-cols-1 gap-3">
        {main.map((item) => (
          <div
            key={item.id}
            className="flex items-center gap-3 p-3 bg-[#F0F0F5] rounded-xl hover:bg-red-100 transition-all"
          >
            <div className="w-12 h-12 min-w-12 bg-white flex items-center justify-center rounded-full shadow">
              <Image
                src={item.img}
                width={30}
                height={30}
                alt={item.title}
                className="w-[28px] h-[28px]"
              />
            </div>

            <div className="flex flex-col w-full">
              <h1 className="text-sm sm:text-base font-semibold text-[#DF4C44] leading-tight">
                {item.title}
              </h1>
              <p className="text-xs text-[#575757] leading-tight break-words">
                {item.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSidebar;
