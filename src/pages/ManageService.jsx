import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const ManageService = () => {
     const { serviceId } = useParams();
     const navigate = useNavigate();
     const isEditing = Boolean(serviceId);

     const [title, setTitle] = useState("");
     const [description, setDescription] = useState("");
     const [image, setImage] = useState(null);
     const [packages, setPackages] = useState([
          { name: "Basic", price: "", benefits: [""] },
          { name: "Plus", price: "", benefits: [""] },
          { name: "Premium", price: "", benefits: [""] },
     ]);

     useEffect(() => {
          if (isEditing) {
               // In a real app, you would fetch the service data from an API
               const existingService = {
                    title: "Existing Service Title",
                    description:
                         "This is a description of the existing service.",
                    packages: [
                         {
                              name: "Basic",
                              price: "10000",
                              benefits: ["Benefit 1"],
                         },
                         {
                              name: "Plus",
                              price: "20000",
                              benefits: ["Benefit 1", "Benefit 2"],
                         },
                         {
                              name: "Premium",
                              price: "30000",
                              benefits: ["Benefit 1", "Benefit 2", "Benefit 3"],
                         },
                    ],
               };
               setTitle(existingService.title);
               setDescription(existingService.description);
               setPackages(existingService.packages);
          }
     }, [serviceId, isEditing]);

     const handleBenefitChange = (pkgIndex, benefitIndex, value) => {
          const newPackages = [...packages];
          newPackages[pkgIndex].benefits[benefitIndex] = value;
          setPackages(newPackages);
     };

     const addBenefit = (pkgIndex) => {
          const newPackages = [...packages];
          newPackages[pkgIndex].benefits.push("");
          setPackages(newPackages);
     };

     const removeBenefit = (pkgIndex, benefitIndex) => {
          const newPackages = [...packages];
          newPackages[pkgIndex].benefits.splice(benefitIndex, 1);
          setPackages(newPackages);
     };

     const handleSubmit = (e) => {
          e.preventDefault();
          const serviceData = { title, description, packages, image };
          if (isEditing) {
               console.log("Updating service:", serviceData);
               // onEditService(serviceData);
          } else {
               console.log("Adding new service:", serviceData);
               // onAddService(serviceData);
          }
          navigate("/freelancer/dashboard");
     };

     return (
          <div className="min-h-screen bg-gray-50 font-sans">
               <div className="max-w-screen-xl mx-auto px-6 py-12">
                    <h1 className="text-3xl font-bold text-purple-600 mb-8">
                         {isEditing ? "Edit Service" : "Add New Service"}
                    </h1>
                    <div className="bg-white p-8 rounded-lg shadow-md">
                         <form onSubmit={handleSubmit}>
                              <div className="mb-4">
                                   <label className="block text-gray-700 font-semibold mb-2">
                                        Service Title
                                   </label>
                                   <input
                                        type="text"
                                        value={title}
                                        onChange={(e) =>
                                             setTitle(e.target.value)
                                        }
                                        className="w-full border border-gray-300 p-2 rounded-lg"
                                        required
                                   />
                              </div>
                              <div className="mb-4">
                                   <label className="block text-gray-700 font-semibold mb-2">
                                        Description
                                   </label>
                                   <textarea
                                        value={description}
                                        onChange={(e) =>
                                             setDescription(e.target.value)
                                        }
                                        className="w-full border border-gray-300 p-2 rounded-lg"
                                        rows="3"
                                        required
                                   ></textarea>
                              </div>
                              <div className="mb-4">
                                   <label className="block text-gray-700 font-semibold mb-2">
                                        Service Image
                                   </label>
                                   <input
                                        type="file"
                                        onChange={(e) =>
                                             setImage(e.target.files[0])
                                        }
                                        className="w-full border border-gray-300 p-2 rounded-lg"
                                        accept="image/*"
                                   />
                              </div>
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                   {packages.map((pkg, pkgIndex) => (
                                        <div
                                             key={pkg.name}
                                             className="border border-gray-200 p-4 rounded-lg"
                                        >
                                             <h3 className="text-lg font-bold mb-4 text-center">
                                                  {pkg.name}
                                             </h3>
                                             <div className="mb-4">
                                                  <label className="block text-gray-700 font-semibold mb-2">
                                                       Price (Rp)
                                                  </label>
                                                  <input
                                                       type="number"
                                                       value={pkg.price}
                                                       onChange={(e) => {
                                                            const newPackages =
                                                                 [...packages];
                                                            newPackages[
                                                                 pkgIndex
                                                            ].price =
                                                                 e.target.value;
                                                            setPackages(
                                                                 newPackages
                                                            );
                                                       }}
                                                       className="w-full border border-gray-300 p-2 rounded-lg"
                                                       required
                                                  />
                                             </div>
                                             <div>
                                                  <label className="block text-gray-700 font-semibold mb-2">
                                                       Benefits
                                                  </label>
                                                  {pkg.benefits.map(
                                                       (
                                                            benefit,
                                                            benefitIndex
                                                       ) => (
                                                            <div
                                                                 key={
                                                                      benefitIndex
                                                                 }
                                                                 className="flex items-center mb-2"
                                                            >
                                                                 <input
                                                                      type="text"
                                                                      value={
                                                                           benefit
                                                                      }
                                                                      onChange={(
                                                                           e
                                                                      ) =>
                                                                           handleBenefitChange(
                                                                                pkgIndex,
                                                                                benefitIndex,
                                                                                e
                                                                                     .target
                                                                                     .value
                                                                           )
                                                                      }
                                                                      className="w-full border border-gray-300 p-2 rounded-lg"
                                                                      required
                                                                 />
                                                                 <button
                                                                      type="button"
                                                                      onClick={() =>
                                                                           removeBenefit(
                                                                                pkgIndex,
                                                                                benefitIndex
                                                                           )
                                                                      }
                                                                      className="ml-2 text-red-500 hover:text-red-700"
                                                                 >
                                                                      Remove
                                                                 </button>
                                                            </div>
                                                       )
                                                  )}
                                                  <button
                                                       type="button"
                                                       onClick={() =>
                                                            addBenefit(pkgIndex)
                                                       }
                                                       className="text-sm text-blue-500 hover:underline"
                                                  >
                                                       + Add Benefit
                                                  </button>
                                             </div>
                                        </div>
                                   ))}
                              </div>

                              <div className="flex justify-end gap-4">
                                   <button
                                        type="button"
                                        onClick={() =>
                                             navigate("/freelancer/dashboard")
                                        }
                                        className="text-gray-600 font-semibold py-2 px-4 rounded-lg border border-gray-300 hover:bg-gray-100"
                                   >
                                        Cancel
                                   </button>
                                   <button
                                        type="submit"
                                        className="bg-blue-500 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-600"
                                   >
                                        {isEditing
                                             ? "Update Service"
                                             : "Add Service"}
                                   </button>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default ManageService;
