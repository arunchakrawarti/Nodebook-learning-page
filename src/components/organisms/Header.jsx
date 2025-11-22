"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { RiArrowDropDownLine, RiMenuLine } from "react-icons/ri";
import MainSidebar from "./MainSidebar";
import RightMenu from "./RightMenu";
import { Bell } from "lucide-react";

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const [openRightMenu, setOpenRightMenu] = useState(false);

  // ⭐ ACTIVE MENU STATE
  const [activeMenu, setActiveMenu] = useState("Home");

  const menus = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/course" },
    { name: "Practice", href: "/Practices" },
    { name: "Current Affairs", href: "/current-affairs" },
    { name: "Ask Doubt", href: "/ask-doubt" },
    { name: "Test Series", href: "/test-series" },
    { name: "Open Test", href: "/open-test" },
    { name: "Study Materials", href: "/study-material" },
  ];

  return (
    <>
      {(openSidebar || openRightMenu) && (
        <div
          onClick={() => {
            setOpenSidebar(false);
            setOpenRightMenu(false);
          }}
          className="fixed inset-0 bg-black/40 z-40"
        />
      )}

      <header className="w-full bg-white shadow-sm fixed z-50 flex items-center h-[100px] px-4 sm:px-6">
        <div className="max-w-[1400px] w-full mx-auto flex justify-between gap-40 items-center">

          {/* LEFT */}
          <div className="flex items-center gap-2">
            <Image src="/img/Notebook.png" height={80} width={70} alt="Logo" />

            <button
              onClick={() => setOpenSidebar(true)}
              className="hidden lg:flex px-3 py-1.5 border border-gray-300 rounded-md font-semibold text-[#003566] hover:bg-gray-100 items-center gap-1 text-sm"
            >
              All Exams <RiArrowDropDownLine className="text-xl" />
            </button>

            <button
              onClick={() => setOpenSidebar(true)}
              className="lg:hidden px-3 py-1.5 border border-gray-300 rounded-md font-semibold text-[#003566] hover:bg-gray-100 items-center gap-1 text-sm"
            >
              <RiArrowDropDownLine className="text-xl" />
            </button>

            <MainSidebar open={openSidebar} onClose={() => setOpenSidebar(false)} />
          </div>

          {/* MOBILE MENU */}
          <div className="flex items-center lg:hidden">
            <button onClick={() => setOpenRightMenu(true)} className="p-2 border rounded-md">
              <RiMenuLine size={24} />
            </button>
            <RightMenu open={openRightMenu} onClose={() => setOpenRightMenu(false)} />
          </div>

          {/* DESKTOP CONTENT */}
          <div className="hidden lg:flex flex-1 flex-col gap-2 ml-6">

            {/* TOP ROW */}
            <div className="flex flex-wrap items-center justify-between w-full gap-2">
              <div className="flex flex-1 max-w-[350px] md:max-w-[350px] items-center border border-gray-300 rounded-full bg-gray-50 gap-2 px-3 py-1.5">
                <Image src="/img/search.png" height={18} width={18} alt="Search" />
                <input
                  type="text"
                  placeholder="What do you want to learn"
                  className="flex-1 bg-transparent outline-none text-[14px]"
                />
              </div>

              <div className="flex items-center gap-10 flex-wrap">
                <div className="flex items-center gap-1 cursor-pointer bg-[#F3F1FF] text-sm px-2 py-1 rounded-md">
                  <Image src="/img/card12.png" height={22} width={22} alt="Store" />
                  <span className="text-[#003566] font-medium">Store</span>
                </div>

                <div className="flex items-center gap-1 cursor-pointer bg-[#F3F1FF] text-sm px-2 py-1 rounded-md">
                  <Image src="/img/phone.png" height={20} width={20} alt="Phone" />
                  <span className="text-[#003566] font-medium">92660954441</span>
                </div>

                <div className="flex flex-col items-center leading-none">
                  <span className="text-[#003566] text-md">New</span>
                  <Bell className="text-[#003566]" />
                </div>

                <Link href="/Login">
                  <button
                    className="px-4 py-1.5 rounded-md font-medium text-base text-white"
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

            {/* ⭐ NAVIGATION LINKS WITH ACTIVE STYLE ⭐ */}
            <ul className="flex flex-wrap justify-between gap-2 md:gap-4 font-urbanist text-[15px] mt-3">
              {menus.map((menu) => (
                <Link key={menu.name} href={menu.href} passHref>
                  <li
                    onClick={() => setActiveMenu(menu.name)}
                    className={`
                      cursor-pointer px-1 pb-1
                      ${activeMenu === menu.name
                        ? "text-blue-950 border-b-2 border-blue-950 font-semibold"
                        : "hover:text-blue-700"}
                    `}
                  >
                    {menu.name}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
