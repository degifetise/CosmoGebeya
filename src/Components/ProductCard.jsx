import { useNavigate } from "react-router-dom";
import { ShoppingBasket, Star, ShoppingCart } from "lucide-react";

export default function ProductCard({ product, addToCart }) {
  const navigate = useNavigate();
  return (
    <div className="bg-white border border-gray-200 rounded-2xl p-4 flex flex-col justify-between hover:shadow-md transition">
      <div>
        <div
          className="group h-40 bg-slate-100 rounded-xl mb-4 flex items-center overflow-hidden animate-pulse justify-center text-4xl"
          onClick={() => navigate(`/product/${product.id}`)}
        >
          <img
            src={product.img}
            alt={product.name}
            className="hover:group transition-all overflow-hidden hover:scale-105"
          />
        </div>
        <div className="flex items-center gap-1 text-amber-500 text-xs font-semibold mb-1">
          <Star className="w-3.5 h-3.5 fill-amber-500" /> {product.rating}
          <Star className="w-3.5 h-3.5 fill-amber-400" /> {product.rating}
          <Star className="w-3.5 h-3.5 fill-amber-300" /> {product.rating}
          <Star className="w-3.5 h-3.5 fill-amber-00" /> {product.rating}
        </div>
        <h3 className="font-bold text-gray-800 leading-tight mb-2">
          {product.name}
        </h3>
        <div className="mt-4">
          <p className="text-gray-900 font-extrabold text-lg mb-3">
            ${product.price.toFixed(2)}
          </p>
          <button
            onClick={() => addToCart(product)}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-xl transition flex items-center justify-center gap-2"
          >
            <ShoppingCart className="w-4 h-4" /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}
