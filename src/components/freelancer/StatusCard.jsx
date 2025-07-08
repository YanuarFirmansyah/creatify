import React from "react";
import { Star } from "lucide-react";

const StatusCard = ({ stats }) => {
     return (
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
               <h2 className="text-2xl font-bold text-center mb-8">
                    Status Level
               </h2>
               <div className="space-y-4 text-gray-700">
                    <div className="flex justify-between items-center">
                         <span className="text-gray-500">Level Saya :</span>
                         <span className="bg-purple-100 text-purple-800 text-sm font-bold px-3 py-1 rounded-full">
                              {stats.level}
                         </span>
                    </div>
                    <div className="flex justify-between items-center">
                         <span className="text-gray-500">Rating :</span>
                         <div className="flex items-center gap-1 font-semibold">
                              <Star
                                   size={18}
                                   className="text-yellow-400 fill-current"
                              />
                              <span>{stats.rating}</span>
                         </div>
                    </div>
                    <div className="flex justify-between items-center">
                         <span className="text-gray-500">Respon rate :</span>
                         <span className="font-semibold">
                              {stats.responseRate}
                         </span>
                    </div>
                    <div className="flex justify-between items-center">
                         <span className="text-gray-500">Total Order :</span>
                         <span className="font-semibold">
                              {stats.totalOrders} Orders
                         </span>
                    </div>
               </div>
          </div>
     );
};

export default StatusCard;
