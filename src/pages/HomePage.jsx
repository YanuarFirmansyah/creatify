import React from "react";

import CategoryMenu from "@/components/home/CategoryMenu";
import HeroSection from "@/components/home/HeroSection";
import TopFreelancers from "@/components/home/TopFreelancers";

const HomePage = () => {
     return (
          <div className="min-h-screen bg-white text-black font-sans">
               <HeroSection />

               {/* Category Menu */}
               <CategoryMenu />

               <TopFreelancers />
          </div>
     );
};

export default HomePage;
