import { useState } from "react";
import { useProducts } from "../context/ProductContext";
import {
  Edit,
  PackagePlus,
  Save,
  Plus,
  X,
  Layers,
  Edit3,
  Trash2,
} from "lucide-react";

export default function AdminDashboard() {
  const { products, addProduct, updateProduct, deleteProduct } = useProducts();
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [details, setDetails] = useState("");
  const [editingId, setEditingId] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !price) return;

    const submissionPayload = {
      name,
      price,
      category,
      image,
      description,
      details,
    };
    if (editingId) {
      updateProduct({ id: editingId, ...submissionPayload });
      setEditingId(null);
    } else {
      addProduct(submissionPayload);
    }
    setName("");
    setPrice("");
    setCategory("");
    setImage("");
    setDescription("");
    setDetails("");
  };

  const startEdit = (product) => {
    setEditingId(product.id);
    setName(product.name);
    setPrice(product.price);
    setCategory(product.category);
    setImage(product.image);
    setDescription(product.description);
    setDetails(product.details);
  };

  const cancelEditingMode = () => {
    setEditingId(null);
    setName("");
    setPrice("");
    setCategory("");
    setImage("");
    setDescription("");
    setDetails("");
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-8 bg-white">
      <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-xs h-fit">
        <h3 className="font-bold text-xl mb-4 text-gray-900 flex items-center gap-2">
          {editingId ? (
            <Edit className="w-5 h-5 text-amber-500" />
          ) : (
            <PackagePlus className="w-5 h-5 text-amber-500" />
          )}
          {editingId ? "Modify Product Data" : "Add Store Inventory"}
        </h3>

        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <label
              htmlFor="name"
              className="block text-xs font-semibold text-gray-500 uppercase mb-1"
            >
              Product Name
            </label>
            <input
              required
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:border-blue-500 focus:outline-hidden"
            />
          </div>

          <div className="grid grid-cols-2 gap-2">
            <div>
              <label
                htmlFor="price"
                className="block text-xs font-semibold text-gray-500 uppercase mb-1"
              >
                Product Price
              </label>
              <input
                required
                type="number"
                step={0.01}
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:border-blue-500 focus:outline-hidden"
              />
            </div>

            <div>
              <label
                htmlFor="category"
                className="block text-xs font-semibold text-gray-500 uppercase mb-1"
              >
                Product Category
              </label>
              <select
                name="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:border-blue-500 focus:outline-hidden"
              >
                <option value="All" className="bg-blue-600">
                  All
                </option>
                <option value="electronics">Electronics</option>
                <option value="Featured">Featured</option>
                <option value="Books">Books</option>
                <option value="Fashion">Fashion</option>
              </select>
            </div>
          </div>

          <div>
            <label
              htmlFor="Image"
              className="block text-xs font-semibold text-gray-500 uppercase mb-1"
            >
              Product Image
            </label>
            <input
              required
              type="file"
              onChange={(e) => setImage(URL.createObjectURL(e.target.file[0]))}
              className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:border-blue-500 focus:outline-hidden"
            />
          </div>

          <div>
            <label
              htmlFor="description"
              className="block text-xs font-semibold text-gray-500 uppercase mb-1"
            >
              Product Description
            </label>
            <input
              required
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:border-blue-500 focus:outline-hidden"
            />
          </div>

          <div>
            <label
              htmlFor="details"
              className="block text-xs font-semibold text-gray-500 uppercase mb-1"
            >
              Product Details
            </label>
            <input
              required
              type="text"
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="w-full border border-gray-200 rounded-xl px-4 py-2 text-sm focus:border-blue-500 focus:outline-hidden"
            />
          </div>

          <div className="flex gap-2 pt-2">
            <button
              className={`flex-1 font-semibold text-sm py-2.5 rounded-xl transition text-white flex items-center justify-center ${editingId ? "bg-amber-500 hover:bg-amber-600" : "bg-blue-600 hover:bg-blue-700"}`}
            >
              {editingId
                ? <Save className="h-4 w-4 text-white" /> && "Save Edits"
                : <Plus className="w-4 h-4 text-white" /> &&
                  "Publish Products"}{" "}
            </button>

            {editingId && (
              <button
                type="button"
                onClick={cancelEditingMode}
                className="bg-slate-100 hover:bg-slate-200 text-gray-600 px-3 rounded-xl transition"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </form>
      </div>
      <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden">
        <div className="p-6 border-b border-gray-100 flex justify-between items-center">
          <h3 className="font-bold text-lg text-gray-900 flex items-center gap-2">
            <Layers className="w-5 h-5 text-gray text-amber-500" /> Active
            Master Catalog
          </h3>
          <span className="text-xs font-bold bg-blue-50 text-blue-600 px-2.5 py-1 rounded-full">
            {products.length} Items Total
          </span>
        </div>

        <div className="overflow-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-slate-50 text-xs font-semibold text-gray-400 uppercase border-b border-gray-100">
                <th className="py-3 px-6">Image</th>
                <th className="py-3 px-6">Product Info</th>
                <th className="py-3 px-6">Category</th>
                <th className="py-3 px-6">Cost</th>
                <th className="py-3 px-6">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
              {products.map((pro) => (
                <tr key={pro.id} className="hover:bg-slate-50/50 transition">
                  <td className="py-4 px-6">
                    {pro.image ? (
                      <img
                        src={pro.image}
                        alt={pro.name}
                        className="w-10 h-10 object-cover rounded-lg bg-slate-50 border-gray-100"
                        onError={(e) => {
                          e.target.src = "https://placehold.com/40*40?text=@";
                        }}
                      />
                    ) : (
                      <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center text-lg">
                        📦
                      </div>
                    )}{" "}
                  </td>

                  <td className="py-4 px-6 max-w-xs">
                    <p className="font-semibold text-gray-900 truncate">
                      {pro.name}
                    </p>
                    <p className="text-xs text-gray-400 line-clamp-1">
                      {pro.description}
                    </p>
                  </td>

                  <td className="py-4 px-6">
                    <span className="text-xs bg-slate-100 text-gray-600 px-2 py-0.5 rounded-md font-medium">
                      {pro.category || "Unassigned"}{" "}
                    </span>
                  </td>

                  <td className="py-4 px-6 font-mono text-blue-600 font-semibold">
                    ${Number(pro.price).toFixed(2)}
                  </td>

                  <td className="py-4 px-6 text-right space-x-1 whitespace-nowrap">
                    <button
                      onClick={() => startEdit(pro)}
                      className="p-2 text-gray-400 hover:text-amber-500 bg-slate-50 hover:bg-amber-50 rounded-lg transition"
                      title="Modify Asset"
                    >
                      <Edit3 className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => deleteProduct(pro.id)}
                      className="p-2 text-gray-400 hover:text-amber-500 bg-slate-50 hover:bg-amber-50 rounded-lg transition"
                      title="Purge Asset"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
