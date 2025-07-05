// src/pages/auth/Register.jsx
import loginBg from "@/assets/login.png";
import creatifyLogo from "@/assets/creatify.png";

const RegisterPage = () => {
     return (
          <div
               // BARIS INI DIUBAH AGAR LAYOUT SAMA SEPERTI HALAMAN LOGIN
               // Form akan berada di tengah pada layar kecil, dan di kiri pada layar besar.
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

                    <form>
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
                              />
                         </div>
                         <div className="mb-4">
                              <label
                                   htmlFor="phone"
                                   className="block text-sm font-medium text-gray-600 mb-1"
                              >
                                   Nomor Telepon
                              </label>
                              <input
                                   type="tel"
                                   id="phone"
                                   placeholder="Masukkan Nomor Telepon"
                                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                              />
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
                                   placeholder="Masukkan Password"
                                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                              />
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
                                   placeholder="Masukkan Konfirmasi Password"
                                   className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                              />
                         </div>

                         <div className="text-center text-sm text-gray-600 mb-8">
                              Sudah punya akun?{" "}
                              <a
                                   href="/login"
                                   className="font-semibold text-purple-600 hover:underline"
                              >
                                   Masuk
                              </a>
                         </div>

                         <button
                              type="submit"
                              className="w-full bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-fuchsia-600 transition duration-300"
                         >
                              Daftar
                         </button>
                    </form>
               </div>
          </div>
     );
};

export default RegisterPage;
