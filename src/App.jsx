// src/App.jsx

import React from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import { Outlet } from "react-router-dom";
import ScrollToTop from "./router/ScrollToTop";

function App() {
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
