import React from 'react';
import Image from 'next/image';

const TrendingCard = ({ 
  imgSrc = '/img/default_analysis.png', 
  title = "Previous Year Paper Analysis — Learn What's Changing in 2025", 
  description = "Analyze trends from past exams to understand question patterns, difficulty levels, and the most important topics."
}) => {
  return (
    <div className='flex items-start p-3 bg-white w-full mx-auto rounded-xl border-b-2 border-gray-100'>
      
      {/* 1. Image Section */}
      <div className='relative w-20 h-16 flex-shrink-0 overflow-hidden rounded-md'>
        <Image
          src={imgSrc}
          alt='Analysis Image'
          layout='fill'
          objectFit='cover'
          className='rounded-md'
          priority
        />
      </div>
      
      {/* 2. Content Section */}
      <div className='ml-4 w-full h-full flex flex-col justify-start'>
        
        {/* Title */}
        <h1 
          className="font-normal text-lg md:text-xl text-gray-900 leading-snug mb-1"
        >
          {title}
        </h1>
        
        {/* Description */}
        <p 
          className="font-normal text-xs text-gray-600 leading-tight line-clamp-2"
        >
          {description}
        </p>
      </div>
      
    </div>
  );
};

export default TrendingCard;