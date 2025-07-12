const API_BASE_URL = "https://creatify-backend-production.up.railway.app";

// Helper function to handle API responses
const handleResponse = async (response) => {
     // Check if response is JSON
     const contentType = response.headers.get("content-type");
     if (!contentType || !contentType.includes("application/json")) {
          // Response is not JSON, get text content
          const text = await response.text();
          console.error("Non-JSON Response:", {
               status: response.status,
               statusText: response.statusText,
               contentType: contentType,
               text: text.substring(0, 500), // First 500 chars
          });

          if (response.status === 404) {
               throw new Error("Endpoint tidak ditemukan (404)");
          } else if (response.status >= 500) {
               throw new Error("Server error - backend sedang bermasalah");
          } else {
               throw new Error("Response tidak valid - bukan JSON");
          }
     }

     const data = await response.json();

     if (!response.ok) {
          console.error("API Error:", {
               status: response.status,
               statusText: response.statusText,
               data: data,
          });
          throw new Error(data.message || "Something went wrong");
     }

     return data;
};

// API service for authentication
export const authAPI = {
     // Register user
     register: async (userData) => {
          console.log("Sending register data:", userData);

          const response = await fetch(`${API_BASE_URL}/auth/register`, {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify(userData),
          });

          console.log("Register response status:", response.status);

          return handleResponse(response);
     },

     // Login user
     login: async (credentials) => {
          console.log("Sending login data:", credentials);

          const response = await fetch(`${API_BASE_URL}/auth/login`, {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify(credentials),
          });

          console.log("Login response status:", response.status);

          return handleResponse(response);
     },
};

// API service for user profile management
export const userAPI = {
     // Get user detail
     getUserDetail: async () => {
          const token = getAuthToken();

          if (!token) {
               throw new Error("Token tidak ditemukan - silakan login ulang");
          }

          console.log(
               "Fetching user detail with token:",
               token.substring(0, 20) + "..."
          );

          const response = await fetch(`${API_BASE_URL}/me/detail`, {
               method: "GET",
               headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
               },
          });

          console.log("User detail response status:", response.status);
          return handleResponse(response);
     },

     // Update user profile (including image upload)
     updateProfile: async (userData, profileImage = null) => {
          const token = getAuthToken();

          if (!token) {
               throw new Error("Token tidak ditemukan - silakan login ulang");
          }

          const formData = new FormData();

          // Add text fields
          if (userData.name) formData.append("name", userData.name);
          if (userData.bio) formData.append("bio", userData.bio);

          // Add image if provided
          if (profileImage) {
               formData.append("profile_image", profileImage);
          }

          console.log("Updating profile with data:", userData);

          const response = await fetch(`${API_BASE_URL}/me/detail`, {
               method: "PATCH",
               headers: {
                    Authorization: `Bearer ${token}`,
               },
               body: formData,
          });

          console.log("Update profile response status:", response.status);
          return handleResponse(response);
     },

     // Upload profile image only
     uploadProfileImage: async (imageFile) => {
          const token = getAuthToken();

          if (!token) {
               throw new Error("Token tidak ditemukan - silakan login ulang");
          }

          const formData = new FormData();
          formData.append("profile_image", imageFile);

          console.log("Uploading profile image:", imageFile.name);

          const response = await fetch(`${API_BASE_URL}/me/detail`, {
               method: "PATCH",
               headers: {
                    Authorization: `Bearer ${token}`,
               },
               body: formData,
          });

          console.log("Upload image response status:", response.status);
          return handleResponse(response);
     },

     // Portfolio management
     getPortfolio: async () => {
          const token = getAuthToken();

          if (!token) {
               throw new Error("Token tidak ditemukan - silakan login ulang");
          }

          console.log(
               "🔍 Fetching portfolio from:",
               `${API_BASE_URL}/portofolio/all`
          );

          // Jika backend memerlukan body untuk GET request
          const response = await fetch(`${API_BASE_URL}/portofolio/all`, {
               method: "GET",
               headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
               },
               // Note: GET request biasanya tidak memerlukan body
               // Jika backend memerlukan body, gunakan POST method
          });

          console.log("📡 Portfolio response status:", response.status);
          console.log(
               "📡 Portfolio response headers:",
               Object.fromEntries(response.headers.entries())
          );

          const data = await handleResponse(response);
          console.log("📦 Portfolio API response data:", data);

          // Handle both array and object responses
          let portfolioArray = [];
          if (Array.isArray(data)) {
               console.log(
                    "✅ API returned array directly, length:",
                    data.length
               );
               portfolioArray = data;
          } else if (data && data.portfolio && Array.isArray(data.portfolio)) {
               console.log(
                    "✅ API returned object with portfolio property, length:",
                    data.portfolio.length
               );
               portfolioArray = data.portfolio;
          } else {
               console.warn("⚠️ Unexpected data structure:", data);
               portfolioArray = [];
          }

          // Validate data structure
          if (portfolioArray.length > 0) {
               console.log("✅ Portfolio data structure is valid");
               portfolioArray.forEach((item, index) => {
                    console.log(`📸 Portfolio item ${index}:`, {
                         id: item.id,
                         image_url: item.image_url,
                         url: item.url,
                         created_at: item.created_at,
                    });
               });
          } else {
               console.log("📭 No portfolio items found");
          }

          // Return in expected format
          return { portfolio: portfolioArray };
     },

     // Alternative: Jika backend memerlukan body untuk get portfolio
     getPortfolioWithBody: async (userId = null) => {
          const token = getAuthToken();

          if (!token) {
               throw new Error("Token tidak ditemukan - silakan login ulang");
          }

          const body = userId ? { user_id: userId } : {};

          console.log("🔄 Fetching portfolio with body:", body);

          const response = await fetch(`${API_BASE_URL}/portofolio/all`, {
               method: "POST", // Gunakan POST jika backend memerlukan body
               headers: {
                    Authorization: `Bearer ${token}`,
                    "Content-Type": "application/json",
               },
               body: JSON.stringify(body),
          });

          console.log(
               "📡 Portfolio with body response status:",
               response.status
          );

          const data = await handleResponse(response);
          console.log("📦 Portfolio with body response data:", data);

          // Handle both array and object responses
          let portfolioArray = [];
          if (Array.isArray(data)) {
               console.log(
                    "✅ API returned array directly, length:",
                    data.length
               );
               portfolioArray = data;
          } else if (data && data.portfolio && Array.isArray(data.portfolio)) {
               console.log(
                    "✅ API returned object with portfolio property, length:",
                    data.portfolio.length
               );
               portfolioArray = data.portfolio;
          } else {
               console.warn("⚠️ Unexpected data structure:", data);
               portfolioArray = [];
          }

          // Return in expected format
          return { portfolio: portfolioArray };
     },

     uploadPortfolioImage: async (imageFile, title = "", description = "") => {
          const token = getAuthToken();

          if (!token) {
               throw new Error("Token tidak ditemukan - silakan login ulang");
          }

          const formData = new FormData();
          formData.append("title", title);
          formData.append("description", description);
          formData.append("image", imageFile); // Fixed: use "image" to match backend

          console.log("📤 Uploading portfolio image:", imageFile.name);
          console.log("📤 Upload URL:", `${API_BASE_URL}/portofolio/create`);
          console.log("📤 FormData contents:", {
               title,
               description,
               image: imageFile.name, // Updated field name
               imageSize: imageFile.size,
               imageType: imageFile.type,
          });

          const response = await fetch(`${API_BASE_URL}/portofolio/create`, {
               method: "POST",
               headers: {
                    Authorization: `Bearer ${token}`,
                    // JANGAN set Content-Type, biarkan browser yang set untuk FormData!
               },
               body: formData,
          });

          console.log("📡 Upload response status:", response.status);
          console.log(
               "📡 Upload response headers:",
               Object.fromEntries(response.headers.entries())
          );

          const data = await handleResponse(response);
          console.log("📦 Upload response data:", data);

          return data;
     },

     deletePortfolioImage: async (imageId) => {
          const token = getAuthToken();

          if (!token) {
               throw new Error("Token tidak ditemukan - silakan login ulang");
          }

          const response = await fetch(
               `${API_BASE_URL}/portofolio/delete/${imageId}`,
               {
                    method: "DELETE",
                    headers: {
                         Authorization: `Bearer ${token}`,
                         "Content-Type": "application/json",
                    },
               }
          );

          console.log(
               "Delete portfolio image response status:",
               response.status
          );
          return handleResponse(response);
     },
};

// Helper function to get auth token from localStorage
export const getAuthToken = () => {
     return localStorage.getItem("token");
};

// Helper function to set auth token in localStorage
export const setAuthToken = (token) => {
     if (token) {
          localStorage.setItem("token", token);
     } else {
          localStorage.removeItem("token");
     }
};
