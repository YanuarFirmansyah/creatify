import React, { useState, useEffect } from "react";
import qrisLogo from "../assets/qris-logo.png";
import qrCodeImage from "../assets/placeholder-qr.png";
import PaymentStepper from "../components/payment/PaymentStepper";

const paymentDetails = {
     productName: "Muhammad Sumbul / Basic Package",
     total: 15000,
     status: "Belum dibayar",
     paymentId: "YANUAR5376726798",
};

export default function PaymentPage() {
     const [loading, setLoading] = useState(false);

     // Load Snap.js SDK
     useEffect(() => {
          const script = document.createElement("script");
          script.src = "https://app.sandbox.midtrans.com/snap/snap.js";
          script.setAttribute("data-client-key", "Mid-client-U8_UrgvuqNq8gg-Q"); // Ganti clientKey kamu
          script.async = true;
          document.body.appendChild(script);
          return () => {
               document.body.removeChild(script);
          };
     }, []);

     const handlePay = async () => {
          setLoading(true);
          try {
               // Buat order_id unik
               const orderData = {
                    order_id: "ORDER-" + Date.now(),
                    amount: 15000,
                    first_name: "Budi",
                    email: "budi@email.com",
               };

               const res = await fetch(
                    "https://payment-service-creatify-production.up.railway.app/payments",
                    {
                         method: "POST",
                         headers: { "Content-Type": "application/json" },
                         body: JSON.stringify(orderData),
                    }
               );
               const data = await res.json();
               if (data.token) {
                    window.snap.pay(data.token, {
                         onSuccess: (result) => {
                              console.log("Payment success:", result);
                              alert("Pembayaran berhasil!");
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
                         },
                    });
               } else {
                    alert(
                         "Gagal membuat pembayaran: " +
                              (data.error || JSON.stringify(data))
                    );
               }
          } catch (err) {
               console.error("Payment error:", err);
               alert("Terjadi error pembayaran: " + err.message);
          }
          setLoading(false);
     };

     const currentStep = 1;

     return (
          <div className="bg-white font-sans">
               <main className="max-w-screen-xl mx-auto px-6 py-12">
                    <h1 className="text-3xl font-bold mb-8 text-center">
                         Your Order
                    </h1>
                    <div className="max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 lg:p-12 shadow-sm">
                         <PaymentStepper currentStep={currentStep} />
                         <div className="flex items-center justify-center gap-3 mb-8">
                              <h2 className="text-xl font-semibold">
                                   Bayar dengan
                              </h2>
                              <img
                                   src={qrisLogo}
                                   alt="QRIS Logo"
                                   className="h-6"
                              />
                         </div>
                         <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
                              <div className="flex justify-center">
                                   <div className="p-4 border-2 border-dashed border-gray-300 rounded-lg">
                                        <img
                                             src={qrCodeImage}
                                             alt="QR Code"
                                             className="w-56 h-56"
                                        />
                                   </div>
                              </div>
                              <div className="space-y-4 text-sm">
                                   <div className="flex">
                                        <span className="w-40 text-gray-500">
                                             Detail Produk
                                        </span>
                                        <span className="font-semibold text-purple-600">
                                             : {paymentDetails.productName}
                                        </span>
                                   </div>
                                   <div className="flex">
                                        <span className="w-40 text-gray-500">
                                             Total Pembayaran
                                        </span>
                                        <span className="font-semibold text-purple-600">
                                             : Rp{" "}
                                             {paymentDetails.total.toLocaleString(
                                                  "id-ID"
                                             )}
                                        </span>
                                   </div>
                                   <div className="flex items-center">
                                        <span className="w-40 text-gray-500">
                                             Status Pemesanan
                                        </span>
                                        <div className="flex items-center">
                                             <span className="mr-2">:</span>
                                             <span className="bg-yellow-100 text-yellow-800 text-xs font-bold px-2.5 py-1 rounded-full">
                                                  {paymentDetails.status}
                                             </span>
                                        </div>
                                   </div>
                                   <div className="flex">
                                        <span className="w-40 text-gray-500">
                                             ID Pembayaran
                                        </span>
                                        <span className="font-semibold text-purple-600">
                                             : {paymentDetails.paymentId}
                                        </span>
                                   </div>
                              </div>
                         </div>
                         <button
                              onClick={handlePay}
                              disabled={loading}
                              className="w-full bg-purple-600 text-white py-3 rounded-lg font-semibold hover:bg-purple-700 transition mt-8"
                         >
                              {loading ? "Memproses..." : "Bayar Sekarang"}
                         </button>
                    </div>
               </main>
          </div>
     );
}
