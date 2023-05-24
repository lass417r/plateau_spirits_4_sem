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
      <section className=" px-24 py-24 bg-clay ">
    <h2 className="font-tyk text-center  text-wh2">Kontakt information</h2>
    <div className="lg:flex  flex-col lg:flex-row justify-between ">
        <div className="flex justify-center flex-col">
          <div className="flex justify-center p-10">
          </div>
           <h3 className="  font-tyk text-wh4 flex justify-center lg:mb-8 lg:justify-center">
         Mail
           </h3>
          <p className="font-copy flex justify-center lg:justify-center text-center text-copy lg:w-80">Info@plateauspirits.com
          </p>
        </div>

        <div className="flex justify-center flex-col">
        <div className="flex justify-center p-10">
         
          </div>
           <h3 className="font-tyk text-wh4 flex text-center justify-center lg:mb-8 lg:justify-center">
          Telefon
           </h3>
          <p className="font-copy flex justify-center lg:justify-center text-center text-copy lg:w-80">+45 22 42 20 20
          </p>
        </div>
        <div className="flex justify-center flex-col">
        <div className="flex justify-center p-10">
          
          </div>
           <h3 className="  font-tyk text-wh4 flex justify-center lg:mb-8 lg:justify-center">
          Adresse
           </h3>
          <p className="font-copy flex justify-center lg:justify-center text-center text-copy lg:w-80">Flæsketorvet 6, 1711 København
          </p>
        </div>
        </div>
      </section>
      <section className="">
        <div className="flex p-7 justify-center">
          <div className="flex-col justify-center">
          <h2 className="font-tyk text-wh1 text-blackbase">Kontaktformular</h2>
          <Kontakt></Kontakt>   
          {/* <Image src={deksel} width={442} height={439} alt="Dekorativ illustration"></Image> */}
          </div>
        </div>
      </section>
      {/* <section className=" -mt-32 ">
        <div className=" flex flex-col justify-center gap-10 pt-64">
            <h2 className="font-tyk text-wh1 text-blackbase">Kontaktformular</h2>
            <Kontakt></Kontakt>    
          <div className=" ">
              <Image src={deksel} width={442} height={439} alt="Dekorativ illustration"></Image>
            </div>
        </div>
      </section> */}
      <section className=" bg-clay py-10 ">
        <TextBanner text="BESØG OS PÅ FLÆSKETORVET 6, KØDBYEN &nbsp; - &nbsp; BESØG OS PÅ FLÆSKETORVET 6, KØDBYEN"></TextBanner>
      </section>
    </>
  );
}
