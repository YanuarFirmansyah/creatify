import React from "react";
import { Link, useParams } from "react-router-dom";
import { Star } from "lucide-react";

const FreelancerInfo = () => {
     const { id } = useParams();
     return (
          <div className="flex items-center gap-6 py-8 border-t border-b border-gray-200 mt-12">
               <img
                    src={`https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=120&h=120&fit=crop`}
                    alt="Freelancer Avatar"
                    className="w-24 h-24 rounded-full object-cover"
               />
               <div>
                    <p className="text-sm text-gray-500">Freelancer :</p>
                    <h3 className="text-2xl font-bold text-gray-800">
                         Muhammad Sumbul
                    </h3>
                    <div className="flex items-center gap-4 mt-2">
                         <Link
                              to={`/freelancer/${id}/profile`}
                              className="border border-purple-500 text-purple-600 font-semibold px-5 py-1.5 rounded-lg hover:bg-purple-50 transition"
                         >
                              Kunjungi Profil
                         </Link>
                         <div className="flex items-center gap-1.5">
                              <Star
                                   size={20}
                                   className="text-yellow-400 fill-current"
                              />
                              <span className="font-bold text-gray-800">
                                   4.9
                              </span>
                              <span className="text-sm text-gray-500">
                                   (152)
                              </span>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default FreelancerInfo;
