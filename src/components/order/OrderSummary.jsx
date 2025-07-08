import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const OrderSummary = ({ selectedPackage }) => {
     const paymentId = "YANUAR5376726799";
     const webServiceFee = 5000;
     const tax = 5000;
     const packagePrice = selectedPackage ? selectedPackage.price : 0;
     const totalPrice = packagePrice + webServiceFee + tax;

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
               <div className="space-y-3">
                    <button className="w-full text-center py-2.5 border border-gray-400 rounded-lg hover:bg-gray-100 font-medium text-sm transition">
                         Pilih Metode Pembayaran
                    </button>
                    <Link
                         to={`/payment/${paymentId}`}
                         className="w-full text-center py-2.5 bg-purple-600 text-white rounded-lg hover:bg-purple-700 font-semibold text-sm transition flex items-center justify-center gap-2"
                    >
                         Order <ArrowRight size={16} />
                    </Link>
               </div>
          </div>
     );
};

export default OrderSummary;
