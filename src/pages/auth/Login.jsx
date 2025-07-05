import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import loginBg from "@/assets/login.png";
import creatifyLogo from "@/assets/creatify.png";

const Login = () => {
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
     const navigate = useNavigate();
     const { login } = useAuth();

     const handleSubmit = (e) => {
          e.preventDefault();
          // Simulasi login: user id dan name dummy
          const dummyUser = {
               id: 1,
               name: "Budi",
               email,
          };
          login(dummyUser);
          navigate("/");
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
                    <form onSubmit={handleSubmit}>
                         <div className="mb-4">
                              <label
                                   htmlFor="email"
                                   className="block text-sm font-medium text-gray-600 mb-1"
                              >
                                   Email atau Nomor Telepon
                              </label>
                              <input
                                   type="text"
                                   id="email"
                                   placeholder="Masukkan Email atau Nomor Telepon"
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
                              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition duration-300"
                         >
                              Lanjutkan
                         </button>
                    </form>
               </div>
          </div>
     );
};

export default Login;
