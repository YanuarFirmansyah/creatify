import React from "react";

const AboutSection = ({ aboutText }) => {
     const defaultText =
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum...";

     return (
          <div className="mt-12">
               <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Tentang saya :
               </h2>
               <p className="text-gray-600 leading-relaxed">
                    {aboutText || defaultText}
               </p>
          </div>
     );
};

export default AboutSection;
