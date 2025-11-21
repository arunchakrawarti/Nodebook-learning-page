// // import React from "react";
// // import Image from "next/image";
// // import SidebarCard from "../atom/SidebarCard";

// // const MainSidebar = ({ onClose }) => {
// //   const sidebarItems = [
// //     { id: 1, img: "/img/Side.png", title: "All Exams", description: "Explore All Exams at KGS", isFirst: true },
// //     { id: 2, img: "/img/Side1.png", title: "Notesbook Global Academy Course", description: "Geography | Polity | History | World Map | Indian Map | Economics | Biology" },
// //     { id: 3, img: "/img/Side2.png", title: "UPSC & State PSC", description: "UPSC | BPSC | UP-PSC | MP-PSC" },
// //     { id: 4, img: "/img/Side3.png", title: "State Exams", description: "UP | Bihar | MP | Rajasthan" },
// //     { id: 5, img: "/img/Side4.png", title: "NEET | JEE | CUET | Boards", description: "NEET | JEE | CUET | Boards" },
// //     { id: 6, img: "/img/Side5.png", title: "Defence Exams", description: "NDA | CDS | CAPF | AFCAT | SSB | Agniveer" },
// //     { id: 7, img: "/img/Side6.png", title: "Police Exams", description: "UP SI | Bihar SI | Delhi Police | UP Constable" },
// //     { id: 8, img: "/img/Side13.png", title: "SSC Exams", description: "CGL | CPO | CHSL | MTS | SSC GD | Delhi Police" },
// //     { id: 9, img: "/img/Side7.png", title: "Foundation Courses", description: "Physics | Chemistry | Biology | History | Geography | Polity | NCERT | Math | English | Map | Reasoning" },
// //     { id: 10, img: "/img/Side8.png", title: "Railway Exams", description: "RRB | RPF" },
// //     { id: 11, img: "/img/Side9.png", title: "Teaching Exams", description: "TET | Teaching | UGC" },
// //     { id: 12, img: "/img/Side10.png", title: "Banking Exams", description: "SBI | RBI | IBPS" },
// //     { id: 13, img: "/img/Side11.png", title: "Engineering Exams", description: "Civil | Electrical | Mechanical" },
// //     { id: 14, img: "/img/Side12.png", title: "UGC NET", description: "UGC NET/JRF" },
// //   ];

// //   return (
// //     <div className="w-[90vw] sm:w-[80vw] md:w-[500px] lg:w-[600px] h-screen bg-white shadow-lg overflow-y-auto">
      
// //       <div className="relative flex justify-between items-center p-4 bg-[#003566] text-white h-[80px] sm:h-[100px]">
       
// //         <div className="flex-1 pr-20">
// //           <h2 className="text-lg sm:text-xl font-bold">All Exams</h2>
// //           <p className="text-xs sm:text-sm opacity-90">Explore All Exams at KGS</p>
// //         </div>

       
// //         <div className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center shadow-md">
// //           <Image src="/img/Sidebarlogo.png" alt="Notesbook Logo" width={48} height={48} />
// //         </div>

       
// //         <button
// //           onClick={onClose}
// //           className="absolute top-2 right-2 text-white text-2xl sm:text-3xl hover:text-gray-200"
// //         >
// //           &times;
// //         </button>
// //       </div>

      
// //       <div className="p-3 sm:p-4 grid grid-cols-1 gap-3">
// //         {sidebarItems.map((item) => (
// //           <SidebarCard
// //             key={item.id}
// //             img={item.img}
// //             title={item.title}
// //             description={item.description}
// //             isFirst={item.isFirst || false}
// //           />
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default MainSidebar;



// "use client";
// import React from "react";
// import Image from "next/image";
// import SidebarCard from "../atom/SidebarCard";

// const MainSidebar = ({ open, onClose }) => {
//   const sidebarItems = [
//     { id: 1, img: "/img/Side.png", title: "All Exams", description: "Explore All Exams at KGS", isFirst: true },
//     { id: 2, img: "/img/Side1.png", title: "Notesbook Global Academy Course", description: "Geography | Polity | History | World Map | Indian Map | Economics | Biology" },
//     { id: 3, img: "/img/Side2.png", title: "UPSC & State PSC", description: "UPSC | BPSC | UP-PSC | MP-PSC" },
//     { id: 4, img: "/img/Side3.png", title: "State Exams", description: "UP | Bihar | MP | Rajasthan" },
//     { id: 5, img: "/img/Side4.png", title: "NEET | JEE | CUET | Boards", description: "NEET | JEE | CUET | Boards" },
//     { id: 6, img: "/img/Side5.png", title: "Defence Exams", description: "NDA | CDS | CAPF | AFCAT | SSB | Agniveer" },
//     { id: 7, img: "/img/Side6.png", title: "Police Exams", description: "UP SI | Bihar SI | Delhi Police | UP Constable" },
//     { id: 8, img: "/img/Side13.png", title: "SSC Exams", description: "CGL | CPO | CHSL | MTS | SSC GD | Delhi Police" },
//     { id: 9, img: "/img/Side7.png", title: "Foundation Courses", description: "Physics | Chemistry | Biology | History | Geography | Polity | NCERT | Math | English | Map | Reasoning" },
//     { id: 10, img: "/img/Side8.png", title: "Railway Exams", description: "RRB | RPF" },
//     { id: 11, img: "/img/Side9.png", title: "Teaching Exams", description: "TET | Teaching | UGC" },
//     { id: 12, img: "/img/Side10.png", title: "Banking Exams", description: "SBI | RBI | IBPS" },
//     { id: 13, img: "/img/Side11.png", title: "Engineering Exams", description: "Civil | Electrical | Mechanical" },
//     { id: 14, img: "/img/Side12.png", title: "UGC NET", description: "UGC NET/JRF" },
//   ];

//   return (
//     <div
//       className={`
//         fixed top-0 left-0 h-screen z-50 bg-white shadow-xl
//         transition-transform duration-300
//         w-[90vw] sm:w-[80vw] md:w-[500px] lg:w-[600px]
//         ${open ? "translate-x-0" : "-translate-x-full"}
//       `}
//     >
//       <div className="relative flex justify-between items-center p-4 bg-[#003566] text-white h-[80px] sm:h-[100px]">
//         <div className="flex-1 pr-20">
//           <h2 className="text-lg sm:text-xl font-bold">All Exams</h2>
//           <p className="text-xs sm:text-sm opacity-90">Explore All Exams at KGS</p>
//         </div>

//         <div className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center shadow-md">
//           <Image src="/img/Sidebarlogo.png" alt="Notesbook Logo" width={48} height={48} />
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
//           <SidebarCard
//             key={item.id}
//             img={item.img}
//             title={item.title}
//             description={item.description}
//             isFirst={item.isFirst || false}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MainSidebar;


"use client";
import React from "react";
import Image from "next/image";
import SidebarCard from "../atom/SidebarCard";

const MainSidebar = ({ open, onClose }) => {
  const sidebarItems = [
    { id: 1, img: "/img/Side.png", title: "All Exams", description: "Explore All Exams at KGS", isFirst: true },
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

  return (
    <div
      className={`
        fixed top-0 left-0 h-screen z-50 bg-white shadow-xl
        transition-transform duration-300
        w-[90vw] sm:w-[80vw] md:w-[500px] lg:w-[600px]
        ${open ? "translate-x-0" : "-translate-x-full"}
      `}
    >
      <div className="relative flex justify-between items-center p-4 bg-[#003566] text-white h-[80px] sm:h-[100px]">
        <div className="flex-1 pr-20">
          <h2 className="text-lg sm:text-xl font-bold">All Exams</h2>
          <p className="text-xs sm:text-sm opacity-90">Explore All Exams at KGS</p>
        </div>

        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white flex items-center justify-center shadow-md">
          <Image src="/img/Sidebarlogo.png" alt="Notesbook Logo" width={48} height={48} />
        </div>

        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white text-2xl sm:text-3xl"
        >
          &times;
        </button>
      </div>

      <div className="p-3 sm:p-4 grid grid-cols-1 gap-3">
        {sidebarItems.map((item) => (
          <SidebarCard
            key={item.id}
            img={item.img}
            title={item.title}
            description={item.description}
            isFirst={item.isFirst || false}
          />
        ))}
      </div>
    </div>
  );
};

export default MainSidebar;
