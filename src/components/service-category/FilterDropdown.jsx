import React, { useState, useRef, useEffect } from "react";

const FilterDropdown = ({ onFilterChange }) => {
     const [showDropdown, setShowDropdown] = useState(false);
     const dropdownRef = useRef(null);

     // Tutup dropdown jika klik di luar
     useEffect(() => {
          function handleClickOutside(event) {
               if (
                    dropdownRef.current &&
                    !dropdownRef.current.contains(event.target)
               ) {
                    setShowDropdown(false);
               }
          }
          if (showDropdown) {
               document.addEventListener("mousedown", handleClickOutside);
          } else {
               document.removeEventListener("mousedown", handleClickOutside);
          }
          return () =>
               document.removeEventListener("mousedown", handleClickOutside);
     }, [showDropdown]);

     const handleFilterClick = (type) => {
          setShowDropdown(false);
          onFilterChange(type);
     };

     return (
          <div className="relative" ref={dropdownRef}>
               <button
                    type="button"
                    className="flex items-center gap-2 border border-purple-300 px-6 py-2 rounded-full text-gray-500 text-base font-medium hover:bg-purple-50 transition-colors"
                    onClick={() => setShowDropdown((v) => !v)}
               >
                    Filter by
                    <svg
                         width="24"
                         height="24"
                         fill="none"
                         xmlns="http://www.w3.org/2000/svg"
                    >
                         <g>
                              <rect width="24" height="24" fill="none" />
                              <rect
                                   x="7"
                                   y="8"
                                   width="10"
                                   height="2"
                                   rx="1"
                                   fill="#a78bfa"
                              />
                              <rect
                                   x="9"
                                   y="12"
                                   width="6"
                                   height="2"
                                   rx="1"
                                   fill="#a78bfa"
                              />
                              <rect
                                   x="11"
                                   y="16"
                                   width="2"
                                   height="2"
                                   rx="1"
                                   fill="#a78bfa"
                              />
                         </g>
                    </svg>
               </button>
               {showDropdown && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-purple-200 rounded-lg shadow-lg z-20">
                         <button
                              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50"
                              onClick={() => handleFilterClick("popular")}
                         >
                              Terpopuler
                         </button>
                         <button
                              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50"
                              onClick={() => handleFilterClick("cheapest")}
                         >
                              Harga Termurah
                         </button>
                         <button
                              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50"
                              onClick={() => handleFilterClick("expensive")}
                         >
                              Harga Termahal
                         </button>
                         <button
                              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-purple-50"
                              onClick={() => handleFilterClick("rating")}
                         >
                              Rating Tertinggi
                         </button>
                    </div>
               )}
          </div>
     );
};

export default FilterDropdown;
