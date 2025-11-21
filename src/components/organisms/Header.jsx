// "use client";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import { Bell } from "lucide-react";
// import { RiArrowDropDownLine } from "react-icons/ri";
// import  MainSidebar from "./MainSidebar"

// const Header = () => {
//   return (
//     <header className="w-full h-[100px] bg-white shadow-sm fixed z-50 flex items-center">
//       <div className="max-w-[1440px] w-full mx-auto flex justify-between items-center px-6">

//         {/* LEFT SIDE */}
//         <div className="flex w-[265px] items-center gap-6">
//           <Image
//             src="/img/Notebook.png"
//             height={80}
//             width={70}
//             alt="Logo"
//             className="cursor-pointer"
//           />

//           <button className="hidden lg:flex px-3 py-1.5 border border-gray-300 rounded-md font-semibold text-[#003566] hover:bg-gray-100 items-center gap-1 text-sm">
//             All Exams
//             <RiArrowDropDownLine className="text-xl" />
//           </button>
//           <MainSidebar/>
//         </div>

//         {/* RIGHT SIDE */}
//         <div className="flex flex-col w-[1000px] justify-center">

//           {/* ROW 1 */}
//           <div className="flex items-center justify-between w-full">

//             {/* Search */}
//             <div className="hidden lg:flex flex-1 max-w-[350px] items-center border border-gray-300 rounded-full bg-gray-50 gap-2 px-3 py-1.5">
//               <Image src="/img/search.png" height={18} width={18} alt="Search" />
//               <input
//                 type="text"
//                 placeholder="What do you want to learn"
//                 className="flex-1 bg-transparent outline-none text-[14px]"
//               />
//             </div>

//             {/* Store */}
//             <div className="flex items-center gap-1 cursor-pointer bg-[#F3F1FF] text-sm">
//               <Image src="/img/card12.png" height={22} width={22} alt="Store" />
//               <span className="text-[#003566] font-medium">Store</span>
//             </div>

//             {/* Phone */}
//             <div className="flex items-center gap-1 cursor-pointer bg-[#F3F1FF] text-sm">
//               <Image src="/img/phone.png" height={20} width={20} alt="Phone" />
//               <span className="text-[#003566] font-medium">92660954441</span>
//             </div>

//             {/* Bell */}
//             <div className="flex flex-col items-center leading-none">
//               <span className="text-[#003566] text-md">New</span>
//               <Bell className="w-5 h-5 text-[#003566]" />
//             </div>

//             {/* Login */}
//             <Link href='/Login'>
//             <button
//               className="px-4 py-1.5 rounded-md font-urbanist font-medium text-base leading-6 tracking-normal align-middle text-white"
//               style={{
//                 background:
//                   "linear-gradient(96.18deg, #C83300 -2.22%, #E35545 48.89%, #FFA98B 100%)",
//               }}
//             >
//               Login / Register
//             </button>
//             </Link>
//           </div>

//           {/* ROW 2 */}
//           <ul className="flex items-center justify-between font-urbanist text-[15px]  mt-5 leading-none">
//             <Link href="/"><li className="hover:text-blue-600 cursor-pointer">Home</li></Link>
//             <Link href="/course"><li className="hover:text-blue-600 cursor-pointer">Courses</li></Link>
//             <Link href="/Practices"><li className="hover:text-blue-600 cursor-pointer">Practice</li></Link>
//             <Link href="/current-affairs"><li className="hover:text-blue-600 cursor-pointer">Current Affairs</li></Link>
//             <Link href="/ask-doubt"><li className="hover:text-blue-600 cursor-pointer">Ask Doubt</li></Link>
//             <Link href="/test-series"><li className="hover:text-blue-600 cursor-pointer">Test Series</li></Link>
//             <Link href="/open-test"><li className="hover:text-blue-600 cursor-pointer">Open Test</li></Link>
//             <Link href="/study-material"><li className="hover:text-blue-600 cursor-pointer">Study Materials</li></Link>
//           </ul>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;



"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Bell } from "lucide-react";
import { RiArrowDropDownLine } from "react-icons/ri";
import MainSidebar from "./MainSidebar";

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      {/* Overlay */}
      {openSidebar && (
        <div
          onClick={() => setOpenSidebar(false)}
          className="fixed inset-0 bg-black/40 z-40"
        ></div>
      )}

      <header className="w-full h-[100px] bg-white shadow-sm fixed z-50 flex items-center">
        <div className="max-w-[1440px] w-full mx-auto flex justify-between items-center px-6">

          {/* LEFT */}
          <div className="flex w-[265px] items-center gap-6">
            <Image
              src="/img/Notebook.png"
              height={80}
              width={70}
              alt="Logo"
              className="cursor-pointer"
            />

            <button
              onClick={() => setOpenSidebar(true)}
              className="hidden lg:flex px-3 py-1.5 border border-gray-300 rounded-md font-semibold text-[#003566] hover:bg-gray-100 items-center gap-1 text-sm"
            >
              All Exams
              <RiArrowDropDownLine className="text-xl" />
            </button>

            <MainSidebar
              open={openSidebar}
              onClose={() => setOpenSidebar(false)}
            />
          </div>

          {/* RIGHT */}
          <div className="flex flex-col w-[1000px] justify-center">
            {/* ROW 1 */}
            <div className="flex items-center justify-between w-full">
              <div className="hidden lg:flex flex-1 max-w-[350px] items-center border border-gray-300 rounded-full bg-gray-50 gap-2 px-3 py-1.5">
                <Image src="/img/search.png" height={18} width={18} alt="Search" />
                <input
                  type="text"
                  placeholder="What do you want to learn"
                  className="flex-1 bg-transparent outline-none text-[14px]"
                />
              </div>

              <div className="flex items-center gap-1 cursor-pointer bg-[#F3F1FF] text-sm">
                <Image src="/img/card12.png" height={22} width={22} alt="Store" />
                <span className="text-[#003566] font-medium">Store</span>
              </div>

              <div className="flex items-center gap-1 cursor-pointer bg-[#F3F1FF] text-sm">
                <Image src="/img/phone.png" height={20} width={20} alt="Phone" />
                <span className="text-[#003566] font-medium">92660954441</span>
              </div>

              <div className="flex flex-col items-center leading-none">
                <span className="text-[#003566] text-md">New</span>
                <Bell className="w-5 h-5 text-[#003566]" />
              </div>

              <Link href='/Login'>
                <button
                  className="px-4 py-1.5 rounded-md font-urbanist font-medium text-base leading-6 tracking-normal align-middle text-white"
                  style={{
                    background:
                      "linear-gradient(96.18deg, #C83300 -2.22%, #E35545 48.89%, #FFA98B 100%)",
                  }}
                >
                  Login / Register
                </button>
              </Link>
            </div>

            {/* ROW 2 */}
            <ul className="flex items-center justify-between font-urbanist text-[15px]  mt-5 leading-none">
              <Link href="/"><li className="hover:text-blue-600 cursor-pointer">Home</li></Link>
              <Link href="/course"><li className="hover:text-blue-600 cursor-pointer">Courses</li></Link>
              <Link href="/Practices"><li className="hover:text-blue-600 cursor-pointer">Practice</li></Link>
              <Link href="/current-affairs"><li className="hover:text-blue-600 cursor-pointer">Current Affairs</li></Link>
              <Link href="/ask-doubt"><li className="hover:text-blue-600 cursor-pointer">Ask Doubt</li></Link>
              <Link href="/test-series"><li className="hover:text-blue-600 cursor-pointer">Test Series</li></Link>
              <Link href="/open-test"><li className="hover:text-blue-600 cursor-pointer">Open Test</li></Link>
              <Link href="/study-material"><li className="hover:text-blue-600 cursor-pointer">Study Materials</li></Link>
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
