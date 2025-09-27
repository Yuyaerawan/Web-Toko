import { useParams } from "react-router-dom";
import { useCart } from "../../context/CartContext";

const products = {
  1: { id: 1, name: "T-shirt", price: 20, image: "https://via.placeholder.com/400x400.png?text=T-shirt" },
  2: { id: 2, name: "Pants", price: 20, image: "https://via.placeholder.com/400x400.png?text=Pants" },
  3: { id: 3, name: "Sneakers", price: 50, image: "https://via.placeholder.com/400x400.png?text=Sneakers" },
  4: { id: 4, name: "Hat", price: 15, image: "https://via.placeholder.com/400x400.png?text=Hat" },
};

export default function ProductDetail() {
  const { id } = useParams();
  const product = products[id];
  const { addToCart } = useCart();

  if (!product) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-900 text-white">
        <p className="text-xl">Product not found!</p>
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900 p-8">
      <div className="bg-gray-800 rounded-2xl shadow-2xl p-8 max-w-lg w-full flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
        {/* Product Image Section */}
        <div className="w-full md:w-1/2 flex justify-center">
          <img 
            src={product.image} 
            alt={product.name} 
            className="rounded-xl object-cover shadow-lg"
          />
        </div>

        {/* Product Info Section */}
        <div className="w-full md:w-1/2 text-center md:text-left">
          <h1 className="text-4xl text-white font-extrabold mb-2">
            {product.name}
          </h1>
          <p className="text-2xl text-green-400 font-bold mb-4">
            ${product.price}.00
          </p>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            This is a high-quality, comfortable product. Perfect for any occasion and stylish for everyday use.
          </p>

          <button
            onClick={() => addToCart(product)}
             style={{ backgroundColor: "#009688", color: "white" }} className="px-4 py-2 rounded"
          >
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
}