import React from 'react';
import ChannelCard from '../../atom/ChannelCard'; 

const youtubeVideosData = [
  { title: "Geography", img: "/img/Channel.png" },
  { title: "Science Biology", img: "/img/Channel1.png" },
  { title: "Science", img: "/img/Channel2.png" },
  { title: "Geography India's Mapping", img: "/img/Channel3.png" },
  { title: "08 Current MCQS", img: "/img/Channel4.png" },
  { title: "Science Biology", img: "/img/Channel5.png" },
  { title: "Agni Prime Missile Test", img: "/img/Channel6.png" },
  { title: "Indian Techie Shot", img: "/img/Channel7.png" },
];

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
          {youtubeVideosData.map((video, index) => (
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
