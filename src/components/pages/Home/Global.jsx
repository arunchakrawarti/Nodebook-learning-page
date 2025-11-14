import React from "react";
import Image from "next/image";

const Global = () => {
  return (
    <section className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-14 md:py-16">
      {/* Heading */}
      <h1 className="font-workSans font-bold text-2xl sm:text-3xl md:text-4xl leading-tight tracking-[0] text-center md:text-left mb-8 md:mb-12">
        New On Notesbook Global Academy
      </h1>

      {/* Image Section */}
      <div
        className="
          flex flex-col
          md:flex-row 
          items-center 
          justify-between 
          gap-6 md:gap-10
        "
      >
        {/* Left Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/img/New.png"
            alt="New on Global Academy"
            width={627}
            height={353}
            className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            priority
          />
        </div>

        {/* Right Image */}
        <div className="w-full md:w-1/2">
          <Image
            src="/img/New.png"
            alt="New on Global Academy"
            width={627}
            height={353}
            className="w-full h-auto rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Global;
