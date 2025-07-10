// src/pages/auth/Register.jsx
import React, { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import loginBg from "@/assets/login.png";
import creatifyLogo from "@/assets/creatify.png";

const RegisterPage = () => {
     const [formData, setFormData] = useState({
          name: "",
          email: "",
          no_telp: "",
          password: "",
          confirmPassword: "",
          role: "client",
     });
     const [errors, setErrors] = useState({});
     const navigate = useNavigate();
     const { register, loading, error, clearError } = useAuth();

     // Clear error when component mounts
     useEffect(() => {
          clearError();
     }, [clearError]);

     const handleChange = (e) => {
          const { name, value } = e.target;
          setFormData((prev) => ({
               ...prev,
               [name]: value,
          }));

          // Clear field error when user starts typing
          if (errors[name]) {
               setErrors((prev) => ({
                    ...prev,
                    [name]: "",
               }));
          }
     };

     const validateForm = () => {
          const newErrors = {};

          if (!formData.name.trim()) {
               newErrors.name = "Nama harus diisi";
          }

          if (!formData.email.trim()) {
               newErrors.email = "Email harus diisi";
          } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
               newErrors.email = "Email tidak valid";
          }

          if (!formData.no_telp.trim()) {
               newErrors.no_telp = "Nomor telepon harus diisi";
          }

          if (!formData.password) {
               newErrors.password = "Password harus diisi";
          } else if (formData.password.length < 6) {
               newErrors.password = "Password minimal 6 karakter";
          }

          if (formData.password !== formData.confirmPassword) {
               newErrors.confirmPassword = "Konfirmasi password tidak cocok";
          }

          setErrors(newErrors);
          return Object.keys(newErrors).length === 0;
     };

     const handleSubmit = async (e) => {
          e.preventDefault();

          if (!validateForm()) {
               return;
          }

          try {
               // Remove confirmPassword from the data sent to API
               const { confirmPassword: _, ...userData } = formData;
               await register(userData);

               // Redirect to login page after successful registration
               navigate("/login");
          } catch (err) {
               // Error is handled by the context
               console.error("Registration failed:", err);
          }
     };

     return (
          <div
               className="min-h-screen flex items-center justify-center lg:justify-start px-4 lg:pl-40 bg-cover bg-center font-poppins"
               style={{ backgroundImage: `url(${loginBg})` }}
          >
               <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
                    <div className="flex items-center justify-center gap-2 mb-8">
                         <h2 className="text-3xl font-bold text-gray-800">
                              Buat Akun
                         </h2>
                         <img
                              src={creatifyLogo}
                              alt="Creatify Logo"
                              className="w-30"
                         />
                    </div>

                    {error && (
                         <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                              {error}
                         </div>
                    )}

                    <form onSubmit={handleSubmit}>
                         <div className="mb-4">
                              <label
                                   htmlFor="name"
                                   className="block text-sm font-medium text-gray-600 mb-1"
                              >
                                   Nama Lengkap
                              </label>
                              <input
                                   type="text"
                                   id="name"
                                   name="name"
                                   placeholder="Masukkan Nama Lengkap"
                                   className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                                        errors.name
                                             ? "border-red-500"
                                             : "border-gray-300"
                                   }`}
                                   value={formData.name}
                                   onChange={handleChange}
                              />
                              {errors.name && (
                                   <p className="text-red-500 text-xs mt-1">
                                        {errors.name}
                                   </p>
                              )}
                         </div>

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
                                   name="email"
                                   placeholder="Masukkan Email"
                                   className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                                        errors.email
                                             ? "border-red-500"
                                             : "border-gray-300"
                                   }`}
                                   value={formData.email}
                                   onChange={handleChange}
                              />
                              {errors.email && (
                                   <p className="text-red-500 text-xs mt-1">
                                        {errors.email}
                                   </p>
                              )}
                         </div>

                         <div className="mb-4">
                              <label
                                   htmlFor="no_telp"
                                   className="block text-sm font-medium text-gray-600 mb-1"
                              >
                                   Nomor Telepon
                              </label>
                              <input
                                   type="tel"
                                   id="no_telp"
                                   name="no_telp"
                                   placeholder="Masukkan Nomor Telepon"
                                   className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                                        errors.no_telp
                                             ? "border-red-500"
                                             : "border-gray-300"
                                   }`}
                                   value={formData.no_telp}
                                   onChange={handleChange}
                              />
                              {errors.no_telp && (
                                   <p className="text-red-500 text-xs mt-1">
                                        {errors.no_telp}
                                   </p>
                              )}
                         </div>

                         <div className="mb-4">
                              <label
                                   htmlFor="password"
                                   className="block text-sm font-medium text-gray-600 mb-1"
                              >
                                   Password
                              </label>
                              <input
                                   type="password"
                                   id="password"
                                   name="password"
                                   placeholder="Masukkan Password"
                                   className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                                        errors.password
                                             ? "border-red-500"
                                             : "border-gray-300"
                                   }`}
                                   value={formData.password}
                                   onChange={handleChange}
                              />
                              {errors.password && (
                                   <p className="text-red-500 text-xs mt-1">
                                        {errors.password}
                                   </p>
                              )}
                         </div>

                         <div className="mb-6">
                              <label
                                   htmlFor="confirmPassword"
                                   className="block text-sm font-medium text-gray-600 mb-1"
                              >
                                   Konfirmasi Password
                              </label>
                              <input
                                   type="password"
                                   id="confirmPassword"
                                   name="confirmPassword"
                                   placeholder="Masukkan Konfirmasi Password"
                                   className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                                        errors.confirmPassword
                                             ? "border-red-500"
                                             : "border-gray-300"
                                   }`}
                                   value={formData.confirmPassword}
                                   onChange={handleChange}
                              />
                              {errors.confirmPassword && (
                                   <p className="text-red-500 text-xs mt-1">
                                        {errors.confirmPassword}
                                   </p>
                              )}
                         </div>

                         <div className="mb-6">
                              <label className="block text-sm font-medium text-gray-600 mb-2">
                                   Daftar sebagai:
                              </label>
                              <div className="flex space-x-4">
                                   <label className="flex items-center">
                                        <input
                                             type="radio"
                                             name="role"
                                             value="client"
                                             checked={
                                                  formData.role === "client"
                                             }
                                             onChange={handleChange}
                                             className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                                        />
                                        <span className="ml-2 text-sm text-gray-700">
                                             Client
                                        </span>
                                   </label>
                                   <label className="flex items-center">
                                        <input
                                             type="radio"
                                             name="role"
                                             value="freelancer"
                                             checked={
                                                  formData.role === "freelancer"
                                             }
                                             onChange={handleChange}
                                             className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300"
                                        />
                                        <span className="ml-2 text-sm text-gray-700">
                                             Freelancer
                                        </span>
                                   </label>
                              </div>
                         </div>

                         <div className="text-center text-sm text-gray-600 mb-8">
                              Sudah punya akun?{" "}
                              <Link
                                   to="/login"
                                   className="font-semibold text-purple-600 hover:underline"
                              >
                                   Masuk
                              </Link>
                         </div>

                         <button
                              type="submit"
                              disabled={loading}
                              className="w-full bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-fuchsia-600 transition duration-300 disabled:from-purple-400 disabled:to-fuchsia-400 disabled:cursor-not-allowed"
                         >
                              {loading ? "Memproses..." : "Daftar"}
                         </button>
                    </form>
               </div>
          </div>
     );
};

export default RegisterPage;
