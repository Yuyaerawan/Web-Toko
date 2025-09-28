import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer"; // Footer modern

export default function MainLayout() {
  return (
    <div className="relative min-h-screen w-screen flex flex-col">
      {/* Navbar */}
      <Navbar />

      {/* Konten utama */}
      <main className="flex-1 p-6">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
