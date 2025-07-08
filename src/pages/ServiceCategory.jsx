import React from "react";
import { useParams } from "react-router-dom";
import FreelancerCard from "../components/FreelancerCard";
import FilterDropdown from "../components/service-category/FilterDropdown";

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

     const handleFilter = (type) => {
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
                         <FilterDropdown onFilterChange={handleFilter} />
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                         {dummyFreelancers.map((freelancer) => (
                              <FreelancerCard
                                   key={freelancer.id}
                                   {...freelancer}
                              />
                         ))}
                    </div>
               </div>
          </div>
     );
};

export default ServiceCategory;
