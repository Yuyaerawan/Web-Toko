import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, clearCart, updateQuantity } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="bg-gray-100 rounded-xl shadow-2xl p-6 sm:p-8 max-w-3xl mx-auto my-12">
      <h1 className="text-3xl font-extrabold mb-6 text-gray-800 flex items-center gap-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-8 w-8 text-teal-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.182 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        Keranjang Belanja
      </h1>

      {cart.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-gray-500 text-lg mb-4">Keranjang Anda kosong.</p>
          <p className="text-gray-600 font-medium">
            <Link to="/" className="text-blue-500 hover:underline">
              Jelajahi produk kami
            </Link>{" "}
            dan isi keranjang Anda!
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm transition-all duration-300 hover:shadow-lg hover:bg-gray-100"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-24 h-24 object-cover rounded-md"
              />
              <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between">
                <div>
                  <p className="font-bold text-gray-800 text-lg">{item.name}</p>
                  <p className="text-sm text-gray-500">
                    Harga: Rp{item.price.toLocaleString("id-ID")}.000
                  </p>
                  <p className="text-xl font-bold text-teal-600 mt-2">
                    Rp{(item.price * item.qty).toLocaleString("id-ID")}.000
                  </p>
                </div>
                <div className="flex items-center gap-2 mt-4 sm:mt-0">
                  <button
                    onClick={() => updateQuantity(item.id, item.qty - 1)}
                    disabled={item.qty <= 1}
                    className="bg-gray-200 text-gray-700 w-9 h-9 rounded-full flex items-center justify-center text-2xl font-bold disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                  >
                    -
                  </button>
                  <span className="text-xl font-semibold w-10 text-center text-gray-800">
                    {item.qty}
                  </span>
                  <button
                    onClick={() => updateQuantity(item.id, item.qty + 1)}
                    className="bg-gray-200 text-gray-700 w-9 h-9 rounded-full flex items-center justify-center text-2xl font-bold hover:bg-gray-300 transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>
              <button
                onClick={() => removeFromCart(item.id)}
                className="text-red-500 hover:text-red-700 transition-colors duration-200 self-start"
                title="Hapus dari keranjang"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                  />
                </svg>
              </button>
            </div>
          ))}

          <div className="flex justify-between items-center border-t border-gray-200 pt-6 mt-6">
            <span className="text-xl font-bold text-gray-800">Total</span>
            <span className="text-2xl font-extrabold text-teal-600">
              Rp{total.toLocaleString("id-ID")}.000
            </span>
          </div>
        </div>
      )}

      {cart.length > 0 && (
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <Link
            to="/checkout"
            className="px-4 py-2 rounded"
            style={{ backgroundColor: "#009688", color: "white" }}
          >
            Lanjutkan ke Pembayaran
          </Link>
          <button
            onClick={clearCart}
            className="px-4 py-2 rounded"
            style={{ backgroundColor: "#964300ff", color: "white" }}
          >
            Bersihkan Keranjang
          </button>
        </div>
      )}
    </div>
  );
}
