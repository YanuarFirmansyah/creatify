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
import OrderPage from "../pages/OrderPage.jsx";
import PaymentPage from "../pages/PaymentPage.jsx";
import FreelancerRegisterPage from "../pages/auth/FreelancerRegister.jsx";
import FreelancerRegister2 from "../pages/auth/FreelancerRegister2.jsx";
import FreelancerRegister3 from "../pages/auth/FreelancerRegister3.jsx";
import FreelancerDashboard from "../pages/FreelancerDashboard.jsx";
import MyFreelancerProfile from "../pages/MyFreelancerProfile.jsx";



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
                    path: "freelancer/:id/order", 
                    element: <OrderPage />,
               },
               {
                    path: "payment/:paymentId", 
                    element: <PaymentPage />,
               },
               {
                    path: "freelancer/:id/profile",
                    element: <FreelancerProfile />,
               },
               {
                    path: "freelancer/profile",
                    element: <MyFreelancerProfile />,
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
               {
                    path: "freelancer/dashboard",
                    element: <FreelancerDashboard />,
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
     {
          // Route untuk halaman register freelancer
          path: "/freelancer/register",
          element: <FreelancerRegisterPage />,
     },
     {
        path: "/freelancer/register/step2",
        element: <FreelancerRegister2 />,
    },
    {
        path: "/freelancer/register/step3",
        element: <FreelancerRegister3 />,
    },
]);

// Ekspor instance router agar bisa digunakan di file lain
export default router;
