import "react";
import { useCart } from "../context/CartContext";
import { ArrowLeft, Minus, Plus, ShoppingCart, Trash } from "lucide-react";
import { Link } from "react-router-dom";

function CartPage() {
  const {
    cart,
    increaseQuantity,
    decreaseQuantity,
    removeFromCart,
    clearCart,
    cartTotalPrice,
  } = useCart();

  if (cart.length === 0) {
    return (
      <div className="min-h-[64vh flex flex-col items-center justify-center p-8 text-center">
        <div className="bg-blue-600 p-4 rounded-full mb-4 text-white">
          <ShoppingCart size={40} />
        </div>
        <h3 className="text-slate-800 font-bold mb-6 text-2xl">
          Your cart is empty
        </h3>
        <p className="mb-4 text-xl font-semibold text-blue-600 max-w-sm">
          Looks like you have not added any thing!
        </p>
        <Link
          to="/products"
          className="mb-6 hover:scale-x-105 shadow-sm duration-100 transition rounded-xl border-0 outline-0 py-2.5 bg-indigo-600 px-6 hover:bg-indigo-900 text-white font-semibold"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50/50 py-8 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-medium hover:scale-x-105 animate-bounce border-blue-400 p-1 rounded-2xl  bg-blue-600 text-white hover:shadow-2xl border-2  transition group mb-2"
            >
              <ArrowLeft
                size={25}
                className="group-hover:translate-x-0.5 transition-transform"
              />
              Back to shop
            </Link>
            <h2 className="text-3xl  font-extrabold text-gray-900 tracking-tight">
              Shopping Cart
            </h2>
          </div>
          <button
            onClick={() => clearCart()}
            className="self-start cursor-pointer sm:self-center text-sm font-medium text-red-600 hover:underline hover:text-red-700 transition dynamic-padding"
          >
            Clear Entire Cart
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-2 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-100 rounded-2xl p-4 sm:p-6 shadow-xl flex flex-col sm:flex-row items-center gap-4 sm:gap-6 hover:shadow-md transition duration-200"
              >
                <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gray-50 rounded-xl overflow-hidden flex-shrinking-0 border-gray-100">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col sm:flex-row justify-between w-full gap-4 sm:items-center">
                  <h3 className="font-semibold text-gray-900 text-lg line-clamp-2">
                    {item.name}
                  </h3>
                  <p className=" text-indigo-600 font-bold mt-1">
                    {Number(item.price).toFixed(2)}
                  </p>
                </div>

                <div className="flex items-center justify-center sm:justify-end gap-6">
                  <div className="flex items-center hover:scale-105 bg-gray-50 border border-gray-200 rounded-xl p-1 shadow-inner">
                    <button
                      onClick={() => decreaseQuantity(item.id)}
                      className="p-1.5 rounded-lg text-gray-500 hover:bg-white hover:text-gray-700 active:scale-95 transition"
                    >
                      <Minus size={24} />
                    </button>
                    <span className="w-8 text-center font-semibold text-gray-800 text-sm">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => increaseQuantity(item.id)}
                      className="p-1.5 rounded-lg text-gray-500 hover:bg-white hover:text-gray-700 active:scale-95 transition"
                    >
                      <Plus size={24} />
                    </button>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="font-bold text-gray-900 hidden sm:block">
                      ${(item.price * item.quantity).toFixed(2)}
                    </span>

                    <button
                      onClick={() => removeFromCart(item.id)}
                      title="remove item"
                      className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition"
                    >
                      <Trash size={24} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-xs lg:sticky lg:top-8">
            <h3 className="text-blue-600 text-xl text-bold mb-6">
              Order Summary
            </h3>
            <div className="space-y-4 border-b border-gray-100 pb-4 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Shipping</span>
                <span className="text-green-600 font-medium">Free</span>
              </div>
            </div>

            <div className="flex justify-between items-center font-extrabold text-xl text-gray-900mt-4 mb-6">
              <span>Total</span>
              <span className="text-green-600 font-medium">
                ${cartTotalPrice.toFixed(2)}
              </span>
            </div>

            <Link to="/checkout" className="block text-center bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-4 shadow-md hover:shadow-indigo-200/50 active:scale-[0.99] rounded-xl ">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
