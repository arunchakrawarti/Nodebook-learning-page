// "use client";
// import React from "react";
// import Image from "next/image";

// const sidebarItems = [
//   { id: 1, img: "/img/Side.png", title: "All Exams", description: "Explore All Exams at KGS" },
//   { id: 2, img: "/img/Side1.png", title: "Notesbook Global Academy Course", description: "Geography | Polity | History | World Map | Indian Map | Economics | Biology" },
//   { id: 3, img: "/img/Side2.png", title: "UPSC & State PSC", description: "UPSC | BPSC | UP-PSC | MP-PSC" },
//   { id: 4, img: "/img/Side3.png", title: "State Exams", description: "UP | Bihar | MP | Rajasthan" },
//   { id: 5, img: "/img/Side4.png", title: "NEET | JEE | CUET | Boards", description: "NEET | JEE | CUET | Boards" },
//   { id: 6, img: "/img/Side5.png", title: "Defence Exams", description: "NDA | CDS | CAPF | AFCAT | SSB | Agniveer" },
//   { id: 7, img: "/img/Side6.png", title: "Police Exams", description: "UP SI | Bihar SI | Delhi Police | UP Constable" },
//   { id: 8, img: "/img/Side13.png", title: "SSC Exams", description: "CGL | CPO | CHSL | MTS | SSC GD | Delhi Police" },
//   { id: 9, img: "/img/Side7.png", title: "Foundation Courses", description: "Physics | Chemistry | Biology | History | Geography | Polity | NCERT | Math | English | Map | Reasoning" },
//   { id: 10, img: "/img/Side8.png", title: "Railway Exams", description: "RRB | RPF" },
//   { id: 11, img: "/img/Side9.png", title: "Teaching Exams", description: "TET | Teaching | UGC" },
//   { id: 12, img: "/img/Side10.png", title: "Banking Exams", description: "SBI | RBI | IBPS" },
//   { id: 13, img: "/img/Side11.png", title: "Engineering Exams", description: "Civil | Electrical | Mechanical" },
//   { id: 14, img: "/img/Side12.png", title: "UGC NET", description: "UGC NET/JRF" },
// ];

// const MainSidebar = ({ open, onClose }) => {
//   return (
//     <div
//       className={`fixed top-0 left-0 h-screen z-50 bg-white shadow-xl overflow-y-auto
//         transition-transform duration-300 w-[90vw] sm:w-[80vw] md:w-[500px] lg:w-[600px]
//         ${open ? "translate-x-0" : "-translate-x-full"}`}
//     >
//       <div className="relative flex justify-between items-center p-4 bg-[#003566] rounded-br-4xl text-white h-[80px] sm:h-[100px]">
//         <div>
//           <h2 className="text-lg sm:text-xl font-bold">All Exams</h2>
//         <p className="font-urbanist font-medium text-sm leading-5 align-middle tracking-normal">Explore All Courses at <br/> <span>Notesbook Global Academy</span></p>
//         </div>
//         <div className="bg-white mt-3 ">
//           <Image
//           src='/img/notebook.png'
//           height={50}
//           width={50}
//           />
//         </div>
//         <button
//           onClick={onClose}
//           className="absolute top-2 right-2 text-white text-2xl sm:text-3xl"
//         >
//           &times;
//         </button>
//       </div>

//       <div className="p-3 sm:p-4 grid grid-cols-1 gap-3">
//         {sidebarItems.map((item) => (
//           <div key={item.id} className="flex items-center gap-3 p-3 bg-[#F0F0F5] hover:bg-red-100 rounded-br-2xl ">
//             <div className="flex-shrink-0 w-12 h-12 rounded-full bg-white flex items-center justify-center p-1 shadow-sm">
//               <Image src={item.img} width={30} height={30} alt={item.title} />
//             </div>
//             <div className="flex flex-col justify-center overflow-hidden">
//               <h1 className="font-medium text-sm sm:text-base truncate text-[#DF4C44]">{item.title}</h1>
//               <p className="text-xs sm:text-sm text-[#575757] line-clamp-2">{item.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MainSidebar;


"use client";
import React from "react";
import Image from "next/image";

const sidebarItems = [
  { id: 1, img: "/img/Side.png", title: "All Exams", description: "Explore All Exams at KGS" },
  { id: 2, img: "/img/Side1.png", title: "Notesbook Global Academy Course", description: "Geography | Polity | History | World Map | Indian Map | Economics | Biology" },
  { id: 3, img: "/img/Side2.png", title: "UPSC & State PSC", description: "UPSC | BPSC | UP-PSC | MP-PSC" },
  { id: 4, img: "/img/Side3.png", title: "State Exams", description: "UP | Bihar | MP | Rajasthan" },
  { id: 5, img: "/img/Side4.png", title: "NEET | JEE | CUET | Boards", description: "NEET | JEE | CUET | Boards" },
  { id: 6, img: "/img/Side5.png", title: "Defence Exams", description: "NDA | CDS | CAPF | AFCAT | SSB | Agniveer" },
  { id: 7, img: "/img/Side6.png", title: "Police Exams", description: "UP SI | Bihar SI | Delhi Police | UP Constable" },
  { id: 8, img: "/img/Side13.png", title: "SSC Exams", description: "CGL | CPO | CHSL | MTS | SSC GD | Delhi Police" },
  { id: 9, img: "/img/Side7.png", title: "Foundation Courses", description: "Physics | Chemistry | Biology | History | Geography | Polity | NCERT | Math | English | Map | Reasoning" },
  { id: 10, img: "/img/Side8.png", title: "Railway Exams", description: "RRB | RPF" },
  { id: 11, img: "/img/Side9.png", title: "Teaching Exams", description: "TET | Teaching | UGC" },
  { id: 12, img: "/img/Side10.png", title: "Banking Exams", description: "SBI | RBI | IBPS" },
  { id: 13, img: "/img/Side11.png", title: "Engineering Exams", description: "Civil | Electrical | Mechanical" },
  { id: 14, img: "/img/Side12.png", title: "UGC NET", description: "UGC NET/JRF" },
];

const MainSidebar = ({ open, onClose }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-screen bg-white z-50 shadow-xl overflow-y-auto
      transition-transform duration-300 w-[90vw] sm:w-[80vw] md:w-[500px] lg:w-[600px]
      ${open ? "translate-x-0" : "-translate-x-full"}`}
    >
      <div className="relative flex justify-between items-center p-4 bg-[#003566] text-white h-[100px] rounded-br-3xl">
        <div>
          <h2 className="text-lg sm:text-xl font-bold">All Exams</h2>
          <p className="text-sm font-medium">
            Explore All Courses at <br />
            Notesbook Global Academy
          </p>
        </div>

        <Image src="/img/notebook.png" height={50} width={50} alt="logo" />

        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-white text-3xl"
        >
          &times;
        </button>
      </div>

      <div className="p-4 grid grid-cols-1 gap-3">
        {sidebarItems.map((item) => (
          <div key={item.id} className="flex items-center gap-3 p-3 bg-[#F0F0F5] rounded-xl hover:bg-red-100">
            <div className="w-12 h-12 bg-white flex items-center justify-center rounded-full shadow">
              <Image src={item.img} width={30} height={30} alt={item.title} />
            </div>

            <div className="flex flex-col">
              <h1 className="text-sm font-semibold text-[#DF4C44] truncate">{item.title}</h1>
              <p className="text-xs text-[#575757]">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MainSidebar;
