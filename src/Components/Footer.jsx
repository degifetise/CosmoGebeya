import "react";
import { ShoppingBag } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useRef } from "react";


function Footer() {
  const [newsLetter, setNewsLetter] = useState("");
  const inputRef = useRef();
  const handleNewsLetter = () => {
    if (newsLetter === "") {
      inputRef.current.focus();     
    }
  };



  return (
    <div className=" bg-slate-200 shadow-2xl backdrop-blur-3xl  border-blue-500">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 py-2 md:py-10 font-semibold gap-4 md:gap-1  md:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center">
          <div className="flex items-center gap-1 font-bold text-xl text-gray-900 tracking-tight shrink">
            <ShoppingBag className="text-blue-600 w-6 h-6" />
            <span className="text-black">Cosmo</span>
            <span className="text-blue-600">Gebeya</span>
          </div>
          <p className="mt-2 md:mt-4 text-center">
            Discover premium products with fast delivery and secure shopping
            experience
          </p>
        </div>

        <div className="flex items-center flex-col gap-2">
          <h1 className="text-blue-600 hover:text-blue-700">Shop</h1>
          <ul className="space-y-2 flex flex-col items-center text-sm text-gray-600">
            <li className="flex gap-2">
              <a href="#home" className="hover:text-white">
                Men
              </a>
            </li>
            <li className="flex items-center gap-2">
              <a href="#">Women</a>
            </li>
            <li className="flex items-center gap-2">
              <a href="#">Accessories</a>
            </li>

            <li className="flex items-center gap-2">
              <a href="#">New Arrivals</a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-2 items-center">
          <h2 className="text-blue-600 hover:text-blue-700">Quick Links</h2>
          <ul className="space-y-2 text-sm text-gray-600">
            <div className="group">
              <Link to="/" className="hover:underline">
                <li className="hover:ml-2">Home</li>
              </Link>
            </div>
            <div>
              <Link to="/products" className="hover:underline">
                <li className="">Shop</li>
              </Link>
            </div>
            <div>
              <Link to="/about" className="hover:underline">
                <li className="">About</li>
              </Link>
            </div>

            <div>
              <Link to="/contact" className="hover:underline">
                <li className="flex items-center gap-2">Contact</li>
              </Link>
            </div>
          </ul>
        </div>

        <div className="flex items-center flex-col">
          <h1 className="text-blue-600 hover:text-blue-700">Stay Connected</h1>
          <div className="flex gap-5">
            <input
              type="email"
              className="py-2.5 px-2 border border-blue-600 outline-none focus:border-blue-200"
              value={newsLetter}
              onChange={(e) => setNewsLetter(e.target.value)}
              placeholder="subscribe our news letter"
            />
            <button
              onClick={handleNewsLetter, inputRef}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium py-2 rounded-xl transition flex items-center justify-center gap-2"
            >
              Subscribe
            </button>
          </div>
        </div>

        <div className="flex items-center flex-col">
          <h1 className="text-blue-600 hover:text-blue-700">
            Our Social media Follow
          </h1>
          <ul className="space-y-2 text-sm text-gray-600">
            <li className="flex items-center gap-2">TikTok</li>
            <li className="flex items-center gap-2">Telegram</li>
            <li className="flex items-center gap-2">Facebook</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
