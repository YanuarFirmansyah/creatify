import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import creatifyLogo from "../assets/creatify.png";

const Navbar = () => {
     const [menuOpen, setMenuOpen] = useState(false);
     const { user, logout, switchRole } = useAuth();

     const handleSwitchToUser = () => {
          // Panggil fungsi dari konteks dengan role 'user'
          switchRole("user");
     };

     const renderDesktopMenu = () => {
          if (!user) {
               // Kondisi 1: Belum Login
               return (
                    <>
                         <Link
                              to="/login"
                              className="text-sm text-gray-800 hover:underline"
                         >
                              Sign in
                         </Link>
                         <Link
                              to="/register"
                              className="border border-gray-400 px-4 py-1 rounded-full text-sm hover:bg-gray-100"
                         >
                              Join us
                         </Link>
                    </>
               );
          }

          if (user.role === "freelancer") {
               return (
                    <>
                         {/* <<< TAMBAHKAN onClick HANDLER DI SINI */}
                         <button
                              onClick={handleSwitchToUser}
                              className="border border-gray-400 px-4 py-1 rounded-full text-sm font-semibold hover:bg-gray-100 mr-4"
                         >
                              Switch to User
                         </button>
                         <ProfileDropdown role="freelancer" />
                    </>
               );
          }

          // Kondisi 3: Login sebagai User (default)
          return (
               <>
                    <Link
                         to="/freelancer/register"
                         className="border border-gray-400 px-4 py-1 rounded-full text-sm font-semibold hover:bg-gray-100 mr-4"
                    >
                         Start to Freelance
                    </Link>
                    <ProfileDropdown role="user" />
               </>
          );
     };

     const ProfileDropdown = ({ role }) => {
          const { user, logout } = useAuth();
          return (
               <div className="relative group">
                    <button className="flex items-center space-x-2 focus:outline-none">
                         <span className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center font-bold overflow-hidden">
                              {user.profile_image || user.avatar ? (
                                   <img
                                        src={user.profile_image || user.avatar}
                                        alt="avatar"
                                        className="w-full h-full object-cover rounded-full"
                                   />
                              ) : (
                                   <span className="text-lg text-gray-700">
                                        {user.name
                                             ? user.name[0].toUpperCase()
                                             : "U"}
                                   </span>
                              )}
                         </span>
                    </button>
                    <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg opacity-0 group-hover:opacity-100 transition-opacity z-10">
                         {role === "freelancer" ? (
                              <>
                                   <Link
                                        to="/freelancer/dashboard"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                   >
                                        Dashboard
                                   </Link>
                                   <Link
                                        to="/freelancer/profile"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                   >
                                        Freelancer Profile
                                   </Link>
                                   <Link
                                        to="/freelancer/earnings"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                   >
                                        Pendapatan
                                   </Link>
                              </>
                         ) : (
                              <>
                                   <Link
                                        to="/profile"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                   >
                                        Profile
                                   </Link>
                                   <Link
                                        to="/transactions"
                                        className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                                   >
                                        Riwayat Transaksi
                                   </Link>
                              </>
                         )}
                         <Link
                              to="/settings"
                              className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                         >
                              Settings
                         </Link>
                         <button
                              onClick={logout}
                              className="block w-full text-left px-4 py-2 text-gray-800 hover:bg-gray-100"
                         >
                              Logout
                         </button>
                    </div>
               </div>
          );
     };

     return (
          <header className="border-b border-gray-300">
               {/* Top Navbar */}
               <nav className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
                    <Link to="/">
                         <img
                              src={creatifyLogo}
                              alt="Creatify Logo"
                              className="w-25"
                         />
                    </Link>
                    <div className="hidden md:flex items-center space-x-4 px-2">
                         {renderDesktopMenu()}
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                         <button onClick={() => setMenuOpen(!menuOpen)}>
                              {menuOpen ? <X size={24} /> : <Menu size={24} />}
                         </button>
                    </div>
               </nav>

               {/* Mobile Menu */}
               {menuOpen && (
                    <div className="md:hidden px-6 py-4 space-y-4 border-t border-gray-300 max-w-screen-xl mx-auto">
                         <div className="flex flex-col items-start space-y-2">
                              {user ? (
                                   <>
                                        <Link
                                             to={`/freelancer/${user.id}/profile`}
                                             className="text-sm text-gray-800 hover:underline"
                                        >
                                             Profil Saya
                                        </Link>
                                        <button
                                             onClick={logout}
                                             className="text-sm text-gray-800 hover:underline"
                                        >
                                             Logout
                                        </button>
                                   </>
                              ) : (
                                   <>
                                        <Link
                                             to="/login"
                                             className="text-sm text-gray-800 hover:underline"
                                        >
                                             Sign in
                                        </Link>
                                        <Link
                                             to="/register"
                                             className="border border-gray-400 px-4 py-1 rounded-full text-sm hover:bg-gray-100"
                                        >
                                             Join us
                                        </Link>
                                   </>
                              )}
                         </div>
                         <div className="flex flex-col space-y-2 text-sm text-gray-800">
                              <Link
                                   to="/service/graphic-design"
                                   className="hover:text-purple-700"
                              >
                                   graphic design
                              </Link>
                              <Link
                                   to="/service/photography"
                                   className="hover:text-purple-700"
                              >
                                   photography
                              </Link>
                              <Link
                                   to="/service/video-editing"
                                   className="hover:text-purple-700"
                              >
                                   video editing
                              </Link>
                              <Link
                                   to="/service/commision"
                                   className="hover:text-purple-700"
                              >
                                   commision
                              </Link>
                              <Link
                                   to="/service/music-audio"
                                   className="hover:text-purple-700"
                              >
                                   music & audio
                              </Link>
                              <Link
                                   to="/service/programming"
                                   className="hover:text-purple-700"
                              >
                                   programming
                              </Link>
                              <Link
                                   to="/service/writting"
                                   className="hover:text-purple-700"
                              >
                                   writting
                              </Link>
                         </div>
                    </div>
               )}

               {/* Desktop Category Menu */}
               <div className="hidden md:block border-t-4 border-purple-600 w-full">
                    <div className="max-w-screen-xl mx-auto px-6 flex justify-start space-x-20 text-sm text-gray-800 py-2">
                         <Link
                              to="/service/graphic-design"
                              className="hover:text-purple-700"
                         >
                              graphic design
                         </Link>
                         <Link
                              to="/service/photography"
                              className="hover:text-purple-700"
                         >
                              photography
                         </Link>
                         <Link
                              to="/service/video-editing"
                              className="hover:text-purple-700"
                         >
                              video editing
                         </Link>
                         <Link
                              to="/service/commision"
                              className="hover:text-purple-700"
                         >
                              commision
                         </Link>
                         <Link
                              to="/service/music-audio"
                              className="hover:text-purple-700"
                         >
                              music & audio
                         </Link>
                         <Link
                              to="/service/programming"
                              className="hover:text-purple-700"
                         >
                              programming
                         </Link>
                         <Link
                              to="/service/writting"
                              className="hover:text-purple-700"
                         >
                              writting
                         </Link>
                    </div>
               </div>
          </header>
     );
};

export default Navbar;
