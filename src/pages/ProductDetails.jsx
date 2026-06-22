import "react";
import { useNavigate, useParams } from "react-router-dom";
import { products } from "../data/products";

function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  if (!product) return <h2>No product found</h2>;
  return (
    <div className="flex items-center overflow-hidden justify-center rounded-xl flex-col mt-26 w-full px-5 md:mt-30 md:max-w-2xl sm:max-w-2xl  mx-auto gap-3 min-h-full py-28 bg-slate-400">
      <button
        onClick={() => navigate(-1)}
        className="top-30 left-1.5 absolute bg-blue-600 hover:bg-blue-300 hover:cursor-pointer px-10 py-2 text-white font-semibold rounded-3xl"
      >
        Back Home
      </button>
      <img src={product.image} alt={product.name} />
      <h1 className="text-slate-200 text-3xl sm:text-4xl md:text-5xl font-semibold">
        {product.name}
      </h1>
      <p>{product.category}</p>
      <p>{product.price}</p>
      <div>
        <h3 className="p-5 w-xl">{product.details} </h3>
      </div>
    </div>
  );
}

export default ProductDetails;
