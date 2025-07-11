const API_BASE_URL = "https://creatify-backend-production.up.railway.app";

// Helper function to handle API responses
const handleResponse = async (response) => {
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
