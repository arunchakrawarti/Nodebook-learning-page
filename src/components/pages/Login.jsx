// import React from "react";
// import Image from "next/image";
// import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";

// export default function Login() {
//   return (
//     <div className="min-h-screen flex items-center  justify-center bg-gray-100 p-4">
//       <div className="relative w-full max-w-6xl h-auto md:h-[660px] rounded-xl shadow-2xl overflow-hidden bg-white flex flex-col md:flex-row">

       
//         <div className="relative w-full md:w-1/2 h-[300px] md:h-full">
//           <Image
//             src="/img/Login.png" 
//             alt="Background"
//             fill
//             className="object-cover"
//           />
//           <div className="absolute inset-0  bg-opacity-100" />

//           {/* LEFT CONTENT */}
//           <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-12 text-white">
//             <div className="mb-8 flex flex-col items-start">
//               <div className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center shadow-xl">
//                 <Image
//                   src="/img/Notebook12.png" // dummy logo
//                   width={80}
//                   height={80}
//                   alt="logo"
//                 />
//               </div>
//               <p className="text-xs md:text-sm font-semibold mt-3 tracking-widest uppercase">NOTEBOOK</p>
//             </div>

//             <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
//               Building the Future <br /> Of INDIA!
//             </h1>

//             <p className="text-sm md:text-lg font-light opacity-90 md:pr-8 leading-relaxed">
//               Empowering students with the knowledge, strategy, and confidence to crack every competitive exam. Learn smart, achieve big — your success story begins here!
//             </p>

//             <div className="mt-6 md:mt-8 flex space-x-2">
//               <div className="w-8 h-1 bg-white rounded-full" />
//               <div className="w-2 h-1 bg-white opacity-50 rounded-full" />
//               <div className="w-2 h-1 bg-white opacity-50 rounded-full" />
//             </div>
//           </div>
//         </div>

//         {/* RIGHT SIDE FORM */}
//         <div className="w-full md:w-1/2 bg-white px-6 md:px-14 py-10 flex flex-col justify-center">
//           <div className="w-full max-w-sm mx-auto">
//             <p className="text-sm font-semibold text-gray-500 tracking-wider">LET'S GET YOU STARTED</p>
//             <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Create an Account</h2>

//             {/* FORM */}
//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Your Name"
//                 className="w-full p-3 border border-gray-300 rounded-md"
//               />

//               <input
//                 type="email"
//                 placeholder="Email"
//                 className="w-full p-3 border border-gray-300 rounded-md"
//               />

//               <input
//                 type="password"
//                 placeholder="Password"
//                 className="w-full p-3 border border-gray-300 rounded-md"
//               />

//               <button className="w-full py-3 bg-black text-white font-semibold rounded-md mt-4">
//                 GET STARTED
//               </button>
//             </form>

//             {/* OR SEPARATOR */}
//             <div className="flex items-center my-6">
//               <div className="flex-grow border-t border-gray-300" />
//               <span className="mx-3 text-gray-500">Or</span>
//               <div className="flex-grow border-t border-gray-300" />
//             </div>

//             {/* SOCIAL LOGIN */}
//             <div className="space-y-3">
//               <button className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-md hover:bg-gray-50">
//                 <FaGoogle className="mr-3 text-red-500" /> Sign up with Google
//               </button>

//               <button className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-md hover:bg-gray-50">
//                 <FaFacebookF className="mr-3 text-blue-600" /> Sign up with Facebook
//               </button>

//               <button className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-md hover:bg-gray-50">
//                 <FaApple className="mr-3" /> Sign up with Apple
//               </button>
//             </div>

//             <p className="mt-6 text-center text-gray-600 text-sm">
//               Already have an account?{' '}
//               <a href="#" className="font-bold text-black underline">LOGIN HERE</a>
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }



import React from "react";
import Image from "next/image";
import { FaGoogle, FaFacebookF, FaApple } from "react-icons/fa";

export default function Login() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="relative w-full w-full h-auto md:h-[660px] overflow-hidden flex flex-col md:flex-row">

        {/* FULL BACKGROUND IMAGE */}
        <Image
          src="/img/Login.png"
          alt="Background"
          fill
          className="object-cover z-0"
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/40 z-0" />

        {/* LEFT CONTENT OVERLAYED ON BG */}
        <div className="relative z-10 w-full md:w-1/2 h-[350px] md:h-full flex flex-col justify-center px-6 md:px-12 text-white">
          <div className="mb-8 flex flex-col items-start">
            <div className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center shadow-xl">
              <Image src="/img/Notebook12.png" width={80} height={80} alt="logo" />
            </div>
            <p className="text-xs md:text-sm font-semibold mt-3 tracking-widest uppercase">NOTEBOOK</p>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-4">
            Building the Future <br /> Of INDIA!
          </h1>

          <p className="text-sm md:text-lg font-light opacity-90 md:pr-8 leading-relaxed">
            Empowering students with the knowledge, strategy, and confidence to crack every competitive exam. Learn smart, achieve big — your success story begins here!
          </p>

          <div className="mt-6 md:mt-8 flex space-x-2">
            <div className="w-8 h-1 bg-white rounded-full" />
            <div className="w-2 h-1 bg-white opacity-50 rounded-full" />
            <div className="w-2 h-1 bg-white opacity-50 rounded-full" />
          </div>
        </div>

        {/* RIGHT WHITE FORM CARD */}
        <div className="relative z-10 w-full md:w-1/2 bg-white px-6 md:px-14 py-10 flex flex-col justify-center">
          <div className="w-full max-w-sm mx-auto">
            <p className="text-sm font-semibold text-gray-500 tracking-wider">LET'S GET YOU STARTED</p>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">Create an Account</h2>

            <form className="space-y-4">
              <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-md" />
              <input type="email" placeholder="Email" className="w-full p-3 border border-gray-300 rounded-md" />
              <input type="password" placeholder="Password" className="w-full p-3 border border-gray-300 rounded-md" />
              <button className="w-full py-3 bg-black text-white font-semibold rounded-md mt-4">GET STARTED</button>
            </form>

            <div className="flex items-center my-6">
              <div className="flex-grow border-t border-gray-300" />
              <span className="mx-3 text-gray-500">Or</span>
              <div className="flex-grow border-t border-gray-300" />
            </div>

            <div className="space-y-3">
              <button className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-md hover:bg-gray-50"><FaGoogle className="mr-3 text-red-500" /> Sign up with Google</button>
              <button className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-md hover:bg-gray-50"><FaFacebookF className="mr-3 text-blue-600" /> Sign up with Facebook</button>
              <button className="w-full flex items-center justify-center p-3 border border-gray-300 rounded-md hover:bg-gray-50"><FaApple className="mr-3" /> Sign up with Apple</button>
            </div>

            <p className="mt-6 text-center text-gray-600 text-sm">Already have an account? <a href="#" className="font-bold text-black underline">LOGIN HERE</a></p>
          </div>
        </div>
      </div>
    </div>
  );
}
