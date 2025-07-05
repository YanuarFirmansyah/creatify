import React from "react";
import { Home, Star } from "lucide-react";

// --- Dummy Data to match the image ---
const freelancer = {
     name: "Muhammad Sumbul",
     avatar: "https://images.unsplash.com/photo-1593104547489-5cfb3839a3b5?w=120&h=120&fit=crop",
     rating: 4.9,
     reviewsCount: 152,
};

const reviews = Array.from({ length: 3 }).map((_, i) => ({
     id: i + 1,
     name: "Ahmad Khasmiri",
     avatar: "https://i.imgur.com/5c5w2Sg.png", // Image from the screenshot
     rating: 5.0,
     text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum......",
}));

// --- Sub-components for better organization ---

const Breadcrumb = () => (
     <div className="flex items-center gap-2 text-gray-500 mb-8">
          <Home className="text-purple-600" size={20} />
          <span>/ video editing</span>
     </div>
);

const FreelancerProfile = ({ freelancer }) => (
     <div className="flex items-center gap-6 mb-12">
          <img
               src={freelancer.avatar}
               alt={freelancer.name}
               className="w-24 h-24 rounded-full object-cover border-4 border-white shadow"
          />
          <div className="flex-1">
               <p className="text-gray-500 text-sm">Freelancer :</p>
               <h1 className="text-2xl font-bold text-gray-800 mb-3">
                    {freelancer.name}
               </h1>
               <div className="flex items-center gap-4">
                    <a
                         href="/freelancer/1/profile"
                         className="border border-purple-300 text-purple-700 font-semibold px-6 py-2 rounded-lg hover:bg-purple-50 transition-colors"
                    >
                         Kunjungi Profil
                    </a>
                    <div className="flex items-center gap-1.5">
                         <Star
                              className="text-purple-500"
                              fill="#a855f7"
                              size={22}
                         />
                         <span className="font-bold text-lg text-gray-800">
                              {freelancer.rating}
                         </span>
                         <span className="text-gray-400 text-sm">
                              ({freelancer.reviewsCount})
                         </span>
                    </div>
               </div>
          </div>
     </div>
);

const ReviewCard = ({ review }) => (
     <div className="bg-white border border-gray-200 rounded-xl p-6">
          <div className="flex items-start gap-4">
               <img
                    src={review.avatar}
                    alt={review.name}
                    className="w-12 h-12 rounded-full object-cover"
               />
               <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                         <a
                              href="#"
                              className="font-semibold text-blue-600 hover:underline"
                         >
                              {review.name}
                         </a>
                         <div className="flex items-center text-gray-700">
                              <Star
                                   className="text-purple-500"
                                   fill="#a855f7"
                                   size={16}
                              />
                              <span className="ml-1 font-medium">
                                   {review.rating.toFixed(1)}
                              </span>
                         </div>
                    </div>
                    <p className="text-gray-600 text-sm leading-relaxed">
                         {review.text}
                    </p>
               </div>
          </div>
     </div>
);

// --- Main Page Component ---

const ReviewList = () => {
     return (
          <div className="min-h-screen bg-gray-50 font-sans">
               <div className="max-w-screen-xl mx-auto px-6 py-10">
                    <Breadcrumb />
                    <FreelancerProfile freelancer={freelancer} />

                    <h2 className="text-xl font-bold text-gray-800 mb-6">
                         Ulasan dari pengguna jasa
                    </h2>

                    <div className="space-y-4">
                         {reviews.map((review) => (
                              <ReviewCard key={review.id} review={review} />
                         ))}
                    </div>
               </div>
          </div>
     );
};

export default ReviewList;
