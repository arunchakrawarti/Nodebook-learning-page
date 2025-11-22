"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";

export default function Login() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="w-full flex justify-center bg-gray-100 py-10">
      <div className="
        relative w-full max-w-[1440px] 
        h-auto lg:h-[990px]
        rounded-xl overflow-hidden shadow-xl
        flex flex-col lg:block
      ">
        
        
        <div className="absolute inset-0">
          <Image
            src="/img/Login.png"
            alt="Background"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

       
        <div className="
          relative z-10 text-white 
          w-full lg:w-1/2 
          flex flex-col items-center lg:items-start 
          text-center lg:text-left 
          py-10 lg:py-0 
          px-6 lg:pl-16
        ">
          <div className="mt-80 flex flex-col items-center lg:items-start">
            <div className="w-28 h-28 bg-white rounded-full flex items-center justify-center shadow-xl">
              <Image src="/img/Notebook12.png" width={90} height={90} alt="logo" />
            </div>
            <p className="text-sm font-semibold mt-3 tracking-widest uppercase">
              NOTEBOOK
            </p>
          </div>

          <h1 className="text-4xl lg:text-5xl font-extrabold leading-tight mb-5">
            Building the Future <br /> Of INDIA!
          </h1>

          <p className="text-base lg:text-lg opacity-90 leading-relaxed max-w-md">
            Empowering students with the knowledge, strategy, and confidence 
            to crack every competitive exam.
          </p>
        </div>

      
        <div
          className="
            relative z-20 
            w-full max-w-[500px] 
            mx-auto 
            mt-10 lg:mt-0 
            right-0 lg:absolute lg:right-12 bottom-0
            bg-white 
            py-12 px-8 lg:px-12 
            rounded-2xl shadow-2xl
          "
        >
          <p className="text-sm font-semibold text-gray-500 tracking-wider">
            LET'S GET YOU STARTED
          </p>

          <h2 className="text-3xl font-bold text-gray-900 mb-10">
            Create an Account
          </h2>

         
          <form className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-md" />
            <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-md" />
            <input type="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded-md" />

            <Link href="/Payment">
              <button className="w-full py-3 bg-black text-white font-semibold rounded-md mt-4">
                GET STARTED
              </button>
            </Link>
          </form>

         
          <div className="flex items-center my-7">
            <div className="flex-grow border-t border-gray-300" />
            <span className="mx-4 text-gray-500">Or</span>
            <div className="flex-grow border-t border-gray-300" />
          </div>

       
          <div className="space-y-3">
            <button
              onClick={() => setShowPopup(true)}
              className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-md hover:bg-gray-50"
            >
              <FaGoogle className="mr-3 text-red-500" /> Sign up with Google
            </button>

            <button className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-md hover:bg-gray-50">
              <FaFacebookF className="mr-3 text-blue-600" /> Sign up with Facebook
            </button>

            <button className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-md hover:bg-gray-50">
              <FaApple className="mr-3" /> Sign up with Apple
            </button>
          </div>

          <p className="mt-8 text-center text-gray-600 text-sm">
            Already have an account?{" "}
            <a href="#" className="font-bold text-black underline">LOGIN HERE</a>
          </p>
        </div>
      </div>

    
      {showPopup && (
        <div
          onClick={() => setShowPopup(false)}
          className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="bg-white px-8 py-6 rounded-md shadow-lg text-center w-[90%] max-w-sm"
          >
            <p className="text-gray-800 font-semibold text-lg leading-relaxed">
              Please Login to Your <br />
              Account to Gain Access <br />
              To Practice Test
            </p>

            <button
              onClick={() => setShowPopup(false)}
              className="mt-4 px-6 py-2 bg-black text-white rounded-md"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
