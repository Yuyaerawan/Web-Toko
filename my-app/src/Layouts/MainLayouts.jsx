import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import DarkVeil from "../components/DarkVeil";
import Footer from "../components/Footer"; // <-- import Footer baru

export default function MainLayout() {
  return (
    <div className="relative min-h-screen w-screen overflow-hidden">
      {/* DarkVeil full screen di background */}
      <div className="flex top-0 left-0 w-full h-full z-0">
        <DarkVeil 
          hueShift={242} 
          noiseIntensity={0.02} 
          scanlineIntensity={0.05} 
          speed={1.5} 
          scanlineFrequency={30} 
          warpAmount={0.03} 
        />
      </div>

      {/* Layout utama di atas DarkVeil */}
      <div className="relative flex flex-col min-h-screen z-10">
        <Navbar />

        <main className="flex-1 p-6">
          <Outlet />
        </main>

        {/* Footer modern */}
        <Footer />
      </div>
    </div>
  );
}
