"use client";
import React from "react";
import Image from "next/image";
import courseDetails from "../../../../public/db/gsspecial.json";
import { CiYoutube } from "react-icons/ci";
import { BiNote } from "react-icons/bi";

import {
  ClockIcon,
  CalendarIcon,
  LanguageIcon,
  ArrowDownTrayIcon,
  CheckCircleIcon,
  UserIcon,
  ArrowRightIcon
} from "@heroicons/react/24/outline";

const Gsspacial = () => {

  const InfoItem = ({ icon: Icon, label, value }) => (
    <div className="flex items-center space-x-2 text-sm text-gray-700">
      <Icon className="w-6 h-6 text-[#002E62]" />
      <span className="font-poppins font-medium text-[13.2px] leading-[16.8px] tracking-[0px]">
        <strong>{label}:</strong> {value}
      </span>
    </div>
  );

  const CurriculumItem = ({ section, videos, notes }) => (
    <div className="p-4 rounded-lg bg-gray-50 mb-3">
      <span className="font-medium text-gray-800">{section}</span>
      <div className="flex space-x-4 text-sm text-gray-600 mt-2">
        <div className="flex items-center space-x-1">
          <CiYoutube className="w-4 h-4" />
          <span>{videos} Videos</span>
        </div>
        <div className="flex items-center space-x-1">
          <BiNote className="w-4 h-4" />
          <span>{notes} Notes</span>
        </div>
      </div>
    </div>
  );

  const FacultyCard = ({ name, subject, img }) => (
    <div className="flex flex-col items-center text-center p-4 rounded-lg shadow-sm hover:shadow-md">
      <div className="relative w-28 h-28 md:h-35 md:w-35 lg:w-55 lg:h-50 rounded-lg overflow-hidden mb-3">
        {img ? (
          <Image src={img} alt={name} fill className="object-cover" />
        ) : (
          <UserIcon className="w-full h-full text-gray-400 p-4" />
        )}
      </div>
      <p className="font-bold">{name}</p>
      <p className="font-urbanist font-medium text-[14px] text-[#193CB8] mt-1">
        {subject}
      </p>
    </div>
  );

  return (
    <div className="max-w-8xl mx-auto p-4 md:p-10">
      {/* Breadcrumb */}
      <p className="text-sm text-gray-500 mb-6">
        Home <ArrowRightIcon className="w-3 h-3 inline mx-1" /> Courses{" "}
        <ArrowRightIcon className="w-3 h-3 inline mx-1" /> {courseDetails.title}
      </p>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

        {/* Left Side */}
        <div className="lg:col-span-2">
          <h1 className="font-poppins font-bold text-[24px] leading-[32px] mb-6">
            {courseDetails.title}
          </h1>

          {/* What's Included */}
          <div className="mb-10 p-6 bg-white rounded-lg shadow-sm">
            <h2 className="font-poppins font-bold text-[16px] mb-4">
              What's Included
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <InfoItem icon={CalendarIcon} label="Reg. Start Date" value={courseDetails.regStartDate} />
              <InfoItem icon={CalendarIcon} label="Reg. End Date" value={courseDetails.regEndDate} />
              <InfoItem icon={CalendarIcon} label="Class Start Date" value={courseDetails.classStartDate} />
              <InfoItem icon={CalendarIcon} label="Validity End Date" value={courseDetails.validityEndDate} />
              <InfoItem icon={ClockIcon} label="Duration" value={courseDetails.duration} />
              <InfoItem icon={CheckCircleIcon} label="Type" value={courseDetails.type} />
              <InfoItem icon={LanguageIcon} label="Language" value={courseDetails.language} />
              <InfoItem icon={ArrowDownTrayIcon} label="Downloadable" value={courseDetails.downloadable} />
            </div>
          </div>

          {/* Curriculum */}
          <div className="mb-10">
            <h2 className="font-urbanist font-bold text-[30px] mb-4">
              Course Curriculum & Syllabus
            </h2>
            <div className="shadow p-4 rounded-lg">
              {courseDetails.curriculum.map((item, index) => (
                <CurriculumItem key={index} {...item} />
              ))}
            </div>
          </div>

          {/* Faculty */}
          <div>
            <h2 className="font-bold text-2xl mb-4">Faculty</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {courseDetails.faculty.map((f, index) => (
                <FacultyCard key={index} {...f} />
              ))}
            </div>
          </div>
        </div>

        {/* Right Sidebar — Price Card */}
        <div>
          <div className="p-6 bg-white rounded-xl shadow sticky top-8">
            <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
              <Image
                src="/img/Internal.jpg"
                alt="course"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="font-urbanist font-bold text-[20px] mb-3">
              {courseDetails.title}
            </h3>

            <div className="flex items-center space-x-2 mb-4">
              <span className="font-poppins font-medium text-[16px]">
                Registration fee -
              </span>
              <span className="font-poppins">Rs. {courseDetails.price}</span>
              <span className="line-through text-gray-500">
                {courseDetails.originalPrice}
              </span>
            </div>

            <ul className="space-y-3 border-y py-4 mb-4 text-gray-700">
              <li className="flex justify-between">
                <span className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 mr-2" /> Validity
                </span>
                <span>{courseDetails.validity}</span>
              </li>

              <li className="flex justify-between">
                <span className="flex items-center">
                  <CheckCircleIcon className="w-5 h-5 mr-2" /> Type
                </span>
                <span>{courseDetails.type}</span>
              </li>

              <li className="flex justify-between">
                <span className="flex items-center">
                  <ClockIcon className="w-5 h-5 mr-2" /> Duration
                </span>
                <span>{courseDetails.durationCard}</span>
              </li>

              <li className="flex justify-between">
                <span className="flex items-center">
                  <LanguageIcon className="w-5 h-5 mr-2" /> Language
                </span>
                <span>{courseDetails.languageCard}</span>
              </li>
            </ul>

            <button className="w-full bg-[#0c0855] text-white py-3 rounded-lg font-bold text-lg">
              Buy Now
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Gsspacial;
