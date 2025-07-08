import React from "react";
import FreelancerCard from "../FreelancerCard"; // Menggunakan FreelancerCard yang sudah di-refactor

const ServiceOffers = () => {
     // Data dummy untuk ditampilkan. Di aplikasi nyata, ini akan datang dari props atau state.
     const dummyServices = Array.from({ length: 4 }).map((_, i) => ({
          id: i + 1,
          name: `Muhammad Sumbul`,
          desc: "Saya menawarkan jasa untuk edit video shorts anda",
          rating: 4.9,
          reviews: 152,
          price: 15000,
          avatar: `https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=40&h=40&fit=crop`,
          thumbnail: `https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=400&q=80`,
     }));

     return (
          <div className="border border-gray-200 rounded-xl p-6 h-full">
               <h2 className="text-2xl font-bold text-center mb-6">
                    Tawaran Jasa
               </h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-6">
                    {dummyServices.map((service) => (
                         <FreelancerCard key={service.id} {...service} />
                    ))}
               </div>
               <div className="mt-6">
                    <button className="w-full text-center border border-gray-300 font-semibold py-2 rounded-lg hover:bg-gray-100 transition">
                         Lihat Semua
                    </button>
               </div>
          </div>
     );
};

export default ServiceOffers;
