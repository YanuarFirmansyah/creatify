import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Clock, FileText, Check, ArrowRight } from "lucide-react";

const PricingCard = ({ benefits, freelancerId }) => {
     const [activeTab, setActiveTab] = useState("Basic");

     return (
          <div className="border border-gray-200 rounded-2xl p-6 sticky top-28">
               <div className="flex border-b">
                    {["Basic", "Plus", "Premium"].map((tab) => (
                         <button
                              key={tab}
                              onClick={() => setActiveTab(tab)}
                              className={`flex-1 py-2 text-center font-medium ${
                                   activeTab === tab
                                        ? "text-purple-600 border-b-2 border-purple-600"
                                        : "text-gray-500"
                              }`}
                         >
                              {tab}
                         </button>
                    ))}
               </div>
               <div className="py-6">
                    <p className="text-3xl font-bold text-purple-600 mb-4">
                         Rp 15.000,00
                    </p>
                    <div className="flex justify-between text-sm text-gray-600 mb-6">
                         <div className="flex items-center gap-2">
                              <Clock size={16} />
                              <span>7 hari kerja</span>
                         </div>
                         <div className="flex items-center gap-2">
                              <FileText size={16} />
                              <span>1 kali revisi</span>
                         </div>
                    </div>
                    <ul className="space-y-3 text-sm text-gray-700">
                         {benefits.map((benefit, index) => (
                              <li
                                   key={index}
                                   className="flex items-center gap-3"
                              >
                                   <Check
                                        size={18}
                                        className="text-green-500"
                                   />
                                   <span>
                                        {index + 1}. {benefit}
                                   </span>
                              </li>
                         ))}
                    </ul>
               </div>
               <div className="flex flex-col sm:flex-row gap-3">
                    <button className="w-full border border-gray-300 text-gray-700 font-semibold py-2.5 rounded-lg hover:bg-gray-100 transition">
                         Hubungi saya
                    </button>
                    <Link
                         to={`/freelancer/${freelancerId}/order`} // Gunakan ID dinamis dari props
                         className="w-full bg-purple-600 text-white font-semibold py-2.5 rounded-lg hover:bg-purple-700 transition flex items-center justify-center gap-2"
                    >
                         Order <ArrowRight size={16} />
                    </Link>
               </div>
          </div>
     );
};

export default PricingCard;
