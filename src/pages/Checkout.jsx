import { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";

import {
  BikeIcon,
  CheckCircle,
  CheckIcon,
  CreditCard,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { useAuth } from "../context/AuthProvider";
function Checkout() {
  const { cartTotalPrice, cartCount } = useCart();
  const { currentUser } = useAuth();
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    lastName: "",
    address: "",
    city: "",
    postalCode: "",
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvc: "",
  });

  const [paymentSuceess, setPaymentSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState("");

  useEffect(() => {
    const randomOrderNumber = "#" + Math.floor(1000 + Math.random() * 9000);
    setOrderNumber(randomOrderNumber);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const isValid = Object.values(formData).every(
      (value) => value.trim() !== "",
    );
    if (!isValid) {
      alert("Please fill required fields");
      return;
    }
    setPaymentSuccess(true);
  };

  if (paymentSuceess) {
    return (
      <div className="flex bg-slate-300 items-center justify-center min-h-screen">
        <div className="bg-white p-8 rounded-lg shadow-lg text-center">
          <div className="flex item-center justify-center ">
            <CheckIcon size={55} className="font-extrabold text-green-600" />
          </div>
          <div className="bg-gray-100 p-2">
            <h1 className="text-3xl font-bold text-green-600 mb-4">
              Payment Completed!
            </h1>
          </div>
          <p className="text-gray-600 font-bold">
            Your order is being processed and will arrive soon.
          </p>
          <div className="flex justify-between mt-6 flex-col selection:bg-amber-300 selection:text-white bg-slate-100 p-2 shadow-xs">
            <span className="text-green-600 font-extrabold">
              Order ID:{" "}
              <span className="text-slate-900 opacity-50">{orderNumber}</span>
            </span>
            <span className="text-green-600 font-extrabold opacity-50">
              {new Date().toLocaleString()}
            </span>
            <span className="text-green-600 font-extrabold">
              Amount{" "}
              <span className="text-slate-900 opacity-50">
                {cartTotalPrice}
              </span>
            </span>
            <span className="text-green-600 font-extrabold">
              Payment Method{" "}
              <span className="text-slate-900 opacity-50">Card ****1200</span>
            </span>
          </div>

          <div className="fex items-center justify-center mt-4 text-blue-600 font-extrabold">
            {currentUser && <h1>Thank you for your purchase</h1>}
          </div>
          <div className="w-full h-40 overflow-hidden flex items-center justify-center relative">
            <motion.div
              className="absolute left-0 top-1/2 h-2 w-full rounded-full bg-blue-400/40"
              animate={{ opacity: [0.2, 0.5, 0.2] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <motion.div
              animate={{
                x: ["-400%", "400%"],
                y: [0, -5, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              <BikeIcon
                size={50}
                className="text-blue-500 drop-shadow-[0_0_10px_rgba(0,150,255,0.7)]"
              />
            </motion.div>
          </div>

          <div className="my-2 bg-slate-200">
            <button className="py-6 w-full bg-blue-600 font-medium rounded-xl text-white hover:bg-indigo-700 active:scale-[0.99] transition-all flex gap-2 items-center justify-center shadow-lg shadow-indigo-100 ">
              Download Receipt
            </button>
          </div>
        </div>
      </div>
    );
  }

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const tax = cartTotalPrice * 0.08;
  const shipping = cartTotalPrice * 0.05;
  const cartSubtotal = cartTotalPrice + tax + shipping;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased">
      <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold tracking-tight text-slate-900">
            Checkout
          </h1>
          <p className="mt-2 text-xl tex-sm text-slate-500">
            Please review your order and enter your payment details.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <form onSubmit={handleSubmit} className="lg:col-span-7 space-y-6">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                  <ShoppingBag size={20} />
                </div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Contact Information
                </h2>
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Yourname@gmail.com"
                  onChange={handleInputChange}
                  className="w-full py-2.5 px-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-sm"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                  <Truck size={20} />
                </div>
                <h2 className="text-lg font-semibold text-slate-900">
                  Shipping Address
                </h2>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    onChange={handleInputChange}
                    className="w-full py-2.5 px-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    onChange={handleInputChange}
                    className="w-full py-2.5 px-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-sm"
                  />
                </div>

                <div className="col-span-2">
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Address
                  </label>
                  <input
                    type="text"
                    name="address"
                    required
                    onChange={handleInputChange}
                    className="w-full py-2.5 px-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    required
                    onChange={handleInputChange}
                    className="w-full py-2.5 px-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    name="postalCode"
                    required
                    onChange={handleInputChange}
                    className="w-full py-2.5 px-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-sm"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg">
                  <CreditCard size={20} />
                </div>

                <h2 className="text-lg font-semibold text-slate-900">
                  Payment Details
                </h2>
              </div>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Name on Card
                  </label>
                  <input
                    type="text"
                    name="cardName"
                    required
                    onChange={handleInputChange}
                    className="w-full py-2.5 px-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    CardNumber
                  </label>
                  <input
                    type="text"
                    name="cardNumber"
                    required
                    placeholder="0000 0000 0000 0000"
                    onChange={handleInputChange}
                    className="w-full py-2.5 px-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-sm"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Expiration Date
                    </label>
                    <input
                      type="text"
                      name="expiry"
                      placeholder="MM/YY"
                      maxLength="5"
                      required
                      onChange={handleInputChange}
                      className="w-full py-2.5 px-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1">
                      Card Verification Code(CVC)
                    </label>
                    <input
                      type="text"
                      name="cvc"
                      required
                      maxLength="3"
                      placeholder="3 digits"
                      onChange={handleInputChange}
                      className="w-full py-2.5 px-2 bg-slate-50 border border-slate-200 rounded-xl focus:ring-2 focus:ring-indigo-500 outline-none transition-all text-sm"
                    />
                  </div>
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="py-6 w-full bg-blue-600 font-medium rounded-xl text-white hover:bg-indigo-700 active:scale-[0.99] transition-all flex gap-2 items-center justify-center shadow-lg shadow-indigo-100 "
            >
              Pay {cartSubtotal}
            </button>
          </form>
          <div className="lg:col-span-5">
            <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm sticky top-8">
              <h2 className="text-lg font-semibold text-slate-900 mb-6">
                Order Summary
              </h2>

              {/* Pricing Breakdown */}
              <div className="border-t border-slate-100 pt-4 mt-4 space-y-3">
                <div className="flex justify-between text-sm text-slate-500">
                  <span>Total Item</span>
                  <span className="font-medium text-slate-900">
                    {cartCount}
                  </span>
                </div>

                <div className="flex justify-between text-sm text-slate-500">
                  <span>Subtotal</span>
                  <span className="font-medium text-slate-800">
                    ${cartTotalPrice.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-slate-500">
                  <span>Shipping</span>
                  <span className="font-medium text-slate-800">
                    ${shipping.toFixed(2)}
                  </span>
                </div>
                <div className="flex justify-between text-sm text-slate-500">
                  <span>Tax</span>
                  <span className="font-medium text-slate-800">
                    ${tax.toFixed(2)}
                  </span>
                </div>
                <div className="border-t border-slate-100 pt-4 flex justify-between text-base font-bold text-slate-900">
                  <span>Total</span>
                  <span className="text-indigo-600">
                    ${cartSubtotal.toFixed(2)}
                  </span>
                </div>
              </div>

              {/* Trust Badge */}
              <div className="mt-6 flex items-center justify-center gap-2 text-xs text-slate-400 bg-slate-50 py-3 rounded-xl">
                <CheckCircle size={14} className="text-emerald-500" />
                <span>Secure 256-bit SSL Encrypted Checkout</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
