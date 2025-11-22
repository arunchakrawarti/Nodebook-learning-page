"use client";
import Image from "next/image";
import React, { useState } from "react";

const Calling = () => {
  const [open, setOpen] = useState(false);

  return (
    <>

      {!open ? (
        <div
          onClick={() => setOpen(true)}
          className="flex z-50 fixed bottom-18 right-2 justify-end cursor-pointer"
        >
          <Image src="/img/Call.png" height={60} width={60} alt="Call" />
        </div>
      ) : (
        <div
          onClick={() => setOpen(false)}
          className="flex z-50 fixed bottom-20 right-2 justify-end cursor-pointer bg-blue-950 shadow-xl rounded-full p-3"
        >
          <span className="text-3xl font-bold  text-white">✕</span>
        </div>
      )}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 bg-black/40 z-40"
        ></div>
      )}

      
      {open && (
        <div className="fixed bottom-35 right-5 z-50 bg-white p-4 rounded-xl shadow-xl w-[280px] border-2 border-purple-500">
          <div className="flex flex-col items-center gap-3">
            <p className="font-semibold text-[16px] text-[#3A0CA3]">
              Talk to a counselor
            </p>
            <p className="text-gray-600 text-sm text-center">
              Have doubts? Our support team will be happy to assist you!
            </p>

            <Image
              src="/img/Callimg.png"
              height={120}
              width={150}
              alt="Counselor"
            />

            <div className="w-full border border-gray-400 rounded-lg py-2 px-4 text-center hover:bg-blue-950 hover:text-white font-medium">
              92660954441
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Calling;
