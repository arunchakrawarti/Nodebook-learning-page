// import React from 'react'
// import Image from "next/image"

// const Cardicon = ({img,title}) => {
//   return (
//     <div className='h-[135px] w-[279px]'>
//       <Image
//       src={img}
//       height={50}
//       width={50}
//       alt='card.png'
//       />
//      <p class="font-montserrat font-medium text-[20px] leading-[29px] tracking-normal">
//  {title}
// </p>
 
//     </div>
//   )
// }

// export default Cardicon

import React from 'react';
import Image from "next/image";

const Cardicon = ({ img, title }) => {
  return (
    <div className='h-[135px] w-[279px] flex justify-center items-center p-4'>
      
      <div className='
        bg-amber-50             
        rounded-lg              
        h-full w-full           
        flex flex-col           
        justify-center          
        items-center            
        shadow-sm               
        overflow-hidden         
      '>

        <Image
          src={img}
          height={50}
          width={50}
          alt={`${title} icon`}
          className='text-amber-700'
        />
        
        <p className="
          font-montserrat       
          font-medium           
          text-[20px]           
          leading-[29px]        
          tracking-normal       
          text-gray-800         
          mt-2                  
        ">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Cardicon;