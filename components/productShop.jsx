"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

const ProductShop = ({ product }) => {
  const [isHovered, setIsHovered] = useState(false);

  return product.price === 500 ? (
    <div className=" grid auto-rows-auto gap-2 p-5 md:col-span-2" key={product.id}>
      <Link className="" key={product.id} href={`/shop/${product.slug}`}>
        <div className="relative flex aspect-[2/1] h-auto w-full">
          <motion.div className="absolute" initial={{ opacity: 1 }} whileHover={{ opacity: 0 }} transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}>
            <Image src={product.images[0].file.url} alt={product.name} width={800} height={400} />
          </motion.div>
          <motion.div className="absolute" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}>
            <Image src={product.images[1].file.url} alt={product.name} width={800} height={400} />
          </motion.div>
        </div>
      </Link>
      <div className="text-blackbase ">
        <h2 className="font-tyk text-copy">{product.name}</h2>
        <p className="font-copy text-copy">{product.price}</p>
        <div className="mt-5">
          <Button href={`/shop/${product.slug}`} text={"SE PRODUKT"}></Button>
        </div>
      </div>
    </div>
  ) : (
    <div className="op col-span-1 grid auto-rows-auto gap-2 p-5" key={product.id}>
      <Link className="col-span-1" key={product.id} href={`/shop/${product.slug}`}>
        <div className="relative flex aspect-[1/1] h-auto w-full">
          <motion.div className="absolute" initial={{ opacity: 1 }} whileHover={{ opacity: 0 }} transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}>
            <Image src={product.images[0].file.url} alt={product.name} width={800} height={400} />
          </motion.div>
          <motion.div className="absolute" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 1, ease: [0.43, 0.13, 0.23, 0.96] }}>
            <Image src={product.images[1].file.url} alt={product.name} width={800} height={400} />
          </motion.div>
        </div>
      </Link>
      <div className="text-blackbase">
        <h2 className="font-tyk text-copy">{product.name}</h2>
        <p className="font-copy text-copy">{product.price}</p>
        <div className="mt-5">
          <Button href={`/shop/${product.slug}`} text={"SE PRODUKT"}></Button>
        </div>
      </div>
    </div>
  );
};

export default ProductShop;
