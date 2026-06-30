import { useCart } from "../context/CartContext";
import { Link, NavLink } from "react-router-dom";
import {
  ShoppingBag,
  ShoppingCart,
  LogOut,
  UserCircle,
} from "lucide-react";
import { useState } from "react";
import { useAuth } from "../context/AuthProvider";

export default function Navbar() {
  const { currentUser, logoutUser } = useAuth();
  const [toggleAccount, setToggleAccount] = useState(false);

  const handleAccountToggle = () => {
    setToggleAccount((prev) => !prev);
  };

  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const [search, setSearch] = useState("");
  const { cartCount } = useCart();
  const [isNavbarHidden, setIsNavbarHidden] = useState(false);

  const toggleMenu = () => {
    setIsNavbarHidden((prev) => !prev);
  };

  const navLinkStyles = ({ isActive }) =>
    `text-sm font-medium  transition-colors duration-200 ${isActive ? "text-blue-600 font-semi-bold" : "text-gray-600 hover:text-blue-600"} `;

  return (
    <header className="bg-white/950 shadow-xs  backdrop-blur-md border-b border-gray-100 sticky top-0 z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        <Link className="flex items-center gap-1 font-bold text-xl text-gray-900 tracking-tight shrink">
          <ShoppingBag className="text-blue-600 w-6 h-6" />
          <span className="hidden">Cosmo</span>
          <span className="text-blue-600">Gebeya</span>
        </Link>

        <nav className="hidden md:flex items-center gap-8">
          <NavLink to="/" end className={navLinkStyles}>
            Home
          </NavLink>
          <NavLink to="/products" className={navLinkStyles}>
            Shop
          </NavLink>
          <NavLink to="/about" className={navLinkStyles}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkStyles}>
            Contact
          </NavLink>
        </nav>
        {isNavbarHidden && (
          <div className="md:hidden z-50 block backdrop-blur-3xl absolute top-18 left-0 bg-linear-to-r from-slate-900 to-slate-700 py-20 w-full">
            <nav className="flex transition-all duration-200 md:none items-center gap-8 flex-col">
              <NavLink
                to="/"
                end
                className={navLinkStyles}
                style={{ color: "#fff" }}
                onClick={() => setIsNavbarHidden(false)}
              >
                Home
              </NavLink>
              <NavLink
                to="/products"
                className={navLinkStyles}
                style={{ color: "#fff" }}
                onClick={() => setIsNavbarHidden(false)}
              >
                Shop
              </NavLink>
              <NavLink
                to="/about"
                className={navLinkStyles}
                style={{ color: "#fff" }}
                onClick={() => setIsNavbarHidden(false)}
              >
                About
              </NavLink>
              <NavLink
                to="/contact"
                className={navLinkStyles}
                style={{ color: "#fff" }}
                onClick={() => setIsNavbarHidden(false)}
              >
                Contact
              </NavLink>
            </nav>
          </div>
        )}

        <div className="flex items-center gap-2 sm:gap-8">
          <div className="relative hidden sm:block max-w-xs">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search gadgets..."
              className="w-full bg-slate-50 text-sm pl-9 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-hidden focus:border-blue-500 focus:bg-white transition"
            />
          </div>

          {currentUser ? (
            <div>
              <button
                onClick={() => setShowLogoutModal(true)}
                className="px-4 py-1 rounded-xl text-white cursor-pointer hover:bg-blue-700 bg-blue-600"
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="relative" onClick={handleAccountToggle}>
              <button className="px-4 py-1 rounded-xl text-white cursor-pointer hover:bg-blue-700 bg-blue-600 outline-none border-none">
                <UserCircle className="w-8 h-6 text-white font-extrabold" />
              </button>
              {toggleAccount && (
                <div className="absolute z-10 top-15 bg-a rounded-xs px-8 md:px-10 shadow-2xl py-5 flex flex-col gap-3 bg-gray-300">
                  <Link to="/register" aria-label="Account">
                    <button className="block w-full px-4 md:px-8 py-1 rounded-xl text-white cursor-pointer hover:bg-amber-700 bg-blue-600">
                      Register
                    </button>
                  </Link>
                  <Link to="/login" aria-label="Account">
                    <button className="block w-full px-4 md:px-8 py-1 rounded-xl text-white cursor-pointer hover:bg-amber-700 bg-blue-600">
                      Login
                    </button>
                  </Link>
                </div>
              )}
            </div>
          )}
          {showLogoutModal && (
            <div className="fixed inset-0 bg-black/50 transition-opacity duration-200 opacity-100 flex justify-center item-center">
              <div className="bg-white p-5 rounded-xl shadow-lg opacity-100 transition-all duration-200 flex flex-col items-center justify-center z-50">
                <div className="flex items-center gap-2 mb-2">
                  <LogOut className="text-red-500" />
                  <h2 className="font-semibold text-lg">Confirm Logout</h2>
                </div>
                <p className="text-gray-600 mb-5">
                  Are You sure you want to logout ?
                </p>
                <div className="flex justify-end gap-3">
                  <button
                    onClick={() => setShowLogoutModal(false)}
                    className="px-4 py-2 border rounded-xl"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => {
                      logoutUser();
                      setShowLogoutModal(false);
                    }}
                    className="px-4 py-2 border border-red-500 rounded-lg"
                  >
                    Logout
                  </button>
                </div>
              </div>
            </div>
          )}

          <Link
            to="/cartPage"
            className="relative p-2 text-gray-700 hover:text-blue-600 transition"
            aria-label="Shopping Cart"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-0.5 right-0.5 bg-blue-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-in zoom-in-50 duration-200">
                {cartCount}
              </span>
            )}
          </Link>
        </div>
        <div className="block md:hidden" onClick={toggleMenu}>
          {!isNavbarHidden ? (
            /*             <Menu className="w-8 h-8 hover:text-blue-300 cursor-pointer text-blue-600" /> */
            <div className="shadow-2xs rounded-xl bg-slate-100 hover:shadow-2xl relative flex flex-col gap-2 transition-transform ease-out">
              {" "}
              <span className="w-8 bg-slate-600 h-0.5"></span>
              <span className="w-8 bg-slate-600 h-0.5"></span>
              <span className="w-8 bg-slate-600 h-0.5"></span>
            </div>
          ) : (
            /*             <X className="w-8 h-8 cursor-pointer text-blue-600" /> */
            <div className="shadow-2xs rounded-xl bg-slate-100 hover:shadow-2xl relative w-10 h-10 items-center  flex justify-center gap-2">
              <span className="absolute -rotate-45 w-8 hover:bg-red-800 bg-blue-800 h-0.5 transition-all duration-200"></span>
              <span className="absolute rotate-45 w-8 hover:bg-red-800 bg-blue-800 h-0.5 transition-all duration-200"></span>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
