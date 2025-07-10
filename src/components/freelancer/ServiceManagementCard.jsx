import React, { useState } from "react";
import { Link } from "react-router-dom";
import ServiceCard from "./ServiceCard";
import { Plus } from "lucide-react";

const ServiceManagementCard = () => {
     const [services] = useState([
          {
               id: 1,
               title: "Video Shorts Editing",
               description:
                    "I will edit your video shorts to make them more engaging.",
               image: "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=400&q=80",
               packages: [
                    {
                         name: "Basic",
                         price: 50000,
                         benefits: ["1 Video", "2 Revisions", "Subtitles"],
                    },
                    {
                         name: "Plus",
                         price: 100000,
                         benefits: [
                              "2 Videos",
                              "3 Revisions",
                              "Subtitles",
                              "Thumbnail",
                         ],
                    },
                    {
                         name: "Premium",
                         price: 150000,
                         benefits: [
                              "3 Videos",
                              "5 Revisions",
                              "Subtitles",
                              "Thumbnail",
                              "Source File",
                         ],
                    },
               ],
          },
     ]);

     return (
          <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm col-span-3">
               <div className="flex justify-between items-center mb-6">
                    <h2 className="text-2xl font-bold">My Services</h2>
                    <Link
                         to="/freelancer/services/new"
                         className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg flex items-center gap-2 hover:bg-blue-600 transition"
                    >
                         <Plus size={20} />
                         <span>Add Service</span>
                    </Link>
               </div>
               <div>
                    {services.map((service, index) => (
                         <div key={index} className="mb-4">
                              <ServiceCard service={service} />
                              <div className="flex justify-end mt-2">
                                   <Link
                                        to={`/freelancer/services/edit/${service.id}`}
                                        className="text-sm text-blue-500 hover:underline"
                                   >
                                        Edit
                                   </Link>
                              </div>
                         </div>
                    ))}
               </div>
          </div>
     );
};

export default ServiceManagementCard;
