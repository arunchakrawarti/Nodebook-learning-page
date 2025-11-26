import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from 'react-icons/fa';

const Footar3 = () => {
  return (
    <div className='w-full bg-[#272a39] text-white py-12'>
      <div className='max-w-[1400px] mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        
       
        <div className='col-span-1 flex flex-col items-start'>
          {/* Logo */}
         
             <div className='mb-6'>
           
            <img src="/img/Footar.png" alt="Notebook Global Academy Logo" className='w-32 h-32  border-2 border-orange-500' />
          </div>

          {/* Address */}
          <div className='flex items-start mb-4'>
            <FaMapMarkerAlt className='text-orange-500 mr-3 mt-1 text-lg' />
            <p className='text-sm opacity-80'>A-9/8, Ansal Building, Behind Batra Cinema, Near Shriram Tea, Dr. Mukherjee Nagar, Delhi, 110009</p>
          </div>
       
          <h3 className='font-bold text-[16px] mb-2'>Counselling & Course Detail</h3>
          <div className='flex items-center mb-1'>
            <FaPhoneAlt className='text-orange-500 mr-2 text-sm' />
            <p className='text-sm opacity-80'>+91-926609 54441</p>
          </div>
          <div className='flex items-center mb-4'>
            <FaPhoneAlt className='text-orange-500 mr-2 text-sm' />
            <p className='text-sm opacity-80'>+91-92660 94433</p>
          </div>

          {/* Course Related Query */}
          <h3 className='font-bold text-[16px] mb-2'>Course Related Query</h3>
          <div className='flex items-center mb-6'>
            <FaEnvelope className='text-orange-500 mr-2 text-sm' />
            <p className='text-sm opacity-80'>Connect@notesbookglobalacademy.com</p>
          </div>

          {/* Follow Us On: */}
          <h3 className='font-bold text-[16px] mb-3'>Follow Us On:</h3>
          <div className='flex space-x-4'>
            <a href="#" className='p-2 bg-gray-700 rounded-full hover:bg-orange-500 transition-colors'>
              <FaFacebookF className='text-lg' />
            </a>
            <a href="#" className='p-2 bg-gray-700 rounded-full hover:bg-orange-500 transition-colors'>
              <FaInstagram className='text-lg' />
            </a>
            <a href="#" className='p-2 bg-gray-700 rounded-full hover:bg-orange-500 transition-colors'>
              <FaLinkedinIn className='text-lg' />
            </a>
            <a href="#" className='p-2 bg-gray-700 rounded-full hover:bg-orange-500 transition-colors'>
              <FaWhatsapp className='text-lg' />
            </a>
            <a href="#" className='p-2 bg-gray-700 rounded-full hover:bg-orange-500 transition-colors'>
              <FaYoutube className='text-lg' />
            </a>
          </div>
        </div>

        {/* Right Section: Stay Updated, Suggestions */}
        <div className='col-span-1 md:col-span-2 lg:col-span-2 flex flex-col justify-between'>
          {/* Stay Updated */}
          <div className='mb-8'>
            <h3 className='font-bold text-[18px] mb-3'>Stay Updated</h3>
            <p className='text-sm opacity-80 mb-4'>Join our newsletter for the latest updates and exclusive Products.</p>
            <div className='flex flex-col sm:flex-row gap-4'>
              <input 
                type="email" 
                placeholder="Your Email Here" 
                className='flex-grow p-3 rounded-md  border  focus:outline-none focus:border-orange-500 text-sm' 
              />
              <button className='px-6 py-3 border  rounded-md font-semibold  transition-colors'>Subscribe</button>
            </div>
            <p className='text-xs opacity-60 mt-3'>By Subscribe You Agreed To Our Privacy Policy And Consent To Recieve Updates.</p>
          </div>

          {/* Your Suggestion Matters! */}
          <div>
            <h3 className='font-bold text-[18px] mb-3'>Your Suggestion Matters!</h3>
            <p className='text-sm opacity-80 mb-4'>Suggest new courses, subjects, or features you'd love to see on Notebook Global Academy. Together, let's make learning sm</p>
            <textarea 
              placeholder="Write Something.." 
              rows="5" 
              className='w-full p-3 rounded-md border  focus:outline-none focus:border-orange-500 text-sm mb-4'
            ></textarea>
            <button className='px-6 py-3 border rounded-md font-semibold  transition-colors'>Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footar3;