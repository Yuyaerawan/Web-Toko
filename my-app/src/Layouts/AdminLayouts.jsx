import { Outlet, Link } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-800 text-white p-4">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>
        <nav className="flex flex-col gap-4">
          <Link to="/admin/dashboard" className="hover:text-gray-300">Dashboard</Link>
          <Link to="/admin/about" className="hover:text-gray-300">About</Link>
        </nav>
      </aside>
      <main className="flex-1 p-6 bg-gray-100">
        <Outlet />
      </main>
      <footer className="bg-primary text-white text-center p-4">
  <p>© 2025 E-Commerce Simple App | Version 1.0</p>
    </footer>
    </div>
    
  );
}
