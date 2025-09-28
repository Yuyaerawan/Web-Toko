// src/context/OrderContext.jsx
import { createContext, useContext, useState, useEffect } from "react";

const OrderContext = createContext();

// Provider untuk membungkus aplikasi
export function OrderProvider({ children }) {
  const [orders, setOrders] = useState(() => {
    // load dari localStorage saat pertama kali
    const saved = localStorage.getItem("orders");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    // simpan ke localStorage setiap kali orders berubah
    localStorage.setItem("orders", JSON.stringify(orders));
  }, [orders]);

  const addOrder = (order) => {
    setOrders((prev) => [...prev, order]);
  };

  // 🆕 Hapus pesanan berdasarkan index
  const removeOrder = (index) => {
    setOrders((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <OrderContext.Provider value={{ orders, addOrder, removeOrder }}>
      {children}
    </OrderContext.Provider>
  );
}

// ✅ Custom hook
export const useOrders = () => useContext(OrderContext);
