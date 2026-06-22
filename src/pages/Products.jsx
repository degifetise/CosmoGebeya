import { useState } from "react";
import { products } from "../data/products";
import ProductCard from "../Components/ProductCard";
import { useCart } from "../context/CartContext";

export default function Products() {
  const { addToCart } = useCart();
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const filteredProducts = products.filter((p) => {
    return (
      (category === "All" || p.category === category) &&
      p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  });
  return (
    <div className="max-w-7xl mx-auto w-full items-center bg-white relative flex flex-col pt-5 sm:pt-10">
      <div className="bg-slate-100 outline-0 border-none rounded-4xl">
        <input
          className="w-full bg-slate-50 text-sm pl-9 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-hidden focus:border-blue-500 focus:bg-white transition"
          placeholder="Search products here..."
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div className="grid grid-cols-3 sm:flex mt-2 sm:mt-8 gap-4 items-center">
        <button
          onClick={() => setCategory("All")}
          className={`rounded-3xl outline-none cursor-pointer ${category === "All" ? "bg-blue-600 text-white" : "border-1 border-blue-400 hover:bg-blue-500"} text-xs w-20 py-1 px-2 md:w-40 md:px-4 md:py-2  md:text-xl font-semibold sm:font-bold`}
        >
          All
        </button>
        <button
          onClick={() => setCategory("Fashion")}
          className={`rounded-3xl outline-none cursor-pointer ${category === "Fashion" ? "bg-blue-600 text-white" : "border-1 border-blue-400 hover:bg-blue-500"} text-xs w-20 py-1 px-2 md:w-40 md:px-4 md:py-2  md:text-xl font-semibold sm:font-bold`}
        >
          Fashion
        </button>
        <button
          onClick={() => setCategory("Books")}
          className={`rounded-3xl outline-none cursor-pointer ${category === "Books" ? "bg-blue-600 text-white" : "border-1 border-blue-400 hover:bg-blue-500"} text-xs w-20 py-1 px-2 md:w-40 md:px-4 md:py-2  md:text-xl font-semibold sm:font-bold`}
        >
          Books
        </button>
        <button
          onClick={() => setCategory("Featured")}
          className={`rounded-3xl outline-none cursor-pointer ${category === "Featured" ? "bg-blue-600 text-white" : "border-1 border-blue-400 hover:bg-blue-500"} text-xs w-20 py-1 px-2 md:w-40 md:px-4 md:py-2  md:text-xl font-semibold sm:font-bold`}
        >
          Featured
        </button>
        <button
          onClick={() => setCategory("electronics")}
          className={`rounded-3xl outline-none cursor-pointer ${category === "electronics" ? "bg-blue-600 text-white" : "border-1 border-blue-400 hover:bg-blue-500"} text-xs w-20 py-1 px-2 md:w-40 md:px-4 md:py-2  md:text-xl font-semibold sm:font-bold`}
        >
          Electronics
        </button>
      </div>

      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
