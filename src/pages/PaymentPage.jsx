// src/pages/PaymentPage.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
// import qrisLogo from "../assets/qris-logo.png";
import waitingImage from "../assets/payment-waiting.png";
import successImage from "../assets/payment-success.png";
import PaymentStepper from "../components/payment/PaymentStepper";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function PaymentPage() {
     const navigate = useNavigate();
     const { paymentId } = useParams();
     const [order, setOrder] = useState(null);
     const [loading, setLoading] = useState(false);
     const { user } = useAuth(); // get logged-in user

     // Load snap.js
     useEffect(() => {
          const script = document.createElement("script");
          script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
          script.setAttribute("data-client-key", "Mid-client-U8_UrgvuqNq8gg-Q");
          script.async = true;
          document.body.appendChild(script);
          return () => document.body.removeChild(script);
     }, []);

     // Fetch order + polling status
     useEffect(() => {
          const fetchOrder = async () => {
               try {
                    const res = await fetch(
                         `https://order-service-creatify-production.up.railway.app/orders/${paymentId}`
                    );
                    const data = await res.json();
                    setOrder(data);
               } catch (err) {
                    console.error("Failed to load order:", err);
               }
          };
          fetchOrder();
          const interval = setInterval(fetchOrder, 3000); // polling tiap 3 detik
          return () => clearInterval(interval);
     }, [paymentId]);

     if (!order) return <p className="text-center">Loading...</p>;

     const currentStep = order.status === "paid" ? 2 : 1;

     const handlePay = () => {
          if (!window.snap || !order.payment_token) {
               alert("Payment system belum siap!");
               return;
          }
          setLoading(true);
          window.snap.pay(order.payment_token, {
               onSuccess: (result) => {
                    console.log("Payment success:", result);
                    navigate(`/payment/${order.order_id}`);
               },
               onPending: (result) => {
                    console.log("Payment pending:", result);
                    alert("Menunggu pembayaran...");
               },
               onError: (error) => {
                    console.error("Payment failed:", error);
                    alert("Pembayaran gagal: " + error.message);
               },
               onClose: () => {
                    console.log("Payment popup closed");
                    navigate(`/payment/${order.order_id}`);
               },
          });
          setLoading(false);
     };

     return (
          <div className="bg-white font-sans">
               <main className="max-w-screen-xl mx-auto px-6 py-12">
                    <h1 className="text-3xl font-bold mb-8 text-center">
                         Your Order
                    </h1>
                    <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 lg:p-12 shadow-sm">
                         <PaymentStepper currentStep={currentStep} />
                         <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                              <div className="flex justify-center">
                                   <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg">
                                        <img
                                             src={
                                                  order.status === "paid"
                                                       ? successImage
                                                       : waitingImage
                                             }
                                             alt={
                                                  order.status === "paid"
                                                       ? "Pembayaran Berhasil"
                                                       : "Menunggu Pembayaran"
                                             }
                                             className="w-56 h-56"
                                        />
                                   </div>
                              </div>
                              <div className="space-y-4 text-sm">
                                   <div className="flex">
                                        <span className="w-40 text-gray-500">
                                             Nama
                                        </span>
                                        <span className="font-semibold text-purple-600">
                                             : {user?.name || "-"}
                                        </span>
                                   </div>
                                   <div className="flex">
                                        <span className="w-40 text-gray-500">
                                             Detail Produk
                                        </span>
                                        <span className="font-semibold text-purple-600">
                                             : {order.package_id}
                                        </span>
                                   </div>
                                   <div className="flex">
                                        <span className="w-40 text-gray-500">
                                             Total Pembayaran
                                        </span>
                                        <span className="font-semibold text-purple-600">
                                             : Rp{" "}
                                             {Number(
                                                  order.total || 0
                                             ).toLocaleString("id-ID")}
                                        </span>
                                        {/* <span className="font-semibold text-purple-600">
                  : Rp {order.total.toLocaleString("id-ID")}
                </span> */}
                                   </div>
                                   <div className="flex items-center">
                                        <span className="w-40 text-gray-500">
                                             Status Pemesanan
                                        </span>
                                        <div className="flex items-center">
                                             <span className="mr-2">:</span>
                                             <span
                                                  className={`text-xs font-bold px-2.5 py-1 rounded-full ${
                                                       order.status === "paid"
                                                            ? "bg-green-100 text-green-800"
                                                            : "bg-yellow-100 text-yellow-800"
                                                  }`}
                                             >
                                                  {order.status}
                                             </span>
                                        </div>
                                   </div>
                                   <div className="flex">
                                        <span className="w-40 text-gray-500">
                                             ID Pembayaran
                                        </span>
                                        <span className="font-semibold text-purple-600">
                                             : {order.order_id}
                                        </span>
                                   </div>
                                   {order.status !== "paid" && (
                                        <button
                                             onClick={handlePay}
                                             disabled={loading}
                                             className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition mt-8"
                                        >
                                             {loading
                                                  ? "Memproses..."
                                                  : "Bayar Sekarang"}
                                        </button>
                                   )}
                              </div>
                         </div>
                    </div>
               </main>
          </div>
     );
}
