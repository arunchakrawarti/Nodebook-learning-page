import React from 'react'
import TesCard from '../../atom/TesCard'
import Link from 'next/link'

const Material1 = () => {
  let arr = [
    {
      img: "/img/Open.png",
      title: "Expert-Curated Content",
      description: "Our study materials are designed by top educators and exam experts to match the latest syllabus and exam trends. Get clear, concise, and exam-ready notes that make learning faster and smarter.",
      bgColor: "#FEE2E2"
    },
    {
      img: "/img/Open1.png",
      title: "Smart Analysis",
      description: "Simplified explanations and visuals help you grasp tough concepts in minutes.Perfect for self-study and last-minute revisions without confusion.",
      bgColor: "#DCFCE7"
    },
    {
      img: "/img/Open2.png",
      title: "Proven Exam Success",
      description: "Thousands of toppers trust our study material for consistent results.  Boost your confidence with structured learning that delivers real outcomes.",
      bgColor: "#FEF9C3"
    }
  ]

  return (
    <div className='max-w-8xl mb-10 mx-auto px-4 md-px-8 lg:px-15'>

      <h1 className="font-poppins font-bold text-[40px] sm:text-[50px] leading-[130%] tracking-[-2%]  mb-10">
       Why Study Material? 
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {arr.map((item, i) => (
          <TesCard
            key={i}
            img={item.img}
            title={item.title}
            description={item.description}
            bgColor={item.bgColor}
          />
        ))}
      </div>

    </div>
  )
}

export default Material1
