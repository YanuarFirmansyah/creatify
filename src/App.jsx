// src/App.jsx

import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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
