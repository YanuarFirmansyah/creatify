// src/components/OrderSummary.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { useAuth } from "../../context/AuthContext";

const OrderSummary = ({ selectedPackage }) => {
     const navigate = useNavigate();
     const { user } = useAuth(); // pakai user data dari context

     const webServiceFee = 5000;
     const tax = 5000;
     const packagePrice = selectedPackage ? selectedPackage.price : 0;
     const totalPrice = packagePrice + webServiceFee + tax;

     const handleOrder = async () => {
          try {
               const res = await fetch(
                    "https://order-service-creatify-production.up.railway.app/orders",
                    {
                         method: "POST",
                         headers: { "Content-Type": "application/json" },
                         body: JSON.stringify({
                              packageId: selectedPackage.id,
                              price: selectedPackage.price,
                              tax,
                              serviceFee: webServiceFee,
                              total: totalPrice,
                              customerName: user?.name || "-",
                              customerEmail: user?.email || "-",
                         }),
                    }
               );
               const data = await res.json();
               if (data.order_id) {
                    // redirect ke PaymentPage bawa order_id
                    navigate(`/payment/${data.order_id}`);
               } else {
                    alert("Gagal membuat order: " + JSON.stringify(data));
               }
          } catch (err) {
               console.error(err);
               alert("Terjadi error: " + err.message);
          }
     };

     return (
          <div className="bg-white rounded-xl border border-gray-200 p-6 h-fit sticky top-28">
               <h3 className="text-lg font-bold mb-6 text-center">
                    Total Pembayaran
               </h3>
               <div className="space-y-3 text-sm text-gray-600">
                    <div className="flex justify-between">
                         <span>Pilihan Paket :</span>
                         <span className="font-medium">
                              {packagePrice.toLocaleString("id-ID")}
                         </span>
                    </div>
                    <div className="flex justify-between">
                         <span>Web Service :</span>
                         <span className="font-medium">
                              {webServiceFee.toLocaleString("id-ID")}
                         </span>
                    </div>
                    <div className="flex justify-between">
                         <span>Tax :</span>
                         <span className="font-medium">
                              {tax.toLocaleString("id-ID")}
                         </span>
                    </div>
               </div>
               <hr className="my-4 border-gray-300" />
               <div className="flex justify-between font-bold text-base mb-6">
                    <span>Total Pembayaran :</span>
                    <span>{totalPrice.toLocaleString("id-ID")}</span>
               </div>
               <button
                    onClick={handleOrder}
                    className="w-full text-center py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold text-sm transition flex items-center justify-center gap-2"
               >
                    Order <ArrowRight size={16} />
               </button>
          </div>
     );
};

export default OrderSummary;
