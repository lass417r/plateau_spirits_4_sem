"use client";
import Image from "next/image";
import Button from "../../../components/Button";

import ginpic from "../../../public/images/Asset17.png";

function ProductRecs(props) {
  return (
    <div className="my-16">
      <div className="md:mb-6">
        <h2 className="udvalgteProdukter font-tyk text-wh2">Vi anbefaler også</h2>
      </div>
      <div className=" flex flex-row items-center gap-14 ">
        <div className="flex basis-1/3 flex-col items-center ">
          <div className="border border-solid border-orangebase outline-2">
            <Image className="hover:cursor-mincursor" src={ginpic} width={315} height={463} alt="Flot billede af Gin flaske"></Image>
            <div className="my-5 flex flex-col items-center gap-5">
              <h5 className="text-wh5 font-normal">Roÿe Vodka</h5>
              <p className="font-copy text-copy">3.200 DKK</p>
              <Button href={"/shop/roye-vodka"} text={"SE PRODUKT"}></Button>
            </div>
          </div>
        </div>
        <div className="flex basis-1/3 flex-col items-center ">
          <div className="border border-solid border-orangebase outline-2">
            <Image className="hover:cursor-mincursor" src={ginpic} width={315} height={463} alt="Flot billede af Gin flaske"></Image>
            <div className="my-5 flex flex-col items-center gap-5">
              <h5 className="text-wh5 font-normal">Roÿe Vodka</h5>
              <p className="font-copy text-copy">3.200 DKK</p>
              <Button href={"/shop/roye-vodka"} text={"SE PRODUKT"}></Button>
            </div>
          </div>
        </div>
        <div className="flex basis-1/3 flex-col items-center ">
          <div className="border border-solid border-orangebase outline-2">
            <Image className="hover:cursor-mincursor" src={ginpic} width={315} height={463} alt="Flot billede af Gin flaske"></Image>
            <div className="my-5 flex flex-col items-center gap-5">
              <h5 className="text-wh5 font-normal">Roÿe Vodka</h5>
              <p className="font-copy text-copy">3.200 DKK</p>
              <Button href={"/shop/roye-vodka"} text={"SE PRODUKT"}></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductRecs;
