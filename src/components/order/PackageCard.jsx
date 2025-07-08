import React from "react";
import { Clock, FolderKanban } from "lucide-react";

const PackageCard = ({
     name,
     price,
     deliveryTime,
     revisions,
     benefits,
     isSelected,
     onSelect,
}) => {
     const selectedStyle = isSelected
          ? "border-purple-600 border-2 shadow-xl"
          : "border-gray-200 border hover:shadow-md";

     const selectedRadioGradient = isSelected
          ? "bg-gradient-to-br from-purple-500 to-indigo-500"
          : "bg-white";

     return (
          <div
               className={`bg-white rounded-xl p-6 cursor-pointer transition-all duration-300 ${selectedStyle}`}
               onClick={onSelect}
          >
               <div className="flex justify-end mb-4">
                    <div
                         className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                              isSelected
                                   ? "border-purple-600"
                                   : "border-gray-300"
                         }`}
                    >
                         <div
                              className={`w-4 h-4 rounded-full transition-all ${selectedRadioGradient}`}
                         ></div>
                    </div>
               </div>
               <h3 className="text-xl font-bold text-center text-purple-600">
                    {name}
               </h3>
               <p className="text-3xl font-bold text-gray-800 text-center my-4 text-purple-600">
                    Rp {price.toLocaleString("id-ID")},00
               </p>
               <div className="flex justify-center space-x-4 text-sm text-gray-500 mb-6">
                    <div className="flex items-center space-x-1.5">
                         <Clock size={16} />
                         <span>{deliveryTime} hari kerja</span>
                    </div>
                    <div className="flex items-center space-x-1.5">
                         <FolderKanban size={16} />
                         <span>{revisions} kali revisi</span>
                    </div>
               </div>
               <ul className="space-y-2 text-gray-600 text-sm">
                    {benefits.map((benefit, index) => (
                         <li key={index}>
                              {index + 1}. {benefit}
                         </li>
                    ))}
               </ul>
          </div>
     );
};

export default PackageCard;
