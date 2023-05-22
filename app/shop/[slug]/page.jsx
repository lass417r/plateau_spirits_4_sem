import { getProductBySlugOrId } from "@/lib/swell/products";
import Product from "@/components/product";
import Cocktail from "./Cocktail";
import ProductRecs from "./ProductRecs";

export default async function productPage({ params }) {
  const product = await getProductBySlugOrId(params.slug);

  return (
    <div>
      <section className=" mx-32">
        <Product product={product} />
      </section>
      <section className=" overflow-hidden bg-matte200">
        <Cocktail />
      </section>
      <section className=" mx-32">
        <ProductRecs />
      </section>
    </div>
  );
}
