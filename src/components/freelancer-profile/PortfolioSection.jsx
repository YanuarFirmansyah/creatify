import React, { useState } from "react";

const PortfolioSection = () => {
     const [selectedImage, setSelectedImage] = useState(0);
     const portfolioImages = Array(6).fill(
          "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=400&q=80"
     );

     return (
          <div className="mt-12">
               <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Portofolio
               </h2>
               <div className="border border-gray-200 rounded-xl p-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                         {portfolioImages.map((imgSrc, index) => (
                              <div
                                   key={index}
                                   className={`rounded-lg cursor-pointer ${
                                        selectedImage === index
                                             ? "ring-2 ring-blue-500 ring-offset-2"
                                             : ""
                                   }`}
                                   onClick={() => setSelectedImage(index)}
                              >
                                   <img
                                        src={imgSrc}
                                        alt={`Portfolio item ${index + 1}`}
                                        className="w-full aspect-video object-cover rounded-lg"
                                   />
                              </div>
                         ))}
                    </div>
               </div>
          </div>
     );
};

export default PortfolioSection;
