import { getAllProducts, getProductBySlug } from "@/lib/swell/products";

export async function generateStaticParams() {
  const products = await getAllProducts();

  return products.map((product) => ({
    slug: product.slug,
  }));
}

export default async function productPage({ params }) {
  const product = await getProductBySlug(params.slug);

  const { name, description } = product;

  return (
    <div>
      <h1>{name}</h1>
      <p>{description}</p>
    </div>
  );
}
