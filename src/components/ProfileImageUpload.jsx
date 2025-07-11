import React, { useState, useRef } from "react";
import { Camera, X, Upload } from "lucide-react";
import { userAPI } from "../services/api";

const ProfileImageUpload = ({
     currentImage,
     onImageUpdate,
     size = "w-36 h-36",
}) => {
     const [isUploading, setIsUploading] = useState(false);
     const [previewImage, setPreviewImage] = useState(null);
     const [error, setError] = useState(null);
     const fileInputRef = useRef(null);

     const handleImageSelect = (event) => {
          const file = event.target.files[0];
          if (!file) return;

          // Validate file type
          const allowedTypes = ["image/jpeg", "image/jpg", "image/png"];
          if (!allowedTypes.includes(file.type)) {
               setError("Hanya file JPG, JPEG, dan PNG yang diperbolehkan");
               return;
          }

          // Validate file size (max 5MB)
          if (file.size > 5 * 1024 * 1024) {
               setError("Ukuran file maksimal 5MB");
               return;
          }

          setError(null);

          // Create preview
          const reader = new FileReader();
          reader.onload = (e) => {
               setPreviewImage(e.target.result);
          };
          reader.readAsDataURL(file);
     };

     const handleUpload = async () => {
          if (!fileInputRef.current?.files[0]) return;

          setIsUploading(true);
          setError(null);

          try {
               const file = fileInputRef.current.files[0];
               const response = await userAPI.uploadProfileImage(file);

               // Update parent component
               if (onImageUpdate) {
                    onImageUpdate(response.profile_image || response.file);
               }

               // Clear preview
               setPreviewImage(null);
               fileInputRef.current.value = "";

               console.log("Image uploaded successfully:", response);
          } catch (err) {
               setError(err.message || "Gagal mengupload gambar");
               console.error("Upload error:", err);
          } finally {
               setIsUploading(false);
          }
     };

     const handleCancel = () => {
          setPreviewImage(null);
          setError(null);
          if (fileInputRef.current) {
               fileInputRef.current.value = "";
          }
     };

     const displayImage = previewImage || currentImage;

     return (
          <div className="relative">
               {/* Image Display */}
               <div className={`${size} shrink-0`}>
                    <div className="w-full h-full rounded-full bg-gray-200 overflow-hidden border-4 border-white shadow relative">
                         {displayImage ? (
                              <img
                                   src={displayImage}
                                   alt="Profile"
                                   className="w-full h-full object-cover"
                              />
                         ) : (
                              <span className="w-full h-full flex items-center justify-center text-6xl font-bold text-gray-500">
                                   ?
                              </span>
                         )}

                         {/* Upload Overlay */}
                         {previewImage && (
                              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                   <div className="text-white text-center">
                                        <Upload
                                             size={24}
                                             className="mx-auto mb-2"
                                        />
                                        <p className="text-sm">Preview</p>
                                   </div>
                              </div>
                         )}
                    </div>

                    {/* Camera Button */}
                    <button
                         onClick={() => fileInputRef.current?.click()}
                         disabled={isUploading}
                         className="absolute bottom-1 right-1 w-9 h-9 bg-white rounded-full flex items-center justify-center border-2 border-gray-200 hover:bg-gray-100 transition shadow disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                         {isUploading ? (
                              <div className="w-4 h-4 border-2 border-purple-600 border-t-transparent rounded-full animate-spin"></div>
                         ) : (
                              <Camera size={18} className="text-gray-600" />
                         )}
                    </button>
               </div>

               {/* Hidden File Input */}
               <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/jpg,image/png"
                    onChange={handleImageSelect}
                    className="hidden"
               />

               {/* Preview Actions */}
               {previewImage && (
                    <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex gap-2">
                         <button
                              onClick={handleUpload}
                              disabled={isUploading}
                              className="px-3 py-1 bg-purple-600 text-white text-sm rounded-md hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed"
                         >
                              {isUploading ? "Uploading..." : "Save"}
                         </button>
                         <button
                              onClick={handleCancel}
                              disabled={isUploading}
                              className="px-3 py-1 bg-gray-500 text-white text-sm rounded-md hover:bg-gray-600 disabled:opacity-50 disabled:cursor-not-allowed"
                         >
                              <X size={14} />
                         </button>
                    </div>
               )}

               {/* Error Message */}
               {error && (
                    <div className="absolute -bottom-16 left-1/2 transform -translate-x-1/2">
                         <p className="text-red-500 text-sm bg-red-100 px-3 py-1 rounded-md whitespace-nowrap">
                              {error}
                         </p>
                    </div>
               )}
          </div>
     );
};

export default ProfileImageUpload;
