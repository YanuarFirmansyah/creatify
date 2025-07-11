// src/context/AuthContext.jsx

import React, { createContext, useContext, useState } from "react";
import { authAPI, setAuthToken, getAuthToken } from "../services/api";

// Context untuk status login user
const AuthContext = createContext();

export function AuthProvider({ children }) {
     const [user, setUser] = useState(null);
     const [loading, setLoading] = useState(true);
     const [error, setError] = useState(null);

     // Initialize user from localStorage on mount
     React.useEffect(() => {
          try {
               const saved = localStorage.getItem("user");
               const token = getAuthToken();
               if (saved && token) {
                    const parsedUser = JSON.parse(saved);
                    setUser(parsedUser);
               }
          } catch (err) {
               console.error("Error parsing user from localStorage:", err);
               // Clear corrupted data
               localStorage.removeItem("user");
               setAuthToken(null);
          } finally {
               setLoading(false);
          }
     }, []);

     const login = async (credentials) => {
          setLoading(true);
          setError(null);

          try {
               const response = await authAPI.login(credentials);

               // Save token and user data
               setAuthToken(response.token);
               setUser(response.user);
               localStorage.setItem("user", JSON.stringify(response.user));

               return response;
          } catch (err) {
               setError(err.message);
               throw err;
          } finally {
               setLoading(false);
          }
     };

     const register = async (userData) => {
          setLoading(true);
          setError(null);

          try {
               console.log("Attempting to register user:", userData);
               const response = await authAPI.register(userData);
               console.log("Register response:", response);
               return response;
          } catch (err) {
               console.error("Registration error:", err);

               // Handle specific error cases
               if (err.message.includes("Email sudah digunakan")) {
                    setError(
                         "Email sudah terdaftar. Silakan gunakan email lain atau login."
                    );
               } else if (err.message.includes("Gagal melakukan registrasi")) {
                    setError(
                         "Gagal melakukan registrasi. Silakan coba lagi atau hubungi admin."
                    );
               } else {
                    setError(err.message);
               }

               throw err;
          } finally {
               setLoading(false);
          }
     };

     const logout = () => {
          setUser(null);
          setAuthToken(null);
          localStorage.removeItem("user");
          setError(null);
     };

     const switchRole = (newRole) => {
          // Pastikan ada user yang sedang login
          if (!user) return;

          // Buat objek user yang diperbarui dengan role baru
          // Spread syntax (...) digunakan untuk menyalin semua properti user yang ada
          const updatedUser = { ...user, role: newRole };

          // Perbarui state dan localStorage dengan data user yang baru
          setUser(updatedUser);
          localStorage.setItem("user", JSON.stringify(updatedUser));
     };

     const clearError = () => {
          setError(null);
     };

     return (
          <AuthContext.Provider
               value={{
                    user,
                    setUser,
                    login,
                    logout,
                    register,
                    switchRole,
                    loading,
                    error,
                    clearError,
               }}
          >
               {children}
          </AuthContext.Provider>
     );
}

export function useAuth() {
     return useContext(AuthContext);
}
