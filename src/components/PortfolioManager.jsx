import React, { useState, useRef, useEffect } from "react";
import { Plus, X, Upload, Trash2 } from "lucide-react";
import { userAPI } from "../services/api";

const PortfolioManager = ({ portfolio = [], onPortfolioUpdate }) => {
     const [isUploading, setIsUploading] = useState(false);
     const [error, setError] = useState(null);
     const [showUploadModal, setShowUploadModal] = useState(false);
     const [pendingImage, setPendingImage] = useState(null);
     const [pendingTitle, setPendingTitle] = useState("");
     const [pendingDescription, setPendingDescription] = useState("");
     const fileInputRef = useRef(null);

     // Debug: Log whenever portfolio prop changes
     useEffect(() => {
          console.log(
               "🔄 PortfolioManager received new portfolio data:",
               portfolio
          );
          console.log("📊 Portfolio length:", portfolio.length);
          portfolio.forEach((item, index) => {
               console.log(`📸 Portfolio item ${index}:`, {
                    id: item.id,
                    url: item.url,
                    image_url: item.image_url,
                    title: item.title,
                    description: item.description,
               });
          });
     }, [portfolio]);

     // Tombol utama sekarang hanya buka modal kosong
     const handleOpenUploadModal = () => {
          setShowUploadModal(true);
          setPendingImage(null);
          setPendingTitle("");
          setPendingDescription("");
          if (fileInputRef.current) fileInputRef.current.value = "";
     };

     // Pilih gambar dari file di dalam modal
     const handleFileInputChange = (event) => {
          const file = event.target.files[0];
          if (!file) return;

          // Validate file type
          const allowedTypes = [
               "image/jpeg",
               "image/jpg",
               "image/png",
               "image/webp",
          ];
          if (!allowedTypes.includes(file.type)) {
               setError(
                    "Hanya file JPG, JPEG, PNG, dan WebP yang diperbolehkan"
               );
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
               setPendingImage({ file, url: e.target.result });
          };
          reader.readAsDataURL(file);
     };

     const handleUploadPortfolio = async () => {
          if (!pendingImage) return;

          console.log("🚀 Starting portfolio upload...");
          setIsUploading(true);
          setError(null);

          try {
               console.log("📤 Uploading image:", pendingImage.file.name);
               const uploadResult = await userAPI.uploadPortfolioImage(
                    pendingImage.file,
                    pendingTitle,
                    pendingDescription
               );

               console.log("✅ Upload successful:", uploadResult);

               // Trigger parent to refresh portfolio
               if (onPortfolioUpdate) {
                    console.log("🔄 Triggering portfolio refresh...");
                    onPortfolioUpdate(null); // trigger parent untuk fetch ulang
               }

               // Reset modal state
               setShowUploadModal(false);
               setPendingImage(null);
               setPendingTitle("");
               setPendingDescription("");
               if (fileInputRef.current) fileInputRef.current.value = "";

               console.log("🎉 Portfolio upload completed successfully");
          } catch (err) {
               console.error("❌ Upload error:", err);
               setError("Gagal mengupload gambar portofolio: " + err.message);
          } finally {
               setIsUploading(false);
          }
     };

     const handleRemoveImage = async (imageId) => {
          try {
               // If image is new (not uploaded yet), just remove from local state
               const image = portfolio.find((img) => img.id === imageId);
               if (image && image.isNew) {
                    const updatedPortfolio = portfolio.filter(
                         (img) => img.id !== imageId
                    );
                    onPortfolioUpdate(updatedPortfolio);
                    return;
               }

               // Try to delete from backend first
               try {
                    await userAPI.deletePortfolioImage(imageId);
               } catch {
                    console.log("Backend not available, removing locally only");
               }

               // Remove from local state regardless
               const updatedPortfolio = portfolio.filter(
                    (img) => img.id !== imageId
               );
               onPortfolioUpdate(updatedPortfolio);
          } catch (err) {
               setError("Gagal menghapus gambar portofolio");
               console.error("Delete error:", err);
          }
     };

     return (
          <div className="space-y-4">
               {/* Header */}
               <div className="flex justify-between items-center">
                    <h2 className="text-xl font-bold text-gray-800">
                         Portofolio Saya :
                    </h2>
                    <div className="flex gap-2">
                         <button
                              onClick={handleOpenUploadModal}
                              disabled={isUploading} // Removed portfolio.length >= maxImages condition
                              className="bg-purple-100 text-purple-700 text-sm font-semibold px-4 py-2 rounded-md hover:bg-purple-200 disabled:opacity-50 disabled:cursor-not-allowed transition flex items-center gap-2"
                         >
                              <Plus size={16} />
                              Tambah Portofolio
                         </button>
                    </div>
               </div>

               {/* Error Message */}
               {error && (
                    <div className="bg-red-50 border border-red-200 rounded-md p-3">
                         <p className="text-red-600 text-sm">{error}</p>
                    </div>
               )}

               {/* Upload Modal */}
               {showUploadModal && (
                    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                         <div className="bg-white rounded-lg shadow-lg p-6 w-full max-w-md relative">
                              <button
                                   className="absolute top-2 right-2 text-gray-400 hover:text-gray-700"
                                   onClick={() => setShowUploadModal(false)}
                                   disabled={isUploading}
                              >
                                   <X size={20} />
                              </button>
                              <h3 className="text-lg font-semibold mb-4 text-center">
                                   Tambah Portofolio
                              </h3>
                              <div className="flex flex-col items-center gap-4 mb-4">
                                   {/* Tombol pilih gambar */}
                                   {!pendingImage && (
                                        <>
                                             <button
                                                  type="button"
                                                  onClick={() =>
                                                       fileInputRef.current?.click()
                                                  }
                                                  className="bg-purple-100 text-purple-700 px-4 py-2 rounded-md font-semibold hover:bg-purple-200 transition"
                                             >
                                                  Pilih Gambar
                                             </button>
                                             <input
                                                  ref={fileInputRef}
                                                  type="file"
                                                  accept="image/jpeg,image/jpg,image/png,image/webp"
                                                  onChange={
                                                       handleFileInputChange
                                                  }
                                                  className="hidden"
                                             />
                                        </>
                                   )}
                                   {/* Preview dan input judul/deskripsi hanya muncul jika sudah pilih gambar */}
                                   {pendingImage && (
                                        <>
                                             <img
                                                  src={pendingImage.url}
                                                  alt="Preview"
                                                  className="w-32 h-32 object-cover rounded border"
                                             />
                                             <input
                                                  type="text"
                                                  placeholder="Judul portofolio"
                                                  value={pendingTitle}
                                                  onChange={(e) =>
                                                       setPendingTitle(
                                                            e.target.value
                                                       )
                                                  }
                                                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                                             />
                                             <textarea
                                                  placeholder="Deskripsi portofolio"
                                                  value={pendingDescription}
                                                  onChange={(e) =>
                                                       setPendingDescription(
                                                            e.target.value
                                                       )
                                                  }
                                                  rows="2"
                                                  className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
                                             />
                                        </>
                                   )}
                              </div>
                              {/* Tombol upload hanya aktif jika sudah pilih gambar */}
                              <button
                                   onClick={handleUploadPortfolio}
                                   disabled={isUploading || !pendingImage}
                                   className="w-full bg-purple-600 text-white font-semibold py-2 rounded-md hover:bg-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition"
                              >
                                   {isUploading ? "Mengupload..." : "Upload"}
                              </button>
                         </div>
                    </div>
               )}

               {/* Portfolio Grid */}
               <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                    {console.log(
                         "🎨 Rendering portfolio with",
                         portfolio.length,
                         "items:",
                         portfolio
                    )}
                    {portfolio.map((image, index) => {
                         const imageUrl = image.url || image.image_url;
                         console.log(`🖼️ Rendering portfolio item ${index}:`, {
                              id: image.id,
                              url: imageUrl,
                              image_url: image.image_url,
                              title: image.title,
                              description: image.description,
                         });

                         return (
                              <div
                                   key={image.id}
                                   className="relative group rounded-lg overflow-hidden border border-gray-200 hover:shadow-md transition-shadow duration-200"
                              >
                                   <img
                                        src={imageUrl}
                                        alt={`Portfolio item ${index + 1}`}
                                        className="w-full aspect-square object-cover bg-gray-100"
                                        onError={(e) => {
                                             console.error(
                                                  "❌ Image failed to load:",
                                                  imageUrl,
                                                  "Original image object:",
                                                  image
                                             );
                                             e.target.src =
                                                  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200' viewBox='0 0 200 200'%3E%3Crect width='200' height='200' fill='%23f3f4f6'/%3E%3Ctext x='50%25' y='50%25' text-anchor='middle' dy='.3em' fill='%239ca3af' font-family='Arial' font-size='14'%3EImage not found%3C/text%3E%3C/svg%3E";
                                        }}
                                        onLoad={(e) => {
                                             console.log(
                                                  "✅ Image loaded successfully:",
                                                  imageUrl
                                             );
                                             e.target.style.opacity = "1";
                                        }}
                                   />
                                   {/* Delete button - Only show on hover */}
                                   <button
                                        onClick={() =>
                                             handleRemoveImage(image.id)
                                        }
                                        className="absolute top-2 right-2 bg-red-500 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-200 hover:bg-red-600 z-10"
                                        title="Hapus gambar"
                                   >
                                        <Trash2 size={16} />
                                   </button>
                              </div>
                         );
                    })}

                    {/* Empty state */}
                    {portfolio.length === 0 && (
                         <div className="col-span-2 sm:col-span-3 lg:col-span-4 text-center py-8">
                              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                   <Plus size={24} className="text-gray-400" />
                              </div>
                              <p className="text-gray-500 text-sm">
                                   Belum ada gambar portofolio
                              </p>
                              <p className="text-gray-400 text-xs mt-1">
                                   Klik "Tambah Portofolio" untuk menambahkan
                                   gambar
                              </p>
                         </div>
                    )}
               </div>

               {/* Hidden File Input */}
               <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/jpg,image/png,image/webp"
                    onChange={handleFileInputChange}
                    className="hidden"
               />

               {/* Info */}
               <div className="text-xs text-gray-500">
                    <p>• Format: JPG, JPEG, PNG, WebP (maksimal 5MB)</p>
                    <p>• Limit foto telah dinonaktifkan sementara</p>
               </div>
          </div>
     );
};

export default PortfolioManager;
