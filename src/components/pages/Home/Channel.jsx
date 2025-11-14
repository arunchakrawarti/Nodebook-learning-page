import React from 'react';
import ChannelCard from '../../atom/ChannelCard';
import Youtube from '../../../../public/db/Youtube.json';

const Channel = () => {
  return (
    <div className="py-12 sm:py-16 px-4 sm:px-6 md:px-12 bg-gray-50">
      <div className="max-w-screen-2xl mx-auto w-full">

        {/* Section Title */}
        <h2 className="font-montserrat font-bold text-xl sm:text-2xl md:text-3xl lg:text-4xl mb-6 sm:mb-8 md:mb-10 text-gray-900 text-center sm:text-left">
          Explore Our Youtube Channels
        </h2>

        {/* Video Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 xs:gap-4 sm:gap-6 md:gap-8 lg:gap-10">
          {Youtube.map((video, index) => (
            <ChannelCard
              key={index}
              img={video.img}
              title={video.title}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Channel;
