import Image from 'next/image'
import React from 'react'

const TesCard = ({ img, title, description, bgColor }) => {
  return (
    <div className="border border-gray-300 rounded-xl p-6 flex flex-col items-center text-center shadow-sm hover:shadow-2xl transition">
      <div
        className="w-20 h-20 rounded-xl flex items-center justify-center mb-4"
        style={{ backgroundColor: bgColor }}
      >
        <Image
          src={img}
          height={42}
          width={42}
          alt="icon"
        />
      </div>

      <p className="font-poppins font-semibold text-[24px] sm:text-[28px] leading-[130%] tracking-[-1%]">
        {title}
      </p>

      <p className="font-mulish font-normal text-[15px] sm:text-[16px] leading-[150%] mt-2">
        {description}
      </p>

    </div>
  )
}

export default TesCard
