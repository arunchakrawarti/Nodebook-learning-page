"use client";
import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#272a39] text-white w-full overflow-x-hidden">
      {/* MAIN CONTAINER */}
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-10 lg:px-12 xl:px-8 py-12 md:py-14">
        {/* 10 COLUMN GRID (TOP SECTION) */}
        <div
          className="
            grid 
            grid-cols-1
            min-[450px]:grid-cols-2
            sm:grid-cols-3 
            md:grid-cols-4 
            lg:grid-cols-5 
            xl:grid-cols-5 
            gap-y-10 gap-x-6 md:gap-x-8 lg:gap-y-12
            pb-12 
            border-b 
            border-gray-600
          "
        >
          {/* COLUMN 1 */}
          <div>
            <p className="text-[#FFA586] font-semibold mb-4 text-[17px]">
              Quick Links
            </p>
            <ul className="space-y-2 text-sm opacity-80 leading-[18px]">
              <li>All Entrance Course</li>
              <li>UPSC & State PSC Syllabus</li>
              <li>One Day Exam Syllabus</li>
              <li>One Day Exam Course</li>
              <li>Admission Enquiry Form</li>
              <li>Open Test</li>
              <li>Study Materials</li>
            </ul>
          </div>

          {/* COLUMN 2 */}
          <div>
            <p className="text-[#FFA586] font-semibold mb-4 text-[17px]">
              N.B.G.A
            </p>
            <ul className="space-y-2 text-sm opacity-80">
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

          {/* COLUMN 3 */}
          <div>
            <p className="text-[#FFA586] font-semibold mb-4 text-[17px]">
              Student Choice
            </p>
            <ul className="space-y-2 text-sm opacity-80">
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

          {/* COLUMN 4 */}
          <div>
            <p className="text-[#FFA586] font-semibold mb-4 text-[17px]">
              Popular Test Series
            </p>
            <ul className="space-y-2 text-sm opacity-80">
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

          {/* COLUMN 5 */}
          <div>
            <p className="text-[#FFA586] font-semibold mb-4 text-[17px]">
              UPSC
            </p>
            <ul className="space-y-2 text-sm opacity-80">
              <li>UPSC Online (Hindi)</li>
              <li>UPSC Online (English)</li>
              <li>UPSC Offline (Hindi)</li>
              <li>UPSC Offline (English)</li>
              <li>CSAT Online</li>
              <li>CSAT Offline</li>
              <li>Optional Courses</li>
              <li>Current Affairs</li>
              <li>Test Series</li>
              <li>UPSC GS Course</li>
              <li>UPSC Foundation</li>
              <li>PYQ (Hindi/English)</li>
            </ul>
          </div>

          {/* COLUMN 6 */}
          <div>
            <p className="text-[#FFA586] font-semibold mb-4 text-[17px]">
              Centre
            </p>
            <ul className="space-y-2 text-sm opacity-80">
              <li>Mukherjee Nagar</li>
              <li>Karol Bagh</li>
              <li>Prayagraj</li>
              <li>Patna</li>
              <li>Dehradun</li>
              <li>View All</li>
            </ul>
          </div>

          {/* COLUMN 7 */}
          <div>
            <p className="text-[#FFA586] font-semibold mb-4 text-[17px]">
              NBGA Courses
            </p>
            <ul className="space-y-2 text-sm opacity-80">
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

          {/* COLUMN 8 */}
          <div>
            <p className="text-[#FFA586] font-semibold mb-4 text-[17px]">
              Popular Test Series
            </p>
            <ul className="space-y-2 text-sm opacity-80">
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

          {/* COLUMN 9 */}
          <div>
            <p className="text-[#FFA586] font-semibold mb-4 text-[17px]">
              N.B.G.A Store
            </p>
            <ul className="space-y-2 text-sm opacity-80">
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

          {/* COLUMN 10 */}
          <div>
            <p className="text-[#FFA586] font-semibold mb-4 text-[17px]">
              State PCS
            </p>
            <ul className="space-y-2 text-sm opacity-80">
              <li>BPSC Online</li>
              <li>BPSC Offline</li>
              <li>UPPSC Online</li>
              <li>UPPSC Offline</li>
              <li>UKPSC Online</li>
              <li>UKPSC Offline</li>
              <li>MPPSC Online</li>
              <li>MPPSC Offline</li>
              <li>UP RO/ARO</li>
              <li>PYQ (Bilingual)</li>
            </ul>
          </div>
        </div>

        {/* MIDDLE SECTION */}
        <div className="flex flex-col md:flex-row justify-between gap-y-10 gap-x-8 md:gap-12 pt-10 md:pt-12">
          {/* LEFT SIDE */}
          <div className="w-full md:w-3/5">
            {/* Logo + Address */}
            <div className="flex flex-col sm:flex-row gap-6 mb-8">
              <img
                src="/img/Footar.png"
                className="w-24 h-24 border-2 border-orange-500 shrink-0"
                alt="NBGA Logo"
              />

              <div className="flex items-start">
                <FaMapMarkerAlt className="text-orange-500 mt-1 mr-3 text-lg shrink-0" />
                <p className="opacity-80 text-sm leading-[20px]">
                  A-9/8, Ansal Building, Behind Batra Cinema, Near Shriram Tea,
                  Dr. Mukherjee Nagar, Delhi 110009
                </p>
              </div>
            </div>

            {/* Contact */}
            <h3 className="font-semibold mb-2">Counselling & Course Detail</h3>
            <p className="flex items-center gap-2 opacity-80 mb-1">
              <FaPhoneAlt className="text-orange-500 shrink-0" /> +91-92660954441
            </p>

            <p className="flex items-center gap-2 opacity-80 mb-4">
              <FaPhoneAlt className="text-orange-500 shrink-0" /> +91-9266094433
            </p>

            {/* Email */}
            <h3 className="font-semibold mb-2">Course Related Query</h3>
            <p className="flex items-center gap-2 opacity-80 mb-5 break-words">
              <FaEnvelope className="text-orange-500 shrink-0 mt-1 self-start" />
              <span>Connect@notesbookglobalacademy.com</span>
            </p>

            {/* Social Icons */}
            <h3 className="font-semibold mb-3">Follow Us On:</h3>
            <div className="flex flex-wrap gap-3">
              {[
                FaFacebookF,
                FaInstagram,
                FaXTwitter,
                FaWhatsapp,
                FaYoutube,
              ].map((Icon, idx) => (
                <div
                  key={idx}
                  className="p-2 bg-gray-700 rounded-full hover:bg-orange-500 cursor-pointer transition"
                >
                  <Icon />
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div className="w-full md:w-2/5">
            {/* Newsletter */}
            <div className="mb-10">
              <h3 className="font-bold text-[18px] mb-2">Stay Updated</h3>
              <p className="opacity-80 text-sm mb-4">
                Join our newsletter for latest update and exclusive products.
              </p>

              {/* FIX: sm:flex-row को lg:flex-row में बदला ताकि 819px पर ये स्टैक्ड रहें */}
              <div className="flex flex-col lg:flex-row gap-3 lg:gap-4">
                <input
                  type="email"
                  placeholder="Your Email Here"
                  // FIX: sm: क्लास हटाकर lg: क्लास लगाई
                  className="
                    w-full lg:w-auto lg:flex-1 
                    px-4 py-3 
                    bg-transparent 
                    border border-gray-600 
                    rounded-md 
                    text-sm 
                    focus:outline-none 
                    focus:border-orange-500
                  "
                />

                <button
                  // FIX: sm:w-auto हटाकर lg:w-auto लगाई
                  className="
                    w-full lg:w-auto
                    px-8 md:px-10 py-3 
                    rounded-md 
                    border border-gray-600 
                    hover:bg-orange-500 
                    hover:border-orange-500 
                    transition
                    text-center
                  "
                >
                  Subscribe
                </button>
              </div>

              <p className="text-xs opacity-60 mt-3">
                By subscribing you agree to our privacy policy.
              </p>
            </div>

            {/* Suggestion */}
            <div>
              <h3 className="font-bold text-[18px] mb-2">
                Your Suggestion Matters!
              </h3>
              <p className="opacity-80 text-sm mb-4">
                Suggest new courses, subjects or features you'd love to see.
              </p>

              <textarea
                rows="4"
                placeholder="Write Something.."
                className="
                  w-full 
                  p-3 
                  bg-transparent 
                  border border-gray-600 
                  rounded-md 
                  text-sm 
                  focus:outline-none 
                  focus:border-orange-500 
                  mb-4
                  resize-y
                "
              ></textarea>

              <button
                className="
                  w-full md:w-auto
                  px-10 py-3 
                  rounded-md 
                  text-white 
                  bg-[linear-gradient(96.18deg,#C83300_-2.22%,#E35545_48.89%,#FFA98B_100%)]
                  hover:opacity-90 transition
                "
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="bg-[#1e2029] text-xs text-center py-4 px-4 opacity-60">
        © {new Date().getFullYear()} Notebook Global Academy. All Rights
        Reserved.
      </div>
    </footer>
  );
};

export default Footer;