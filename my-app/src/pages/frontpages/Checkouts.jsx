import { useCart } from "../../context/CartContext";

export default function Checkout() {
  const { cart, clearCart } = useCart();

  function handleSubmit(e) {
    e.preventDefault();
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }
    alert("Order placed successfully!");
    clearCart();
  }

  return (
    <div className="text-white">
      <h1 className="text-xl font-bold mb-6 text-white">Checkout</h1>
      <form className="space-y-4 max-w-md" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-800 text-white placeholder-gray-400"
          required
        />
        <input
          type="text"
          placeholder="Address"
          className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-800 text-white placeholder-gray-400"
          required
        />
        <input
          type="text"
          placeholder="Payment"
          className="w-full px-3 py-2 border border-gray-600 rounded bg-gray-800 text-white placeholder-gray-400"
          required
        />
        <button
          type="submit"
          style={{ backgroundColor: "#964300ff", color: "white" }}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          Place order
        </button>
      </form>
    </div>
  );
}
