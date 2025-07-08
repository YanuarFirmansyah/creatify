import React from "react";
import { Link } from "react-router-dom";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const ReviewsSection = () => (
     <div className="mt-10">
          <div className="flex justify-between items-center mb-4">
               <h3 className="text-xl font-bold text-gray-800">
                    Ulasan dari pengguna jasa
               </h3>
               <div className="flex gap-2">
                    <button className="p-1.5 border rounded-full text-gray-500 hover:bg-gray-100">
                         <ChevronLeft size={18} />
                    </button>
                    <button className="p-1.5 border rounded-full text-gray-500 hover:bg-gray-100">
                         <ChevronRight size={18} />
                    </button>
               </div>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
               <div className="flex items-center gap-3 mb-3">
                    <img
                         src="https://i.pravatar.cc/40?u=ahmad" // Ganti dengan URL avatar pengguna
                         alt="User Avatar"
                         className="w-10 h-10 rounded-full"
                    />
                    <div>
                         <p className="font-semibold text-gray-800">
                              Ahmad Khasmiri
                         </p>
                         <div className="flex items-center gap-1 text-sm">
                              <Star
                                   size={16}
                                   className="text-yellow-400 fill-current"
                              />
                              <span>5.0</span>
                         </div>
                    </div>
               </div>
               <p className="text-gray-600 text-sm leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore....
               </p>
               <div className="flex justify-end mt-4">
                    <Link
                         to="/service/video-editing/reviews"
                         className="text-sm border border-gray-300 rounded-md px-4 py-1.5 font-medium text-gray-700 hover:bg-gray-50"
                    >
                         lihat semua ulasan
                    </Link>
               </div>
          </div>
     </div>
);

export default ReviewsSection;
