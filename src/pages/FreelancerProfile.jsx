import React, { useState } from "react";
import {
     Star,
     MapPin,
     MessageSquare,
     CheckCircle2,
     ArrowRight,
     ChevronLeft,
     ChevronRight,
} from "lucide-react";

// --- Komponen-komponen dari langkah sebelumnya (tidak diubah) ---
const ServiceCard = () => (
     <div className="flex flex-col">
          <img
               src={`https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=400&q=80`}
               alt="Tawaran Jasa"
               className="w-full aspect-video object-cover rounded-lg mb-3"
          />
          <div className="flex items-center gap-2 mb-2">
               <img
                    src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=40&h=40&fit=crop"
                    alt="Avatar"
                    className="w-6 h-6 rounded-full object-cover"
               />
               <span className="text-sm font-medium text-gray-800">
                    Muhammad Sumbul
               </span>
          </div>
          <p className="text-sm text-gray-700 mb-2 flex-grow">
               Saya menawarkan jasa untuk edit video shorts anda
          </p>
          <div className="flex justify-between items-center text-sm mt-auto">
               <div className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-400 fill-current" />{" "}
                    <span className="font-semibold">4.9</span>{" "}
                    <span className="text-gray-400">(152)</span>
               </div>
               <span className="font-semibold text-purple-600">
                    Mulai dari 15.000
               </span>
          </div>
     </div>
);

// --- BAGIAN BARU DITAMBAHKAN DI SINI ---

// Komponen untuk Ulasan Pengguna
const ReviewsSection = () => (
     <div className="mt-12">
          <div className="flex justify-between items-center mb-4">
               <h2 className="text-2xl font-bold text-gray-800">
                    Ulasan dari pengguna jasa
               </h2>
               <div className="flex gap-2">
                    <button className="p-1.5 border rounded-full text-gray-500 hover:bg-gray-100 transition">
                         <ChevronLeft size={18} />
                    </button>
                    <button className="p-1.5 border rounded-full text-gray-500 hover:bg-gray-100 transition">
                         <ChevronRight size={18} />
                    </button>
               </div>
          </div>
          <div className="border border-gray-200 rounded-xl p-6">
               <div className="flex items-center gap-3 mb-3">
                    <img
                         src="https://i.pravatar.cc/40?u=ahmad"
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
               <p className="text-gray-600 leading-relaxed">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum....
               </p>
               <div className="flex justify-end mt-4">
                    <a
                         href="/service/video-editing/reviews"
                         className="text-sm border border-gray-300 rounded-md px-4 py-1.5 font-medium text-gray-700 hover:bg-gray-50"
                    >
                         lihat semua ulasan
                    </a>
               </div>
          </div>
     </div>
);

// Komponen untuk Portofolio
const PortfolioSection = () => {
     const [selectedImage, setSelectedImage] = useState(0);
     const portfolioImages = Array(6).fill(
          "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=400&q=80"
     );

     return (
          <div className="mt-12">
               <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Portofolio
               </h2>
               <div className="border border-gray-200 rounded-xl p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                         {portfolioImages.map((imgSrc, index) => (
                              <div
                                   key={index}
                                   className={`rounded-lg cursor-pointer ${
                                        selectedImage === index
                                             ? "ring-2 ring-blue-500 ring-offset-2"
                                             : ""
                                   }`}
                                   onClick={() => setSelectedImage(index)}
                              >
                                   <img
                                        src={imgSrc}
                                        alt={`Portfolio item ${index + 1}`}
                                        className="w-full aspect-video object-cover rounded-lg"
                                   />
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     );
};

// Integrasi dengan router agar bisa mengambil parameter id dari URL
import { useParams } from "react-router-dom";

const FreelancerProfile = () => {
     // Ambil id freelancer dari URL
     const { id } = useParams();
     // Data dummy, bisa diganti fetch ke API sesuai id
     const skills = [
          "Keahlian satu",
          "Keahlian satu dan dua",
          "Keahlian satu dan tiga",
          "Keahlian satu dan empat",
          "Keahlian satu",
          "Keahlian satu",
          "Keahlian satu",
          "Keahlian satu",
     ];

     return (
          <div className="min-h-screen bg-white font-sans">
               <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
                         {/* Kolom Kiri: Detail Freelancer */}
                         <div className="lg:col-span-2">
                              {/* Bagian Header Profil */}
                              <div className="flex flex-col sm:flex-row items-start gap-8">
                                   <img
                                        src="https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=200&h=200&fit=crop"
                                        alt="Avatar"
                                        className="w-40 h-40 rounded-full object-cover shrink-0"
                                   />
                                   <div className="flex flex-col gap-2.5">
                                        <h1 className="text-4xl font-bold text-gray-800">
                                             {/* Tampilkan id dari router jika ada */}
                                             Muhammad Sumbul{" "}
                                             {id ? (
                                                  <span className="text-base font-normal text-gray-400">
                                                       #{id}
                                                  </span>
                                             ) : null}
                                        </h1>
                                        <p className="text-lg text-gray-500">
                                             Specialist Shorts Video Editor
                                        </p>
                                        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-700">
                                             <div className="flex items-center gap-1.5">
                                                  <Star
                                                       size={20}
                                                       className="text-yellow-400 fill-current"
                                                  />{" "}
                                                  <span className="font-bold">
                                                       4.9
                                                  </span>{" "}
                                                  <span className="text-gray-400">
                                                       (152)
                                                  </span>
                                             </div>
                                             <div className="flex items-center gap-1.5">
                                                  <MapPin
                                                       size={20}
                                                       className="text-purple-600"
                                                  />{" "}
                                                  <span className="font-medium">
                                                       Indonesia
                                                  </span>
                                             </div>
                                             <div className="flex items-center gap-1.5">
                                                  <MessageSquare
                                                       size={20}
                                                       className="text-purple-600"
                                                  />{" "}
                                                  <span className="font-medium">
                                                       Indonesia & English
                                                  </span>
                                             </div>
                                        </div>
                                        <div className="flex gap-4 mt-3">
                                             <button className="border border-gray-300 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition">
                                                  Hubungi saya
                                             </button>
                                             <button className="border border-gray-300 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition flex items-center gap-2">
                                                  Order <ArrowRight size={16} />
                                             </button>
                                        </div>
                                   </div>
                              </div>

                              {/* Bagian Keahlian */}
                              <div className="mt-12">
                                   <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                        Keahlian :
                                   </h2>
                                   <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                                        {skills.map((skill, index) => (
                                             <div
                                                  key={index}
                                                  className="flex items-center gap-3"
                                             >
                                                  <CheckCircle2
                                                       size={20}
                                                       className="text-purple-600"
                                                  />{" "}
                                                  <a
                                                       href="#"
                                                       className="text-gray-700 hover:text-purple-600 hover:underline"
                                                  >
                                                       {skill}
                                                  </a>
                                             </div>
                                        ))}
                                   </div>
                              </div>

                              {/* Bagian Tentang Saya */}
                              <div className="mt-12">
                                   <h2 className="text-2xl font-bold text-gray-800 mb-4">
                                        Tentang saya :
                                   </h2>
                                   <p className="text-gray-600 leading-relaxed">
                                        Lorem ipsum dolor sit amet, consectetur
                                        adipiscing elit, sed do eiusmod tempor
                                        incididunt ut labore et dolore magna
                                        aliqua. Ut enim ad minim veniam, quis
                                        nostrud exercitation ullamco laboris
                                        nisi ut aliquip ex ea commodo consequat.
                                        Duis aute irure dolor in reprehenderit
                                        in voluptate velit esse cillum...
                                   </p>
                              </div>

                              {/* --- BAGIAN ULASAN DAN PORTOFOLIO DITAMBAHKAN DI SINI --- */}
                              <ReviewsSection />
                              <PortfolioSection />
                              {/* --- AKHIR DARI BAGIAN BARU --- */}
                         </div>

                         {/* Kolom Kanan: Tawaran Jasa */}
                         <div className="lg:col-span-1">
                              <div className="border border-gray-200 rounded-xl p-6 h-full">
                                   <h2 className="text-2xl font-bold text-center mb-6">
                                        Tawaran Jasa
                                   </h2>
                                   <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                                        {[1, 2, 3, 4].map((id) => (
                                             <ServiceCard key={id} id={id} />
                                        ))}
                                   </div>
                                   <div className="mt-6">
                                        <button className="w-full text-center border border-gray-300 font-semibold py-2 rounded-lg hover:bg-gray-100 transition">
                                             Lihat Semua
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default FreelancerProfile;
