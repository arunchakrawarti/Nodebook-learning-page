import React from "react";
import Image from "next/image";
import SidebarCard from "../atom/SidebarCard";

const MainSidebar = ({ onClose }) => {
  const sidebarItems = [
    { id: 1, img: "/icons/grid.svg", title: "All Exams", description: "Explore All Exams at KGS", isFirst: true },
    { id: 2, img: "/icons/notesbook.svg", title: "Notesbook Global Academy Course", description: "Geography | Polity | History | World Map | Indian Map | Economics | Biology" },
    { id: 3, img: "/icons/upsc.svg", title: "UPSC & State PSC", description: "UPSC | BPSC | UP-PSC | MP-PSC" },
    { id: 4, img: "/icons/state-exams.svg", title: "State Exams", description: "UP | Bihar | MP | Rajasthan" },
    { id: 5, img: "/icons/neet.svg", title: "NEET | JEE | CUET | Boards", description: "NEET | JEE | CUET | Boards" },
    { id: 6, img: "/icons/defence.svg", title: "Defence Exams", description: "NDA | CDS | CAPF | AFCAT | SSB | Agniveer" },
    { id: 7, img: "/icons/police.svg", title: "Police Exams", description: "UP SI | Bihar SI | Delhi Police | UP Constable" },
    { id: 8, img: "/icons/ssc.svg", title: "SSC Exams", description: "CGL | CPO | CHSL | MTS | SSC GD | Delhi Police" },
    { id: 9, img: "/icons/foundation.svg", title: "Foundation Courses", description: "Physics | Chemistry | Biology | History | Geography | Polity | NCERT | Math | English | Map | Reasoning" },
    { id: 10, img: "/icons/railway.svg", title: "Railway Exams", description: "RRB | RPF" },
    { id: 11, img: "/icons/teaching.svg", title: "Teaching Exams", description: "TET | Teaching | UGC" },
    { id: 12, img: "/icons/banking.svg", title: "Banking Exams", description: "SBI | RBI | IBPS" },
    { id: 13, img: "/icons/engineering.svg", title: "Engineering Exams", description: "Civil | Electrical | Mechanical" },
    { id: 14, img: "/icons/ugc-net.svg", title: "UGC NET", description: "UGC NET/JRF" },
  ];

  return (
    <div className="w-[600px] h-screen bg-white shadow-lg overflow-y-auto">
      {/* Top Header */}
      <div className="flex justify-between items-center p-4 bg-blue-800 text-white relative h-[100px]">
        <div>
          <h2 className="text-xl font-bold">All Exams</h2>
          <p className="text-sm">Explore All Exams at KGS</p>
        </div>

        {/* Logo */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-white flex items-center justify-center shadow-md">
          <Image src="/icons/notesbook-logo.svg" alt="Notesbook Logo" width={48} height={48} />
        </div>

        {/* Close Button */}
        <button onClick={onClose} className="absolute top-2 right-2 text-white text-2xl">
          &times;
        </button>
      </div>

      {/* Cards */}
      <div className="p-4">
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
