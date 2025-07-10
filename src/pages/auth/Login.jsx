import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import loginBg from "@/assets/login.png";
import creatifyLogo from "@/assets/creatify.png";

const Login = () => {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     // const [role, setRole] = useState("client"); // Role selection disabled
     const navigate = useNavigate();
     const { login, loading, error, clearError } = useAuth();

     // Clear error when component mounts
     useEffect(() => {
          clearError();
     }, [clearError]);

     const handleSubmit = async (e) => {
          e.preventDefault();

          try {
               // Role will be determined by the backend based on user's actual role
               await login({ email, password });
               navigate("/");
          } catch (err) {
               // Error is handled by the context
               console.error("Login failed:", err);
          }
     };

     return (
          <div
               className="min-h-screen flex items-center justify-center lg:justify-start px-4 lg:pl-40 bg-cover bg-center font-poppins"
               style={{ backgroundImage: `url(${loginBg})` }}
          >
               <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
                    <div className="text-center mb-8">
                         <img
                              src={creatifyLogo}
                              alt="Creatify Logo"
                              className="w-30 mx-auto"
                         />
                    </div>
                    <h2 className="text-2xl font-bold text-center text-gray-800 mb-8">
                         Masuk / Buat Akun
                    </h2>

                    {error && (
                         <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                              {error}
                         </div>
                    )}

                    <form onSubmit={handleSubmit}>
                         <div className="mb-4">
                              <label
                                   htmlFor="email"
                                   className="block text-sm font-medium text-gray-600 mb-1"
                              >
                                   Email
                              </label>
                              <input
                                   type="email"
                                   id="email"
                                   placeholder="Masukkan Email"
                                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                   value={email}
                                   onChange={(e) => setEmail(e.target.value)}
                                   required
                              />
                         </div>
                         <div className="mb-6">
                              <label
                                   htmlFor="password"
                                   className="block text-sm font-medium text-gray-600 mb-1"
                              >
                                   Password
                              </label>
                              <input
                                   type="password"
                                   id="password"
                                   placeholder="Masukkan Password"
                                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                                   value={password}
                                   onChange={(e) => setPassword(e.target.value)}
                                   required
                              />
                         </div>
                         {/* Role selection disabled - role will be determined by backend
                         <div className="mb-6">
                              <label className="block text-sm font-medium text-gray-600 mb-2">Login sebagai:</label>
                              <div className="flex space-x-4">
                                   <label className="flex items-center">
                                        <input 
                                             type="radio" 
                                             name="role" 
                                             value="client" 
                                             checked={role === 'client'} 
                                             onChange={(e) => setRole(e.target.value)} 
                                             className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300" 
                                        />
                                        <span className="ml-2 text-sm text-gray-700">Client</span>
                                   </label>
                                   <label className="flex items-center">
                                        <input 
                                             type="radio" 
                                             name="role" 
                                             value="freelancer" 
                                             checked={role === 'freelancer'} 
                                             onChange={(e) => setRole(e.target.value)} 
                                             className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300" 
                                        />
                                        <span className="ml-2 text-sm text-gray-700">Freelancer</span>
                                   </label>
                              </div>
                         </div>
                         */}
                         <div className="flex justify-between items-center text-sm mb-8">
                              <Link
                                   to="/register"
                                   className="text-gray-600 hover:underline"
                              >
                                   Belum punya{" "}
                                   <span className="font-semibold text-purple-600">
                                        Akun ?
                                   </span>
                              </Link>
                              <a
                                   href="#"
                                   className="text-purple-600 hover:underline"
                              >
                                   Lupa password ?
                              </a>
                         </div>
                         <button
                              type="submit"
                              disabled={loading}
                              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300 disabled:bg-purple-400 disabled:cursor-not-allowed"
                         >
                              {loading ? "Memproses..." : "Lanjutkan"}
                         </button>
                    </form>
               </div>
          </div>
     );
};

export default Login;
