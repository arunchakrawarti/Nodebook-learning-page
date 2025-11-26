import React from "react";
import ExploreCard from "../../atom/ExploreCard";
import Cardicon from "../../atom/Cardicon";

const OfflineCentersSection = () => {
  const ExploreCardData = [
    {
      title: "Head Office - Delhi",
      address:
        "A-9/8, Ansal Building, Behind Batra Cinema, Near Shriram Tea, Dr. Mukherjee Nagar, Delhi, 110009",
      phone: "+91-926609 54441",
      email: "Connect@notesbookglobalacademy.com",
      mapLink: "Google Map",
      iconSrc: "/img/Explore.png",
      bgColorClass: "bg-indigo-50",
    },
    {
      title: "Prayagraj",
      address:
        "5 Tashkent Marg, Ganga Bhavan, Near Patrika Chauraha, Civil Lines, Prayagraj, UP - 211001 Landmark: Shri Krishna Dham Colony Entry Gate",
      phone: "+91-52660 94433",
      email: "Connect@notesbookglobalacademy.com",
      mapLink: "Google Map",
      iconSrc: "/img/Explore1.png",
      bgColorClass: "bg-orange-50",
    },
  ];

  const CardiconData = [
    { title: "Karol Bagh", img: "/img/Our1.png", bgColorClass: "bg-amber-50" },
    { title: "Patna", img: "/img/Our2.png", bgColorClass: "bg-green-50" },
    { title: "Lucknow", img: "/img/Our3.png", bgColorClass: "bg-orange-50" },
    { title: "Dehradun", img: "/img/Our4.png", bgColorClass: "bg-pink-50" },
  ];

  return (
    <div className="relative pt-16 pb-32 px-4 min-h-screen">
      
     
      <div 
        className="absolute inset-0 z-0"
        style={{
          
          backgroundImage: `url('/img/Background.png')`,
          backgroundSize: 'cover',  
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat', 
          backgroundColor: '#F5F6FF',
        }}
      />

     
      <div className="relative z-10 max-w-screen-xl mx-auto w-full">
        
        <h3 className="font-montserrat font-bold text-2xl sm:text-3xl mb-12 text-gray-900 text-center">
          Explore Offline Centers
        </h3>

       
        <div className="relative flex flex-col lg:flex-row justify-center items-center lg:space-x-8 space-y-8 lg:space-y-0">
          
          <ExploreCard {...ExploreCardData[0]} />

         
          <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-10 flex justify-center items-center pointer-events-none">
           
            <div className="w-full h-1 border-t-4 border-dashed border-blue-400"></div>
          </div>
          
          <ExploreCard {...ExploreCardData[1]} />
        </div>

        {/* Middle Section Title */}
        <h3 className="font-montserrat font-bold text-2xl sm:text-3xl text-center mt-20 sm:mt-24 mb-10 text-gray-900">
          Our Others Centers
        </h3>

       
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 justify-items-center">
          {CardiconData.map((card, index) => (
            <Cardicon key={index} {...card} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default OfflineCentersSection;