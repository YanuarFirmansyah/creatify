// src/pages/PaymentPage.jsx
import React from "react";
import { Link } from 'react-router-dom';
import { DollarSign, Hourglass, CheckCircle } from 'lucide-react';
import qrisLogo from '../assets/qris-logo.png'; // Pastikan path benar
import qrCodeImage from '../assets/placeholder-qr.png'; // Pastikan path benar

// ===================================================================
// KOMPONEN UNTUK STEPPER PEMBAYARAN
// ===================================================================
const StepperIcon = ({ icon, isActive }) => {
    const activeStyle = isActive
        ? 'bg-purple-600 text-white'
        : 'bg-gray-200 text-gray-400';
    return (
        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 ${activeStyle}`}>
            {icon}
        </div>
    );
};

const PaymentStepper = ({ currentStep }) => {
    const steps = [
        { icon: <DollarSign size={20} /> },
        { icon: <Hourglass size={20} /> },
        { icon: <CheckCircle size={20} /> },
    ];

    return (
        <div className="w-full max-w-md mx-auto flex items-center justify-between mb-12">
            {steps.map((step, index) => (
                <React.Fragment key={index}>
                    <StepperIcon icon={step.icon} isActive={index <= currentStep} />
                    {index < steps.length - 1 && (
                        <div className={`flex-grow h-1 mx-2 ${index < currentStep ? 'bg-purple-600' : 'bg-gray-200'}`}></div>
                    )}
                </React.Fragment>
            ))}
        </div>
    );
};


// ===================================================================
// KOMPONEN HALAMAN UTAMA
// ===================================================================
const paymentDetails = {
    productName: 'Muhammad Sumbul / Basic Package',
    total: 15000,
    status: 'Belum dibayar',
    paymentId: 'YANUAR5376726798'
};

const categoryLinks = [
    { label: "graphic design", path: "/service/graphic-design" },
    { label: "photography", path: "/service/photography" },
    { label: "video editing", path: "/service/video-editing" },
    { label: "commision", path: "/service/commision" },
    { label: "music & audio", path: "/service/music-audio" },
    { label: "programming", path: "/service/programming" },
    { label: "writting", path: "/service/writting" },
];

export default function PaymentPage() {
    // Untuk demo, kita set step ke 1 (Menunggu Pembayaran)
    // 0 = Pesanan Dibuat, 1 = Menunggu Pembayaran, 2 = Selesai
    const currentStep = 1;

    return (
        <div className="bg-white font-sans">
            
            <main className="max-w-screen-xl mx-auto px-6 py-12">
                <h1 className="text-3xl font-bold mb-8 text-center">Your Order</h1>
                
                <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 lg:p-12 shadow-sm">
                    {/* Stepper */}
                    <PaymentStepper currentStep={currentStep} />
                    
                    {/* Judul Pembayaran */}
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <h2 className="text-xl font-semibold">Bayar dengan</h2>
                        <img src={qrisLogo} alt="QRIS Logo" className="h-6" />
                    </div>

                    {/* Konten Utama */}
                    <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                        {/* Kiri: QR Code */}
                        <div className="flex justify-center">
                            <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg">
                                <img src={qrCodeImage} alt="QR Code" className="w-56 h-56" />
                            </div>
                        </div>

                        {/* Kanan: Detail Pembayaran */}
                        <div className="space-y-4 text-sm">
                            <div className="flex">
                                <span className="w-40 text-gray-500">Detail Produk</span>
                                <span className="font-semibold text-purple-600">: {paymentDetails.productName}</span>
                            </div>
                            <div className="flex">
                                <span className="w-40 text-gray-500">Total Pembayaran</span>
                                <span className="font-semibold text-purple-600">: Rp {paymentDetails.total.toLocaleString('id-ID')}</span>
                            </div>
                            <div className="flex items-center">
                                <span className="w-40 text-gray-500">Status Pemesanan</span>
                                <div className="flex items-center">
                                    <span className="mr-2">:</span>
                                    <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2.5 py-1 rounded-full">
                                        {paymentDetails.status}
                                    </span>
                                </div>
                            </div>
                            <div className="flex">
                                <span className="w-40 text-gray-500">ID Pembayaran</span>
                                <span className="font-semibold text-purple-600">: {paymentDetails.paymentId}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}