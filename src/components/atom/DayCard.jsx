import React from 'react';
import Image from 'next/image';

const DayCard = ({ 
  imgSrc = '/img/exam_prep_bg.png', 
  title = "Crack Any Competitive Exam", 
  description = "Great Study Strategies. Test series, mock papers, and practice quizzes to study efficiently and score high in exams."
}) => {
  return (
    <div className='flex items-center p-3 bg-white max-w-2xl mx-auto rounded-xl shadow-lg border border-gray-200'>
      
      {/* 1. Image Section */}
      <div className='relative w-32 h-24 sm:w-48 sm:h-32 flex-shrink-0 overflow-hidden rounded-lg'>
        <Image
          src={imgSrc}
          alt='Competitive Exam Preparation'
          layout='fill'
          objectFit='cover'
          className='rounded-lg'
          priority
        />
      </div>
      
     
      <div className='ml-4 w-full h-full flex flex-col justify-center'>
        
        
        <p 
          className="font-urbanist font-semibold text-[20px] leading-[28px] tracking-normal align-middle mb-1"
        >
          {title}
        </p>
        
       
        <span 
          className="font-urbanist font-normal text-[12px] leading-[18px] tracking-normal align-middle"
        >
          {description}
        </span>
      </div>
      
    </div>
  );
};

export default DayCard;