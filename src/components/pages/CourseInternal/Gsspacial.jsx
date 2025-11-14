import React from 'react';
import Image from 'next/image';
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

    const courseDetails = {
        title: "GS SPECIAL VISION 2.0 Foundation Batch 2025-26",
        regStartDate: "18 Oct 2026",
        regEndDate: "29 Nov 2026",
        classStartDate: "17 Nov 2026",
        validityEndDate: "17 Nov 2028",
        duration: "7-8 Months",
        type: "Live Batch",
        language: "Hindi / English",
        downloadable: "Yes",
        price: "799/-",
        originalPrice: "999/-",
        validity: "12 Months",
        durationCard: "7-8 Months",
        languageCard: "Hindi / English",
        curriculum: [
            { section: "Monthly Current Affairs PDF", videos: 0, notes: 2 }
        ],
        // faculty: [
        //     { name: "Faculty Name 1", img: "/img/faculty1.png" },
        //     { name: "Faculty Name 2", img: "/img/faculty2.png" }
        // ]
    };

    const InfoItem = ({ icon: Icon, label, value }) => (
        <div className="flex items-center space-x-2 text-sm text-gray-700">
            <Icon className="w-5 h-5 text-[#4F46E5]" />
            <span><strong>{label}:</strong> {value}</span>
        </div>
    );

    const CurriculumItem = ({ section, videos, notes }) => (
        <div className="p-4 rounded-lg bg-gray-50   items-center mb-3">
            <span className="font-medium text-gray-800">{section}</span>

            <div className="flex space-x-4 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-red-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M4 4.5v15a.5.5 0 0 0 .5.5H20a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H4.5zM12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                    </svg>
                    <span>{videos} Videos</span>
                </div>

                <div className="flex items-center space-x-1">
                    <svg className="w-4 h-4 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20 2H8c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 16H10V4h8v14zM4 4v16H3a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h1z"/>
                    </svg>
                    <span>{notes} Notes</span>
                </div>
            </div>
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto p-4 md:p-8">

            <p className="text-sm text-gray-500 mb-6">
                Home <ArrowRightIcon className="w-3 h-3 inline mx-1"/> Courses <ArrowRightIcon className="w-3 h-3 inline mx-1"/> {courseDetails.title}
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                <div className="lg:col-span-2">

                    <h1 className="font-bold text-2xl md:text-3xl mb-6 text-gray-800">
                        {courseDetails.title}
                    </h1>

                    <div className="mb-10 p-6 bg-white rounded-lg shadow-sm">
                        <h2 className="font-bold text-xl mb-4">What's Included</h2>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <InfoItem icon={CalendarIcon} label="Reg. Start Date" value={courseDetails.regStartDate} />
                            <InfoItem icon={CalendarIcon} label="Reg. End Date" value={courseDetails.regEndDate} />
                            <InfoItem icon={CalendarIcon} label="Class Start Date" value={courseDetails.classStartDate} />
                            <InfoItem icon={CalendarIcon} label="Validity End Date" value={courseDetails.validityEndDate} />
                            <InfoItem icon={ClockIcon} label="Duration" value={courseDetails.duration} />
                            <InfoItem icon={CheckCircleIcon} label="Type" value={courseDetails.type} />
                            
                            {/* FIXED HERE */}
                            <InfoItem icon={LanguageIcon} label="Language" value={courseDetails.language} />

                            <InfoItem icon={ArrowDownTrayIcon} label="Downloadable" value={courseDetails.downloadable} />
                        </div>
                    </div>

                    <div className="mb-10">
                        <h2 className="font-bold text-2xl mb-4">Course Curriculum & Syllabus</h2>

                        <div className='shadow'>
                            {courseDetails.curriculum.map((item, index) => (
                            <CurriculumItem 
                                key={index}
                                section={item.section}
                                videos={item.videos}
                                notes={item.notes}
                               
                            />
                        ))}
                        </div>
                    </div>

                    {/* <div>
                        <h2 className="font-bold text-2xl mb-4">Faculty</h2>

                        <div className="flex space-x-4 overflow-x-auto pb-3">
                            {courseDetails.faculty.map((f, index) => (
                                <div key={index} className="flex flex-col items-center p-4 border rounded-lg w-32 flex-shrink-0">
                                    <UserIcon className="w-12 h-12 text-gray-400 mb-2" />
                                    <p className="text-sm font-medium">{f.name}</p>
                                </div>
                            ))}
                        </div>
                    </div> */}

                </div>

                <div>
                    <div className="p-6 bg-white rounded-xl shadow-lg sticky top-8 w-full">

                        <div className="relative w-full h-40 mb-4 rounded-lg overflow-hidden">
                            <Image
                                src="/img/Internal.jpg"
                                alt="course"
                                fill
                                className="object-cover"
                            />
                        </div>

                        <h3 className="font-bold text-xl mb-3">{courseDetails.title}</h3>

                        <div className="flex items-baseline space-x-2 mb-4">
                            <span className="text-3xl font-extrabold text-[#4F46E5]">{courseDetails.price}</span>
                            <span className="text-lg line-through text-gray-500">{courseDetails.originalPrice}</span>
                            <span className="text-sm text-red-500">(20% OFF)</span>
                        </div>

                        <ul className="space-y-3 border-y py-4 mb-4 text-gray-700">
                            <li className="flex justify-between text-sm">
                                <span className='flex items-center'><CheckCircleIcon className="w-4 h-4 mr-2 text-green-500"/>Validity</span>
                                <span className="font-semibold">{courseDetails.validity}</span>
                            </li>
                            <li className="flex justify-between text-sm">
                                <span className='flex items-center'><ClockIcon className="w-4 h-4 mr-2 text-green-500"/>Duration</span>
                                <span className="font-semibold">{courseDetails.durationCard}</span>
                            </li>
                            
                            {/* FIXED HERE TOO */}
                            <li className="flex justify-between text-sm">
                                <span className='flex items-center'><LanguageIcon className="w-4 h-4 mr-2 text-green-500"/>Language</span>
                                <span className="font-semibold">{courseDetails.languageCard}</span>
                            </li>

                            <li className="flex justify-between text-sm">
                                <span className='flex items-center'><CheckCircleIcon className="w-4 h-4 mr-2 text-green-500"/>Type</span>
                                <span className="font-semibold">{courseDetails.type}</span>
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
