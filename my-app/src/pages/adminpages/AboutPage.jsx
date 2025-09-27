export default function AboutPage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4 text-blue-600">About This App</h1>

      <div className="bg-white shadow-md rounded-lg p-6 space-y-4">
        <p className="text-gray-700">
          <strong>Simple E-Commerce Admin</strong> adalah aplikasi dashboard
          berbasis <span className="font-semibold">React + Tailwind CSS</span>.
          Halaman ini dibuat sebagai bagian dari latihan frontend programming
          untuk mengelola produk, pesanan, dan pengguna.
        </p>

        <p className="text-gray-700">
          Aplikasi ini memiliki 2 bagian utama:
        </p>
        <ul className="list-disc list-inside text-gray-600">
          <li>
            <span className="font-semibold">Frontpage</span> → untuk user
            (customer) melihat produk, cart, checkout.
          </li>
          <li>
            <span className="font-semibold">Admin Page</span> → untuk admin
            mengelola data melalui dashboard.
          </li>
        </ul>

        <p className="text-gray-700">
          Dibuat dengan ❤️ menggunakan <code>React Router</code> untuk navigasi
          dan <code>TailwindCSS</code> untuk styling.
        </p>
      </div>
    </div>
  );
}
