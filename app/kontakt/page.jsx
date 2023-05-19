"use client";
import Link from "next/link";
import Image from "next/image";

import Kontakt from "../../components/Kontakt";
import GoogleMap from "../../components/GoogleMaps";
import TextBanner from "../../components/TextBanner";

import deksel from "../../public/assets/deksel_skrift2.svg";

export default function Shop() {
  return (
    <>
      <section className="mx-20 mt-16 flex gap-20">
        <div className="h-[400px] basis-2/3">
          <GoogleMap location="Flæsketorvet 6, 1711 København" />
        </div>

        <div className="basis-1/2">
          <h1 className="font-tyk text-wh1 text-orangebase">Find vej</h1>
          <h5 className="text-wh font-tyk text-blackbase"> Adresse: </h5>
          <p className="font-copy text-copy  text-blackbase">
            Flæsketorvet 6<br />
            1711 Copenhagen
          </p>
        </div>
      </section>
      <section className=" -mt-32 bg-clay">
        <div className="mx-20 flex gap-10 pt-64">
          <div className="relative flex basis-1/2 flex-col gap-10">
            <h1 className="font-tyk text-wh1 text-blackbase">Kontaktinfo</h1>
            <div>
              <h5 className="text-wh font-tyk text-blackbase"> Email: </h5>
              <Link className="font-copy text-copy  text-blackbase" target="_blank" href="mailto:info@plateauspirits.com">
                Info@plateauspirits.com
              </Link>
            </div>
            <div>
              <h5 className="text-wh font-tyk text-blackbase"> Telefon: </h5>
              <Link className="font-copy text-copy  text-blackbase" href="tel:+4522422020">
                +45 22 42 20 20
              </Link>
            </div>
            <div className="absolute right-1/4 top-1/3">
              <Image src={deksel} width={442} height={439} alt="Dekorativ illustration"></Image>
            </div>
          </div>

          <div className="basis-1/2">
            <h1 className="font-tyk text-wh1 text-blackbase">Kontaktformular</h1>
            <Kontakt></Kontakt>
          </div>
        </div>
      </section>
      <section className=" bg-clay py-10 ">
        <TextBanner text="BESØG OS PÅ FLÆSKETORVET 6, KØDBYEN &nbsp; - &nbsp; BESØG OS PÅ FLÆSKETORVET 6, KØDBYEN"></TextBanner>
      </section>
    </>
  );
}
