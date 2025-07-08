import React from "react";
import { Link } from "react-router-dom";

const ProfileCard = ({ user }) => {
     // Menggunakan data dari useAuth dan menambahkan data dummy
     const profile = {
          name: user?.name || "Freelancer Name",
          username: user?.username || "@username",
          avatar: user?.avatar || null,
          id: user?.id || 1,
     };

     return (
          <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm">
               <div className="w-28 h-28 rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow mb-4">
                    {profile.avatar ? (
                         <img
                              src={profile.avatar}
                              alt="avatar"
                              className="w-full h-full object-cover"
                         />
                    ) : (
                         <span className="w-full h-full flex items-center justify-center text-5xl font-bold text-gray-500">
                              {profile.name[0].toUpperCase()}
                         </span>
                    )}
               </div>
               <h2 className="text-2xl font-bold text-gray-800">
                    {profile.name}
               </h2>
               <p className="text-sm text-gray-500 mb-6">{profile.username}</p>
               <div className="w-full space-y-3">
                    <Link
                         to={`/freelancer/${profile.id}/profile`}
                         className="block w-full text-center border border-gray-300 font-semibold py-2.5 rounded-lg hover:bg-gray-100 transition"
                    >
                         Lihat Halaman Profile
                    </Link>
                    <button className="w-full text-center border border-gray-300 font-semibold py-2.5 rounded-lg hover:bg-gray-100 transition">
                         Payment Method
                    </button>
               </div>
          </div>
     );
};

export default ProfileCard;
