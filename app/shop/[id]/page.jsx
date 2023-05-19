"use client";

import { useState, useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import Image from "next/image";

const ProductDetail = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [product, setProduct] = useState();

  useEffect(() => {
    const id = searchParams.get("id");

    if (id) {
      console.log("id:", id);
      fetch(`/api/products/${id}`, { cache: "force-cache" })
        .then((response) => response.json())
        .then((data) => setProduct(data))
        .catch((err) => console.error(err));
    }
  }, [pathname, searchParams]);
  console.log("product:", product);
  console.log("pathname:", pathname);
  console.log("searchParams:", searchParams);
  if (!product) {
    return <div>Loading...</div>;
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

export default ProductDetail;
