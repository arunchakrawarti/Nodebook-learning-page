import React from 'react'
import Image from 'next/image'
import Popular from '../../atom/Popular'

const Competitive = () => {
  const arr = [
    {
      imgSrc: "/img/Pop.png",
      title: "SEPTEMBER 23, 2025",
      description: "Master Competitive Exams in 2025: Proven Study Plan, Tips &"
    },
    {
      imgSrc: "/img/Pop1.png",
      title: "SEPTEMBER 19, 2025",
      description: "From Beginner to Top Ranker: The Complete Guide to Crack"
    },
    {
      imgSrc: "/img/Pop2.png",
      title: "SEPTEMBER 19, 2025",
      description: "Competitive Exam Preparation Made Easy: Smart Strategies"
    }
  ];

  return (
    <div className="w-full px-4 md:px-8 flex flex-col lg:flex-row gap-6 pt-33 md:pt-30 lg:pt-27">

      {/* LEFT SIDE IMAGE SECTION */}
      <div className="w-full lg:w-[70%]  rounded-md overflow-hidden">
        <Image
          src="/img/Competitive.png"
          height={490}
          width={856}
          className="w-full h-auto object-cover"
          alt="Competitive Exam"
        />
      </div>

      {/* RIGHT SIDE POPULAR POSTS */}
      <div className="w-full lg:w-[30%]  rounded-md p-4">
        
        <h2 className="text-[20px] font-bold text-gray-700 border-b pb-2 mb-4">
          Popular Posts
        </h2>

        <div className="flex flex-col gap-3">
          {arr.map((item, i) => (
            <Popular
              key={i}
              imgSrc={item.imgSrc}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>

      </div>

    </div>
  );
};

export default Competitive;
