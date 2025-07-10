// src/context/AuthContext.jsx

import React, { createContext, useContext, useState } from "react";
import { authAPI, setAuthToken, getAuthToken } from "../services/api";

// Context untuk status login user
const AuthContext = createContext();

export function AuthProvider({ children }) {
     const [user, setUser] = useState(() => {
          const saved = localStorage.getItem("user");
          const token = getAuthToken();
          return saved && token ? JSON.parse(saved) : null;
     });

     const [loading, setLoading] = useState(false);
     const [error, setError] = useState(null);

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
               const response = await authAPI.register(userData);
               return response;
          } catch (err) {
               setError(err.message);
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
