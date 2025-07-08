import React from "react";
import { useParams } from "react-router-dom";

// Import komponen yang sudah di-refactor
import ReviewsSection from "../components/freelancer-detail/ReviewsSection"; // Reusable
import PortfolioSection from "../components/freelancer-profile/PortfolioSection";
import ProfileHeader from "../components/freelancer-profile/ProfileHeader";
import SkillsSection from "../components/freelancer-profile/SkillsSection";
import AboutSection from "../components/freelancer-profile/AboutSection";
import ServiceOffers from "../components/freelancer-profile/ServiceOffers";

const FreelancerProfile = () => {
     const { id } = useParams();

     // Data dummy, bisa diganti fetch ke API sesuai id
     const freelancerData = {
          name: "Muhammad Sumbul",
          title: "Specialist Shorts Video Editor",
          rating: 4.9,
          reviews: 152,
          location: "Indonesia",
          languages: "Indonesia & English",
          skills: [
               "Keahlian satu",
               "Keahlian satu dan dua",
               "Keahlian satu dan tiga",
               "Keahlian satu dan empat",
               "Keahlian satu",
               "Keahlian satu",
               "Keahlian satu",
               "Keahlian satu",
          ],
          about: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum...",
     };

     return (
          <div className="min-h-screen bg-white font-sans">
               <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-16">
                         {/* Kolom Kiri: Detail Freelancer */}
                         <div className="lg:col-span-2">
                              <ProfileHeader id={id} {...freelancerData} />
                              <SkillsSection skills={freelancerData.skills} />
                              <AboutSection aboutText={freelancerData.about} />
                              <ReviewsSection />
                              <PortfolioSection />
                         </div>

                         {/* Kolom Kanan: Tawaran Jasa */}
                         <div className="lg:col-span-1">
                              <ServiceOffers />
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default FreelancerProfile;
