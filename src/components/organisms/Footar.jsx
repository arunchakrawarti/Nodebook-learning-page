import React from 'react';
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube
} from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const Footar = () => {
  return (
    <footer id='footar' className="w-full bg-[#272a39] text-white">
      
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 py-10">

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-10 gap-x-6 pb-10 border-b border-gray-600">

          
          <div>
            <p className="font-montserrat font-bold text-[18px] mb-4 text-[#FFA586]">Quick Links</p>
            <ul className="space-y-2 opacity-80 text-sm leading-[18px]">
              <li>All Entrance Course</li>
              <li>UPSC & State PSC Syllabus</li>
              <li>One Day Exam Syllabus</li>
              <li>One Day Exam Course</li>
              <li>Admission Enquiry Form</li>
              <li>Open Test</li>
              <li>Study Materials</li>
            </ul>
          </div>

          {/* NBGA */}
          <div>
            <p className="font-montserrat font-bold text-[18px] text-[#FFA586] mb-4">N.B.G.A</p>
            <ul className="space-y-2 opacity-80 text-sm leading-[18px]">
              <li>About Us</li>
              <li>Careers</li>
              <li>Blog</li>
              <li>Gallery</li>
              <li>Contact Us</li>
              <li>Current Affairs</li>
              <li>Open Test</li>
              <li>Study Materials</li>
            </ul>
          </div>

          {/* Student Choice */}
          <div>
            <p className="font-montserrat font-bold text-[18px] mb-4 text-[#FFA586]">Student Choice</p>
            <ul className="space-y-2 opacity-80 text-sm leading-[18px]">
              <li>N.B.G.A Courses</li>
              <li>UPSC & State PSC</li>
              <li>State Exams</li>
              <li>NEET | JEE | CUET | Boards</li>
              <li>Defence Exams</li>
              <li>Police Exams</li>
              <li>SSC Exams</li>
              <li>Foundation Courses</li>
              <li>Railway Exams</li>
              <li>Teaching Exams</li>
              <li>Banking Exams</li>
              <li>Engineering Exams</li>
            </ul>
          </div>

          {/* Popular Test Series */}
          <div>
            <p className="font-montserrat font-bold text-[18px] mb-4 text-[#FFA586]">Popular Test Series</p>
            <ul className="space-y-2 opacity-80 text-sm leading-[18px]">
              <li>UPSC Test Series</li>
              <li>State PCS (Hindi/English)</li>
              <li>State Exam Test Series</li>
              <li>Defense Exams Test Series</li>
              <li>SSC Exams Test Series</li>
              <li>Railway Exam Test Series</li>
              <li>Banking Exam Test Series</li>
              <li>CUET/JEE/NEET Test Series</li>
              <li>Teaching Exam Test Series</li>
              <li>CLAT Exam Test Series</li>
            </ul>
          </div>

          {/* UPSC */}
          <div>
            <p className="font-montserrat font-bold text-[18px] mb-4 text-[#FFA586]">UPSC</p>
            <ul className="space-y-2 opacity-80 text-sm leading-[18px]">
              <li>UPSC Online (Hindi)</li>
              <li>UPSC Online (English)</li>
              <li>UPSC Offline (Hindi)</li>
              <li>UPSC Offline (English)</li>
              <li>CSAT Online (Hindi/English)</li>
              <li>CSAT Offline (Hindi/English)</li>
              <li>Optional Courses</li>
              <li>Current Affairs</li>
              <li>Test Series</li>
              <li>UPSC GS Course</li>
              <li>UPSC Foundation</li>
              <li>PYQ (Hindi/English)</li>
            </ul>
          </div>

        </div>

        {/* ---------------- SECOND GRID ---------------- */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-y-10 gap-x-6 py-10 border-b border-gray-600">

          {/* Centers */}
          <div>
            <p className="font-montserrat font-bold text-[18px] mb-4 text-[#FFA586]">Centre</p>
            <ul className="space-y-2 opacity-80 text-sm leading-[18px]">
              <li>Mukherjee Nagar</li>
              <li>Karol Bagh</li>
              <li>Prayagraj</li>
              <li>Patna</li>
              <li>Dehradun</li>
              <li>View All</li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <p className="font-montserrat font-bold text-[18px] mb-4 text-[#FFA586]">NBGA Courses</p>
            <ul className="space-y-2 opacity-80 text-sm leading-[18px]">
              <li>Math</li>
              <li>Reasoning</li>
              <li>Physics</li>
              <li>Chemistry</li>
              <li>Biology</li>
              <li>Polity</li>
              <li>History</li>
              <li>Geography</li>
              <li>Economics</li>
              <li>Map</li>
            </ul>
          </div>

          {/* Popular Test Series */}
          <div>
            <p className="font-montserrat font-bold text-[18px] mb-4 text-[#FFA586]">Popular Test Series</p>
            <ul className="space-y-2 opacity-80 text-sm leading-[18px]">
              <li>BPSSC</li>
              <li>BSSC (10+2 Level)</li>
              <li>Bihar Daroga</li>
              <li>Bihar School Exams</li>
              <li>BPSC TRE 4.0 (Class 1-5)</li>
              <li>BPSC TRE 4.0 (Class 6-10)</li>
              <li>UPSSSC JE</li>
              <li>UP Lekhpal</li>
              <li>UP Police</li>
              <li>UP Daroga</li>
              <li>UP Teachers</li>
              <li>SSC CGL</li>
              <li>SSC MTS</li>
              <li>NDA</li>
              <li>CDS</li>
              <li>CAPF</li>
            </ul>
          </div>

          {/* Store */}
          <div>
            <p className="font-montserrat font-bold text-[18px] text-[#FFA586] mb-4">N.B.G.A Store</p>
            <ul className="space-y-2 opacity-80 text-sm leading-[18px]">
              <li>N.B.G.A Books</li>
              <li>UPSC Current Affairs</li>
              <li>State PSC Current Affairs</li>
              <li>Magazines</li>
              <li>NDA / CDS / CLAT / EPFO</li>
              <li>UPSC & State PCS</li>
              <li>One Day Book</li>
              <li>CUET / NEET / JEE</li>
              <li>UP Police</li>
              <li>UP Daroga</li>
              <li>UP Teachers</li>
              <li>SSC CGL</li>
              <li>SSC MTS</li>
              <li>NDA</li>
              <li>CDS</li>
              <li>CAPF</li>
            </ul>
          </div>

          {/* State PCS */}
          <div>
            <p className="font-montserrat font-bold text-[18px] mb-4 text-[#FFA586]">State PCS</p>
            <ul className="space-y-2 opacity-80 text-sm leading-[18px]">
              <li>BPSC Online (Bilingual)</li>
              <li>BPSC Offline (Bilingual)</li>
              <li>UPSC Test Series</li>
              <li>UPPSC Online</li>
              <li>UPPSC Offline</li>
              <li>UPPSC Test Series</li>
              <li>UKPSC Online</li>
              <li>UKPSC Offline</li>
              <li>UKPSC Test Series</li>
              <li>MPPSC Online</li>
              <li>MPPSC Offline</li>
              <li>UPRO / ARO Online</li>
              <li>PYQ (Bilingual)</li>
            </ul>
          </div>

        </div>

      
        <div className="flex flex-col md:flex-row justify-between gap-12 pt-10">

          {/* LEFT SIDE */}
          <div className="w-full md:w-3/5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 mb-6">
              <img src="/img/Footar.png" className="w-24 h-24 border-2 border-orange-500" />

              <div className="flex items-start">
                <FaMapMarkerAlt className="text-orange-500 mt-1 mr-2 text-lg" />
                <p className="text-sm opacity-80 leading-[20px]">
                  A-9/8, Ansal Building, Behind Batra Cinema, Near Shriram Tea,
                  Dr. Mukherjee Nagar, Delhi 110009
                </p>
              </div>
            </div>

            <h3 className="font-bold text-[16px] mb-2">Counselling & Course Detail</h3>
            <p className="flex items-center gap-2 text-sm opacity-80 mb-1">
              <FaPhoneAlt className="text-orange-500" /> +91-92660954441
            </p>
            <p className="flex items-center gap-2 text-sm opacity-80 mb-4">
              <FaPhoneAlt className="text-orange-500" /> +91-9266094433
            </p>

            <h3 className="font-bold text-[16px] mb-2">Course Related Query</h3>
            <p className="flex items-center gap-2 text-sm opacity-80 mb-6">
              <FaEnvelope className="text-orange-500" /> Connect@notesbookglobalacademy.com
            </p>

            <h3 className="font-bold text-[16px] mb-3">Follow Us On:</h3>
            <div className="flex gap-3">
              <div className="p-2 bg-gray-700 rounded-full hover:bg-orange-500 cursor-pointer"><FaFacebookF /></div>
              <div className="p-2 bg-gray-700 rounded-full hover:bg-orange-500 cursor-pointer"><FaInstagram /></div>
              <div className="p-2 bg-gray-700 rounded-full hover:bg-orange-500 cursor-pointer"><FaXTwitter /></div>
              <div className="p-2 bg-gray-700 rounded-full hover:bg-orange-500 cursor-pointer"><FaWhatsapp /></div>
              <div className="p-2 bg-gray-700 rounded-full hover:bg-orange-500 cursor-pointer"><FaYoutube /></div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full md:w-2/5 flex flex-col justify-between">

            {/* Newsletter */}
            <div className="mb-8">
              <h3 className="font-bold text-[18px] mb-3">Stay Updated</h3>
              <p className="text-sm opacity-80 mb-4">Join our newsletter for latest update and exclusive products.</p>

              <div className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Your Email Here"
                  className="flex-1 p-3 rounded-md border border-gray-600 bg-transparent text-sm focus:outline-none focus:border-orange-500"
                />
                <button className="px-10 py-3 border rounded-md hover:bg-orange-500 hover:border-orange-500 transition">
                  Subscribe
                </button>
              </div>

              <p className="text-xs opacity-60 mt-3">By subscribing you agree to our privacy policy.</p>
            </div>

            {/* Suggestions */}
            <div>
              <h3 className="font-bold text-[18px] mb-3">Your Suggestion Matters!</h3>
              <p className="text-sm opacity-80 mb-4">Suggest new courses, subjects or features you'd love to see.</p>

              <textarea
                rows="5"
                placeholder="Write Something.."
                className="w-full p-3 rounded-md border border-gray-600 bg-transparent text-sm focus:outline-none focus:border-orange-500 mb-4"
              ></textarea>

              <button className="px-10 py-3 border rounded-md bg-[linear-gradient(96.18deg,#C83300_-2.22%,#E35545_48.89%,#FFA98B_100%)] transition">
                Submit
              </button>
            </div>

          </div>

        </div>

      </div>

      {/* Bottom Bar */}
      <div className="w-full bg-[#1e2029] text-center text-xs py-3 opacity-60">
        © {new Date().getFullYear()} Notebook Global Academy. All Rights Reserved.
      </div>

    </footer>
  );
};

export default Footar;


