import React from "react";

const dummyTransactions = [
  {
    id: 1,
    date: "01/20/2025",
    service: "Lorem ipsum dolor sit amet consectetur. In tellus tortor varius sapien et. Sem eu nascetur molestie nisi enim. Sociis pellentesque egestas nulla arcu sit. Lectus viverra pellentesque velit accumsan.",
    order: "1x",
    total: 370000,
  },
];

const TransactionHistory = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <div className="max-w-screen-xl mx-auto px-6 py-8">
        <h1 className="text-3xl font-bold mb-6 text-gray-800">Riwayat Transaksi</h1>
        <div className="mb-4 flex items-center gap-2">
          <label htmlFor="tanggal" className="font-medium">Tanggal</label>
          <select id="tanggal" className="border rounded px-2 py-1 text-sm">
            <option value="">Tanggal</option>
            {/* Tambahkan filter tanggal jika perlu */}
          </select>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full border-separate border-spacing-0">
            <thead>
              <tr className="bg-gray-200 text-gray-700 text-left">
                <th className="px-4 py-2 rounded-tl-lg">Tanggal</th>
                <th className="px-4 py-2">Nama Layanan</th>
                <th className="px-4 py-2">Order</th>
                <th className="px-4 py-2 rounded-tr-lg">Total Harga</th>
              </tr>
            </thead>
            <tbody>
              {dummyTransactions.map((trx) => (
                <tr key={trx.id} className="border-b last:border-b-0">
                  <td className="px-4 py-2 align-top whitespace-nowrap">{trx.date}</td>
                  <td className="px-4 py-2 align-top max-w-xs text-ellipsis overflow-hidden">{trx.service}</td>
                  <td className="px-4 py-2 align-top">{trx.order}</td>
                  <td className="px-4 py-2 align-top whitespace-nowrap">Rp {trx.total.toLocaleString("id-ID", {minimumFractionDigits:2})}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TransactionHistory;
