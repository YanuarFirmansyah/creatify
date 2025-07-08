// src/pages/OrderPage.jsx
import React from "react";
import { useState } from "react";
import PackageCard from "../components/order/PackageCard";
import OrderSummary from "../components/order/OrderSummary";

// ===================================================================
// KOMPONEN HALAMAN UTAMA
// ===================================================================
const packages = [
     {
          id: "basic",
          name: "Basic",
          price: 15000,
          deliveryTime: 7,
          revisions: 1,
          benefits: Array(7).fill("Benefit yang diberikan"),
     },
     {
          id: "plus",
          name: "Plus",
          price: 25000,
          deliveryTime: 5,
          revisions: 2,
          benefits: Array(7).fill("Benefit yang diberikan"),
     },
     {
          id: "premium",
          name: "Premium",
          price: 40000,
          deliveryTime: 3,
          revisions: 3,
          benefits: Array(7).fill("Benefit yang diberikan"),
     },
];

export default function OrderPage() {
     const [selectedPackageId, setSelectedPackageId] = useState("basic");
     const selectedPackage = packages.find((p) => p.id === selectedPackageId);

     return (
          <div className="bg-white font-sans">
               <main className="max-w-screen-xl mx-auto px-6 py-12">
                    <h1 className="text-3xl font-bold mb-8">Your Order</h1>
                    <div className="grid lg:grid-cols-4 gap-8">
                         {/* Kolom Pilihan Paket */}
                         <div className="lg:col-span-3 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                              {packages.map((pkg) => (
                                   <PackageCard
                                        key={pkg.id}
                                        {...pkg}
                                        isSelected={
                                             selectedPackageId === pkg.id
                                        }
                                        onSelect={() =>
                                             setSelectedPackageId(pkg.id)
                                        }
                                   />
                              ))}
                         </div>
                         {/* Kolom Ringkasan */}
                         <div className="lg:col-span-1">
                              <OrderSummary selectedPackage={selectedPackage} />
                         </div>
                    </div>
               </main>
          </div>
     );
}
