import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaInstagram, FaLinkedinIn, FaWhatsapp, FaYoutube } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6'; 

const Footar = () => {
  return (
    <footer className='w-full bg-[#272a39] text-white'>
      <div className='max-w-[1400px] mx-auto px-4 py-8'>

       
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-4 pb-8 border-b border-gray-700'>
          
         
          <div className='col-span-1'>
            <ul>
                <p className='font-montserrat font-bold text-[18px] mb-4'>Quick Links</p>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>All Entrance Course</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>UPSC & State PSC Syllabus</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>One Day Exam Syllabus</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>One Day Exam Course</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Admission Enquiry Form </li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Open Test</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Study Materials</li>
            </ul>
          </div>

         
          <div className='col-span-1'>
            <ul>
                <p className='font-montserrat font-bold text-[18px] mb-4'>N.B.G.A</p>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>About Us</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Carrers</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Blog</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Gallery</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Contact Us</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Current Affairs</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Open Test</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Study Materials</li>
            </ul>
          </div>
          
          
          <div className='col-span-1'>
            <ul>
                <p className='font-montserrat font-bold text-[18px] mb-4'>Student Choice</p>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>N.B.G.A Courses</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>UPSC & State PSC</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>State Exams</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>NEET | JEE | CUET | Boards</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Defence Exams</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Police Exams</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>SSC Exams</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Foundation Courses</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Railway Exams</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Teaching Exams</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Banking Exams</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Engineering Exams</li>
            </ul>
          </div>
          
         
          <div className='col-span-1'>
            <ul>
                <p className='font-montserrat font-bold text-[18px] mb-4'>Popular Test Series</p>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>UPSC Test Series</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>State PCS (Hindi/English)</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>State Exam Test Series</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Defense Exams Test Series</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>SSC Exams Test Series</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Railway Exam Test Series</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Banking Exam Test Series</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>CUET/JEE/NEET Test Series</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Teaching Exam Test Series</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>CLAT Exam Test Series</li>
            </ul>
          </div>

          {/* UPSC Column */}
          <div className='col-span-1'>
            <ul>
                <p className='font-montserrat font-bold text-[18px] mb-4'>UPSC</p>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>UPSC Online (Hindi)</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>UPSC Online (English)</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>UPSC Offline (Hindi)</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>UPSC Offline (English)</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>CSAT Online (Hindi/English)</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>CSAT Offline (Hindi/English)</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Optional Courses (Hindi/English)</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Current Affairs (Hindi/English)</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Test Series</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>UPSC GS Course (Hindi/English)</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>UPSC Foundation (Hindi/English)</li>
                <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>PYQ (Hindi/English)</li>
            </ul>
          </div>

        </div>

      
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-y-8 gap-x-4 py-8 border-b border-gray-700'>
            
            {/* Centre Column */}
            <div className='col-span-1'>
                <ul>
                    <p className='font-montserrat font-bold text-[18px] mb-4'>Centre</p>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Mukherjee Nagar</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Karol Bagh</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Prayagraj</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Patna</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Dehradun</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>View All</li>
                </ul>
            </div>

           
            <div className='col-span-1'>
                <ul>
                    <p className='font-montserrat font-bold text-[18px] mb-4'>NBGA Courses</p>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Math</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Reasoning</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Physics</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Chemistry</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Biology</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Polity</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>History</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Geography</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Economics</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Map</li>
                </ul>
            </div>
            
           
            <div className='col-span-1'>
                <ul>
                    <p className='font-montserrat font-bold text-[18px] mb-4'>Popular Test Series</p>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>BPSSC</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>BSSC (10+2 Level)</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Bihar Daroga</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Bihar School Exams</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>BPSC TRE 4.0 (Class 1-5)</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>BPSC TRE 4.0 (Class 6-10)</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>UPSSSC Je</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>UP Lekhpal</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>UP Police</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>UP Daroga</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>UP Teachers</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>SSC CGL</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>SSC MTS</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>NDA</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>CDS</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>CAPF</li>
                </ul>
            </div>
            
           
            <div className='col-span-1'>
                <ul>
                    <p className='font-montserrat font-bold text-[18px] mb-4'>N.B.G.A Store</p>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>N.B.G.A Books</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>UPSC Current Affairs</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>State PSC Current Affairs</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>Magazines</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>NDA/ CDS/ CLAT/ EPFO</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>UPSC & State PCS</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>One Day Book</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>CUET/ NEET/ JEE</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>UP Police</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>UP Daroga</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>UP Teachers</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>SSC CGL</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>SSC MTS</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>NDA</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>CDS</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>CAPF</li>
                </ul>
            </div>

          
            <div className='col-span-1'>
                <ul>
                    <p className='font-montserrat font-bold text-[18px] mb-4'>State PCS</p>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>BPSC Online (Bilingual)</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>BPSC Offline (Bilingual)</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>UPSC Test Series (Bilingual)</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>UPPSC Online (Bilingual)</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>UPPSC Offline (Bilingual)</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>UPPSC Test Series (Bilingual)</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>UKPSC Online (Bilingual)</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>UKPSC Offline (Bilingual)</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>UKPSC Test Series (Bilingual)</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>MPPSC Online (Bilingual)</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>MPPSC Offline (Bilingual)</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>UPRO/ ARO Online (Bilingual)</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>UPRO/ ARO Online (Bilingual)</li>
                    <li className='text-sm mb-2 opacity-80 hover:opacity-100 cursor-pointer'>PYQ (Bilingual)</li>
                </ul>
            </div>
        </div>

       
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8'>
          
        
          <div className='lg:col-span-1 flex flex-col items-start'>
            {/* Logo */}
            <div className='mb-6'>
             
              <img src="/img/Footar.png" alt="Notebook Global Academy Logo" className='w-28 h-28  border-2 border-orange-500' />
            </div>

           
            <div className='flex items-start mb-4'>
              <FaMapMarkerAlt className='text-orange-500 mr-3 mt-1 text-lg' />
              <p className='text-sm opacity-80'>A-9/8, Ansal Building, Behind Batra Cinema, Near Shriram Tea, Dr. Mukherjee Nagar, Delhi, 110009</p>
            </div>
          
             <div className='flex items-start mb-6'>
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
            <div className='flex space-x-3'>
              <a href="#" className='p-2 bg-gray-700 rounded-full hover:bg-orange-500 transition-colors'>
                <FaFacebookF className='text-lg' />
              </a>
              <a href="#" className='p-2 bg-gray-700 rounded-full hover:bg-orange-500 transition-colors'>
                <FaInstagram className='text-lg' />
              </a>
              <a href="#" className='p-2 bg-gray-700 rounded-full hover:bg-orange-500 transition-colors'>
                <FaXTwitter className='text-lg' /> {/* Using FaXTwitter for the 'X' icon */}
              </a>
              <a href="#" className='p-2 bg-gray-700 rounded-full hover:bg-orange-500 transition-colors'>
                <FaWhatsapp className='text-lg' />
              </a>
              <a href="#" className='p-2 bg-gray-700 rounded-full hover:bg-orange-500 transition-colors'>
                <FaYoutube className='text-lg' />
              </a>
            </div>
          </div>

          
          <div className='lg:col-span-2 flex flex-col justify-between'>
            {/* Stay Updated */}
            <div className='mb-8'>
              <h3 className='font-bold text-[18px] mb-3'>Stay Updated</h3>
              <p className='text-sm opacity-80 mb-4'>Join our newsletter for the latest updates and exclusive Products.</p>
              <div className='flex flex-col sm:flex-row gap-4'>
                <input 
                  type="email" 
                  placeholder="Your Email Here" 
                  className='flex-grow p-3 rounded-md  border  focus:outline-none focus:border-orange-500 text-sm text-white' 
                />
                <button className='px-25 py-3  rounded-md border font-semibold  transition-colors'>Subscribe</button>
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
                className='w-full p-3 rounded-md  border  focus:outline-none focus:border-orange-500 text-sm text-white mb-4'
              ></textarea>
              <button className='px-6 py-3 border rounded-md font-semibold transition-colors'>Submit</button>
            </div>
          </div>

        </div>
      </div>
     
       <div className='w-full bg-[#1e2029] text-center text-xs py-3 opacity-60'>
            <p>&copy; {new Date().getFullYear()} Notebook Global Academy. All Rights Reserved.</p>
        </div>
    </footer>
  );
}

export default Footar;