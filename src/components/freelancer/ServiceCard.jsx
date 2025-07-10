import React from "react";
import { Edit, Trash2 } from "lucide-react";

const ServiceCard = ({ service }) => {
     return (
          <div className="border border-gray-200 rounded-lg p-4 mb-4">
               <div className="flex gap-4">
                    {service.image && (
                         <img
                              src={
                                   typeof service.image === "string"
                                        ? service.image
                                        : URL.createObjectURL(service.image)
                              }
                              alt={service.title}
                              className="w-32 h-32 object-cover rounded-lg"
                         />
                    )}
                    <div className="flex-grow">
                         <div className="flex justify-between items-start">
                              <div>
                                   <h3 className="text-lg font-bold">
                                        {service.title}
                                   </h3>
                                   <p className="text-sm text-gray-500">
                                        {service.description}
                                   </p>
                              </div>
                              <div className="flex items-center gap-2">
                                   <button className="text-gray-500 hover:text-gray-700">
                                        <Edit size={18} />
                                   </button>
                                   <button className="text-red-500 hover:text-red-700">
                                        <Trash2 size={18} />
                                   </button>
                              </div>
                         </div>
                         <div className="mt-4 grid grid-cols-1 md:grid-cols-3 gap-4">
                              {service.packages.map((pkg) => (
                                   <div
                                        key={pkg.name}
                                        className="border border-gray-200 rounded-lg p-4"
                                   >
                                        <h4 className="font-bold text-md text-center">
                                             {pkg.name}
                                        </h4>
                                        <p className="text-2xl font-bold text-center my-2">
                                             Rp {pkg.price.toLocaleString()}
                                        </p>
                                        <ul className="text-sm text-gray-600 space-y-2">
                                             {pkg.benefits.map((benefit, i) => (
                                                  <li
                                                       key={i}
                                                       className="flex items-center"
                                                  >
                                                       <svg
                                                            className="w-4 h-4 mr-2 text-green-500"
                                                            fill="none"
                                                            stroke="currentColor"
                                                            viewBox="0 0 24 24"
                                                            xmlns="http://www.w3.org/2000/svg"
                                                       >
                                                            <path
                                                                 strokeLinecap="round"
                                                                 strokeLinejoin="round"
                                                                 strokeWidth="2"
                                                                 d="M5 13l4 4L19 7"
                                                            ></path>
                                                       </svg>
                                                       {benefit}
                                                  </li>
                                             ))}
                                        </ul>
                                   </div>
                              ))}
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ServiceCard;
