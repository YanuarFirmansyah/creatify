import React, { useState } from "react";

const ImageGallery = ({ images }) => {
     const [mainImage, setMainImage] = useState(images[0]);
     const [activeImageIndex, setActiveImageIndex] = useState(0);

     return (
          <div>
               <div className="mb-6">
                    <img
                         src={mainImage}
                         alt="Service main"
                         className="w-full aspect-video object-cover rounded-xl border-2 border-blue-400 shadow-lg"
                    />
                    <div className="flex justify-center mt-4 space-x-2">
                         {images.map((_, index) => (
                              <button
                                   key={index}
                                   className={`w-3 h-3 rounded-full ${
                                        index === activeImageIndex
                                             ? "bg-purple-600"
                                             : "bg-gray-300"
                                   }`}
                                   onClick={() => {
                                        setMainImage(images[index]);
                                        setActiveImageIndex(index);
                                   }}
                              />
                         ))}
                    </div>
               </div>
               <div className="flex space-x-2 overflow-x-auto pb-2">
                    {images.map((img, index) => (
                         <img
                              key={index}
                              src={img}
                              alt={`Thumbnail ${index + 1}`}
                              className={`w-28 h-20 object-cover rounded-md cursor-pointer ${
                                   index === activeImageIndex
                                        ? "border-2 border-purple-600"
                                        : "opacity-70"
                              }`}
                              onClick={() => {
                                   setMainImage(img);
                                   setActiveImageIndex(index);
                              }}
                         />
                    ))}
               </div>
          </div>
     );
};

export default ImageGallery;
