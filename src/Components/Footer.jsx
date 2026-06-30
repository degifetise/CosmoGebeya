import "react";
import { Copy, ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";

function Footer() {
  const [newsLetter, setNewsLetter] = useState("");
  const inputRef = useRef(null);
  const handleNewsLetter = () => {
    if (newsLetter.trim() === "") {
      inputRef.current.focus();
    } else {
      console.log("Subscribed with:", newsLetter);
      setNewsLetter("");
    }
  };

  return (
    <div className=" bg-slate-200 shadow-2xl backdrop-blur-3xl  border-blue-500 flex flex-col">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 py-2 md:py-10 font-semibold gap-4 md:gap-1  md:grid-cols-3 lg:grid-cols-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1 font-bold text-xl text-gray-900 tracking-tight shrink">
            <ShoppingBag className="text-blue-600 w-6 h-6" />
            <span className="text-black">Cosmo</span>
            <span className="text-blue-600">Gebeya</span>
          </div>
          <Link to="/products" className="mt-2 md:mt-4 text-center flex items-center gap-2 hover:text-blue-800 hover:underline">
            Discover premium products with fast delivery and secure shopping
            experience
          </Link>
        </div>

        <div className="flex items-center flex-col gap-2">
          <h1 className="text-blue-600 hover:text-blue-700">Shop</h1>
          <ul className="space-y-2 flex flex-col items-center text-sm text-gray-600">
            <li className="flex gap-2">
              <a
                href="#home"
                className="flex items-center gap-2 hover:text-blue-600 hover:underline"
              >
                Men
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="#"
                className="flex items-center gap-2 hover:text-blue-600 hover:underline"
              >
                Women
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a
                href="#"
                className="flex items-center gap-2 hover:text-blue-600 hover:underline"
              >
                Accessories
              </a>
            </li>

            <li className="flex items-center gap-2">
              <a
                href="#"
                className="flex items-center gap-2 hover:text-blue-600 hover:underline"
              >
                New Arrivals
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-blue-600 hover:text-blue-700">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <div className="group">
              <Link to="/" className="hover:underline">
                <li className="flex items-center gap-2 hover:text-blue-600 hover:underline">
                  Home
                </li>
              </Link>
            </div>
            <div>
              <Link to="/products" className="hover:underline">
                <li className="flex items-center gap-2 hover:text-blue-600 hover:underline">
                  Shop
                </li>
              </Link>
            </div>
            <div>
              <Link to="/about" className="hover:underline">
                <li className="flex items-center gap-2 hover:text-blue-600 hover:underline">
                  About
                </li>
              </Link>
            </div>

            <div>
              <Link to="/contact" className="hover:underline">
                <li className="flex items-center gap-2 hover:text-blue-600 hover:underline">
                  Contact
                </li>
              </Link>
            </div>
          </ul>
        </div>

        <div className="flex items-center flex-col">
          <h1 className="text-blue-600 hover:text-blue-700 mb-4">
            Stay Connected
          </h1>
          <div className="flex gap-3">
            <input
              ref={inputRef}
              type="email"
              className="shadow-xs rounded-2xl py-2.5 px-2 placeholder:text-blue-400 opacity-50 focus:border focus:border-blue-600 outline-none"
              value={newsLetter}
              onChange={(e) => setNewsLetter(e.target.value)}
              placeholder="subscribe our news letter"
            />
            <button
              onClick={handleNewsLetter}
              className="px-4 bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-xl transition flex items-center justify-center gap-2"
            >
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex items-center flex-col">
          <h1 className="text-blue-600 hover:text-blue-700">Social Media</h1>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2 hover:text-blue-600 hover:underline">
              TikTok
            </li>
            <li className="flex items-center gap-2 hover:text-blue-600 hover:underline">
              Telegram
            </li>
            <li className="flex items-center gap-2 hover:text-blue-600 hover:underline">
              Facebook
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-1é border-t border-gray-100 py-6 text-center text-sm text-gray-500">
        <p className="font-medium text-gray-800">
          Developed by{" "}
          <span className="hover:text-blue-600 transition-colors duration-200 cursor-pointer">
            Degife Tise
          </span>
        </p>
        <p className="mt-1 text-xs tracking-wide text-gray-400">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
