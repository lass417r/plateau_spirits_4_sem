"use client";
import { useContext } from "react";
import { CartContext } from "../components/CartContext";
import Image from "next/image";
import Link from "next/link";
import { products } from "./products";

const Products = () => {
  const { dispatch } = useContext(CartContext);
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="flex gap-20 flex-wrap">
        {products.map((product) => (
          <div key={product.id} className="border p-4 mb-4 rounded shadow-lg flex flex-col items-center space-y-2">
            <Image src={product.imageUrl} alt={product.name} className="h-64 w-64 object-cover mb-2" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="font-bold">${product.price}</p>
            <Link className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600" href={`/shop/${product.id}`}>
              View Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
