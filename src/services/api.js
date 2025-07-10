const API_BASE_URL = "http://localhost:3000/api";

// Helper function to handle API responses
const handleResponse = async (response) => {
     const data = await response.json();

     if (!response.ok) {
          throw new Error(data.message || "Something went wrong");
     }

     return data;
};

// API service for authentication
export const authAPI = {
     // Register user
     register: async (userData) => {
          const response = await fetch(`${API_BASE_URL}/auth/register`, {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify(userData),
          });

          return handleResponse(response);
     },

     // Login user
     login: async (credentials) => {
          const response = await fetch(`${API_BASE_URL}/auth/login`, {
               method: "POST",
               headers: {
                    "Content-Type": "application/json",
               },
               body: JSON.stringify(credentials),
          });

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
