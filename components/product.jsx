"use client";
import Historie from "@/components/historie";
import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useSWRConfig } from "swr";
import { addToCart } from "@/lib/swell/cart";

const Product = ({ product }) => {
  const router = useRouter();
  const { mutate } = useSWRConfig();
  const [isPending, startTransition] = useTransition();
  const [quantity, setQuantity] = useState(1);

  // AddToCart
  const handleSubmit = async (event) => {
    event.preventDefault();
    await addToCart({
      product_id: product.id,
      quantity: quantity,
    });
    mutate("cart");
    startTransition(() => {
      router.refresh();
    });
  };
  //   <div className="relative z-0 mt-8 aspect-[1/1]  h-auto w-full md:-right-24 md:-top-28 md:flex md:basis-2/3 md:flex-col md:gap-3  ">
  //   <Image src={cocktailpic} alt="billede af cocktail" fill className="object-cover object-center"></Image>
  // </div>
  return (
    <div className="container">
      <div className=" flex flex-col gap-10 p-5 md:grid md:grid-cols-2 md:items-start md:gap-x-8">
        <div className="relative flex aspect-[1/1] md:sticky  md:top-36  md:mb-16">
          <Image src={product.images[1].file.url} alt={product.name} fill className="  object-cover object-center"></Image>
        </div>
        {/* Product info */}
        <div className="sm:px-0 md:px-4 ">
          <h1 className="font-tyk text-wh1 text-blackbase">{product.name}</h1>
          <div>
            <div className="mt-3">
              <div className="font-copy text-copy text-blackbase" dangerouslySetInnerHTML={{ __html: product.description }} />
            </div>

            <div className="mt-10">
              <h6 className="font-tyk text-wh6 text-blackbase">Pris</h6>
              <p className="font-copy text-copy text-blackbase">{product.price} DKK</p>
            </div>

            <form className="" onSubmit={handleSubmit}>
              <div className=" start-0 mt-10 flex items-stretch gap-10">
                <input
                  className="h-full border-2 border-black400 bg-white100 px-5  py-3 font-ssort text-deskButtonPrimary  text-black400 disabled:cursor-not-allowed disabled:opacity-50"
                  onChange={(e) => setQuantity(e.target.value)}
                  value={quantity}
                  type="number"
                  id="quantity"
                  name="quantity"
                  min="1"
                  max="10"
                ></input>
                <button
                  type="submit"
                  className="voresKnap h-full border-2 border-black400 bg-white100 px-5  py-3 font-ssort text-deskButtonPrimary  text-black400 disabled:cursor-not-allowed disabled:opacity-50  sm:w-full"
                >
                  Add to Cart
                </button>
              </div>
            </form>
          </div>

          <Historie />
        </div>
      </div>
    </div>
  );
};

export default Product;
