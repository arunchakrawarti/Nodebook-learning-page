// import React from 'react'
// import Image from "next/Image"

// const ChannelCard = ({img,title}) => {
//   return (
//     <div>
//         <Image
//         src="/img/YoutubeChannel.png"
//         height={45}
//         width={64}
//         alt='youtube.png'
//         />
//       <div>
//         <Image
//       src={img}
//       height={173}
//       width={309}
//       alt='youtube.png'
//       />
//       <p class="font-workSans font-medium text-base leading-6 tracking-normal">
//  {title}
// </p>
//       </div>

//     </div>
//   )
// }

// export default ChannelCard

import React from 'react';
import Image from "next/image";

const ChannelCard = ({ img, title }) => {
  return (
    <div className="w-full max-w-sm rounded-lg shadow-md overflow-hidden bg-white hover:shadow-xl transition-shadow duration-300">
      
      {/* Thumbnail */}
      <div className="relative w-full aspect-video flex justify-center items-center">
        <Image
          src={img} 
          alt={`Thumbnail for ${title}`}
          layout="fill"
          objectFit="cover"
        />

        {/* Overlay YouTube icon */}
        <div className="absolute top-2 left-2 sm:top-3 sm:left-3 md:top-16 md:left-27">
          <Image
            src="/img/Channelogo.png"
            width={50}
            height={35}
            alt="YouTube icon"
            className="w-12 h-8 sm:w-14 sm:h-10 md:w-16 md:h-12 object-contain"
          />
        </div>
      </div>

      {/* Video title */}
      <div className="p-3">
        <p className="font-workSans font-medium text-sm sm:text-base md:text-base lg:text-lg leading-5 sm:leading-6 md:leading-6 lg:leading-7 text-gray-900">
          {title}
        </p>
      </div>
    </div>
  );
};

export default ChannelCard;
