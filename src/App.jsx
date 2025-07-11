// src/App.jsx

import React from "react";
import { useAuth } from "./context/AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";
import { Outlet } from "react-router-dom";
import ScrollToTop from "./router/ScrollToTop";

function App() {
     const { loading } = useAuth();

     // Show loading spinner while initializing auth
     if (loading) {
          return (
               <div className="min-h-screen flex items-center justify-center bg-gray-50">
                    <LoadingSpinner size="large" text="Memuat aplikasi..." />
               </div>
          );
     }

     return (
          <div>
               <ScrollToTop />
               {/* Navbar */}
               <Navbar />

               {/* Halaman Utama */}
               <main className="flex-grow">
                    <Outlet />
               </main>

               {/* Footer */}
               <Footer />
          </div>
     );
}

export default App;
