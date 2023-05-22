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

{
  /* <div className="mx-10 flex">
     
{products.map((product) => (
  <div className="flex-row gap-5 p-5" key={product.id}>
    <Image src={product.images[0].file.url} alt={product.name} width={300} height={500} />
    <div className="">
      <h2>{product.name}</h2>
      <p>{product.price}</p>
      <div className="mt-5">
        <Button href={"/shop/" + product.slug} text={"SE PRODUKT"}></Button>
      </div>
    </div>
  </div>
))}
</div> */
}
