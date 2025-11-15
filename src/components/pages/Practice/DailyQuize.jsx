import React from 'react';
import PriviousCard from '../../atom/PriviousCard'; 
import testData from '../../../../public/db/testData.json';

const DailyQuize = () => {
  return (
    <div className='w-full px-4 sm:px-6 md:px-8 lg:px-12 py-6 bg-gray-50 overflow-x-hidden'>
      <h2 className="font-work-sans font-bold text-[20px] sm:text-[24px] md:text-2xl text-gray-900 mb-6">
       Daily Quiz & MCQs
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
        {testData.map((test) => (
          <PriviousCard
            key={test.id}
            img={test.imgSrc}
            title={test.title}
            questions={test.questions}
            description={test.description}
          />
        ))}
      </div>
      <div className='flex justify-end mt-5'>
        <button className='bg-[#003566] rounded-md px-5 py-3 text-amber-500'>
        Explore Question
      </button>
      </div>
    </div>
  );
};

export default DailyQuize;
