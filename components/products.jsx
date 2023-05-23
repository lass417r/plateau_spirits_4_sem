import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const Products = ({ products }) => {
  return (
    <div className="w-full py-24">
      <div className="container p-5">
        <h1 className="font-tyk text-wh1 text-blackbase">Plateau Shop</h1>
        <h6 className="font-tyk text-wh6 text-blackbase">Alle produkter</h6>

        <div className="mt-20 flex flex-wrap items-center justify-center md:grid md:grid-cols-3">
          {products.map((product) => (
            <Link key={product.id} href={`/shop/${product.slug}`}>
              <div className="grid-col j grid  gap-2 p-5" key={product.id}>
                <div className=" aspect-[3/1] h-auto w-full object-contain object-center">
                  <Image src={product.images[0].file.url} alt={product.name} width={250} height={300} />
                </div>
                <div className="text-blackbase">
                  <h2 className="font-tyk text-copy">{product.name}</h2>
                  <p className="font-copy text-copy">{product.price}</p>
                  <div className="mt-5">
                    <Button href={`/shop/${product.slug}`} text={"SE PRODUKT"}></Button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

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

export default Products;
