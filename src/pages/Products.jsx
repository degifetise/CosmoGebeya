import { useState } from "react";
import { products } from "../data/products";
import { useProducts } from "../context/ProductContext";
import ProductCard from "../Components/ProductCard";
import { useCart } from "../context/CartContext";

export default function Products() {
  const { products: adminProducts } = useProducts();
  const allProducts = [...products, ...adminProducts];
  const { addToCart } = useCart();
  const [category, setCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");

  const filteredProducts = allProducts.filter((p) => {
    return (
      (category === "All" || p.category === category) &&
      p.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
    );
  });

  const sortedProducts = filteredProducts.sort((a, b) => {
    if (sort === "low-high") return a.price - b.price;
    if (sort === "high-low") return b.price - a.price;
    if (sort === "a-z") return a.name.localeCompare(b.name);
    if (sort === "z-a") return b.name.localeCompare(a.name);
    return 0;
  });

  const categories = [
    { id: 1, category: "All" },
    { id: 2, category: "Fashion" },
    { id: 3, category: "Books" },
    { id: 4, category: "Featured" },
    { id: 5, category: "electronics" },
  ];

  return (
    <div className=" max-w-7xl mx-auto w-full items-center bg-white relative flex flex-col pt-5 sm:pt-10">
      <div className="bg-slate-100 outline-0 border-none rounded-4xl">
        <input
          className="w-full bg-slate-50 text-sm pl-9 pr-4 py-2 rounded-xl border border-gray-200 focus:outline-hidden focus:border-blue-500 focus:bg-white transition"
          placeholder="Search products here..."
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      <div
    
        className="grid grid-cols-2 lg:grid-cols-4 sm:flex md:grid-cols-3 mt-2 sm:mt-8 gap-4 items-center"
      >
        {categories.map((cat) => (
          <div key={cat.id}>
            <button
              onClick={() => setCategory(cat.category)}
              className={`rounded-3xl outline-none cursor-pointer ${category === cat.category ? "bg-blue-600 text-white" : "border border-blue-400 hover:bg-blue-500"} text-xs w-15 py-1  px-2 md:w-40 md:px-4 md:py-2  md:text-xl font-semibold sm:font-bold`}
            >
              {cat.category}
            </button>
          </div>
        ))}
      </div>

      <div className="mt-2 ">
        <div className="flex items-center justify-between gap-4 mb-6 flex-col sm:flex-row">
          <h3 className="text-center font-semibold text-gray-500 my-3 text-xl">
            Sort by price and name
          </h3>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="border border-gray-300 rounded-lg px-4 py-2 shadow-sm focus:outline-none focus:ring-blue-500 w-full sm:w-64"
          >
            <option
              value="default"
              className={`rounded-3xl outline-none cursor-pointer ${sort === "default" ? "bg-blue-600 text-white" : " hover:bg-blue-500"} text-xs w-20 px-2 md:w-40 md:px-4 md:py-2  md:text-xl font-semibold sm:font-bold`}
            >
              Sort By
            </option>
            <option
              value="low-high"
              className={`rounded-3xl outline-none cursor-pointer ${sort === "low-high" ? "bg-blue-600 text-white" : "hover:bg-blue-500"} text-xs w-20 py-1 px-2 md:w-40 md:px-4 md:py-2  md:text-xl font-semibold sm:font-bold`}
            >
              Price: Low to High
            </option>
            <option
              value="high-low"
              className={`rounded-3xl outline-none cursor-pointer ${sort === "high-low" ? "bg-blue-600 text-white" : "hover:bg-blue-500"} text-xs w-20 py-1 px-2 md:w-40 md:px-4 md:py-2  md:text-xl font-semibold sm:font-bold`}
            >
              Price: High to Low
            </option>
            <option
              value="a-z"
              className={`rounded-3xl outline-none cursor-pointer ${sort === "a-z" ? "bg-blue-600 text-white" : "border border-blue-400 hover:bg-blue-500"} text-xs w-20 py-1 px-2 md:w-40 md:px-4 md:py-2  md:text-xl font-semibold sm:font-bold`}
            >
              Name: A-Z
            </option>
            <option
              value="z-a"
              className={`rounded-3xl outline-none cursor-pointer ${sort === "z-a" ? "bg-blue-600 text-white" : "border border-blue-400 hover:bg-blue-500"} text-xs w-20 py-1 px-2 md:w-40 md:px-4 md:py-2  md:text-xl font-semibold sm:font-bold`}
            >
              Name: Z-A
            </option>
          </select>
        </div>
      </div>

      <div className="py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {sortedProducts.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
}
