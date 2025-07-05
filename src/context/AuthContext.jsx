import React, { createContext, useContext, useState } from "react";

// Context untuk status login user
const AuthContext = createContext();

export function AuthProvider({ children }) {
  // Cek localStorage untuk status login (dummy: "user" jika login, null jika guest)
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  // Fungsi login/logout dummy
  const login = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };
  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
