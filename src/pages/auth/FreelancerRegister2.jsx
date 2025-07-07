// src/pages/auth/FreelancerRegister2.jsx

import { useState, useRef } from 'react';
import { User } from 'lucide-react';
import loginBg from "@/assets/login.png";
import creatifyLogo from "@/assets/creatify.png";
import { useNavigate } from 'react-router-dom'; // <<< 1. IMPORT useNavigate

// Sub-komponen untuk Radio Button yang sudah di-styling menjadi kotak
const RadioBoxInput = ({ id, name, value, label, checked, onChange }) => {
    return (
        <label
            htmlFor={id}
            className={`flex items-center cursor-pointer border rounded-lg px-4 py-2 transition-all w-full justify-center
                ${checked ? 'border-purple-600 border-2 bg-purple-50' : 'border-gray-300 hover:border-gray-400'}`}
        >
            <input
                id={id}
                type="radio"
                name={name}
                value={value}
                checked={checked}
                onChange={onChange}
                className="sr-only"
            />
            <div className={`w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all ${checked ? 'border-purple-600' : 'border-gray-300'}`}>
                {checked && <div className="w-3 h-3 bg-purple-600 rounded-full"></div>}
            </div>
            <span className="ml-3 text-sm font-medium text-gray-800">{label}</span>
        </label>
    );
};

const FreelancerRegisterPage2 = () => {
    const navigate = useNavigate(); // <<< 2. INISIALISASI useNavigate
    const [photoPreview, setPhotoPreview] = useState(null);
    const [freelancerType, setFreelancerType] = useState('part-time');
    const fileInputRef = useRef(null);

    const handlePhotoChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setPhotoPreview(URL.createObjectURL(file));
        }
    };

    const handleChoosePhotoClick = () => {
        fileInputRef.current.click();
    };

    // <<< 3. BUAT FUNGSI UNTUK MENANGANI SUBMIT FORM
    const handleSubmit = (event) => {
        event.preventDefault(); // Mencegah reload halaman
        // Di sini bisa ditambahkan logika untuk validasi atau menyimpan data
        
        // Arahkan ke halaman berikutnya
        navigate('/freelancer/register/step3');
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
                        className="h-12"
                    />
                </div>

                {/* <<< 4. GUNAKAN FUNGSI handleSubmit PADA FORM */}
                <form onSubmit={handleSubmit}>
                    <div className="flex items-center gap-5 mb-6">
                        <div className="w-28 h-28 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center overflow-hidden flex-shrink-0">
                            {photoPreview ? (
                                <img src={photoPreview} alt="Preview" className="w-full h-full object-cover" />
                            ) : (
                                <User size={48} className="text-gray-300" />
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-600 mb-2">
                                Pilih Foto Profile
                            </label>
                            <input
                                type="file"
                                ref={fileInputRef}
                                onChange={handlePhotoChange}
                                className="hidden"
                                accept="image/*"
                            />
                            <button
                                type="button"
                                onClick={handleChoosePhotoClick}
                                className="bg-gray-200 text-gray-700 text-xs px-4 py-1.5 rounded-md hover:bg-gray-300 transition"
                            >
                                Choose Photo
                            </button>
                        </div>
                    </div>

                    <div className="mb-6">
                        <label className="block text-sm font-medium text-gray-600 mb-2">
                            Tipe Freelancer
                        </label>
                        <div className="flex space-x-4">
                            <RadioBoxInput
                                id="part-time"
                                name="freelancerType"
                                value="part-time"
                                label="Part Time"
                                checked={freelancerType === 'part-time'}
                                onChange={(e) => setFreelancerType(e.target.value)}
                            />
                            <RadioBoxInput
                                id="full-time"
                                name="freelancerType"
                                value="full-time"
                                label="Full Time"
                                checked={freelancerType === 'full-time'}
                                onChange={(e) => setFreelancerType(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="mb-8">
                        <label htmlFor="about" className="block text-sm font-medium text-gray-600 mb-1">
                            Tentang Dirimu
                        </label>
                        <textarea
                            id="about"
                            rows="4"
                            placeholder="Ketikkan Deskripsi soal dirimu"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                        ></textarea>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-fuchsia-600 transition duration-300"
                    >
                        Selanjutnya
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FreelancerRegisterPage2;