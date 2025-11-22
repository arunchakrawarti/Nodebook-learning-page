import Image from 'next/image'
import React from 'react'

const StudyCard = ({ img, title }) => {
  return (
    <div className="flex flex-col items-center hover:shadow-2xl text-center">
      <Image
        src={img}
        height={173}
        width={173}
        alt="study.png"
        className="object-contain rounded-md"
      />

      <p className="font-work-sans font-medium text-[16px] leading-[24px] tracking-[0px] mt-2">
        {title}
      </p>
    </div>
  )
}

export default StudyCard
