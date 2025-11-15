import React from 'react';

const Thankyou = () => {
  return (
    <div className="min-h-screen bg-blue-600 flex flex-col items-center justify-center p-4 text-white text-center">
      <div className="w-full max-w-4xl flex flex-col items-center justify-center space-y-6 md:space-y-8">
        
        <h1 className="text-6xl md:text-9xl lg:text-[120px] font-extrabold tracking-widest uppercase leading-none">
          THANK YOU
        </h1>

        <p className="text-3xl md:text-5xl italic font-serif" style={{ fontFamily: 'Cursive, sans-serif', fontWeight: 'lighter' }}>
          for your purchase
        </p>

        <p className="text-sm md:text-base max-w-3xl leading-relaxed font-light mt-4 px-4 md:px-0">
          You can now access your course anytime, anywhere by simply downloading our mobile app. Once you log in with your registered email or phone number, your purchased course will automatically appear in your dashboard. Start learning on the go, watch lessons, and track your progress easily from your phone. Download the app now from the Play Store or App Store and continue your learning journey.
        </p>

        <p className="text-3xl md:text-5xl italic font-serif" style={{ fontFamily: 'Cursive, sans-serif', fontWeight: 'lighter' }}>
          have a nice day
        </p>

        <div className="flex flex-col md:flex-row gap-4 md:gap-8 mt-8 w-full max-w-md">
          <button 
            className="w-full md:w-1/2 px-4 py-3 bg-white text-blue-600 font-medium text-lg md:text-xl rounded-lg shadow-lg hover:bg-gray-100 transition duration-200"
          >
            Continue To Website
          </button>

          <button 
            className="w-full md:w-1/2 px-4 py-3 bg-white text-blue-600 font-medium text-lg md:text-xl rounded-lg shadow-lg border-2 border-blue-600 hover:bg-gray-100 transition duration-200"
          >
            Download App
          </button>
        </div>

      </div>
    </div>
  );
};

export default Thankyou;
