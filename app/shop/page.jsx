"use client";
import { useContext } from "react";
import { CartContext } from "../../components/CartContext";
import Image from "next/image";
import Link from "next/link";
import { products } from "./products";

const Products = () => {
  const { dispatch } = useContext(CartContext);
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4 font-bold">Products</h1>
      <div className="flex flex-wrap gap-20">
        {products.map((product) => (
          <div key={product.id} className="rounded shadow-lg mb-4 flex flex-col items-center space-y-2 border p-4">
            <Image src="/../public/images/gin1.jpg" alt={product.name} width={500} height={500} className="mb-2 h-64 w-64 object-cover" />
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="font-bold">${product.price}</p>
            <Link className="rounded bg-blue-500 px-4 py-2 text-white hover:bg-blue-600" href={`/shop/${product.id}`}>
              View Product
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;

// <Image src={`../../public${product.imageUrl}`} alt={product.name} width={500} height={500} className="h-64 w-64 object-cover mb-2" />
