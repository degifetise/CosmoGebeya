import "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../data/products";
import { useCart } from "../context/CartContext";
import { ArrowLeft, ShoppingBag } from "lucide-react";

function ProductDetails() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  // Find product by matching the URL ID
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-slate-950 text-slate-100">
        <h2 className="text-xl font-semibold">Product not found</h2>
        <button
          onClick={() => navigate(-1)}
          className="mt-4 text-sm text-indigo-400 hover:underline"
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 antialiased">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-24">
        {/* Modern Minimal Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="group inline-flex items-center gap-2 mb-8 px-4 py-2 text-sm font-medium text-slate-400 hover:text-slate-100 bg-slate-900 border border-slate-800 rounded-xl transition"
        >
          <ArrowLeft
            size={16}
            className="group-hover:-translate-x-1 transition-transform"
          />
          <span>Back</span>
        </button>

        {/* 2-Column Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-start">
          {/* Left Side: Product Image Display */}
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-6 flex items-center justify-center shadow-xl">
            <img
              src={product.image}
              alt={product.name}
              className="w-full max-h-[450px] object-contain rounded-xl"
            />
          </div>

          {/* Right Side: Product Details & Cart Action */}
          <div className="flex flex-col space-y-6">
            <div>
              {/* Category */}
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400">
                {product.category}
              </span>
              {/* Title */}
              <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-white mt-1">
                {product.name}
              </h1>
            </div>

            {/* Pricing */}
            <div className="text-3xl font-black text-indigo-400">
              ${product.price}
            </div>

            {/* Main Short Description */}
            <p className="text-slate-300 text-base leading-relaxed">
              {product.description}
            </p>

            {/* Extra Technical/Specific Details */}
            {product.details && (
              <div className="bg-slate-900/50 border border-slate-900 p-4 rounded-xl">
                <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                  Product Specifications
                </h3>
                <p className="text-sm text-slate-400 leading-relaxed">
                  {product.details}
                </p>
              </div>
            )}

            {/* Primary Action Call to Button */}
            <div className="pt-4">
              <button
                onClick={() => addToCart(product)} // Passes the full product object to suit your CartContext reducer logic
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white font-semibold px-8 py-3.5 rounded-xl shadow-lg transition active:scale-[0.98] cursor-pointer"
              >
                <ShoppingBag size={18} />
                <span>Add to Cart</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
