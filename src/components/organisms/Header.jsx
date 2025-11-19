"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { RiArrowDropDownLine } from "react-icons/ri";
import MainSidebar from "./MainSidebar";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  const closeMenu = () => setShowMenu(false);

  return (
    <div className="w-full fixed z-50">
      {/* Top Bar */}
      <div className="h-auto py-2 flex flex-col sm:flex-row items-center justify-center bg-[#003566] gap-2 sm:gap-4 px-3 sm:px-6 text-center">
        <p className="font-bold text-[13px] sm:text-[16px] md:text-[18px] text-yellow-300">
          Follow Us To Get Latest Update →
        </p>

        <div className="flex gap-3 sm:gap-5">
          <Image src="/img/instra.png" height={24} width={24} alt="Instagram" />
          <Image src="/img/facebook.png" height={24} width={24} alt="Facebook" />
          <Image src="/img/Linkdin.png" height={24} width={24} alt="LinkedIn" />
          <Image src="/img/bird.png" height={24} width={24} alt="Twitter" />
        </div>
      </div>

      {/* Main Header */}
      <div className="shadow bg-white">
        <div className="h-[64px] flex items-center justify-between px-4 sm:px-6 md:px-10">

          {/* Logo + Sidebar Button */}
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
              className="px-1 py-2 font-workSans font-medium text-[16.94px] text-[#003566] border border-gray-300 rounded-md hover:bg-gray-100 flex items-center gap-1"
            >
              <span>All Exams</span>
              <RiArrowDropDownLine className="w-7 h-7" />
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden lg:flex items-center gap-8 xl:gap-10 font-urbanist text-base leading-6 text-center">
            <Link href="/"><li className="hover:text-blue-700 cursor-pointer">Home</li></Link>
            <Link href="/course"><li className="hover:text-blue-700 cursor-pointer">Courses</li></Link>
            <Link href="/Practices"><li className="hover:text-blue-700 cursor-pointer">Practice</li></Link>
            <Link href="/current-affairs"><li className="hover:text-blue-700 cursor-pointer">Current Affairs</li></Link>
            <Link href="/ask-doubt"><li className="hover:text-blue-700 cursor-pointer">Ask Doubt</li></Link>
            <Link href="/test-series"><li className="hover:text-blue-700 cursor-pointer">Test Series</li></Link>
            <Link href="/open-test"><li className="hover:text-blue-700 cursor-pointer">Open Test</li></Link>
            <Link href="/study-material"><li className="hover:text-blue-700 cursor-pointer">Study Materials</li></Link>
          </ul>

          {/* Desktop Icons */}
          <div className="hidden lg:flex items-center gap-4">
            <Image src="/img/search.png" height={20} width={20} alt="Search" />
            <Image src="/img/manlogo.png" height={20} width={20} alt="Profile" />
            <Image src="/img/Card.png" height={20} width={20} alt="Cart" />
            <Image src="/img/bel.png" height={20} width={20} alt="Bell" />
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setShowMenu(true)}
            className="lg:hidden p-2 rounded-md border border-gray-300 hover:bg-gray-100"
          >
            <Menu className="w-6 h-6 text-[#003566]" />
          </button>
        </div>

        {/* Sidebar Overlay */}
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

        {/* Mobile Menu */}
        {showMenu && (
          <>
            <div
              className="fixed inset-0 bg-black/40 z-40"
              onClick={closeMenu}
            />
            <div className="fixed top-0 right-0 w-64 sm:w-72 h-full bg-white z-50 shadow-lg">
              <div className="flex justify-between items-center p-4 border-b">
                <h2 className="text-lg font-semibold text-[#003566]">Menu</h2>
                <button
                  onClick={closeMenu}
                  className="p-2 hover:bg-gray-100 rounded-md"
                >
                  <X className="w-5 h-5 text-gray-600" />
                </button>
              </div>

              <ul className="flex flex-col p-4 gap-4 font-urbanist text-[16px] leading-[24px]">

                <Link href="/" onClick={closeMenu}>
                  <li className="hover:text-blue-700 cursor-pointer">Home</li>
                </Link>

                <Link href="/course" onClick={closeMenu}>
                  <li className="hover:text-blue-700 cursor-pointer">Courses</li>
                </Link>

                <Link href="/Practices" onClick={closeMenu}>
                  <li className="hover:text-blue-700 cursor-pointer">Practice</li>
                </Link>

                <Link href="/current-affairs" onClick={closeMenu}>
                  <li className="hover:text-blue-700 cursor-pointer">Current Affairs</li>
                </Link>

                <Link href="/ask-doubt" onClick={closeMenu}>
                  <li className="hover:text-blue-700 cursor-pointer">Ask Doubt</li>
                </Link>

                <Link href="/test-series" onClick={closeMenu}>
                  <li className="hover:text-blue-700 cursor-pointer">Test Series</li>
                </Link>

                <Link href="/open-test" onClick={closeMenu}>
                  <li className="hover:text-blue-700 cursor-pointer">Open Test</li>
                </Link>

                <Link href="/study-material" onClick={closeMenu}>
                  <li className="hover:text-blue-700 cursor-pointer">Study Materials</li>
                </Link>

              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
