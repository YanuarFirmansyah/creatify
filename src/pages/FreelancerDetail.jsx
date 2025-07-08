import React from "react";
import { useParams } from "react-router-dom";
import { Home } from "lucide-react";
import FreelancerInfo from "../components/freelancer-detail/FreelancerInfo";
import ReviewsSection from "../components/freelancer-detail/ReviewsSection";
import ServiceSummary from "../components/freelancer-detail/ServiceSummary";
import ImageGallery from "../components/freelancer-detail/ImageGallery";
import PricingCard from "../components/freelancer-detail/PricingCard";

const FreelancerDetail = () => {
     const { id } = useParams();
     const images = [
          "https://images.unsplash.com/photo-1528459801416-a9e53bbf4e17?w=800",
          "https://images.unsplash.com/photo-1557682250-33bd709cbe85?w=800",
          "https://images.unsplash.com/photo-1557683316-973673baf926?w=800",
          "https://images.unsplash.com/photo-1614850523060-8da1d56ae135?w=800",
     ];
     const benefits = [
          "Benefit yang diberikan",
          "Benefit yang diberikan",
          "Benefit yang diberikan",
          "Benefit yang diberikan",
          "Benefit yang diberikan",
          "Benefit yang diberikan",
          "Benefit yang diberikan",
     ];

     return (
          <div className="bg-white font-sans">
               <main className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12">
                         {/* Kolom Kiri: Info & Gambar */}
                         <div className="lg:col-span-2">
                              <div className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
                                   <Home size={16} />
                                   <span>/ video editing</span>
                              </div>
                              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                                   Saya menawarkan jasa untuk edit video shorts
                                   anda
                              </h2>
                              <ImageGallery images={images} />
                              <FreelancerInfo />
                              <ReviewsSection />
                              <ServiceSummary />
                         </div>

                         {/* Kolom Kanan: Kartu Harga */}
                         <div className="lg:col-span-1">
                              <PricingCard
                                   benefits={benefits}
                                   freelancerId={id}
                              />
                         </div>
                    </div>
               </main>
          </div>
     );
};

export default FreelancerDetail;
