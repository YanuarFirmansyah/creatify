// src/context/AuthContext.jsx

import React, { createContext, useContext, useState } from "react";

// Context untuk status login user
const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  // <<< 1. TAMBAHKAN FUNGSI BARU DI SINI
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

  // <<< 2. TAMBAHKAN 'switchRole' KE VALUE YANG DISEDIAKAN
  return (
    <AuthContext.Provider value={{ user, login, logout, switchRole }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}