"use client";
import Link from "next/link";

import Kontakt from "../components/Kontakt";
import GoogleMap from "../components/GoogleMaps";
import TextBanner from "../components/TextBanner";

export default function Shop() {
  return (
    <>
      <section className="mx-20 mt-16 flex gap-20">
        <div className="basis-2/3 h-[400px]">
          <GoogleMap location="Flæsketorvet 6, 1711 København" />
        </div>

        <div className="basis-1/2">
          <h1 className="text-wh1 font-tyk text-orangebase">Find vej</h1>
          <h5 className="text-wh font-tyk text-blackbase"> Adresse: </h5>
          <p className="text-copy font-copy  text-blackbase">
            Flæsketorvet 6<br />
            1711 Copenhagen
          </p>
        </div>
      </section>
      <section className=" bg-clay -mt-32 ">
        <div className="mx-20 flex gap-10 pt-52">
          <div className="basis-1/2 flex flex-col gap-10">
            <h1 className="text-wh1 font-tyk text-blackbase">Kontaktinfo</h1>
            <div>
              <h5 className="text-wh font-tyk text-blackbase"> Email: </h5>
              <Link className="text-copy font-copy  text-blackbase" target="_blank" href="mailto:info@plateauspirits.com">
                Info@plateauspirits.com
              </Link>
            </div>
            <div>
              <h5 className="text-wh font-tyk text-blackbase"> Telefon: </h5>
              <Link className="text-copy font-copy  text-blackbase" href="tel:+4522422020">
                +45 22 42 20 20
              </Link>
            </div>
          </div>

          <div className="basis-1/2">
            <h1 className="text-wh1 font-tyk text-blackbase">Kontaktformular</h1>
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
