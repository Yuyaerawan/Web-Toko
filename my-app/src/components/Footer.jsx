import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaTiktok,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-16">
      <div className="max-w-screen-xl mx-auto px-6 md:px-12 lg:px-20">
        {/* Grid utama */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold text-white mb-4">Arstore</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Temukan produk terbaik dengan harga menarik. Belanja mudah,
              aman, dan cepat hanya di MyStore.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Navigasi</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="hover:text-white transition">Beranda</Link></li>
              <li><Link to="/products" className="hover:text-white transition">Produk</Link></li>
              <li><Link to="/about" className="hover:text-white transition">Tentang Kami</Link></li>
              <li><Link to="/contact" className="hover:text-white transition">Kontak</Link></li>
            </ul>
          </div>

          {/* Bantuan */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Bantuan</h3>
            <ul className="space-y-2">
              <li><Link to="/faq" className="hover:text-white transition">FAQ</Link></li>
              <li><Link to="/privacy" className="hover:text-white transition">Kebijakan Privasi</Link></li>
              <li><Link to="/terms" className="hover:text-white transition">Syarat & Ketentuan</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-3">
              Dapatkan update promo & produk terbaru dari kami.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Masukkan email"
                className="px-4 py-2 rounded-md bg-gray-800 text-gray-200 focus:outline-none focus:ring-2 focus:ring-teal-500 w-full"
              />
              <button
                type="submit"
                style={{ backgroundColor: "#ff0000ff" }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Garis */}
        <div className="border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center">
          {/* Sosial Media */}
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a href="#" className="hover:text-white transition"><FaFacebookF /></a>
            <a href="#" className="hover:text-white transition"><FaInstagram /></a>
            <a href="#" className="hover:text-white transition"><FaTwitter /></a>
            <a href="#" className="hover:text-white transition"><FaYoutube /></a>
            <a href="#" className="hover:text-white transition"><FaTiktok /></a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Arstore. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
