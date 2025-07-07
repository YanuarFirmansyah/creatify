// src/pages/auth/FreelancerRegister.jsx

import { useNavigate } from "react-router-dom"; // 1. Import useNavigate dari react-router-dom
import loginBg from "@/assets/login.png"; // Menggunakan background yang sama dengan halaman login/register biasa
import creatifyLogo from "@/assets/creatify.png"; // <<< 1. IMPORT LOGO


const FreelancerRegisterPage = () => {
    // 2. Inisialisasi useNavigate agar bisa kita gunakan untuk berpindah halaman
    const navigate = useNavigate();

    // 3. Buat fungsi untuk menangani submit form
    const handleSubmit = (event) => {
        // Mencegah halaman dari reload saat form disubmit
        event.preventDefault(); 
        
        // Di sini nantinya bisa ditambahkan logika untuk validasi atau mengirim data ke backend.
        // Setelah logika tersebut selesai, kita arahkan pengguna ke halaman berikutnya.
        
        // 4. Arahkan pengguna ke halaman register langkah kedua
        navigate('/freelancer/register/step2');
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center lg:justify-start px-4 lg:pl-40 bg-cover bg-center font-poppins"
            style={{ backgroundImage: `url(${loginBg})` }}
        >
            <div className="bg-white p-10 rounded-2xl shadow-xl w-full max-w-md">
                <div className="flex items-center justify-center gap-2 mb-8">
                    <h2 className="text-3xl font-bold text-gray-800">
                        Freelancer
                    </h2>
                    <img
                        src={creatifyLogo}
                        alt="Creatify Logo"
                        className="h-12" // Ukuran dibuat sedikit lebih besar
                    />
                </div>

                {/* 5. Tambahkan `onSubmit={handleSubmit}` ke tag form */}
                <form onSubmit={handleSubmit}>
                    {/* Field Email */}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-600 mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Masukkan Email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required // Tambahkan validasi dasar
                        />
                    </div>

                    {/* Field Nomor Telepon */}
                    <div className="mb-4">
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-600 mb-1">
                            Nomor Telepon
                        </label>
                        <input
                            type="tel"
                            id="phone"
                            placeholder="Masukkan Nomor Telepon"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>
                    
                    {/* Field Username */}
                    <div className="mb-4">
                         <label htmlFor="username" className="block text-sm font-medium text-gray-600 mb-1">
                              Username
                         </label>
                         <input
                              type="text"
                              id="username"
                              placeholder="Masukkan Username"
                              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                              required
                         />
                    </div>

                    {/* Field Password */}
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            placeholder="Masukkan Password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                            required
                        />
                    </div>

                    {/* Tombol Submit */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-fuchsia-600 transition duration-300 mt-4"
                    >
                        Selanjutnya
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FreelancerRegisterPage;