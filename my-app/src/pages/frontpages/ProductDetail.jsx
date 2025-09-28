import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";

// --- DATA PRODUK (path gambar tetap sama seperti di dashboard) ---
const rawProducts = [
  { id: 1, name: "T-shirt", price: 20, img: "/images/baju.png", category: "Pakaian", sizes: ["S", "M", "L", "XL"] },
  { id: 2, name: "Pants", price: 25, img: "/images/celana.png", category: "Pakaian", sizes: ["28", "30", "32", "34"] },
  { id: 11, name: "Sneakers", price: 50, img: "/images/sepatu.png", category: "Sepatu", sizes: ["38", "39", "40", "41", "42"] },
  { id: 21, name: "Hat", price: 15, img: "/images/topi.png", category: "Aksesoris", sizes: ["One Size"] },
  // ... (lanjutkan sesuai data lengkap Anda)
];

const products = rawProducts.reduce((acc, product) => {
  acc[product.id] = product;
  return acc;
}, {});

const ACCENT_COLOR = "#9333EA"; // warna ungu dashboard

export default function ProductDetail() {
  const { id } = useParams();
  const product = products[parseInt(id)];
  const { addToCart } = useCart();

  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState(product?.sizes ? product.sizes[0] : null);

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <p className="text-3xl font-bold text-red-500">Produk tidak ditemukan!</p>
      </div>
    );
  }

  const handleAddToCart = () => {
    const itemToAdd = {
      ...product,
      qty: quantity,
      selectedSize,
      cartItemId: `${product.id}-${selectedSize || "n/a"}`
    };
    addToCart(itemToAdd);
    alert(`Berhasil menambahkan ${quantity}x ${product.name} (Ukuran: ${selectedSize}) ke keranjang!`);
  };

  const defaultDescription = `Dapatkan ${product.name} premium dari kategori ${product.category} ini. Dibuat dengan material berkualitas tinggi dan desain modern yang nyaman dipakai sepanjang hari. Cocok untuk semua gaya hidup.`;

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-4 sm:p-8">
      <div className="bg-gray-800 rounded-3xl shadow-2xl p-6 sm:p-10 max-w-5xl w-full flex flex-col lg:flex-row items-start space-y-8 lg:space-y-0 lg:space-x-12">
        
        {/* Product Image */}
        <div className="w-full lg:w-1/2 flex flex-col items-center">
          <img 
            src={product.img}
            alt={product.name}
            className="rounded-2xl object-cover w-full h-auto max-h-[500px] shadow-xl border-4 border-gray-700 transition duration-500 hover:scale-[1.01]"
          />
        </div>

        {/* Product Info */}
        <div className="w-full lg:w-1/2 text-left space-y-6">
          <div className="flex justify-between items-start">
            <h1 className="text-4xl text-white font-extrabold tracking-wide">
              {product.name}
            </h1>
            <span className="px-3 py-1 bg-green-600 text-sm font-semibold rounded-full text-white shadow-md">
              Tersedia
            </span>
          </div>

          <p className="text-4xl font-black mb-4" style={{ color: ACCENT_COLOR }}>
            Rp{product.price.toLocaleString("id-ID")}.000
          </p>

          <p className="text-gray-300 leading-relaxed border-b border-gray-700 pb-6">
            {defaultDescription}
          </p>

          {/* Pilihan Ukuran */}
          <div className="flex flex-col space-y-2">
            <label className="text-lg font-semibold text-gray-200">
              Ukuran: <span style={{ color: ACCENT_COLOR }}>{selectedSize}</span>
            </label>
            <div className="flex flex-wrap gap-2">
              {product.sizes?.map(size => (
                <button
                  key={size}
                  onClick={() => setSelectedSize(size)}
                  className={`px-4 py-2 border rounded-full font-medium transition-all duration-200 text-sm ${
                    selectedSize === size
                      ? "text-white shadow-md"
                      : "text-gray-300 border-gray-600 hover:bg-gray-700"
                  }`}
                  style={{ 
                    backgroundColor: selectedSize === size ? ACCENT_COLOR : "transparent", 
                    borderColor: selectedSize === size ? ACCENT_COLOR : undefined 
                  }}
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          {/* Kuantitas dan Add to Cart */}
          <div className="flex items-center gap-4 pt-6 border-t border-gray-700">
            <div className="flex items-center bg-gray-700 rounded-full p-1">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="text-white w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold hover:bg-gray-600 transition-colors"
              >
                −
              </button>
              <span className="text-xl font-semibold w-8 text-center text-white">{quantity}</span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="text-white w-8 h-8 rounded-full flex items-center justify-center text-xl font-bold hover:bg-gray-600 transition-colors"
              >
                +
              </button>
            </div>

            <button
              onClick={handleAddToCart}
              style={{ backgroundColor: ACCENT_COLOR }} 
              className="flex-1 flex items-center justify-center gap-2 px-6 py-3 rounded-full text-white font-bold text-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-[1.01]"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
              Tambahkan ke Keranjang
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
