// src/pages/OrderPage.jsx
import React from "react";
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, FolderKanban, ArrowRight } from 'lucide-react';

// ===================================================================
// KOMPONEN UNTUK KARTU PAKET (didefinisikan di file yang sama)
// ===================================================================
const PackageCard = ({ name, price, deliveryTime, revisions, benefits, isSelected, onSelect }) => {
    const selectedStyle = isSelected
        ? 'border-purple-600 border-2 shadow-xl'
        : 'border-gray-200 border hover:shadow-md';

    const selectedRadioGradient = isSelected ? 'bg-gradient-to-br from-purple-500 to-indigo-500' : 'bg-white';

    return (
        <div
            className={`bg-white rounded-xl p-6 cursor-pointer transition-all duration-300 ${selectedStyle}`}
            onClick={onSelect}
        >
            <div className="flex justify-end mb-4">
                <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${isSelected ? 'border-purple-600' : 'border-gray-300'}`}>
                    <div className={`w-4 h-4 rounded-full transition-all ${selectedRadioGradient}`}></div>
                </div>
            </div>
            <h3 className="text-xl font-bold text-center text-purple-600">{name}</h3>
            <p className="text-3xl font-bold text-gray-800 text-center my-4 text-purple-600">
                Rp {price.toLocaleString('id-ID')},00
            </p>
            <div className="flex justify-center space-x-4 text-sm text-gray-500 mb-6">
                <div className="flex items-center space-x-1.5">
                    <Clock size={16} />
                    <span>{deliveryTime} hari kerja</span>
                </div>
                <div className="flex items-center space-x-1.5">
                    <FolderKanban size={16} />
                    <span>{revisions} kali revisi</span>
                </div>
            </div>
            <ul className="space-y-2 text-gray-600 text-sm">
                {benefits.map((benefit, index) => (
                    <li key={index}>{index + 1}. {benefit}</li>
                ))}
            </ul>
        </div>
    );
};

// ===================================================================
// KOMPONEN UNTUK RINGKASAN PESANAN (didefinisikan di file yang sama)
// ===================================================================
const OrderSummary = ({ selectedPackage }) => {
    const paymentId = 'YANUAR5376726799';
    const webServiceFee = 5000;
    const tax = 5000;
    const packagePrice = selectedPackage ? selectedPackage.price : 0;
    const totalPrice = packagePrice + webServiceFee + tax;

    return (
        <div className="bg-white rounded-xl border border-gray-200 p-6 h-fit sticky top-28">
            <h3 className="text-lg font-bold mb-6 text-center">Total Pembayaran</h3>
            <div className="space-y-3 text-sm text-gray-600">
                <div className="flex justify-between">
                    <span>Pilihan Paket :</span>
                    <span className="font-medium">{packagePrice.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between">
                    <span>Web Service :</span>
                    <span className="font-medium">{webServiceFee.toLocaleString('id-ID')}</span>
                </div>
                <div className="flex justify-between">
                    <span>Tax :</span>
                    <span className="font-medium">{tax.toLocaleString('id-ID')}</span>
                </div>
            </div>
            <hr className="my-4 border-gray-300"/>
            <div className="flex justify-between font-bold text-base mb-6">
                <span>Total Pembayaran :</span>
                <span>{totalPrice.toLocaleString('id-ID')}</span>
            </div>
            <div className="space-y-3">
                <button className="w-full text-center py-2.5 border border-gray-400 rounded-lg hover:bg-gray-100 font-medium text-sm transition">
                    Pilih Metode Pembayaran
                </button>
                <Link
                    to={`/payment/${paymentId}`}
                    className="w-full text-center py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold text-sm transition flex items-center justify-center gap-2"
                >
                    Order <ArrowRight size={16} />
                </Link>
            </div>
        </div>
    );
};


// ===================================================================
// KOMPONEN HALAMAN UTAMA
// ===================================================================
const packages = [
    { id: 'basic', name: 'Basic', price: 15000, deliveryTime: 7, revisions: 1, benefits: Array(7).fill('Benefit yang diberikan') },
    { id: 'plus', name: 'Plus', price: 25000, deliveryTime: 5, revisions: 2, benefits: Array(7).fill('Benefit yang diberikan') },
    { id: 'premium', name: 'Premium', price: 40000, deliveryTime: 3, revisions: 3, benefits: Array(7).fill('Benefit yang diberikan') }
];

const categoryLinks = [
    { label: "graphic design", path: "/service/graphic-design" },
    { label: "photography", path: "/service/photography" },
    { label: "video editing", path: "/service/video-editing" },
    { label: "commision", path: "/service/commision" },
    { label: "music & audio", path: "/service/music-audio" },
    { label: "programming", path: "/service/programming" },
    { label: "writting", path: "/service/writting" },
];

export default function OrderPage() {
    const [selectedPackageId, setSelectedPackageId] = useState('basic');
    const selectedPackage = packages.find(p => p.id === selectedPackageId);

    return (
        <div className="bg-white font-sans">

            <main className="max-w-screen-xl mx-auto px-6 py-12">
                <h1 className="text-3xl font-bold mb-8">Your Order</h1>
                <div className="grid lg:grid-cols-4 gap-8">
                    {/* Kolom Pilihan Paket */}
                    <div className="lg:col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {packages.map((pkg) => (
                            <PackageCard
                                key={pkg.id}
                                {...pkg}
                                isSelected={selectedPackageId === pkg.id}
                                onSelect={() => setSelectedPackageId(pkg.id)}
                            />
                        ))}
                    </div>
                    {/* Kolom Ringkasan */}
                    <div className="lg:col-span-1">
                        <OrderSummary selectedPackage={selectedPackage} />
                    </div>
                </div>
            </main>
        </div>
    );
}