import React from "react";
import { useAuth } from "../context/AuthContext";
import { Star, MapPin, MessageCircle } from "lucide-react";

const dummyReviews = [
  {
    id: 1,
    name: "Jalal Khamiruddin",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5.0,
    review: "pembeli ini baik, amat baik",
  },
];

const UserProfile = () => {
  const { user } = useAuth();

  if (!user) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen">
        <h2 className="text-2xl font-bold mb-4">Kamu belum login</h2>
        <a href="/login" className="text-purple-600 hover:underline">Login di sini</a>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto mt-10 px-4">
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <div className="flex-shrink-0">
          <span className="block w-48 h-48 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow">
            {user.avatar ? (
              <img src={user.avatar} alt="avatar" className="w-full h-full object-cover rounded-full" />
            ) : (
              <span className="w-full h-full flex items-center justify-center text-6xl font-bold text-gray-500">
                {user.name ? user.name[0].toUpperCase() : "U"}
              </span>
            )}
          </span>
        </div>
        <div className="flex-1">
          <h1 className="text-3xl md:text-4xl font-bold mb-2 flex items-center gap-2">
            {user.name || "User"}
          </h1>
          <div className="flex items-center gap-4 mb-2">
            <span className="flex items-center text-purple-600 font-semibold text-lg">
              <Star size={20} className="mr-1" fill="#a855f7" />
              4.9 <span className="text-gray-500 text-base font-normal">(152)</span>
            </span>
            <span className="flex items-center text-gray-700">
              <MapPin size={18} className="mr-1" />
              Indonesia
            </span>
          </div>
          <div className="flex items-center gap-2 text-purple-700 font-medium mb-4">
            <MessageCircle size={18} className="mr-1" />
            Indonesia & English
          </div>
        </div>
      </div>

      <div className="mt-10">
        <h2 className="text-lg font-semibold mb-3">Ulasan dari freelancers</h2>
        <div className="bg-white rounded border p-4 mb-2 flex flex-col gap-2">
          {dummyReviews.map((review) => (
            <div key={review.id} className="flex items-center gap-4">
              <img src={review.avatar} alt={review.name} className="w-10 h-10 rounded-full object-cover" />
              <div className="flex-1">
                <div className="flex items-center gap-2 font-semibold">
                  {review.name}
                  <span className="flex items-center text-purple-600 text-sm font-normal">
                    <Star size={16} className="ml-1" fill="#a855f7" /> {review.rating}
                  </span>
                </div>
                <div className="text-gray-700 text-sm">{review.review}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end">
          <button className="border px-3 py-1 rounded text-sm hover:bg-gray-100">lihat semua ulasan</button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;
