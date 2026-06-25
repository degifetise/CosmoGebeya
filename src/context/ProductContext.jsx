import { createContext, useContext, useEffect, useState } from "react";
import { products as initialProducts } from "../data/products";

const ProductContext = createContext();

export function ProductProvider({ children }) {
  const [products, setProducts] = useState(() => {
    const savedProducts = localStorage.getItem("store_products");
    return savedProducts ? JSON.parse(savedProducts) : initialProducts;
  });

  useEffect(() => {
    localStorage.setItem("store_products", JSON.stringify(products));
  }, [products]);

  const addProduct = (newProduct) => {
    const formattedProduct = {
      id: `p_${Date.now()}`,
      name: newProduct.name,
      price: newProduct.price,
      category: newProduct.category,
      image: newProduct.image,
      description: newProduct.description,
      details: newProduct.details || "",
    };

    setProducts((prev) => [...prev, formattedProduct]);
  };

  const updateProduct = (updatedProduct) => {
    setProducts((prev) =>
      prev.map((item) =>
        item.id === updateProduct.id
          ? { ...updatedProduct, price: parseFloat(updatedProduct.price) }
          : item,
      ),
    );
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((item) => item.id !== id));
  };

  return (
    <ProductContext.Provider
      value={{ products, addProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export function useProducts() {
  return useContext(ProductContext);
}
