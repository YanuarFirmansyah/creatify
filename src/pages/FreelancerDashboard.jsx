// src/pages/FreelancerDashboard.jsx

import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Link, Navigate } from 'react-router-dom';
import { Star } from 'lucide-react';

// ===================================================================
// KARTU PROFIL (KIRI)
// ===================================================================
const ProfileCard = ({ user }) => {
    // Menggunakan data dari useAuth dan menambahkan data dummy
    const profile = {
        name: user?.name || "Freelancer Name",
        username: user?.username || "@username",
        avatar: user?.avatar || null,
        id: user?.id || 1,
    };

    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
            <div className="w-28 h-28 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow mb-4">
                {profile.avatar ? (
                    <img src={profile.avatar} alt="avatar" className="w-full h-full object-cover" />
                ) : (
                    <span className="w-full h-full flex items-center justify-center text-5xl font-bold text-gray-500">
                        {profile.name[0].toUpperCase()}
                    </span>
                )}
            </div>
            <h2 className="text-2xl font-bold text-gray-800">{profile.name}</h2>
            <p className="text-sm text-gray-500 mb-6">{profile.username}</p>
            <div className="w-full space-y-3">
                <Link 
                    to={`/freelancer/${profile.id}/profile`}
                    className="block w-full text-center border border-gray-300 font-semibold py-2.5 rounded-lg hover:bg-gray-100 transition"
                >
                    Lihat Halaman Profile
                </Link>
                <button className="w-full text-center border border-gray-300 font-semibold py-2.5 rounded-lg hover:bg-gray-100 transition">
                    Payment Method
                </button>
            </div>
        </div>
    );
};

// ===================================================================
// KARTU STATUS (TENGAH)
// ===================================================================
const StatusCard = ({ stats }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-center mb-8">Status Level</h2>
            <div className="space-y-4 text-gray-700">
                <div className="flex justify-between items-center">
                    <span className="text-gray-500">Level Saya :</span>
                    <span className="bg-purple-100 text-purple-800 text-sm font-bold px-3 py-1 rounded-full">{stats.level}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-500">Rating :</span>
                    <div className="flex items-center gap-1 font-semibold">
                        <Star size={18} className="text-yellow-400 fill-current" />
                        <span>{stats.rating}</span>
                    </div>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-500">Respon rate :</span>
                    <span className="font-semibold">{stats.responseRate}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-500">Total Order :</span>
                    <span className="font-semibold">{stats.totalOrders} Orders</span>
                </div>
            </div>
        </div>
    );
};

// ===================================================================
// KARTU PESANAN AKTIF (KANAN)
// ===================================================================
const ActiveOrdersCard = ({ orders }) => {
    return (
        <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">
            <div className="text-center mb-6">
                <h2 className="text-2xl font-bold">Active Orders</h2>
                <p className="text-gray-500">- 0 ( Rp 0 )</p>
            </div>
            <div className="space-y-4">
                {orders.map((order, index) => (
                    <div key={index} className="border border-gray-200 rounded-lg p-4">
                        <p className="font-semibold text-gray-800">{index + 1}. {order.title}</p>
                        <p className="text-sm text-gray-500 mb-3">{order.service}</p>
                        <div className="flex justify-end">
                            <button className="border border-gray-300 text-sm font-medium px-4 py-1.5 rounded-md hover:bg-gray-100 transition">
                                Detail Pesanan
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};


// ===================================================================
// KOMPONEN HALAMAN UTAMA
// ===================================================================
export default function FreelancerDashboard() {
    const { user } = useAuth();

    // Data dummy untuk tampilan
    const dummyStats = {
        level: "Freelancer Baru",
        rating: "-",
        responseRate: "-",
        totalOrders: 10,
    };
    const dummyOrders = [
        { title: "Basic Package by Yanuar", service: "/ Video Shorts Editing" },
        { title: "Basic Package by Sutajo", service: "/ Video Shorts Editing" },
    ];

    // Jika tidak ada user atau user bukan freelancer, redirect ke halaman utama
    if (!user || user.role !== 'freelancer') {
        // Menggunakan komponen Navigate untuk redirect
        return <Navigate to="/" replace />;
    }

    return (
        <div className="bg-white font-sans">
            <main className="max-w-screen-xl mx-auto px-6 py-12">
                <div className="grid lg:grid-cols-3 gap-8">
                    <ProfileCard user={user} />
                    <StatusCard stats={dummyStats} />
                    <ActiveOrdersCard orders={dummyOrders} />
                </div>
            </main>
        </div>
    );
}