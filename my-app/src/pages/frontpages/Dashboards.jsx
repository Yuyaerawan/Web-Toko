import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";
import { useState } from "react";

const products = [
  // 🟦 Pakaian (10 produk)
  // 🟦 Pakaian (10 produk) → harga di atas 200 ribu
  { id: 1, name: "Baju kaos", price: 110, img: "/images/baju.png", category: "Pakaian" },
  { id: 2, name: "celana", price: 125, img: "/images/celana.png", category: "Pakaian" },
  { id: 3, name: "Hoodie", price: 240, img: "/images/hoodie.png", category: "Pakaian" },
  { id: 4, name: "Jaket", price: 260, img: "/images/jaket.png", category: "Pakaian" },
  { id: 5, name: "Kemeja", price: 235, img: "/images/kemeja.png", category: "Pakaian" },
  { id: 6, name: "Celana Panjang", price: 218, img: "/images/celana panjang.png", category: "Pakaian" },
  { id: 7, name: "Sweater", price: 232, img: "/images/sweater.png", category: "Pakaian" },
  { id: 8, name: "Dress", price: 250, img: "/images/dress.png", category: "Pakaian" },
  { id: 9, name: "Rok", price: 228, img: "/images/rok.png", category: "Pakaian" },
  { id: 10, name: "Blazer", price: 255, img: "/images/blazer.png", category: "Pakaian" },

  // 🟩 Sepatu (10 produk) → harga di atas 400 ribu
  { id: 11, name: "Sneakers", price: 450, img: "/images/sepatu.png", category: "Sepatu" },
  { id: 12, name: "Sepatu Lari", price: 465, img: "/images/sepatu lari.png", category: "Sepatu" },
  { id: 13, name: "Boots", price: 480, img: "/images/boots.png", category: "Sepatu" },
  { id: 14, name: "Sandal", price: 225, img: "/images/sandal.png", category: "Sepatu" },
  { id: 15, name: "Loafers", price: 370, img: "/images/loafers.png", category: "Sepatu" },
  { id: 16, name: "High Heels", price: 475, img: "/images/high heels.png", category: "Sepatu" },
  { id: 17, name: "Sepatu Formal", price: 485, img: "/images/sepatu formal.png", category: "Sepatu" },
  { id: 18, name: "Slip-on", price: 440, img: "/images/slip on.png", category: "Sepatu" },
  { id: 19, name: "Sepatu Bola", price: 495, img: "/images/sepatu bola.png", category: "Sepatu" },
  { id: 20, name: "Sandal Jepit", price: 212, img: "/images/sandal jepit.png", category: "Sepatu" },

  // 🟥 Aksesoris (10 produk) → harga di atas 50 ribu
  { id: 21, name: "Topi", price: 150, img: "/images/topi.png", category: "Aksesoris" },
  { id: 22, name: "Topi Baseball", price: 158, img: "/images/topi baseball.png", category: "Aksesoris" },
  { id: 23, name: "Sabuk", price: 62, img: "/images/sabuk.png", category: "Aksesoris" },
  { id: 24, name: "Kacamata", price: 100, img: "/images/kacamata.png", category: "Aksesoris" },
  { id: 25, name: "Jam Tangan", price: 250, img: "/images/jam tangan.png", category: "Aksesoris" },
  { id: 26, name: "Gelang", price: 68, img: "/images/gelang.png", category: "Aksesoris" },
  { id: 27, name: "Kalung", price: 95, img: "/images/kalung.png", category: "Aksesoris" },
  { id: 28, name: "Cincin", price: 55, img: "/images/cincin.png", category: "Aksesoris" },
  { id: 29, name: "Syal", price: 120, img: "/images/syal.png", category: "Aksesoris" },
  { id: 30, name: "Sarung Tangan", price: 175, img: "/images/sarung tangan.png", category: "Aksesoris" },
];


const categories = ["All", "Pakaian", "Sepatu", "Aksesoris"];

const carouselItems = [
  {
    id: 1,
    img: "/images/diskon.png",
    title: "Diskon Akhir Tahun!",
    description: "Nikmati diskon hingga 50% untuk semua produk pilihan.",
    link: "/promo/diskon-spesial",
  },
  {
    id: 2,
    img: "/images/terbaru.png",
    title: "Koleksi Terbaru Rilis!",
    description: "Jelajahi desain eksklusif yang baru saja tiba.",
    link: "/new-arrivals",
  },
  {
    id: 3,
    img: "/images/gratis ongkir.png",
    title: "Gratis Ongkir Seluruh Indonesia!",
    description: "Belanja sekarang tanpa khawatir biaya pengiriman.",
    link: "/promo/gratis-ongkir",
  },
];

export default function Dashboard() {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts =
    activeCategory === "All"
      ? products
      : products.filter((p) => p.category === activeCategory);

  return (
    <div className="min-h-screen w-full">
      {/* Hero / Banner */}
      <div
        className="relative w-full overflow-hidden bg-center bg-cover text-white"
        style={{
          backgroundImage: `url(https://via.placeholder.com/1920x1080/000000/FFFFFF?text=Latar+Belakang+Hero+Banner)`,
          minHeight: "400px",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-purple-800/70 via-blue-700/60 to-blue-700/70"></div>
        <div className="relative z-10 w-full max-w-screen-xl mx-auto">
          <div className="px-6 md:px-12 lg:px-24 pt-12 pb-4">
            <h2 className="text-3xl md:text-4xl font-extrabold drop-shadow-lg">
              Penawaran Menarik!
            </h2>
            <p className="text-sm md:text-base text-gray-200">
              Temukan promo eksklusif dan koleksi terbaru di sini.
            </p>
          </div>
          <div className="relative">
            <div className="flex overflow-x-scroll space-x-4 pb-4 px-6 md:px-12 lg:px-10 custom-scrollbar">
              {carouselItems.map((item) => (
                <div
                  key={item.id}
                  className="flex-none w-10/12 sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-5/12 rounded-xl shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
                >
                  <Link
                    to={item.link}
                    className="block relative h-48 sm:h-64 md:h-72 group"
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent p-4 flex flex-col justify-end">
                      <h3 className="text-xl sm:text-2xl font-bold text-white mb-1 drop-shadow">
                        {item.title}
                      </h3>
                      <p className="text-gray-200 text-sm sm:text-base">
                        {item.description}
                      </p>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Produk Kami Section */}
      <div className="w-full bg-gradient-to-b from-white via-gray-50 to-white mt-12 text-gray-900">
        <div className="max-w-screen-xl mx-auto px-6 py-12">
          <h1 className="text-4xl font-extrabold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-teal-600 via-purple-600 to-pink-600">
            Produk Kami
          </h1>

          {/* Menu Kategori */}
          <div className="flex justify-center flex-wrap gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`
                  px-5 py-2 rounded-full font-semibold transition transform duration-200
                  ${activeCategory === category
                    ? "bg-gradient-to-r from-teal-500 to-purple-500 text-white scale-105 shadow-lg"
                    : "bg-gray-200 text-gray-800 hover:bg-gray-300"}
                `}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Daftar Produk */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {filteredProducts.map((p) => (
              <div
                key={p.id}
                className="bg-white/70 backdrop-blur-lg border border-gray-200 rounded-xl shadow-md p-4 flex flex-col items-center hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
              >
                <img
                  src={p.img}
                  alt={p.name}
                  className="mb-3 w-56 h-56 object-contain drop-shadow-md"
                />
                <p className="font-bold text-lg text-gray-900">{p.name}</p>
                <p className="text-teal-600 font-semibold">
                  Rp{p.price.toLocaleString("id-ID")}.000
                </p>
                <div className="flex gap-3 mt-4">
                  <Link
                    to={`/product/${p.id}`}
                    className="px-4 py-2 rounded-full transition bg-gray-100 text-gray-900 border border-gray-300 hover:bg-gray-200"
                  >
                    Detail
                  </Link>
                  <button
                    style={{ backgroundColor: "#9333EA" }}
                    className="px-4 py-2 rounded-full text-white hover:bg-purple-700 transition-colors"
                    onClick={() => addToCart(p)}
                  >
                    + Add to Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
