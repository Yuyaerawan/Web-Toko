import React from "react";
import { useOrders } from "../../context/OrderContext";

export default function AdminDashboard() {
  const { orders, removeOrder } = useOrders();

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">📦 Admin Dashboard</h1>

      {orders.length === 0 ? (
        <p className="text-gray-600">Belum ada pesanan masuk.</p>
      ) : (
        <div className="overflow-x-auto bg-white shadow-md rounded-lg">
          <table className="min-w-full border border-gray-200 rounded-lg">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-4 py-3 border-b">#</th>
                <th className="px-4 py-3 border-b">Nama</th>
                <th className="px-4 py-3 border-b">Alamat</th>
                <th className="px-4 py-3 border-b">Metode</th>
                <th className="px-4 py-3 border-b">Total</th>
                <th className="px-4 py-3 border-b">Detail</th>
                <th className="px-4 py-3 border-b">Aksi</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3 border-b">{index + 1}</td>
                  <td className="px-4 py-3 border-b">{order.name}</td>
                  <td className="px-4 py-3 border-b">{order.address}</td>
                  <td className="px-4 py-3 border-b">{order.paymentMethod}</td>
                  <td className="px-4 py-3 border-b font-bold text-teal-600">
                    Rp{order.total.toLocaleString("id-ID")}.000
                  </td>
                  <td className="px-4 py-3 border-b">
                    <ul className="list-disc list-inside text-sm text-gray-600">
                      {order.items.map((item, i) => (
                        <li key={i}>
                          {item.name} ({item.qty}x) - Rp{item.price.toLocaleString("id-ID")}.000
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="px-4 py-3 border-b">
                    <button
                      onClick={() => removeOrder(index)}
                       style={{ backgroundColor: "#ff0000ff" }}
                      className="px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
