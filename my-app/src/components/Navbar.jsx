import { Link } from "react-router-dom";
import logo from "../assets/logo.png"; // pastikan path sesuai

export default function Navbar() {
  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="container mx-auto flex items-center justify-between px-6 py-4">
        
        {/* Logo dan Nama Web di kiri */}
        <div className="flex items-center gap-2">
          {/* Logo gambar */}
          <img
            src={logo}
            alt="Logo"
            className="w-8 h-8 rounded-full object-cover"
          />
          <Link 
            to="/" 
            className="text-xl font-bold tracking-wide transition-colors duration-200 hover:text-sky-300 font-mono"
          >
            Arstore
          </Link>
        </div>
        
        {/* Kolom Pencarian di tengah */}
        <div className="flex-1 max-w-lg mx-4">
          <input
            type="text"
            placeholder="Cari..."
            className="w-full bg-gray-700 text-white placeholder-gray-400 px-4 py-2 rounded-full border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500 transition-all duration-200"
          />
        </div>

        {/* Dashboard, Cart, Checkout, Admin di kanan */}
        <div className="flex items-center gap-6">
          <Link 
            to="/" 
            className="hidden md:inline-block font-medium transition-colors duration-200 hover:text-teal-400"
          >
            Dashboard
          </Link>
          <Link 
            to="/cart" 
            className="hidden md:inline-block font-medium transition-colors duration-200 hover:text-teal-400"
          >
            Cart
          </Link>
          <Link 
            to="/checkout" 
            className="hidden md:inline-block font-medium transition-colors duration-200 hover:text-teal-400"
          >
            Checkout
          </Link>
          <Link 
            to="/admin/dashboard" 
            className="hidden md:inline-block font-medium transition-colors duration-200 hover:text-teal-400"
          >
            Admin
          </Link>
        </div>
      </div>
    </nav>
  );
}
