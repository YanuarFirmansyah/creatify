import React from "react";
import { Link } from "react-router-dom";
import {
     Search,
     Star,
     Brush,
     Code2,
     Camera,
     Pencil,
     Scissors,
     Video,
     Music4,
} from "lucide-react";

import { Input } from "@/components/ui/input";
import creatifyLogo from "../assets/creatify.png";

const categoryList = [
     {
          label: "graphic design",
          value: "graphic-design",
          icon: <Brush size={28} className="text-purple-600" />,
     },
     {
          label: "programming",
          value: "programming",
          icon: <Code2 size={40} className="text-purple-600" />,
     },
     {
          label: "photography",
          value: "photography",
          icon: <Camera size={40} className="text-purple-600" />,
     },
     {
          label: "2d commision",
          value: "2d-commision",
          icon: <Scissors size={28} className="text-purple-600" />,
     },
     {
          label: "video editing",
          value: "video-editing",
          icon: <Video size={28} className="text-purple-600" />,
     },
     {
          label: "writting",
          value: "writting",
          icon: <Pencil size={40} className="text-purple-600" />,
     },
     {
          label: "music & audio",
          value: "music-audio",
          icon: <Music4 size={28} className="text-purple-600" />,
     },
];

const HomePage = () => {
     return (
          <div className="min-h-screen bg-white text-black font-sans">
               {/* Hero Section */}
               <section className="max-w-screen-xl mx-auto px-6 pt-16 pb-10 grid grid-cols-1 md:grid-cols-2 items-center gap-12">
                    {/* Left Side */}
                    <div>
                         <h5 className="text-3xl text-purple-400 font-light">
                              welcome to
                         </h5>
                         <img
                              src={creatifyLogo}
                              alt="Creatify Logo"
                              // Ukuran gambar diperbesar secara signifikan
                              className="w-[500px]"
                         />
                         <p className="italic text-purple-400 -mt-4">
                              "bergabunglah dengan kreativitas lokal"
                         </p>
                    </div>

                    {/* Right Side */}
                    <div className="bg-white border border-gray-200 rounded-2xl p-10">
                         <p className="text-2xl text-center text-purple-500 mb-6">
                              mulai wujudkan semua
                              <br /> bersama kreator lokal
                         </p>
                         <div className="relative">
                              <Input
                                   type="text"
                                   placeholder="cari freelancer..."
                                   className="pr-10 rounded-full border-gray-300 focus:ring-purple-400 text-base py-5"
                              />
                              <Search
                                   className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                                   size={20}
                              />
                         </div>
                    </div>
               </section>

               {/* Category Menu */}
               <section className="max-w-screen-xl bg-[#9876EB] bg-opacity-30 py-6 rounded-2xl mx-auto mb-12">
                    <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 justify-items-center">
                         {categoryList.map((item, index) => (
                              <Link
                                   to={`/service/${item.value}`}
                                   key={index}
                                   className="flex flex-col items-center text-sm p-4 rounded-xl transition-all duration-200 bg-white border border-purple-400 hover:scale-105 hover:shadow-md cursor-pointer w-28"
                              >
                                   <div className="mb-2">{item.icon}</div>
                                   <span className="text-center text-purple-700 font-medium">
                                        {item.label}
                                   </span>
                              </Link>
                         ))}
                    </div>
               </section>

               {/* Top Freelancer Section */}
               <section className="max-w-screen-xl mx-auto px-6 py-10">
                    <h2 className="text-2xl font-bold mb-6">
                         TOP FREELANCER THIS{" "}
                         <span className="text-purple-500">WEEK</span>
                    </h2>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                         {[...Array(8)].map((_, i) => (
                              <FreelancerCard key={i} />
                         ))}
                    </div>

                    {/* Pagination */}
                    <div className="flex justify-end mt-6">
                         <div className="flex space-x-2">
                              {[1, 2, 3, 4].map((number) => (
                                   <button
                                        key={number}
                                        className="px-3 py-1 border rounded-lg text-sm text-gray-600 hover:bg-purple-100 hover:text-purple-600"
                                   >
                                        {number}
                                   </button>
                              ))}
                              <button className="px-3 py-1 border rounded-lg text-sm text-gray-600 hover:bg-purple-100">
                                   ...
                              </button>
                         </div>
                    </div>
               </section>
          </div>
     );
};

function FreelancerCard() {
     // Untuk demo, id diset statis. Nanti bisa diganti dengan id dinamis dari data asli.
     const id = 1;
     return (
          <Link to={`/freelancer/${id}`} className="block">
               <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-200 transform hover:scale-105">
                    <img
                         src="https://via.placeholder.com/300x180"
                         alt="Thumbnail"
                         className="w-full h-44 object-cover"
                    />
                    <div className="p-4">
                         <div className="flex items-center space-x-2 mb-2">
                              <img
                                   src="https://via.placeholder.com/32"
                                   alt="Avatar"
                                   className="rounded-full w-8 h-8"
                              />
                              <p className="text-sm font-medium">
                                   Muhammad Sumbul
                              </p>
                         </div>
                         <p className="text-sm text-gray-700 mb-3">
                              Saya menawarkan jasa untuk edit video shorts anda
                         </p>
                         <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center space-x-1 text-purple-600">
                                   <Star size={14} />
                                   <span>4.9</span>
                                   <span className="text-gray-400">(152)</span>
                              </div>
                              <span className="text-purple-600 font-semibold">
                                   Mulai dari 15.000
                              </span>
                         </div>
                    </div>
               </div>
          </Link>
     );
}

export default HomePage;
