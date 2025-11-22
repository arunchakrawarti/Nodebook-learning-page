import React from 'react'
import Input from '../../molecules/Input'
import { IoIosSend } from "react-icons/io";

const YourDoubt = () => {
  return (
    <div className="px-4 sm:px-6 md:px-15 py-6 w-full flex">
      
      <div className="w-full max-w-[990px]">

        <div>
          <h1 className="font-inter font-bold text-[20px] md:text-[24px] leading-[100%]">
            We Are Here To Solve Your Doubt
          </h1>

          <p className="font-inter mt-4 text-[16px] md:text-[20px] leading-[100%]">
            Submit Your Doubt In The Form Listed Below, Our Team Will Reach Back To You With The Solution.
          </p>

          <p className="font-inter mt-4 text-[15px] leading-[100%]">
            *Note: Submit your doubt with your registered mobile number.
          </p>
        </div>

        
        <div className="space-y-6 mt-8">
          <Input label="Full Name" placeholder="Enter your full name" />
          <Input label="Email Address" placeholder="Enter your email" />
          <Input label="Phone Number" placeholder="Enter your phone no" />
          <Input label="Doubt Type" placeholder="Select an option" />
        </div>

        {/* Textarea */}
        <div className="mt-8 w-full">
          <h1 className="font-inter font-semibold text-[18px] md:text-[22px] leading-[100%]">
            Doubt In Words (Up to 250 Words)
          </h1>

          <textarea
            className="w-full h-[180px] md:h-[230px] mt-2 p-3 border border-gray-400 rounded-md"
          ></textarea>
        </div>
      <div
  className="
    bg-[linear-gradient(96.18deg,#C83300_-2.22%,#E35545_48.89%,#FFA98B_100%)] text-white mt-10
    w-full sm:w-auto 
    py-3 px-4 sm:px-6
    rounded-md flex items-center justify-center gap-2
    cursor-pointer
  "
>
  <button className="font-medium text-[14px] sm:text-[16px]  md:text-[18px]">
    Submit Doubt
  </button>

  <IoIosSend className="text-[16px] sm:text-[18px] md:text-[20px]" />
</div>


      </div>
    </div>
  )
}

export default YourDoubt
