import { getProducts } from "@/lib/swell/products";
import Products from "@/components/products";

export default async function productPage({}) {
  const { results: products } = await getProducts({ page: 1 });

  return (
    <div className="mx-32">
      <Products products={products} />{" "}
    </div>
  );
}
