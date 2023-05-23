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

  return (
    <div className="container">
      <div className=" p-5 lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        <div className="sticky top-36 aspect-[1/1] h-auto w-full md:mb-16">
          <Image src={product.images[1].file.url} alt={product.name} fill className="  object-cover object-center"></Image>
        </div>
        {/* Product info */}
        <div className="px-4 sm:px-0 ">
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
              <div className="sm:flex-col1 start-0 mt-10 flex items-start gap-10">
                <input
                  className=" border-2 border-black400 bg-white100 px-5  py-3 font-ssort text-deskButtonPrimary  text-black400 disabled:cursor-not-allowed disabled:opacity-50"
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
                  className="voresKnap border-2 border-black400 bg-white100 px-5  py-3 font-ssort text-deskButtonPrimary  text-black400 disabled:cursor-not-allowed disabled:opacity-50  sm:w-full"
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
