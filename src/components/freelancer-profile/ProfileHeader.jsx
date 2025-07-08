import React from "react";
import { Star, MapPin, MessageSquare, ArrowRight } from "lucide-react";

const ProfileHeader = ({
     id,
     name,
     title,
     avatar,
     rating,
     reviews,
     location,
     languages,
}) => {
     return (
          <div className="flex flex-col sm:flex-row items-start gap-8">
               <img
                    src={
                         avatar ||
                         "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=200&h=200&fit=crop"
                    }
                    alt="Avatar"
                    className="w-40 h-40 rounded-full object-cover shrink-0"
               />
               <div className="flex flex-col gap-2.5">
                    <h1 className="text-4xl font-bold text-gray-800">
                         {name || "Freelancer Name"}{" "}
                         {id ? (
                              <span className="text-base font-normal text-gray-400">
                                   #{id}
                              </span>
                         ) : null}
                    </h1>
                    <p className="text-lg text-gray-500">
                         {title || "Freelancer Title"}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-700">
                         <div className="flex items-center gap-1.5">
                              <Star
                                   size={20}
                                   className="text-yellow-400 fill-current"
                              />{" "}
                              <span className="font-bold">
                                   {rating || "N/A"}
                              </span>{" "}
                              <span className="text-gray-400">
                                   ({reviews || 0})
                              </span>
                         </div>
                         <div className="flex items-center gap-1.5">
                              <MapPin size={20} className="text-purple-600" />{" "}
                              <span className="font-medium">
                                   {location || "Location"}
                              </span>
                         </div>
                         <div className="flex items-center gap-1.5">
                              <MessageSquare
                                   size={20}
                                   className="text-purple-600"
                              />{" "}
                              <span className="font-medium">
                                   {languages || "Languages"}
                              </span>
                         </div>
                    </div>
                    <div className="flex gap-4 mt-3">
                         <button className="border border-gray-300 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition">
                              Hubungi saya
                         </button>
                         <button className="border border-gray-300 font-semibold px-6 py-2 rounded-lg hover:bg-gray-100 transition flex items-center gap-2">
                              Order <ArrowRight size={16} />
                         </button>
                    </div>
               </div>
          </div>
     );
};

export default ProfileHeader;
