import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useOrders } from "../../context/OrderContext";

const ACCENT_COLOR = "#00bcd4";
const BUTTON_BG = ACCENT_COLOR;
const PRIMARY_TEXT_COLOR = "text-gray-800";
const BORDER_COLOR = "border-gray-300";

export default function Checkout() {
  const { cart, clearCart } = useCart();
  const { addOrder } = useOrders();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  const [formData, setFormData] = useState({
    name: "",
    address: "",
    paymentMethod: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const totalItems = cart.length;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  async function handleSubmit(e) {
    e.preventDefault();
    if (totalItems === 0) {
      alert("❌ Ups! Keranjang masih kosong. Ayo belanja dulu!");
      return;
    }

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // ✅ Simpan pesanan ke OrderContext
    addOrder({
      name: formData.name,
      address: formData.address,
      paymentMethod: formData.paymentMethod,
      total,
      items: cart,
    });

    alert("✅ Order Berhasil Ditempatkan! Terima kasih!");
    clearCart();
    setIsSubmitting(false);
  }

  const CartItemReview = ({ item }) => (
    <div className="flex items-start gap-4 py-3 border-b border-gray-100 last:border-b-0">
      <img
        src={item.img}
        alt={item.name}
        className="w-12 h-12 object-cover rounded-md flex-shrink-0"
      />
      <div className="flex-1">
        <p className="font-semibold text-sm text-gray-800">{item.name}</p>
        <p className="text-xs text-gray-500">
          Qty: {item.qty} x Rp{item.price.toLocaleString("id-ID")}.000
        </p>
      </div>
      <p
        className="font-bold text-sm text-right flex-shrink-0"
        style={{ color: ACCENT_COLOR }}
      >
        Rp{(item.price * item.qty).toLocaleString("id-ID")}.000
      </p>
    </div>
  );

  const CartSummary = () => (
    <div
      className={`p-6 rounded-xl border ${BORDER_COLOR} bg-white shadow-lg mb-6 ${PRIMARY_TEXT_COLOR}`}
    >
      <h2 className="text-xl font-extrabold mb-4 border-b border-gray-200 pb-2">
        Review Pesanan ({totalItems} Item)
      </h2>
      <div className="space-y-2 mb-4 max-h-80 overflow-y-auto pr-2">
        {cart.map((item) => (
          <CartItemReview key={item.id} item={item} />
        ))}
      </div>
      <p
        className="flex justify-between items-center text-xl pt-4 font-extrabold border-t border-gray-200"
        style={{ color: PRIMARY_TEXT_COLOR }}
      >
        <span>SUBTOTAL:</span>
        <span style={{ color: ACCENT_COLOR }}>
          Rp{total.toLocaleString("id-ID")}.000
        </span>
      </p>
    </div>
  );

  return (
    <div
      className={`p-4 sm:p-6 md:p-10 bg-white min-h-screen ${PRIMARY_TEXT_COLOR}`}
    >
      <h1
        className={`text-4xl font-extrabold mb-8 tracking-wide ${PRIMARY_TEXT_COLOR}`}
      >
        Final Checkout 💳
      </h1>
      <div className="grid md:grid-cols-2 gap-10">
        <div className="order-1">
          <h2
            className={`text-2xl font-bold mb-6 border-b border-gray-200 pb-2 ${PRIMARY_TEXT_COLOR}`}
          >
            Detail Pengiriman
          </h2>
          <form className="space-y-6" onSubmit={handleSubmit}>
            <Input
              type="text"
              name="name"
              placeholder="Nama Lengkap"
              value={formData.name}
              onChange={handleInputChange}
              accentColor={ACCENT_COLOR}
            />
            <Input
              type="text"
              name="address"
              placeholder="Alamat Lengkap"
              value={formData.address}
              onChange={handleInputChange}
              accentColor={ACCENT_COLOR}
            />
            <select
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleInputChange}
              className={`w-full px-4 py-3 border rounded-xl bg-white ${PRIMARY_TEXT_COLOR} placeholder-gray-400 focus:ring-2 transition duration-300 border-gray-300`}
              style={{
                borderColor: formData.paymentMethod ? ACCENT_COLOR : "#d1d5db",
              }}
              required
            >
              <option value="" disabled>
                Pilih Metode Pembayaran
              </option>
              <option value="transfer">Transfer Bank 🏦</option>
              <option value="e-wallet">E-Wallet (GoPay/Dana) 📱</option>
              <option value="cc">Kartu Kredit/Debit 💳</option>
              <option value="cod">COD (Bayar di Tempat) 🚚</option>
            </select>
            <button
              type="submit"
              disabled={isSubmitting || totalItems === 0}
              style={{ backgroundColor: BUTTON_BG }}
              className={`w-full text-white px-6 py-3 rounded-full font-bold text-lg shadow-md hover:shadow-xl transition duration-300 ${
                isSubmitting || totalItems === 0
                  ? "opacity-60 cursor-not-allowed"
                  : ""
              }`}
            >
              {isSubmitting
                ? "Memproses Order..."
                : `✅ Bayar Sekarang (${totalItems} Item)`}
            </button>
          </form>
        </div>
        <div className="order-2">
          <CartSummary />
          <p className="text-sm text-gray-500 text-center pt-2">
            Dengan menekan tombol di atas, Anda menyetujui syarat & ketentuan
            kami.
          </p>
        </div>
      </div>
    </div>
  );
}

const Input = ({ type, name, placeholder, value, onChange, accentColor }) => (
  <input
    type={type}
    name={name}
    placeholder={placeholder}
    value={value}
    onChange={onChange}
    className="w-full px-4 py-3 border border-gray-300 rounded-xl bg-white text-gray-800 placeholder-gray-400 focus:ring-2 transition duration-300"
    style={{ borderColor: value ? accentColor : "#d1d5db" }}
    required
  />
);
