"use client";
import Link from "next/link";
import Image from "next/image";
import kodby from "../../public/assets/kodby.svg";
import tel from "../../public/assets/tel.svg";
import mail from "../../public/assets/mail.svg";

import Kontakt from "../../components/Kontakt";
import GoogleMap from "../../components/GoogleMaps";
import TextBanner from "../../components/TextBanner";

import deksel from "../../public/assets/deksel_skrift2.svg";

export default function Shop() {
  return (
    <>
      <section className="mx-20 mt-16 flex gap-20">
        <div className="h-[400px] basis-2/3">
          {/* Virker ikke korrekt */}
          <GoogleMap location="Flæsketorvet 6, 1711 København" />
        </div>

        <div className="basis-1/2">
          <h1 className="font-tyk text-mobileH1 md:text-wh1 text-orangebase">Find vej</h1>
          <h5 className="text-wh font-tyk text-blackbase"> Adresse: </h5>
          <p className="font-copy text-copy  text-blackbase">
            Flæsketorvet 6<br />
            1711 Copenhagen
          </p>
        </div>
      </section>
      <section className=" bg-clay px-24 py-24 ">
        {/* <h2 className="text-center font-tyk text-mobileH2 md:text-wh2">Kontakt information</h2> */}
        <div className="flex-col  justify-between lg:flex lg:flex-row ">
          <div className="flex flex-col justify-center">
          <div className="flex justify-center p-10">
          <Image
            className=""
            src={mail}
            width={80}
            height={80}
            alt="Billede af chartrøse"
          />
          </div>
            <h3 className="  flex justify-center font-tyk text-mobileH4 md:text-wh4 lg:mb-8 lg:justify-center">Mail</h3>
            <p className="flex justify-center text-center font-copy text-copy lg:w-80 lg:justify-center">Info@plateauspirits.com</p>
          </div>

          <div className="flex flex-col justify-center">
          <div className="flex justify-center p-10">
          <Image
            className=""
            src={tel}
            width={80}
            height={80}
            alt="Billede af chartrøse"
          />
          </div>
            <h3 className="flex justify-center text-center font-tyk text-mobileH4 md:text-wh4 lg:mb-8 lg:justify-center">Telefon</h3>
            <p className="flex justify-center text-center font-copy text-copy lg:w-80 lg:justify-center">+45 22 42 20 20</p>
          </div>
          <div className="flex flex-col justify-center">
          <div className="flex justify-center p-10">
          <Image
            className=""
            src={kodby}
            width={70}
            height={80}
            alt="Billede af chartrøse"
          />
          </div>
            <h3 className="  flex justify-center font-tyk text-mobileH4 md:text-wh4 md:mt-2 lg:mb-8 lg:justify-center">Adresse</h3>
            <p className="flex justify-center text-center font-copy text-copy lg:w-80 lg:justify-center">Flæsketorvet 6, 1711 København</p>
          </div>
        </div>
      </section>
      <section className="">
        <div className="flex justify-center p-7">
          <div className="flex-col justify-center">
            <h2 className="font-tyk text-mobileH1 md:text-wh1 text-blackbase">Kontaktformular</h2>
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
