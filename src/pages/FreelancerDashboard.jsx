// src/pages/FreelancerDashboard.jsx

import React from "react";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import ProfileCard from "../components/freelancer/ProfileCard";
import StatusCard from "../components/freelancer/StatusCard";
import ActiveOrdersCard from "../components/freelancer/ActiveOrdersCard";
import ServiceManagementCard from "../components/freelancer/ServiceManagementCard";

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
          {
               title: "Basic Package by Yanuar",
               service: "/ Video Shorts Editing",
          },
          {
               title: "Basic Package by Sutajo",
               service: "/ Video Shorts Editing",
          },
     ];

     // Jika tidak ada user atau user bukan freelancer, redirect ke halaman utama
     if (!user || user.role !== "freelancer") {
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
                    <div className="mt-8">
                         <ServiceManagementCard />
                    </div>
               </main>
          </div>
     );
}
