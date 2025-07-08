import React from "react";
import FreelancerCard from "@/components/FreelancerCard";

const TopFreelancers = () => {
     return (
          <section className="max-w-screen-xl mx-auto px-6 py-10">
               <h2 className="text-2xl font-bold mb-6">
                    TOP FREELANCER THIS{" "}
                    <span className="text-purple-500">WEEK</span>
               </h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {[...Array(8)].map((_, i) => (
                         <FreelancerCard key={i} />
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
