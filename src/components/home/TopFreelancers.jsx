import React from "react";
import FreelancerCard from "@/components/FreelancerCard";

const dummyFreelancers = Array.from({ length: 8 }).map((_, i) => ({
     id: i + 1,
     name: `Top Freelancer ${i + 1}`,
     service: "Layanan Unggulan",
     rating: (4.5 + Math.random() * 0.5).toFixed(1),
     reviews: Math.floor(Math.random() * 150) + 50,
     price: 15000 + i * 5000,
     avatar: `https://i.pravatar.cc/150?img=${i + 10}`,
     thumbnail: `https://picsum.photos/seed/${i + 10}/300/180`,
     desc: "Freelancer ini adalah salah satu yang terbaik minggu ini.",
}));

const TopFreelancers = () => {
     return (
          <section className="max-w-screen-xl mx-auto px-6 py-10">
               <h2 className="text-2xl font-bold mb-6">
                    TOP FREELANCER THIS{" "}
                    <span className="text-purple-500">WEEK</span>
               </h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {dummyFreelancers.map((freelancer) => (
                         <FreelancerCard key={freelancer.id} {...freelancer} />
                    ))}
               </div>

               {/* Pagination */}
               <div className="flex justify-end mt-6">
                    <div className="flex space-x-2">
                         {[1, 2, 3, 4].map((number) => (
                              <button
                                   key={number}
                                   className="px-3 py-1 border rounded-lg text-sm text-gray-600 hover:bg-purple-100 hover:text-purple-600"
                              >
                                   {number}
                              </button>
                         ))}
                         <button className="px-3 py-1 border rounded-lg text-sm text-gray-600 hover:bg-purple-100">
                              ...
                         </button>
                    </div>
               </div>
          </section>
     );
};

export default TopFreelancers;
