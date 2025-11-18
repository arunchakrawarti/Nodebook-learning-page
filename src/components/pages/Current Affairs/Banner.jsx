import React from 'react';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="relative top-28 w-full h-[400px] sm:h-[550px] md:h-[500px] lg:h-[400px]  mx-auto overflow-hidden">
      
     
      <Image
        src='/img/Pracyice.png'
        alt='Practice Banner'
        layout='fill'
        objectFit='cover'
        quality={100}
        priority
        className='z-0'
      />

     
      <div className='absolute  inset-0 z-10 flex flex-col justify-center items-start text-white p-4 sm:p-8 md:p-12 lg:p-16 xl:p-20'>
        
        
        <div className='max-w-full md:max-w-5xl mb-6 md:mb-8'>
          
         
          <h3 className="font-mulish font-black text-[24px] sm:text-[28px] md:text-[32px] lg:text-[36px] xl:text-[40px] leading-[28px] sm:leading-[32px] md:leading-[36px] lg:leading-[40px] tracking-[1%] uppercase mb-3">
            Explore the most diverse collection <br/> <span>of online courses!</span>
          </h3>

         
          <p className="font-manrope font-medium text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] leading-[24px] sm:leading-[28px] md:leading-[32px] lg:leading-[36px] tracking-normal capitalize">
            Discover our comprehensive range of courses designed to help you achieve your goals. From UPSC to Banking exams, we have everything you need for success.
          </p>
        </div>

       
        <div className='flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 w-full sm:w-auto'>
          <button 
            className="w-full sm:w-auto px-5 py-3 sm:px-6 sm:py-3 bg-red-600 text-white font-bold text-[16px] sm:text-[18px] md:text-[20px] rounded-full shadow-lg hover:bg-red-700 transition duration-200"
          >
           Start Learning Free
          </button>
          
          <button 
            className="w-full sm:w-auto px-5 py-3 sm:px-6 sm:py-3 bg-transparent text-white font-bold text-[16px] sm:text-[18px] md:text-[20px] rounded-full border-2 border-white hover:bg-white hover:text-black transition duration-200"
          >
            Explore Questions
          </button>
        </div>

        
        <div className='absolute bottom-4 right-4 flex gap-2 sm:hidden'>
          <div className='w-2 h-2 bg-white rounded-full opacity-100'></div>
          <div className='w-2 h-2 bg-white rounded-full opacity-50'></div>
          <div className='w-2 h-2 bg-white rounded-full opacity-50'></div>
        </div>

      </div>
    </div>
  );
}

export default Banner;
