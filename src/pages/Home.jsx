import "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck, Truck, RotateCcw } from "lucide-react";
import { useAuth } from "../context/AuthProvider";
import { motion } from "framer-motion";


const MotionLink = motion.create(Link);

function Home() {
  const { currentUser } = useAuth();

  const featuredProducts = [
    {
      id: 1,
      name: "Minimalist Leather Wallet",
      price: 45.0,
      image:
        "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 2,
      name: "Premium Wireless Earbuds",
      price: 129.99,
      image:
        "https://images.unsplash.com/photo-1590658268037-6bf12165a8df?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 3,
      name: "Anodized Aluminum Flask",
      price: 34.5,
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=300&q=80",
    },
    {
      id: 4,
      name: "Anodized Aluminum Flask",
      price: 34.5,
      image:
        "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&w=300&q=80",
    },
  ];

  return (
    <div className="relative w-full mx-auto pt-8">
      {/* Hero Section */}

      <section className="bg-linear-to-r from-blue-500 to-indigo-600 text-white py-20 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {currentUser && (
            <motion.h1
              initial={{ opacity: 0, fontSize: "2rem" }}
              animate={{ opacity: 1, fontSize: "1.5rem" }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="italic text-2xl py-5"
            >
              Hi,
              <span className="text--600 font-bold px-1">
                {currentUser.name}
              </span>
              welcome Back!
            </motion.h1>
          )}
          <motion.h1
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl font-bold mb-4"
          >
            Upgrade Your Digital Workspace
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg md:text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
          >
            Discover premium tech accessories, components, and gadgets curated
            for developers and creators.
          </motion.p>
          <MotionLink
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            to="/products"
            className="inline-flex items-center gap-2 bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-blue-50 transition shadow-lg"
          >
            Shop Collection <ArrowRight className="w-5 h-5" />
          </MotionLink>
        </div>
      </section>

      {/* Trust Badges Banner */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
        <div className="hover:shadow-xl p-6 bg-white shadow-xs rounded-2xl border border-gray-100 flex flex-col items-center">
          <Truck className="w-8 h-8  text-blue-600 font-extrabold mb-3" />

          <h3 className="font-bold text-gray-800 mb-1">Express Delivery</h3>
          <p className="text-sm text-gray-500">
            Fast, reliable local tracking on all customer orders.
          </p>
        </div>
        <div className="hover:shadow-xl p-6 bg-white shadow-xs rounded-2xl border border-gray-100 flex flex-col items-center">
          <ShieldCheck className="w-8 h-8  text-blue-600 font-extrabold mb-3" />
          <h3 className="font-bold text-gray-800 mb-1">Secure Checkouts</h3>
          <p className="text-sm text-gray-500">
            Fully encrypted tokenized secure payment transactions.
          </p>
        </div>
        <div className="hover:shadow-xl p-6 bg-white shadow-xs rounded-2xl border border-gray-100 flex flex-col items-center">
          <RotateCcw className="w-8 h-8  text-blue-600 font-extrabold mb-3" />
          <h3 className="font-bold text-gray-800 mb-1">Easy Returns</h3>
          <p className="text-sm text-gray-500">
            Hassle-free return policy if you change your mind.
          </p>
        </div>
      </section>

      {/* Visual Hero Banner Section */}

      <section className="p-6 bg-white rounded-2xl border border-gray-100 flex flex-col items-center">
        <div className="relative z-10 flex flex-col items-center">
          <div className="mb-2">
            <span className="font-bold bg-blue-100 inline-fit px-20 items-center gap-1.5  border border-indigo-400 text-indigo-300 py-1 rounded-full text-xs semibold tracking-wider mb-4">
              Generally cosmetics
            </span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-center font-black tracking-tight leading-tight mb-4">
            Elevate Your Everyday Essentials.
          </h1>
          <p className="text-center font-semibold text-indigo-600 text-sm sm:text-base mb-6 leading-relaxed">
            Discover clean designs curated precisely for utility, comfort, and
            premium visual elegance. Free shipping on all orders this week.
          </p>
          <Link
            to="/about"
            className="w-full flex justify-center group items-center gap-2 bg-white text-indigo-950 font-bold px-5 py-3 rounded-xl hover:bg-indigo-50 transition text-sm shadow-md"
          >
            Learn Our Philosophy
            <ArrowRight
              size={16}
              className="group-hover:scale-x-200 group-hover:text-blue-700 duration-150 transition"
            />
          </Link>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-12">
        <h3 className="text-5xl font-extrabold text-center">
          Some of our featured products
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 bg-white/50">
          {featuredProducts.map((item) => (
            <div className="md:p-6" key={item.id}>
              <div className="bg-slate-200">
                <div className="group bg-slate-200 p-6 rounded-3xl w-full">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full group-hover:scale-110 object-cover md:h-48 h-36 px-3 rounded-2xl duration-400"
                  />
                </div>
                <div className="flex justify-between mt-5 px-2 md:px-4">
                  <h3 className="text-blue-500 font-semibold">{item.name} </h3>
                  <p className="text-blue-400">{item.price} </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
