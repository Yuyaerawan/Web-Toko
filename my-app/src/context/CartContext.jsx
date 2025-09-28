import { createContext, useContext, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // ✅ addToCart sekarang terima qty
  function addToCart(product) {
  setCart((prev) => {
    const exists = prev.find((item) => item.cartItemId === product.cartItemId);
    if (exists) {
      return prev.map((item) =>
        item.cartItemId === product.cartItemId
          ? { ...item, qty: item.qty + product.qty }
          : item
      );
    }
    return [...prev, { ...product }];
  });
}


  function removeFromCart(id) {
    setCart((prev) => prev.filter((item) => item.id !== id));
  }

  function clearCart() {
    setCart([]);
  }

  function updateQuantity(id, newQuantity) {
    if (newQuantity < 1) return;
    setCart((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, qty: newQuantity } : item
      )
    );
  }

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart, updateQuantity }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}
