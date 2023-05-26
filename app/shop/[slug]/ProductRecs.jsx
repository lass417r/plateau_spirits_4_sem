"use client";
import Image from "next/image";
import Button from "../../../components/Button";

import gluna from "../../../public/images/gluna.png";
import gtouche from "../../../public/images/gtouche.png";
import gtranq from "../../../public/images/gtranq.png";

function ProductRecs(props) {
  return (
    <div className="my-16 ">
      <div className="p-5 md:mb-6">
        <h2 className="udvalgteProdukter font-tyk text-mobileH2 md:text-wh2">Vi anbefaler også</h2>
      </div>
      <div className="flex flex-row items-center gap-5 overflow-y-scroll md:gap-14">
        <div className="ml-5 flex max-w-[400px] basis-1/3 flex-col items-center border border-solid border-orangebase outline-2">
          <Image className="hover:cursor-mincursor" src={gluna} width={400} height={463} alt="Flot billede af Gin flaske"></Image>
          <div className="my-2 flex flex-col items-center gap-2 p-5 text-center md:my-5 md:gap-5">
            <h5 className="text-mobileH5 font-normal md:text-wh5">La Luna Absint</h5>
            <p className="mb-5 font-copy text-copy">445 DKK</p>
            <div className="hidden md:block">
              <Button href={"/shop/roye-vodka"} text={"SE PRODUKT"}></Button>
            </div>
          </div>
        </div>
        <div className="flex max-w-[400px] basis-1/3 flex-col items-center border border-solid border-orangebase outline-2">
          <Image className="hover:cursor-mincursor" src={gtranq} width={400} height={463} alt="Flot billede af Gin flaske"></Image>
          <div className="my-2 flex flex-col items-center gap-2 p-5 text-center md:my-5 md:gap-5">
            <h5 className="text-mobileH5 font-normal md:text-wh5">Touché Aquavit</h5>
            <p className="mb-5 font-copy text-copy">295 DKK</p>
            <div className="hidden md:block">
              <Button href={"/shop/roye-vodka"} text={"SE PRODUKT"}></Button>
            </div>
          </div>
        </div>
        <div className="flex max-w-[400px] basis-1/3 flex-col items-center border border-solid border-orangebase outline-2">
          <Image className="hover:cursor-mincursor" src={gtouche} width={400} height={463} alt="Flot billede af Gin flaske"></Image>
          <div className="my-2 flex flex-col items-center gap-2 p-5 text-center md:my-5 md:gap-5">
            <h5 className="text-mobileH5 font-normal md:text-wh5">Tranquillité Gin</h5>
            <p className="mb-5 font-copy text-copy">395 DKK</p>
            <div className="hidden md:block">
              <Button href={"/shop/roye-vodka"} text={"SE PRODUKT"}></Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductRecs;
