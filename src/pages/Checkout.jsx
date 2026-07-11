import { useState } from "react";
import { useCart } from "../context/CartContext";
import { motion } from "framer-motion";
import { jsPDF } from "jspdf";
import { useAuth } from "../context/AuthProvider";
import {
  BikeIcon,
  CheckCircle,
  CheckIcon,
  CreditCard,
  ShoppingBag,
  Truck,
  X,
} from "lucide-react";


  const randomOrderNumber = () =>
    "order" + Math.floor(1000 + Math.random() * 9000);
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
  const [paymentMsg, setPaymentMsg] = useState("");

  const handleDownloadReceipt = () => {
    const doc = new jsPDF({
      orientation: "portrait",
      unit: "mm",
      format: "a6",
    });

    const brandColor = "#16a34a";
    const textColor = "#1e293b";
    const lightText = "#64748b";
    const rightAlignX = 100;

    doc.setTextColor(brandColor);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(18);
    doc.text("Payment Success", 52, 20, { align: "center" });
    doc.setDrawColor(226, 232, 240);
    doc.setLineWidth(0.5);

    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(lightText);
    doc.text(`Date: ${new Date().toLocaleString()}`, 10, 33);

    if (currentUser) {
      doc.text(
        `Customer: Hello ${currentUser.name} Thank You for Your Purchase!`,
        10,
        38,
      );
    }
    const customerName = currentUser?.name || "Valued Customer";
    doc.setFont("helvetica", "bold");
    doc.setTextColor(textColor);
    doc.text(`Issued To: ${customerName}`, 10, 36);

    doc.setFillColor(248, 250, 252);
    doc.rect(10, 44, 85, 45, "F");

    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(brandColor);
    doc.text("Order ID:", 14, 52);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(textColor);
    doc.text(String(orderNumber || "N/A"), rightAlignX - 10, 52, {
      align: "right",
    });

    doc.setFont("helvetica", "bold");
    doc.setTextColor(brandColor);
    doc.text("Payment Method:", 14, 62);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(textColor);
    doc.text("Card ****1200", rightAlignX - 10, 62, { align: "right" });

    doc.line(14, 68, rightAlignX - 10, 68);

    -doc.setTextColor(brandColor);
    doc.text("Total Amount:", 14, 76);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(textColor);
    doc.setFontSize(11);
    doc.text(String(cartTotalPrice || "$0.00"), rightAlignX - 10, 76, {
      align: "right",
    });

    doc.setFont("helvetica", "italic");
    doc.setFontSize(8.5);
    doc.setTextColor(brandColor);
    doc.text("For More Information Contact Us:", 52.5, 92, { align: "center" });

    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    doc.setTextColor(textColor);
    doc.text("Phone: +251 924 275 ***", 52.5, 97, { align: "center" });
    doc.text("Email: support@cosmoshop.com", 52.2, 102, { align: "center" });

    doc.setFont("helvetica", "italic");
    doc.setFontSize(9);
    doc.setTextColor(lightText);
    doc.text("Your order is being processed and will arrive soon.", 52, 105, {
      align: "center",
    });

    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.setTextColor(textColor);
    const approvalText = "Your receipt was officially approved by.";
    const wrappedText = doc.splitTextToSize(approvalText, 85);
    doc.text(wrappedText, 52.5, 112, 15, {
      align: "center",
    });

    doc.setFont("times", "italic");
    doc.setFontSize(14);
    doc.setTextColor("#1e3a8a");
    doc.text("degifeT", 52.5, 118, { align: "center" });

    doc.setDrawColor(203, 213, 225);
    doc.setLineWidth(0.25);
    doc.line(35, 121, 70, 121);

    doc.setFont("helvetica", "bold");
    doc.setFontSize(7.5);
    doc.setTextColor(lightText);
    doc.text("SHOP KEEPER / OWNER", 52.5, 125, { align: "center" });

    doc.save(`Receipt_Order_${orderNumber || "Success"}.pdf`);
  };

  const [paymentSuccess, setPaymentSuccess] = useState(false);



  const [orderNumber] = useState(randomOrderNumber);

/*   useEffect(() => {
    const randomOrderNumber =
      "order-" + Math.floor(1000 + Math.random() * 9000);
    setOrderNumber(randomOrderNumber);
  }, []); */

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
  const [displayMsg, setDisplayMsg] = useState(false);

  const handlePayment = () => {
    setPaymentMsg("Thank you for finishing payment.");
    setTimeout(() => {
      setPaymentMsg("");
    }, 2000);
    setPaymentSuccess(false);
    setDisplayMsg((prev) => !prev);
  };

  if (paymentSuccess) {
    return (
      <div className="relative flex bg-slate-300 items-center justify-center min-h-screen">
        <div
          onClick={handlePayment}
          className="group absolute top-2 left-10 bg-white p-2 rounded-xl"
        >
          <X className="group-hover:rotate-180 duration-500 group-hover:text-red-700" />
        </div>
        {displayMsg ? (
          <div className="bg-white p-8 rounded-lg shadow-lg text-center">
            <p className=" text-center block text-green-700 font-extrabold">
              {paymentMsg}
            </p>
          </div>
        ) : (
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
              <span className="text-green-600 font-extrabold">
                Date:
                <span className="text-slate-900 opacity-50">
                  {new Date().toLocaleString()}
                </span>
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
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <BikeIcon
                  size={50}
                  className="text-blue-500 drop-shadow-[0_0_10px_rgba(0,150,255,0.7)]"
                />
              </motion.div>
            </div>

            <div className="my-2 bg-slate-200">
              <button
                onClick={handleDownloadReceipt}
                className="py-3 w-full bg-blue-600 font-medium rounded-xl text-white hover:bg-indigo-700 active:scale-[0.99] transition-all flex gap-2 items-center justify-center shadow-lg shadow-indigo-100 "
              >
                Download Receipt
              </button>
            </div>
          </div>
        )}
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
