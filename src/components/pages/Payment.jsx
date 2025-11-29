import React from "react";

export default function PaymentUI() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-[#EDE7FF] p-4">
      <div className="w-full max-w-5xl bg-white rounded-xl mt-20 shadow-xl border border-[#3B38D0] h-auto md:h-[500px] overflow-hidden flex flex-col md:flex-row">
       
        <div className="w-full md:w-1/3 bg-[#1B1FAE] text-white p-6 flex flex-col justify-between">
          <div>
            <h2 className="font-semibold text-lg">My Store</h2>
            <div className="mt-6 bg-white text-black rounded-lg p-4">
              <p className="text-sm font-medium">Price Summary</p>
              <h1 className="text-3xl font-bold mt-2">₹99</h1>
              <button className="mt-4 w-full bg-black text-white py-2 rounded-md text-sm">
                Using +91 700593 7785
              </button>
            </div>
          </div>
          <p className="text-xs opacity-70 mt-6">Powered by Akocapay</p>
        </div>

        
        <div className="w-full md:w-2/3 p-6 bg-white">
          <h2 className="text-center text-sm font-medium text-gray-700 mb-6">
            Payment Options
          </h2>

          <div className="flex gap-6">
          
            <div className="w-1/3 flex flex-col gap-4 text-sm font-medium text-gray-700">
              <button className="flex items-center gap-2">Cards</button>
              <button className="flex items-center gap-2">Netbanking</button>
              <button className="flex items-center gap-2">Wallet</button>
              <button className="flex items-center gap-2">Pay Later</button>
            </div>

            <div className="w-2/3">
              <p className="font-medium mb-2">Add a new card</p>

              <input
                type="text"
                placeholder="Card Number"
                className="w-full border p-2 rounded-md text-sm mb-3"
              />

              <div className="flex gap-3 mb-3">
                <input
                  type="text"
                  placeholder="MM / YY"
                  className="w-1/2 border p-2 rounded-md text-sm"
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className="w-1/2 border p-2 rounded-md text-sm"
                />
              </div>

              <div className="flex items-center gap-2 mb-4">
                <input type="checkbox" />
                <p className="text-xs">Save the card as per RBI guidelines</p>
              </div>

              <button className="w-full bg-black text-white py-2 rounded-md text-sm">
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
