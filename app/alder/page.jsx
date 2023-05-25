import Image from "next/image";
import textcirkel from "../../public/images/roundlogo.svg";
import lgo from "../../public/images/daeksel.svg";
import Button from "../../components/Button";

export default function alder() {
  return (
    <div className=" mx-auto flex h-1/3 w-1/3">
      <section className="w-160px h-160px relative md:mt-20">
        {/* Virker ikke korrekt */}

        <Image
          className="z-1 h-full w-full animate-spin-slow"
          src={textcirkel}
          width={300}
          height={300}
          alt="er du over atten?"
        ></Image>
        <Image
          className="absolute left-1/2 top-1/2 z-10 h-[35%] w-auto -translate-x-1/2 -translate-y-1/2 transform md:h-[50%]"
          src={lgo}
          width={500}
          height={500}
          alt="logo plateau"
        ></Image>

        <h1 className=" text-center font-ssort text-mobileH1 text-black500 md:text-wh1">
          Er du over 18?
        </h1>
        <div className=" flex items-center">
          <div className="mx-auto flex gap-10 pt-10">
            <Button href={"/shop"} text={"JA"}></Button>
            <Button href={"/shop"} text={"NEJ"}></Button>
          </div>
        </div>
      </section>
    </div>
  );
}
