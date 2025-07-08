import React from "react";

const ActiveOrdersCard = ({ orders }) => {
     return (
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
               <div className="text-center mb-6">
                    <h2 className="text-2xl font-bold">Active Orders</h2>
                    <p className="text-gray-500">- 0 ( Rp 0 )</p>
               </div>
               <div className="space-y-4">
                    {orders.map((order, index) => (
                         <div
                              key={index}
                              className="border border-gray-200 rounded-lg p-4"
                         >
                              <p className="font-semibold text-gray-800">
                                   {index + 1}. {order.title}
                              </p>
                              <p className="text-sm text-gray-500 mb-3">
                                   {order.service}
                              </p>
                              <div className="flex justify-end">
                                   <button className="border border-gray-300 text-sm font-medium px-4 py-1.5 rounded-md hover:bg-gray-100 transition">
                                        Detail Pesanan
                                   </button>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
};

export default ActiveOrdersCard;
