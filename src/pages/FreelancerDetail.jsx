import React, { useState } from "react";
import {
     Home,
     Clock,
     FileText,
     Check,
     ArrowRight,
     Star,
     ChevronLeft,
     ChevronRight,
} from "lucide-react";

// Komponen untuk menampilkan informasi freelancer
import { Link, useParams } from "react-router-dom";
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

// Komponen untuk menampilkan ulasan
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

// Komponen untuk menampilkan ringkasan layanan
const ServiceSummary = () => (
     <div className="mt-10 border border-gray-200 rounded-xl p-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
               Ringkasan Layanan
          </h3>
          <div className="text-gray-600 space-y-4 text-sm leading-relaxed">
               <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
               </p>
               <ul className="list-disc list-inside space-y-2">
                    <li>
                         Lorem ipsum dolor sit amet, consectetur adipiscing
                         elit.
                    </li>
                    <li>
                         Nam in lorem at libero venenatis dapibus ac non velit.
                    </li>
                    <li>
                         Ut aliquet purus at sapien congue, in rutrum urna
                         pretium.
                    </li>
                    <li>
                         Curabitur ac libero cursus, lobortis mi vitae,
                         malesuada tortor.
                    </li>
                    <li>Maecenas at lorem id nulla placerat imperdiet.</li>
                    <li>Fusce laoreet magna sed sodales elementum.</li>
                    <li>
                         Integer at magna a ante lacinia maximus nec sed sapien.
                    </li>
               </ul>
          </div>
     </div>
);

const FreelancerDetail = () => {
     const { id } = useParams();
     const [activeTab, setActiveTab] = useState("Basic");
     const images = [
          "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=800",
          "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800",
          "https://images.unsplash.com/photo-1557683316-973673baf926?w=800",
          "https://images.unsplash.com/photo-1614850523060-8da1d56ae135?w=800",
     ];
     const [mainImage, setMainImage] = useState(images[0]);
     const [activeImageIndex, setActiveImageIndex] = useState(0);
     const benefits = [
          "Benefit yang diberikan",
          "Benefit yang diberikan",
          "Benefit yang diberikan",
          "Benefit yang diberikan",
          "Benefit yang diberikan",
          "Benefit yang diberikan",
          "Benefit yang diberikan",
     ];

     return (
          <div className="bg-white font-sans">
               <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                         {/* Kolom Kiri: Info & Gambar */}
                         <div className="lg:col-span-2">
                              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                                   <Home size={16} />
                                   <span>/ video editing</span>
                              </div>
                              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                   Saya menawarkan jasa untuk edit video shorts
                                   anda
                              </h2>
                              <div className="mb-6">
                                   <img
                                        src={mainImage}
                                        alt="Service main"
                                        className="w-full aspect-video object-cover rounded-xl border-2 border-blue-400 shadow-lg"
                                   />
                                   <div className="flex justify-center mt-4 space-x-2">
                                        {images.map((_, index) => (
                                             <button
                                                  key={index}
                                                  className={`w-3 h-3 rounded-full ${
                                                       index ===
                                                       activeImageIndex
                                                            ? "bg-purple-600"
                                                            : "bg-gray-300"
                                                  }`}
                                                  onClick={() => {
                                                       setMainImage(
                                                            images[index]
                                                       );
                                                       setActiveImageIndex(
                                                            index
                                                       );
                                                  }}
                                             />
                                        ))}
                                   </div>
                              </div>
                              <div className="flex space-x-2 overflow-x-auto pb-2">
                                   {images.map((img, index) => (
                                        <img
                                             key={index}
                                             src={img}
                                             alt={`Thumbnail ${index + 1}`}
                                             className={`w-28 h-20 object-cover rounded-md cursor-pointer ${
                                                  index === activeImageIndex
                                                       ? "border-2 border-purple-600"
                                                       : "opacity-70"
                                             }`}
                                             onClick={() => {
                                                  setMainImage(img);
                                                  setActiveImageIndex(index);
                                             }}
                                        />
                                   ))}
                              </div>

                              {/* --- BAGIAN BARU DITAMBAHKAN DI SINI --- */}
                              <FreelancerInfo />
                              <ReviewsSection />
                              <ServiceSummary />
                              {/* --- AKHIR DARI BAGIAN BARU --- */}
                         </div>

                         {/* Kolom Kanan: Kartu Harga */}
                         <div className="lg:col-span-1">
                              <div className="border border-gray-200 rounded-2xl p-6 sticky top-28">
                                   <div className="flex border-b">
                                        {["Basic", "Plus", "Premium"].map(
                                             (tab) => (
                                                  <button
                                                       key={tab}
                                                       onClick={() =>
                                                            setActiveTab(tab)
                                                       }
                                                       className={`flex-1 py-2 text-center font-medium ${
                                                            activeTab === tab
                                                                 ? "text-purple-600 border-b-2 border-purple-600"
                                                                 : "text-gray-500"
                                                       }`}
                                                  >
                                                       {tab}
                                                  </button>
                                             )
                                        )}
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
                                                            {index + 1}.{" "}
                                                            {benefit}
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
                                             to={`/freelancer/${id}/order`} // Gunakan ID dinamis dari useParams
                                             className="w-full bg-purple-600 text-white font-semibold py-2.5 rounded-lg hover:bg-purple-700 transition flex items-center justify-center gap-2"
                                        >
                                             Order <ArrowRight size={16} />
                                        </Link>
                                   </div>
                              </div>
                         </div>
                    </div>
               </main>
          </div>
     );
};

export default FreelancerDetail;
