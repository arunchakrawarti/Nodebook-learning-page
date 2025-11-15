"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import MainSidebar from "./MainSidebar";
import Link from "next/link";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-full">
      
      {/* 🔹 Top Social Bar */}
      <div className="h-[40px] flex items-center  bg-[#003566] justify-center gap-3 px-2 sm:px-6">
        <p className="font-bold text-[14px] sm:text-[18px] md:text-[20px] text-center text-yellow-300">
          Follow Us To Get Latest Update →
        </p>
        <div className="flex gap-3 sm:gap-5">
          <Image src="/img/instra.png" height={24} width={24} alt="Instagram" />
          <Image src="/img/facebook.png" height={24} width={24} alt="Facebook" />
          <Image src="/img/Linkdin.png" height={24} width={24} alt="LinkedIn" />
          <Image src="/img/bird.png" height={24} width={24} alt="Twitter" />
        </div>
      </div>

      {/* 🔹 Main Header */}
      <div className="shadow relative bg-white">
        <div className="h-[64px]  flex items-center justify-between px-4 sm:px-6 md:px-10">
          
          {/* 🔸 Left: Logo + Exams Button */}
          <div className="flex items-center gap-2">
            <Image
              src="/img/Notebook.png"
              height={48}
              width={75}
              alt="Logo"
              className="cursor-pointer"
            />
            <button
              onClick={() => setShowSidebar(true)}
              className="px-3 py-2 font-workSans font-medium text-[16.94px] text-[#003566] border border-gray-300 rounded-md hover:bg-gray-100"
            >
              All Exams
            </button>
          </div>

          {/* 🔸 Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 xl:gap-10 font-urbanist text-base leading-6 text-center">
            <Link href="/"><li className="hover:text-blue-700 cursor-pointer">Home</li></Link>
            <Link href="/course"><li className="hover:text-blue-700 cursor-pointer">Courses</li></Link>
            <li className="hover:text-blue-700 cursor-pointer">Practice</li>
            <li className="hover:text-blue-700 cursor-pointer">Current Affairs</li>
            <li className="hover:text-blue-700 cursor-pointer">Ask Doubt</li>
            <li className="hover:text-blue-700 cursor-pointer">Test Series</li>
            <li className="hover:text-blue-700 cursor-pointer">Open Test</li>
            <li className="hover:text-blue-700 cursor-pointer">Study Materials</li>
          </ul>

          {/* 🔸 Search / Profile / Cart / Bell → Only Desktop */}
          <div className="hidden lg:flex items-center gap-4">
            <Image src="/img/search.png" height={20} width={20} alt="Search" />
            <Image src="/img/manlogo.png" height={20} width={20} alt="Profile" />
            <Image src="/img/Card.png" height={20} width={20} alt="Cart" />
            <Image src="/img/bel.png" height={20} width={20} alt="Bell" />
          </div>

          {/* 🔸 Mobile Menu Button */}
          <button
            onClick={() => setShowMenu(true)}
            className="lg:hidden p-2 rounded-md border border-gray-300 hover:bg-gray-100"
          >
            <Menu className="w-6 h-6 text-[#003566]" />
          </button>
        </div>

        {/* 🔹 All Exams Sidebar */}
        {showSidebar && (
          <>
            <div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setShowSidebar(false)}
            />
            <div className="fixed top-0 left-0 z-50">
              <MainSidebar onClose={() => setShowSidebar(false)} />
            </div>
          </>
        )}

        {/* 🔹 Mobile Menu Drawer */}
        {showMenu && (
          <>
            <div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={() => setShowMenu(false)}
            />
            <div className="fixed top-0 right-0 w-64 sm:w-72 h-full bg-white z-50 shadow-lg">
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-semibold text-[#003566]">Menu</h2>
                <button
                  onClick={() => setShowMenu(false)}
                  className="p-2 hover:bg-gray-100 rounded-md"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <ul className="flex flex-col p-4 gap-4 font-urbanist text-[16px] leading-[24px] text-center">
                <li className="hover:text-blue-700 cursor-pointer">Home</li>
                <li className="hover:text-blue-700 cursor-pointer">Courses</li>
                <li className="hover:text-blue-700 cursor-pointer">Practice</li>
                <li className="hover:text-blue-700 cursor-pointer">Current Affairs</li>
                <li className="hover:text-blue-700 cursor-pointer">Ask Doubt</li>
                <li className="hover:text-blue-700 cursor-pointer">Test Series</li>
                <li className="hover:text-blue-700 cursor-pointer">Open Test</li>
                <li className="hover:text-blue-700 cursor-pointer">Study Materials</li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
