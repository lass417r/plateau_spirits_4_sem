"use client";
import { useRouter } from "next/router";
import { products } from "../products"; // Import your products array
import Image from "next/image";

const ProductDetail = () => {
  const router = useRouter();
  const { id } = router.query;

  // Find the product with the matching id
  const product = products.find((prod) => prod.id === id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div>
      <h2>{product.name}</h2>
      <Image src={product.image} alt={product.name} />
      <p>${product.price}</p>
      <button onClick={() => dispatch({ type: "ADD_ITEM", item: product })}>Add to Cart</button>
    </div>
  );
};

export async function generateStaticParams() {
  const prods = await fetch(products).then((res) => res.json());

  return prods.map((post) => ({
    slug: post.id,
  }));
}

export default ProductDetail;
