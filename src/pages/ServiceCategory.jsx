import React, { useState, useRef, useEffect } from "react";
import { Star } from "lucide-react";
import { Link, useParams } from "react-router-dom";

const dummyFreelancers = Array.from({ length: 12 }).map((_, i) => ({
    id: i + 1,
    name: `Freelancer ${i + 1}`,
    service: "Jasa yang dipilih",
    rating: (4 + Math.random()).toFixed(1),
    reviews: Math.floor(Math.random() * 200),
    price: 10000 + i * 2000,
    avatar: `https://i.pravatar.cc/150?img=${i + 1}`,
    thumbnail: `https://picsum.photos/seed/${i + 1}/300/180`,
    desc: "Saya menawarkan jasa profesional sesuai kategori ini.",
}));

const ServiceCategory = () => {
    const { category } = useParams();
    const [showDropdown, setShowDropdown] = useState(false);
    const dropdownRef = useRef(null);

    // Tutup dropdown jika klik di luar
    useEffect(() => {
        function handleClickOutside(event) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        }
        if (showDropdown) {
            document.addEventListener("mousedown", handleClickOutside);
        } else {
            document.removeEventListener("mousedown", handleClickOutside);
        }
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [showDropdown]);

    // Tambahkan handler filter agar tidak error
    const handleFilter = (type) => {
        setShowDropdown(false);
        // Implementasi filter bisa ditambah di sini
        alert(`Filter: ${type} (coming soon)`);
    };

    return (
        <div className="min-h-screen bg-white font-sans">
            <div className="max-w-screen-xl mx-auto px-6 py-12">
                <div className="flex items-center justify-between mb-8 relative">
                    <h1 className="text-3xl font-bold text-purple-600 capitalize">
                        {category?.replace("-", " ")} Freelancers
                    </h1>
                    <div className="relative" ref={dropdownRef}>
                        <button
                            type="button"
                            className="flex items-center gap-2 border border-purple-300 px-6 py-2 rounded-full text-gray-500 text-base font-medium hover:bg-purple-50 transition-colors"
                            onClick={() => setShowDropdown((v) => !v)}
                        >
                            Filter by
                            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g>
                                <rect width="24" height="24" fill="none" />
                                <rect x="7" y="8" width="10" height="2" rx="1" fill="#a78bfa" />
                                <rect x="9" y="12" width="6" height="2" rx="1" fill="#a78bfa" />
                                <rect x="11" y="16" width="2" height="2" rx="1" fill="#a78bfa" />
                              </g>
                            </svg>
                        </button>
                        {showDropdown && (
                            <div className="absolute right-0 mt-2 w-48 bg-white border border-purple-200 rounded-lg shadow-lg z-20">
                                <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50" onClick={() => handleFilter('popular')}>
                                    Terpopuler
                                </button>
                                <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50" onClick={() => handleFilter('cheapest')}>
                                    Harga Termurah
                                </button>
                                <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50" onClick={() => handleFilter('expensive')}>
                                    Harga Termahal
                                </button>
                                <button className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50" onClick={() => handleFilter('rating')}>
                                    Rating Tertinggi
                                </button>
                            </div>
                        )}
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {dummyFreelancers.map((f) => (
                        <Link
                            to={`/freelancer/${f.id}`}
                            key={f.id}
                            className="block"
                        >
                            <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-200 transform hover:scale-105">
                                <img
                                    src={f.thumbnail}
                                    alt="Thumbnail"
                                    className="w-full h-44 object-cover"
                                />
                                <div className="p-4">
                                    <div className="flex items-center space-x-2 mb-2">
                                        <img
                                            src={f.avatar}
                                            alt="Avatar"
                                            className="rounded-full w-8 h-8"
                                        />
                                        <p className="text-sm font-medium">{f.name}</p>
                                    </div>
                                    <p className="text-sm text-gray-700 mb-3">
                                        {f.desc}
                                    </p>
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center space-x-1 text-purple-600">
                                            <Star size={14} />
                                            <span>{f.rating}</span>
                                            <span className="text-gray-400">({f.reviews})</span>
                                        </div>
                                        <span className="text-purple-600 font-semibold">
                                            Mulai dari {f.price.toLocaleString()}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ServiceCategory;
