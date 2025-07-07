// src/pages/auth/FreelancerRegister3.jsx

import { useState, useRef } from 'react';
import { User, UploadCloud } from 'lucide-react';
import loginBg from "@/assets/login.png";
import creatifyLogo from "@/assets/creatify.png";
import { useNavigate } from 'react-router-dom';

// Sub-komponen untuk Kotak Upload Foto agar tidak mengulang kode
const PhotoUploadBox = ({ label, photoPreview, onUploadClick }) => {
    return (
        <div className="mb-4">
            <label className="block text-sm font-medium text-gray-600 mb-2">{label}</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 w-full flex flex-col items-center justify-center">
                <div className="w-full h-20 bg-gray-50 rounded-md flex items-center justify-center overflow-hidden mb-3">
                    {photoPreview ? (
                        <img src={photoPreview} alt="Preview" className="w-full h-full object-contain" />
                    ) : (
                        <User size={48} className="text-gray-300" />
                    )}
                </div>
                <button
                    type="button"
                    onClick={onUploadClick}
                    className="bg-purple-100 text-purple-700 text-xs font-semibold px-4 py-2 rounded-md hover:bg-purple-200 transition flex items-center gap-2"
                >
                    <UploadCloud size={14} />
                    Upload Photo
                </button>
            </div>
        </div>
    );
};

const FreelancerRegisterPage3 = () => {
    const navigate = useNavigate();
    const [selfiePreview, setSelfiePreview] = useState(null);
    const [ktpPreview, setKtpPreview] = useState(null);

    const selfieFileInputRef = useRef(null);
    const ktpFileInputRef = useRef(null);

    const handleSelfieChange = (event) => {
        const file = event.target.files[0];
        if (file) setSelfiePreview(URL.createObjectURL(file));
    };

    const handleKtpChange = (event) => {
        const file = event.target.files[0];
        if (file) setKtpPreview(URL.createObjectURL(file));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Logika untuk upload foto ke server akan ada di sini
        console.log("Registrasi Selesai!");
        // Arahkan ke halaman utama setelah selesai
        navigate('/');
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
                        className="h-10"
                    />
                </div>

                <form onSubmit={handleSubmit}>
                    {/* Input tersembunyi untuk upload file */}
                    <input type="file" ref={selfieFileInputRef} onChange={handleSelfieChange} className="hidden" accept="image/*" />
                    <input type="file" ref={ktpFileInputRef} onChange={handleKtpChange} className="hidden" accept="image/*" />

                    {/* Komponen Upload Foto Selfie KTP */}
                    <PhotoUploadBox
                        label="Foto Selfie KTP"
                        photoPreview={selfiePreview}
                        onUploadClick={() => selfieFileInputRef.current.click()}
                    />

                    {/* Komponen Upload Foto KTP */}
                    <PhotoUploadBox
                        label="Foto KTP"
                        photoPreview={ktpPreview}
                        onUploadClick={() => ktpFileInputRef.current.click()}
                    />

                    {/* Tombol Submit */}
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-purple-500 to-fuchsia-500 text-white py-3 rounded-lg font-semibold hover:from-purple-600 hover:to-fuchsia-600 transition duration-300 mt-4"
                    >
                        Selesai
                    </button>
                </form>
            </div>
        </div>
    );
};

export default FreelancerRegisterPage3;