import { Routes, Route } from "react-router-dom";
import AdminDashboard from "./pages/adminpages/AdminDashboard";
import AdminLayout from "./Layouts/AdminLayouts";
import AboutPage from "./pages/adminpages/AboutPage";
import MainLayout from "./Layouts/MainLayouts"; 
import Dashboard from "./pages/frontpages/Dashboards"; 
import ProductDetail from "./pages/frontpages/ProductDetail"; 
import Cart from "./pages/frontpages/Cart"; 
import Checkout from "./pages/frontpages/Checkouts";

export default function App() {
 return (
 <Routes>
 <Route path="/" element={<MainLayout />}>
 <Route index element={<Dashboard />} />
 <Route path="product/:id" element={<ProductDetail />} />
 <Route path="cart" element={<Cart />} />
 <Route path="checkout" element={<Checkout />} />
 <Route path="/product/:id" element={<ProductDetail />} />
 </Route>
 
 <Route path="/admin" element={<AdminLayout />}>
 <Route path="dashboard" element={<AdminDashboard />} />
 <Route path="about" element={<AboutPage />} />
 </Route>
    </Routes>
 );
}