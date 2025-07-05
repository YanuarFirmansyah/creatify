// src/App.jsx

import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage"; // Jika HomePage.jsx di luar folder `auth`

import { Outlet } from "react-router-dom";
function App() {
     return (
          <div>
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
