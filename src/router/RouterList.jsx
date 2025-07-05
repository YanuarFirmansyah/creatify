import FreelancerProfile from "../pages/FreelancerProfile.jsx";
import UserProfile from "../pages/UserProfile.jsx";
import TransactionHistory from "../pages/TransactionHistory.jsx";
// src/router/RouterList.jsx
import { createBrowserRouter } from "react-router-dom";
import App from "../App.jsx";
import Login from "../pages/auth/Login.jsx";
import Register from "../pages/auth/Register.jsx";
import HomePage from "../pages/HomePage.jsx";
import FreelancerDetail from "../pages/FreelancerDetail.jsx";
import ServiceCategory from "../pages/ServiceCategory.jsx";
import ReviewList from "../pages/ReviewList.jsx";

// Buat instance router
const router = createBrowserRouter([
     {
          // Ini adalah route utama yang menggunakan App.jsx sebagai layout
          path: "/",
          element: <App />,
          children: [
               {
                    index: true,
                    element: <HomePage />,
               },
               {
                    path: "freelancer/:id",
                    element: <FreelancerDetail />,
               },
               {
                    path: "freelancer/:id/profile",
                    element: <FreelancerProfile />,
               },
               {
                    path: "service/:category",
                    element: <ServiceCategory />,
               },
               {
                    path: "service/:category/reviews",
                    element: <ReviewList />,
               },
               {
                    path: "profile",
                    element: <UserProfile />,
               },
               {
                    path: "transactions",
                    element: <TransactionHistory />,
               },
          ],
     },
     {
          // Ini adalah route terpisah untuk halaman login yang tidak menggunakan layout App
          path: "/login",
          element: <Login />,
     },
     {
          // Route untuk halaman register
          path: "/register",
          element: <Register />,
     },
]);

// Ekspor instance router agar bisa digunakan di file lain
export default router;
