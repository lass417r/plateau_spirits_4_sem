"use client";
import ProductShop from "./productShop";

const Products = ({ products }) => {
  // console.log(products[4].attributes.historie);

  return (
    <div className="w-full py-5 md:py-24">
      <div className="container p-5">
        <h1 className="font-tyk text-wh1 text-blackbase">Plateau Shop</h1>
        <h6 className="font-tyk text-wh6 text-blackbase">Alle produkter</h6>
        {/* Her laver vi et grid til vores produkter og mapper igennem produkt arrayet
            for at få hver enkelt produkt som et card.  */}
        <div className=" flex flex-wrap items-baseline  md:mt-20 md:grid md:grid-cols-3">
          {products.map((product) => (
            <ProductShop key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
