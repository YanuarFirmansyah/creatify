import React from "react";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import creatifyLogo from "@/assets/creatify.png";

const HeroSection = () => {
     return (
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
               <div className="bg-white border border-gray-200 rounded-2xl p-8">
                    <p className="text-2xl text-center text-purple-400 mb-6">
                         mulai wujudkan semua
                         <br />
                         bersama kreator lokal
                    </p>
                    <div className="relative">
                         <Input
                              type="text"
                              placeholder="cari freelancer..."
                              // className diubah untuk menyesuaikan tampilan
                              className="w-full rounded-full border-gray-300 py-3 pl-5 pr-10 text-sm placeholder:text-gray-400 focus:border-purple-400 focus:ring-purple-400"
                         />
                         <Search
                              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                              size={20}
                         />
                    </div>
               </div>
          </section>
     );
};

export default HeroSection;
