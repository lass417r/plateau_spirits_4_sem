import "../styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import Button from "../components/Button";
import TextBanner from "../components/TextBanner";

import herocircle from "../public/assets/Layer_1-2.svg";
import arrow from "../public/assets/ArrowUp.svg";
import buetekst from "../public/assets/buetekst.svg";
import tilgang from "../public/assets/vores_tilgang.svg";

import splash from "../public/images/Group194.png";
import vodka from "../public/images/Group196.png";
import gin from "../public/images/Asset17.png";
import pic1 from "../public/images/pic1.png";
import pic2 from "../public/images/pic2.png";

export default function Home() {
  return (
    <>
      <div className=" flex min-h-screen flex-col items-center justify-between">
        <section className="z-10 ml-10 mr-10 flex w-full max-w-5xl items-center justify-between p-5 md:pt-20">
          <div className="flex flex-col items-start gap-y-3">
            <h1 className="font-ssort text-wh1 text-black500">Small batch spiritus</h1>
            <h2 className="pb-4 font-ssort text-wh3 text-black500">Håndlavet i kødbyen København</h2>
            <Button href={"/shop"} text={"Se produkter"}></Button>
          </div>
          <Image src={splash} width={400} height={400} alt="Flot billede af Gin flaske"></Image>
        </section>

        <section className="w-160px h-160px relative md:mt-20">
          <Link href="#udvalgteProdukter">
            <Image className="z-1 h-full w-full animate-spin-slow" src={herocircle} width={300} height={300} alt="Flot tekst illustration"></Image>
            <Image className="absolute left-1/2 top-1/2 z-10 h-14 w-14 -translate-x-1/2 -translate-y-1/2 transform" src={arrow} width={100} height={100} alt="Pil"></Image>
          </Link>
        </section>

        <section id="udvalgteProdukter" className="  ml-10 mr-10 flex gap-5 p-5 pt-20">
          <div className=" flex basis-2/4 flex-col items-start gap-y-3">
            <h2 className="udvalgteProdukter font-ssort text-wh2">Udvalgte produkter</h2>
            <p>Udforsk vores podukter, håndlavet i Kødbyen, København.</p>
            <Button href={"/shop"} text={"Se produkter"}></Button>
          </div>
          <div className="flex basis-1/4 flex-col gap-2">
            <Image className="hover:cursor-mincursor" src={vodka} width={315} height={463} alt="Flot billede af Gin flaske"></Image>
            <h5>Roÿe Vodka</h5>
            <p>3.200 DKK</p>
            <p>Vodka med arktisk kaviar. Begrænset mængde af 100 nummererede flasker.</p>
          </div>
          <div className="flex basis-1/4 flex-col gap-2">
            <Image className="hover:cursor-mincursor" src={gin} width={315} height={463} alt="Flot billede af Gin flaske"></Image>
            <h5>Plateau Gin</h5>
            <p>495 DKK</p>
            <p>Utrolige botanicals og et friskt take på hvad gin kan!</p>
          </div>
        </section>

        <section className="relative w-full">
          <Image className=" absolute  -top-56 left-0" src={buetekst} alt="" width={274} height={297}></Image>
        </section>

        <section className="ml-10 mr-10 flex flex-row items-center justify-center gap-5 gap-y-3 p-5 pb-20 pt-20">
          <div className=" flex basis-1/2 flex-col items-start gap-y-3">
            <h2 className="font-ssort text-wh2">Chartreuse til Gorilla Bar</h2>
            <p>
              Vi har samarbejdet med restaurant Gorilla om at udvikle en unik fransk inspireret likør de kan servere til deres gæster. Vi blev kontaktet af restaurant chefen og blev sat på en opgave,
              at skabe en likør, inspireret af den velkendte chartreuse.
            </p>
            <Button href={"/virksomhed"} text={"Se partnere"}></Button>
          </div>
          <Image src={pic2} width={500} height={500} alt="Flot billede af Gin flaske"></Image>
        </section>

        <section className="z-10 ml-10 mr-10 flex flex-row gap-10 p-5">
          <div className="relative flex basis-1/2 justify-end">
            <Image className="" src={pic1} width={500} height={500} alt="Flot billede af Gin flaske"></Image>
            <Image className="absolute left-[70%] top-[60%]" src={tilgang} width={400} height={400} alt="Illutrativt element"></Image>
          </div>
          <div className="basis-1/2">
            <h2 className="font-ssort text-wh2">Vores tilgang </h2>
            <p>
              Plateau Spirits mission er at skabe spiritus med kant ved at blande usædvanlige ingredienser og samarbejde med de bedste mulige destillatører for at opnå det perfekte resultat. Derfor
              vil du finde usædvanlige ingredienser som dragefrugt, columbiansk kaffe og mørk lakridssirup blandet med klassiske ingredienser som orrisrod, angelikarod, enebær, frisk lime og appelsin.
            </p>
          </div>
        </section>

        <section className="-mt-20  bg-matte200">
          <div className="mx-16 mb-20 mt-40 p-5">
            <h2 className="font-ssort text-titlexl text-orangebase">Awards</h2>
            <div className="flex gap-10">
              <div className=" flex basis-1/3 flex-col gap-3 text-yellowbase">
                <h4 className="text-mobileH3 font-normal">Great evaluation of 94 out of 100.</h4>
                <p className="font-copy text-copy">
                  La luna - Light green with intense wormwood and anise notes in the scent. Very elegant in expression with beautiful spicy notes. Full-bodied and at the end you feel the high alcohol
                  that actually clothes it and highlights the spices. Long, warm finish. Impressive absinthe.
                </p>
              </div>
              <div className=" flex basis-1/3 flex-col gap-3 text-yellowbase">
                <h4 className="text-mobileH3 font-normal">Silver Award at Las Vegas Global Spirits Awards</h4>
                <p className="font-copy text-copy">
                  Plateau Spirits Akvavit “Touche” & “Tranquillité Gin awarded SILVER in first competition in Las Vegas. We are very proud of the resultat in our first competetion and it shows the
                  quality of our spirits.
                </p>
              </div>
              <div className="flex basis-1/3 flex-col gap-3 text-yellowbase">
                <h4 className="text-mobileH3 font-normal">Double Gold in New York at 50 Best.</h4>
                <p className="font-copy text-copy">
                  Touché Akvavit – The Fifty Best is very pleased to announce that Touchè Aquavit was awarded a Double Gold medal. Using professional criteria, the pre-qualified panel of judges
                  blind-tasted the aquavits and rated them individually on a 1-5.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="z w-full bg-matte200 ">
        <TextBanner text="BESØG OS PÅ FLÆSKETORVET 6, KØDBYEN &nbsp; - &nbsp; BESØG OS PÅ FLÆSKETORVET 6, KØDBYEN"></TextBanner>
      </div>
    </>
  );
}
