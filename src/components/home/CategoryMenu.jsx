import React from "react";
import { Link } from "react-router-dom";
import {
     Brush,
     Code2,
     Camera,
     Pencil,
     Scissors,
     Video,
     Music4,
} from "lucide-react";

const categoryList = [
     {
          label: "graphic design",
          value: "graphic-design",
          icon: <Brush size={28} className="text-purple-600" />,
     },
     {
          label: "programming",
          value: "programming",
          icon: <Code2 size={40} className="text-purple-600" />,
     },
     {
          label: "photography",
          value: "photography",
          icon: <Camera size={40} className="text-purple-600" />,
     },
     {
          label: "2d commision",
          value: "2d-commision",
          icon: <Scissors size={28} className="text-purple-600" />,
     },
     {
          label: "video editing",
          value: "video-editing",
          icon: <Video size={28} className="text-purple-600" />,
     },
     {
          label: "writting",
          value: "writting",
          icon: <Pencil size={40} className="text-purple-600" />,
     },
     {
          label: "music & audio",
          value: "music-audio",
          icon: <Music4 size={28} className="text-purple-600" />,
     },
];

const CategoryMenu = () => {
     return (
          <section className="max-w-screen-xl bg-[#9876EB] bg-opacity-30 py-6 rounded-2xl mx-auto mb-12">
               <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-4 justify-items-center">
                    {categoryList.map((item, index) => (
                         <Link
                              to={`/service/${item.value}`}
                              key={index}
                              className="flex flex-col items-center text-sm p-4 rounded-xl transition-all duration-200 bg-white border border-purple-400 hover:scale-105 hover:shadow-md cursor-pointer w-28"
                         >
                              <div className="mb-2">{item.icon}</div>
                              <span className="text-center text-purple-700 font-medium">
                                   {item.label}
                              </span>
                         </Link>
                    ))}
               </div>
          </section>
     );
};

export default CategoryMenu;
