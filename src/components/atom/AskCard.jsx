import Image from 'next/image'
import React from 'react'

const AskCard = ({ img, title, description }) => {
  return (
    <div
      className="
        w-full 
        max-w-[380px] 
        border 
        rounded-xl 
        p-5 
        bg-white
        shadow-sm 
        hover:shadow-2xl 
        transition 
        duration-300
      "
    >
      <Image
        src={img}
        height={45}
        width={45}
        alt="card-icon"
        className="object-contain"
      />

      <p className="font-inter mt-4 font-medium text-[20px] sm:text-[22px] leading-[120%]">
        {title}
      </p>

      <p className="font-inter font-bold mt-2 text-[28px] sm:text-[32px] leading-[120%]">
        {description}
      </p>
    </div>
  )
}

export default AskCard
