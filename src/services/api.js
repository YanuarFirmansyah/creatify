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
