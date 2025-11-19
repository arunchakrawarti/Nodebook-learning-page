import React from 'react'
import StudyCard from '../../atom/StudyCard'
import Link from 'next/link';

const StudyContent = () => {
  let arr = [
    { img: "/img/Mater.png", title: "Syllabus" },
    { img: "/img/Mater1.png", title: "NCERT Books" },
    { img: "/img/Mater.png", title: "Previous Year Question" },
    { img: "/img/Mater1.png", title: "Current Affairs" },
    { img: "/img/Mater.png", title: "News Highlights" },
    { img: "/img/Mater2.png", title: "Open Test" },
    { img: "/img/Mater3.png", title: "Mind Maps" },
    { img: "/img/Mater2.png", title: "Infographics" },
    { img: "/img/Mater3.png", title: "Daily Quiz" },
    { img: "/img/Mater2.png", title: "Others" }
  ];

  return (
    <div className='mt-10'>
      <h1 className="font-work-sans font-bold ml-12 text-[24px] leading-[100%] tracking-[0px]">
        Study Materials
      </h1>
      
      <div className="mt-5 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {arr.map((item, i) => (
         <Link href='/study-material-category'>
          <StudyCard key={i} img={item.img} title={item.title} />
         </Link>
        ))}
      </div>
    </div>
  );
};

export default StudyContent;
