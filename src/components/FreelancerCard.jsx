import React from "react";
import { Link } from "react-router-dom";
import { Star } from "lucide-react";

function FreelancerCard({
     id,
     name,
     desc,
     rating,
     reviews,
     price,
     avatar,
     thumbnail,
}) {
     return (
          <Link to={`/freelancer/${id}`} className="block">
               <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition duration-200 transform hover:scale-105">
                    <img
                         src={
                              thumbnail || "https://via.placeholder.com/300x180"
                         }
                         alt="Thumbnail"
                         className="w-full h-44 object-cover"
                    />
                    <div className="p-4">
                         <div className="flex items-center space-x-2 mb-2">
                              <img
                                   src={
                                        avatar ||
                                        "https://via.placeholder.com/32"
                                   }
                                   alt="Avatar"
                                   className="rounded-full w-8 h-8"
                              />
                              <p className="text-sm font-medium">
                                   {name || "Freelancer Name"}
                              </p>
                         </div>
                         <p className="text-sm text-gray-700 mb-3 h-10">
                              {desc ||
                                   "Description of the service offered by the freelancer."}
                         </p>
                         <div className="flex items-center justify-between text-sm">
                              <div className="flex items-center space-x-1 text-purple-600">
                                   <Star size={14} />
                                   <span>{rating || "N/A"}</span>
                                   <span className="text-gray-400">
                                        ({reviews || 0})
                                   </span>
                              </div>
                              <span className="text-purple-600 font-semibold">
                                   Mulai dari{" "}
                                   {price ? price.toLocaleString() : "N/A"}
                              </span>
                         </div>
                    </div>
               </div>
          </Link>
     );
}

export default FreelancerCard;
