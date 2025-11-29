"use client";
import React, { useState } from "react";

const Payment = () => {
  const [activeTab, setActiveTab] = useState("Cards");

  const tabs = ["Cards", "Netbanking", "Wallet", "Pay Later"];

  return (
    <div className="min-h-screen pt-27 bg-[#eeeeff] flex items-center justify-center p-5">
      <div className="bg-white w-full max-w-5xl rounded-xl shadow-xl overflow-hidden border border-[#d8d8ff]">
        <div className="grid grid-cols-1 md:grid-cols-3">

         
          <div className="bg-[#2e3192] text-white p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-xl font-semibold">My Store</h2>

              <div className="bg-white text-black rounded-lg p-4 mt-6">
                <p className="text-gray-500 text-sm">Price Summary</p>
                <h1 className="text-3xl font-bold mt-2">₹99</h1>

                <button className="w-full mt-5 bg-[#2e3192] text-white py-2 rounded-lg text-sm">
                  Using +91 7800637288
                </button>
              </div>
            </div>

            <p className="text-xs text-gray-200 mt-6">Powered by Razorpay</p>
          </div>

          
          <div className="col-span-2 p-6">

           
            <h2 className="text-lg font-semibold text-gray-700 mb-4">
              Payment Options
            </h2>

           
            <div className="flex gap-6 border-b pb-3">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`font-medium ${
                    activeTab === tab
                      ? "text-[#2e3192] border-b-2 border-[#2e3192]"
                      : "text-gray-500"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

           
            {activeTab === "Cards" && (
              <div className="mt-6 w-full max-w-md">
                <p className="font-medium text-gray-700 mb-3">Add a new card</p>

                <input
                  type="text"
                  placeholder="Card Number"
                  className="w-full border px-3 py-2 rounded-md mb-3 outline-[#2e3192]"
                />

                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="MM / YY"
                    className="border px-3 py-2 rounded-md outline-[#2e3192]"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="border px-3 py-2 rounded-md outline-[#2e3192]"
                  />
                </div>

                <div className="flex items-center gap-2 mt-3">
                  <input type="checkbox" />
                  <p className="text-gray-600 text-sm">
                    Save this card as per RBI guidelines
                  </p>
                </div>

                <button className="bg-black text-white w-full mt-5 py-2 rounded-md">
                  Continue
                </button>
              </div>
            )}

           
            {activeTab !== "Cards" && (
              <div className="mt-6 text-gray-500">
                <p>Select {activeTab} option</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
