// src/pages/MyFreelancerProfile.jsx

import React, { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { Link, Navigate } from "react-router-dom";
import {
     Camera,
     Pencil,
     MapPin,
     MessageCircle,
     CheckCircle2,
     Mail,
} from "lucide-react";
import ProfileImageUpload from "../components/ProfileImageUpload";
import { userAPI } from "../services/api";

// ===================================================================
// DATA DUMMY (nantinya diganti dengan data dari API)
// ===================================================================
const dummySkills = [
     "Keahlian satu",
     "Keahlian satu",
     "Keahlian satu dan dua",
     "Keahlian satu",
     "Keahlian satu dan tiga",
     "Keahlian satu",
     "Keahlian satu dan empat",
     "Keahlian satu",
];
const dummyPortfolio = Array(6).fill(
     "https://images.unsplash.com/photo-1620712943543-95968233826a?w=400&q=80"
);

// ===================================================================
// KOMPONEN HALAMAN UTAMA
// ===================================================================
export default function MyFreelancerProfile() {
     const { user, setUser } = useAuth();
     const [userDetail, setUserDetail] = useState(null);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

     // Fetch user detail from API
     useEffect(() => {
          const fetchUserDetail = async () => {
               try {
                    setLoading(true);
                    const detail = await userAPI.getUserDetail();
                    setUserDetail(detail);

                    // Update user context with new data
                    if (setUser) {
                         setUser((prevUser) => ({
                              ...prevUser,
                              ...detail,
                         }));
                    }
               } catch (err) {
                    console.error("Failed to fetch user detail:", err);
                    setError(err.message);
               } finally {
                    setLoading(false);
               }
          };

          fetchUserDetail();
     }, []);

     // Handle image update
     const handleImageUpdate = (newImageUrl) => {
          setUserDetail((prev) => ({
               ...prev,
               profile_image: newImageUrl,
          }));

          // Update user context
          if (setUser) {
               setUser((prevUser) => ({
                    ...prevUser,
                    profile_image: newImageUrl,
               }));
          }
     };

     // Jika tidak ada user atau user bukan freelancer, redirect
     if (!user || user.role !== "freelancer") {
          return <Navigate to="/" replace />;
     }

     // Menggunakan data dari API atau fallback ke user context
     const profile = {
          name: userDetail?.name || user?.name || "Muhammad Sumbul",
          email: userDetail?.email || user?.email || "user@example.com",
          username: (() => {
               // Coba ambil username dari API atau user context
               const apiUsername = userDetail?.username || user?.username;
               if (apiUsername) return apiUsername;

               // Jika tidak ada username, buat dari email
               const email = userDetail?.email || user?.email;
               if (email) {
                    const emailPrefix = email.split("@")[0];
                    return `@${emailPrefix}`;
               }

               // Fallback terakhir
               return "@muhammad_sumbul";
          })(),
          avatar: userDetail?.profile_image || user?.profile_image || null,
          bio:
               userDetail?.bio ||
               "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
          id: userDetail?.id || user?.id || 1,
     };

     if (loading) {
          return (
               <div className="bg-white font-sans">
                    <main className="max-w-screen-xl mx-auto px-6 py-12">
                         <div className="flex items-center justify-center">
                              <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-purple-600"></div>
                         </div>
                    </main>
               </div>
          );
     }

     if (error) {
          return (
               <div className="bg-white font-sans">
                    <main className="max-w-screen-xl mx-auto px-6 py-12">
                         <div className="text-center">
                              <p className="text-red-500">Error: {error}</p>
                              <button
                                   onClick={() => window.location.reload()}
                                   className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700"
                              >
                                   Retry
                              </button>
                         </div>
                    </main>
               </div>
          );
     }

     return (
          <div className="bg-white font-sans">
               <main className="max-w-screen-xl mx-auto px-6 py-12">
                    {/* Header Profil */}
                    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                         {/* Foto Profil dengan Upload Component */}
                         <ProfileImageUpload
                              currentImage={profile.avatar}
                              onImageUpdate={handleImageUpdate}
                              size="w-36 h-36"
                         />

                         {/* Detail Nama dan Lokasi */}
                         <div className="flex flex-col gap-2 pt-2 text-center sm:text-left">
                              <div className="flex items-center gap-2 justify-center sm:justify-start">
                                   <h1 className="text-3xl font-bold text-gray-800">
                                        {profile.name}
                                   </h1>
                                   <button className="text-gray-400 hover:text-purple-600">
                                        <Pencil size={18} />
                                   </button>
                              </div>
                              <div className="flex items-center gap-2 justify-center sm:justify-start">
                                   <p className="text-md text-gray-500">
                                        {profile.username}
                                   </p>
                                   <button className="text-gray-400 hover:text-purple-600">
                                        <Pencil size={16} />
                                   </button>
                              </div>
                              <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 justify-center sm:justify-start">
                                   <div className="flex items-center gap-1.5 text-gray-700">
                                        <Mail
                                             size={16}
                                             className="text-purple-600"
                                        />
                                        {profile.email}
                                   </div>
                                   <div className="flex items-center gap-1.5 text-gray-700">
                                        <MessageCircle
                                             size={16}
                                             className="text-purple-600"
                                        />{" "}
                                        Indonesia & English
                                   </div>
                                   <div className="flex items-center gap-1.5 text-gray-700">
                                        <MapPin
                                             size={16}
                                             className="text-purple-600"
                                        />{" "}
                                        Indonesia
                                        <button className="text-gray-400 hover:text-purple-600">
                                             <Pencil size={14} />
                                        </button>
                                   </div>
                              </div>
                         </div>
                    </div>

                    {/* Grid Utama (Kiri: About & Skills, Kanan: Portfolio) */}
                    <div className="grid lg:grid-cols-3 gap-8">
                         {/* Kolom Kiri */}
                         <div className="lg:col-span-2 space-y-8">
                              {/* Kartu Tentang Saya */}
                              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                   <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-xl font-bold text-gray-800">
                                             Tentang Saya :
                                        </h2>
                                        <button className="border border-gray-300 text-sm font-medium px-4 py-1.5 rounded-md hover:bg-gray-100 transition">
                                             Edit
                                        </button>
                                   </div>
                                   <p className="text-gray-600 leading-relaxed text-sm">
                                        {profile.bio}
                                   </p>
                              </div>
                              {/* Kartu Keahlian Saya */}
                              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                   <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-xl font-bold text-gray-800">
                                             Keahlian Saya :
                                        </h2>
                                        <button className="border border-gray-300 text-sm font-medium px-4 py-1.5 rounded-md hover:bg-gray-100 transition">
                                             Edit
                                        </button>
                                   </div>
                                   <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                                        {dummySkills.map((skill, index) => (
                                             <div
                                                  key={index}
                                                  className="flex items-center gap-3"
                                             >
                                                  <CheckCircle2
                                                       size={18}
                                                       className="text-purple-600"
                                                  />
                                                  <span className="text-gray-700 text-sm">
                                                       {skill}
                                                  </span>
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         </div>

                         {/* Kolom Kanan */}
                         <div className="lg:col-span-1">
                              {/* Kartu Portofolio */}
                              <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                                   <div className="flex justify-between items-center mb-4">
                                        <h2 className="text-xl font-bold text-gray-800">
                                             Portofolio Saya :
                                        </h2>
                                        <button className="bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-md hover:bg-purple-200 transition">
                                             Tambah Portofolio
                                        </button>
                                   </div>
                                   <div className="grid grid-cols-2 gap-4">
                                        {dummyPortfolio.map((imgSrc, index) => (
                                             <div
                                                  key={index}
                                                  className="rounded-lg overflow-hidden"
                                             >
                                                  <img
                                                       src={imgSrc}
                                                       alt={`Portfolio item ${
                                                            index + 1
                                                       }`}
                                                       className="w-full aspect-square object-cover"
                                                  />
                                             </div>
                                        ))}
                                   </div>
                              </div>
                         </div>
                    </div>
               </main>
          </div>
     );
}
