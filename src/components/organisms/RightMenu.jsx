// "use client";
// import React from "react";
// import Image from "next/image";
// import Link from "next/link";

// const rightMenuItems = [
//   { id: 1, title: "Home", href: "/" },
//   { id: 2, title: "Courses", href: "/course" },
//   { id: 3, title: "Practice", href: "/Practices" },
//   { id: 4, title: "Current Affairs", href: "/current-affairs" },
//   { id: 5, title: "Ask Doubt", href: "/ask-doubt" },
//   { id: 6, title: "Test Series", href: "/test-series" },
//   { id: 7, title: "Open Test", href: "/open-test" },
//   { id: 8, title: "Study Materials", href: "/study-material" },
//   { id: 9, title: "Store", icon: "/img/card12.png", href: "#" },
//   { id: 10, title: "Phone", icon: "/img/phone.png", href: "#" },
//   { id: 11, title: "New", href: "#" },
// ];

// const RightMenu = ({ open, onClose }) => {
//   return (
//     <div
//       className={`fixed top-0 right-0 h-screen z-50 bg-white shadow-xl overflow-y-auto
//         transition-transform duration-300 w-[80vw] sm:w-[300px]
//         ${open ? "translate-x-0" : "translate-x-full"}`}
//     >
//       {/* Header */}
//       <div className="flex justify-between items-center p-4 bg-[#003566] text-white h-[80px] sm:h-[100px]">
//         <h2 className="text-lg sm:text-xl font-bold">Menu</h2>
//         <button onClick={onClose} className="text-white text-2xl sm:text-3xl">&times;</button>
//       </div>

//       {/* Menu Items */}
//       <div className="p-4 flex flex-col gap-3">
//         {rightMenuItems.map((item) => (
//           <Link key={item.id} href={item.href} onClick={onClose}>
//             <div className="flex items-center gap-3 p-3 border rounded-lg hover:bg-gray-100 cursor-pointer">
//               {item.icon && (
//                 <div className="w-10 h-10 flex items-center justify-center">
//                   <Image src={item.icon} width={22} height={22} alt={item.title} />
//                 </div>
//               )}
//               <span className="font-medium">{item.title}</span>
//             </div>
//           </Link>
//         ))}

//         {/* Login / Register Button */}
//         <Link href="/Login" onClick={onClose}>
//           <button
//             className="mt-4 w-full px-4 py-2 rounded-md font-urbanist font-medium text-base leading-6 tracking-normal text-white"
//             style={{
//               background:
//                 "linear-gradient(96.18deg, #C83300 -2.22%, #E35545 48.89%, #FFA98B 100%)",
//             }}
//           >
//             Login / Register
//           </button>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default RightMenu;

"use client";
import React from "react";
import Link from "next/link";

const rightMenuItems = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "Courses", href: "/course" },
  { id: 3, title: "Practice", href: "/Practices" },
  { id: 4, title: "Current Affairs", href: "/current-affairs" },
  { id: 5, title: "Ask Doubt", href: "/ask-doubt" },
  { id: 6, title: "Test Series", href: "/test-series" },
  { id: 7, title: "Open Test", href: "/open-test" },
  { id: 8, title: "Study Materials", href: "/study-material" },
];

const RightMenu = ({ open, onClose }) => {
  return (
    <div
      className={`fixed top-0 right-0 h-screen bg-white shadow-xl z-50 overflow-y-auto
        transition-transform duration-300 w-[80vw] sm:w-[300px]
        ${open ? "translate-x-0" : "translate-x-full"}`}
    >
      <div className="flex justify-between items-center p-4 bg-[#003566] text-white h-[100px]">
        <h2 className="text-xl font-bold">Menu</h2>
        <button onClick={onClose} className="text-white text-3xl">&times;</button>
      </div>

      <div className="p-4 flex flex-col gap-3">
        {rightMenuItems.map((item) => (
          <Link key={item.id} href={item.href} onClick={onClose}>
            <div className="border p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
              {item.title}
            </div>
          </Link>
        ))}

        <Link href="/Login" onClick={onClose}>
          <button
            className="mt-4 w-full px-4 py-2 rounded-md text-white"
            style={{
              background:
                "linear-gradient(96.18deg, #C83300 -2.22%, #E35545 48.89%, #FFA98B 100%)",
            }}
          >
            Login / Register
          </button>
        </Link>
      </div>
    </div>
  );
};

export default RightMenu;
