import React from "react";
import { CheckCircle2 } from "lucide-react";

const SkillsSection = ({ skills }) => {
     return (
          <div className="mt-12">
               <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Keahlian :
               </h2>
               <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-3">
                    {(skills || []).map((skill, index) => (
                         <div key={index} className="flex items-center gap-3">
                              <CheckCircle2
                                   size={20}
                                   className="text-purple-600"
                              />{" "}
                              <a
                                   href="#"
                                   className="text-gray-700 hover:text-purple-600 hover:underline"
                              >
                                   {skill}
                              </a>
                         </div>
                    ))}
               </div>
          </div>
     );
};

export default SkillsSection;
