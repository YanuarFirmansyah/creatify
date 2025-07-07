// src/pages/MyFreelancerProfile.jsx

import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, Navigate } from 'react-router-dom';
import { Camera, Pencil, MapPin, MessageCircle, CheckCircle2 } from 'lucide-react';

// ===================================================================
// DATA DUMMY (nantinya diganti dengan data dari API)
// ===================================================================
const dummySkills = [
    "Keahlian satu", "Keahlian satu",
    "Keahlian satu dan dua", "Keahlian satu",
    "Keahlian satu dan tiga", "Keahlian satu",
    "Keahlian satu dan empat", "Keahlian satu",
];
const dummyPortfolio = Array(6).fill("https://images.unsplash.com/photo-1620712943543-95968233826a?w=400&q=80");


// ===================================================================
// KOMPONEN HALAMAN UTAMA
// ===================================================================
export default function MyFreelancerProfile() {
    const { user } = useAuth();

    // Jika tidak ada user atau user bukan freelancer, redirect
    if (!user || user.role !== 'freelancer') {
        return <Navigate to="/" replace />;
    }

    // Menggunakan data dari useAuth dan menambahkan data dummy
    const profile = {
        name: user?.name || "Muhammad Sumbul",
        username: user?.username || "@muhammad_sumbul",
        avatar: user?.avatar || null,
        id: user?.id || 1,
    };

    return (
        <div className="bg-white font-sans">
            <main className="max-w-screen-xl mx-auto px-6 py-12">
                {/* Header Profil */}
                <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 mb-8">
                    {/* Foto Profil dengan Tombol Edit */}
                    <div className="relative w-36 h-36 shrink-0">
                        <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow">
                            {profile.avatar ? (
                                <img src={profile.avatar} alt="avatar" className="w-full h-full object-cover" />
                            ) : (
                                <span className="w-full h-full flex items-center justify-center text-6xl font-bold text-gray-500">
                                    {profile.name[0].toUpperCase()}
                                </span>
                            )}
                        </div>
                        <button className="absolute bottom-1 right-1 w-9 h-9 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 hover:bg-gray-100 transition shadow">
                            <Camera size={18} className="text-gray-600" />
                        </button>
                    </div>
                    {/* Detail Nama dan Lokasi */}
                    <div className="flex flex-col gap-2 pt-2 text-center sm:text-left">
                        <div className="flex items-center gap-2 justify-center sm:justify-start">
                            <h1 className="text-3xl font-bold text-gray-800">{profile.name}</h1>
                            <button className="text-gray-400 hover:text-purple-600"><Pencil size={18} /></button>
                        </div>
                        <div className="flex items-center gap-2 justify-center sm:justify-start">
                            <p className="text-md text-gray-500">{profile.username}</p>
                            <button className="text-gray-400 hover:text-purple-600"><Pencil size={16} /></button>
                        </div>
                        <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 justify-center sm:justify-start">
                            <div className="flex items-center gap-1.5 text-gray-700">
                                <MessageCircle size={16} className="text-purple-600" /> Indonesia & English
                            </div>
                            <div className="flex items-center gap-1.5 text-gray-700">
                                <MapPin size={16} className="text-purple-600" /> Indonesia
                                <button className="text-gray-400 hover:text-purple-600"><Pencil size={14} /></button>
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
                                <h2 className="text-xl font-bold text-gray-800">Tentang Saya :</h2>
                                <button className="border border-gray-300 text-sm font-medium px-4 py-1.5 rounded-md hover:bg-gray-100 transition">Edit</button>
                            </div>
                            <p className="text-gray-600 leading-relaxed text-sm">
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </p>
                        </div>
                        {/* Kartu Keahlian Saya */}
                        <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
                            <div className="flex justify-between items-center mb-4">
                                <h2 className="text-xl font-bold text-gray-800">Keahlian Saya :</h2>
                                <button className="border border-gray-300 text-sm font-medium px-4 py-1.5 rounded-md hover:bg-gray-100 transition">Edit</button>
                            </div>
                            <div className="grid sm:grid-cols-2 gap-x-6 gap-y-3">
                                {dummySkills.map((skill, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <CheckCircle2 size={18} className="text-purple-600" />
                                        <span className="text-gray-700 text-sm">{skill}</span>
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
                                <h2 className="text-xl font-bold text-gray-800">Portofolio Saya :</h2>
                                <button className="bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-md hover:bg-purple-200 transition">
                                    Tambah Portofolio
                                </button>
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                {dummyPortfolio.map((imgSrc, index) => (
                                    <div key={index} className="rounded-lg overflow-hidden">
                                        <img
                                            src={imgSrc}
                                            alt={`Portfolio item ${index + 1}`}
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