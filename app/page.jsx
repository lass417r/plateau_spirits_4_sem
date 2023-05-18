import "../styles/globals.css";
import Image from "next/image";
import Link from "next/link";
import Button from "./components/Button";
import TextBanner from "./components/TextBanner";

import splash from "../public/images/Group194.png";
import herocircle from "../public/assets/Layer_1-2.svg";
import arrow from "../public/assets/ArrowUp.svg";
import vodka from "../public/images/Group196.png";
import gin from "../public/images/Asset17.png";
import pic1 from "../public/images/pic1.png";
import pic2 from "../public/images/pic2.png";

export default function Home() {
  return (
    <>
      <div className="flex min-h-screen flex-col items-center justify-between ">
        <section className="flex z-10 w-full max-w-5xl items-center justify-between md:pt-20 p-5 ml-10 mr-10">
          <div className="flex flex-col gap-y-3 items-start">
            <h1 className="text-black500 text-wh1 font-ssort">Small batch spiritus</h1>
            <h2 className="text-black500 text-wh3 font-ssort pb-4">Håndlavet i kødbyen København</h2>
            <Button href={"/shop"} text={"Se produkter"}></Button>
          </div>
          <Image src={splash} width={400} height={400} alt="Flot billede af Gin flaske"></Image>
        </section>

        <section className="relative w-160px h-160px md:mt-20 ">
          <Link href="#udvalgteProdukter">
            <Image className="z-1 w-full h-full animate-spin-slow" src={herocircle} width={300} height={300} alt="Flot tekst illustration"></Image>
            <Image className="z-10 w-14 h-14 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" src={arrow} width={100} height={100} alt="Pil"></Image>
          </Link>
        </section>

        <section className="flex gap-5 pt-20 p-5 ml-10 mr-10">
          <div className="flex flex-col gap-y-3 basis-2/4 items-start">
            <h2 className="udvalgteProdukter text-wh2 font-ssort">Udvalgte produkter</h2>
            <p>Udforsk vores podukter, håndlavet i Kødbyen, København.</p>
            <Button href={"/shop"} text={"Se produkter"}></Button>
          </div>
          <div className="flex flex-col gap-2 basis-1/4">
            <Image className="hover:cursor-mincursor" src={vodka} width={315} height={463} alt="Flot billede af Gin flaske"></Image>
            <h5>Roÿe Vodka</h5>
            <p>3.200 DKK</p>
            <p>Vodka med arktisk kaviar. Begrænset mængde af 100 nummererede flasker.</p>
          </div>
          <div className="flex flex-col gap-2 basis-1/4">
            <Image className="hover:cursor-mincursor" src={gin} width={315} height={463} alt="Flot billede af Gin flaske"></Image>
            <h5>Plateau Gin</h5>
            <p>495 DKK</p>
            <p>Utrolige botanicals og et friskt take på hvad gin kan!</p>
          </div>
        </section>

        <section className="flex flex-row gap-y-3 items-center justify-center gap-5 pt-20 pb-20 p-5 ml-10 mr-10">
          <div className=" basis-1/2 flex flex-col gap-y-3 items-start">
            <h2 className="text-wh2 font-ssort">Chartreuse til Gorilla Bar</h2>
            <p>
              Vi har samarbejdet med restaurant Gorilla om at udvikle en unik fransk inspireret likør de kan servere til deres gæster. Vi blev kontaktet af restaurant chefen og blev sat på en opgave,
              at skabe en likør, inspireret af den velkendte chartreuse.
            </p>
            <Button href={"/virksomhed"} text={"Se partnere"}></Button>
          </div>
          <Image src={pic2} width={500} height={500} alt="Flot billede af Gin flaske"></Image>
        </section>

        <section className="flex z-10 flex-row gap-10 p-5 ml-10 mr-10">
          <div className="basis-1/2 flex justify-end">
            <Image className="" src={pic1} width={500} height={500} alt="Flot billede af Gin flaske"></Image>
          </div>
          <div className="basis-1/2">
            <h2 className="text-wh2 font-ssort">Vores tilgang </h2>
            <p>
              Plateau Spirits mission er at skabe spiritus med kant ved at blande usædvanlige ingredienser og samarbejde med de bedste mulige destillatører for at opnå det perfekte resultat. Derfor
              vil du finde usædvanlige ingredienser som dragefrugt, columbiansk kaffe og mørk lakridssirup blandet med klassiske ingredienser som orrisrod, angelikarod, enebær, frisk lime og appelsin.
            </p>
          </div>
        </section>
        <section className="-mt-20  bg-matte200">
          <div className="p-5 mt-40 mb-20 mx-16">
            <h2 className="text-titlexl font-ssort text-orangebase">Awards</h2>
            <div className="flex gap-10">
              <div className=" text-yellowbase basis-1/3 flex flex-col gap-3">
                <h4 className="text-mobileH3 font-normal">Great evaluation of 94 out of 100.</h4>
                <p className="text-copy font-copy">
                  La luna - Light green with intense wormwood and anise notes in the scent. Very elegant in expression with beautiful spicy notes. Full-bodied and at the end you feel the high alcohol
                  that actually clothes it and highlights the spices. Long, warm finish. Impressive absinthe.
                </p>
              </div>
              <div className=" text-yellowbase basis-1/3 flex flex-col gap-3">
                <h4 className="text-mobileH3 font-normal">Silver Award at Las Vegas Global Spirits Awards</h4>
                <p className="text-copy font-copy">
                  Plateau Spirits Akvavit “Touche” & “Tranquillité Gin awarded SILVER in first competition in Las Vegas. We are very proud of the resultat in our first competetion and it shows the
                  quality of our spirits.
                </p>
              </div>
              <div className="text-yellowbase basis-1/3 flex flex-col gap-3">
                <h4 className="text-mobileH3 font-normal">Double Gold in New York at 50 Best.</h4>
                <p className="text-copy font-copy">
                  Touché Akvavit – The Fifty Best is very pleased to announce that Touchè Aquavit was awarded a Double Gold medal. Using professional criteria, the pre-qualified panel of judges
                  blind-tasted the aquavits and rated them individually on a 1-5.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="w-full z bg-matte200 ">
        <TextBanner text="BESØG OS PÅ FLÆSKETORVET 6, KØDBYEN &nbsp; - &nbsp; BESØG OS PÅ FLÆSKETORVET 6, KØDBYEN"></TextBanner>
      </div>
    </>
  );
}
