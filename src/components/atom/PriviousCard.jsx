// import React from 'react';
// import Image from 'next/image';

// const PriviousCard = ({ img, title, questions = "45 Questions", description = "Learn the latest strategies to grow your online presence." }) => {
  
//   const defaultImg = '/img/quiz_card_bg.png';

//   return (
//     <div className='max-w-xs bg-white rounded-xl shadow-lg overflow-hidden transition duration-300 hover:shadow-xl'>
      
//       {/* Image Section */}
//       <div className='relative w-full' style={{ height: '174px' }}>
//         <Image
//           src={img || defaultImg} 
//           alt={title || 'Quiz Image'}
//           layout='fill'
//           objectFit='cover'
//           className='rounded-t-xl'
//           priority 
//         />
//       </div>
      
//       {/* Content Section */}
//       <div className='p-4 flex flex-col'>
        
//         {/* Title: font-semibold */}
//         <h4 className="font-work-sans font-semibold text-[18px] leading-[100%] tracking-normal mb-2">
//           {title || "Ancient India Quiz"}
//         </h4>
        
       
//         <span className="font-inter font-medium text-[12px] leading-[100%] tracking-normal text-[#003566] mb-3">
//           {questions}
//         </span>

//         <p className="font-work-sans font-normal text-[16px] leading-[21px] tracking-normal mb-4">
//           {description}
//         </p>
        
       
//         <div className='mt-auto'>
         
//           <button 
//             className='w-full py-2 border-2 border-[#003566] text-[#003566] font-semibold text-base rounded-lg hover:bg-blue-50 transition duration-200'
//           >
//             Start Practice
//           </button>
//         </div>
        
//       </div>
//     </div>
//   );
// }

// export default PriviousCard;

// PriviousCard.jsx
import React from 'react';
import Image from 'next/image';

const PriviousCard = ({ img, title, questions = "45 Questions", description = "Learn the latest strategies to grow your online presence." }) => {
  const defaultImg = '/img/quiz_card_bg.png';

  return (
    <div className='w-full max-w-full bg-white rounded-xl shadow-lg overflow-hidden flex flex-col'>
      
      {/* Image Section */}
      <div className='relative w-full h-44 sm:h-48 md:h-52 lg:h-56'>
        <Image
          src={img || defaultImg} 
          alt={title || 'Quiz Image'}
          layout='fill'
          objectFit='cover'
          className='rounded-t-xl'
          priority 
        />
      </div>
      
      {/* Content Section */}
      <div className='p-4 flex flex-col flex-1'>
        
        <h4 className="font-work-sans font-semibold text-[16px] sm:text-[18px] md:text-[20px] leading-[100%] tracking-normal mb-2">
          {title || "Ancient India Quiz"}
        </h4>
        
        <span className="font-inter font-medium text-[10px] sm:text-[12px] md:text-[14px] leading-[100%] tracking-normal text-[#003566] mb-2 sm:mb-3">
          {questions}
        </span>

        <p className="font-work-sans font-normal text-[14px] sm:text-[16px] md:text-[16px] leading-[21px] tracking-normal mb-4">
          {description}
        </p>
        
        <button 
          className='w-full py-2 sm:py-3 px-4 sm:px-6 border-2 border-[#003566] text-[#003566] 
                     font-work-sans font-semibold text-[14px] sm:text-[16px] rounded-lg hover:bg-[#003566] hover:text-white transition duration-200 shadow-md'
        >
          Start Practice
        </button>
      </div>
    </div>
  );
}

export default PriviousCard;
