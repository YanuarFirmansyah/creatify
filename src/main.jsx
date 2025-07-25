// src/main.jsx

import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css"; // pastikan tailwind terhubung
import { RouterProvider } from "react-router-dom";
import router from "./router/RouterList.jsx";
import { AuthProvider } from "./context/AuthContext";
import ErrorBoundary from "./components/ErrorBoundary.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
     <React.StrictMode>
          <ErrorBoundary>
               <AuthProvider>
                    <RouterProvider router={router} />
               </AuthProvider>
          </ErrorBoundary>
     </React.StrictMode>
);
