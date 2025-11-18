import React from 'react';
import { FaChevronDown, FaSearch } from 'react-icons/fa';

const Series = () => {
  return (
    
    <div className='w-full mt-30 p-4 md:p-8 lg:px-14 lg:py-10 bg-white'> 
      
     

      <div className='mb-6'>
        <h1 className="font-bold text-3xl md:text-4xl text-gray-900 mb-1">
         Test Series
        </h1>
        <p className="font-normal text-sm md:text-base text-gray-600">
          Explore our extensive library of courses covering a wide range of topics.
        </p>
      </div>
      
     
      <div className='flex flex-col gap-6 md:gap-8'>
        
        
        <div className='flex flex-wrap gap-3'>
          
         
          {['Category', 'Instructor', 'Level','Price', 'Duration'].map((label) => (
            <button
              key={label}
              className="flex items-center justify-between px-4 py-2 bg-white text-gray-700 border border-gray-300 rounded-md shadow-sm hover:bg-gray-50 transition duration-150 text-sm font-medium w-full sm:w-auto min-w-[120px]"
            >
              <span>{label}</span>
              <FaChevronDown className='w-3 h-3 ml-2 text-gray-500' />
            </button>
          ))}
        </div>
        
       
        <div className='relative w-full'>
          <input
            type="text"
            placeholder='Search for questions'
            
            className='w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-base shadow-sm'
          />
         
          <FaSearch className='absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400' />
        </div>
      </div>
    </div>
  );
};

export default Series;