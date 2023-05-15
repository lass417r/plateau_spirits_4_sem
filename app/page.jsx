import "../styles/globals.css";
import Image from "next/image";
import splash from "../public/images/splash_filler.png";
import herocircle from "../public/assets/herocirkel.svg";
import Link from "next/link";
import Button from "./components/Button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-5">
      <div className="flex z-10 w-full max-w-5xl items-center justify-between">
        <div>
          <h1 className="text-black500 text-h1 font-ssort">Small batch spiritus</h1>
          <h3 className="text-black500 text-h3 font-ssort">Håndlavet i kødbyen København</h3>
          <Button href={"/shop"} text={"Se produkter"}></Button>
        </div>
        <Image src={splash} width={400} height={400} alt="Flot billede af Gin flaske"></Image>
      </div>
      <div>
        <Link href="#udvalgteProdukter">
          <Image src={herocircle} width={300} height={300} alt="Flot billede af Gin flaske"></Image>
        </Link>
      </div>
      <div className="flex z-10 w-full max-w-5xl pt-20">
        <div>
          <h2 className="text-h2 font-ssort">Udvalgte produkter</h2>
          <p>Udforsk vores podukter, håndlavet i Kødbyen, København.</p>

          <Button href={"/shop"} text={"Se produkter"}></Button>
        </div>
        <div>
          <Image src={splash} width={150} height={150} alt="Flot billede af Gin flaske"></Image>
          <h5>Roÿe Vodka</h5>
          <p>3.200 DKK</p>
          <p>Vodka med arktisk kaviar. Begrænset mængde af 100 nummererede flasker.</p>
        </div>
        <div>
          <Image src={splash} width={150} height={150} alt="Flot billede af Gin flaske"></Image>
          <h5>Plateau Gin</h5>
          <p>495 DKK</p>
          <p>Utrolige botanicals og et friskt take på hvad gin kan!</p>
        </div>
      </div>
      <div className="flex pt-20">
        <div>
          <h2 className="text-h2 font-ssort">Chartreuse til Gorilla Bar</h2>
          <p>
            Plateau Spirits' mission er at skabe spiritus med kant ved at blande usædvanlige ingredienser og samarbejde med de bedste mulige destillatører for at opnå det perfekte resultat. Derfor vil
            du finde usædvanlige ingredienser som dragefrugt, columbiansk kaffe og mørk lakridssirup blandet med klassiske ingredienser som orrisrod, angelikarod, enebær, frisk lime og appelsin.
          </p>
          <Button href={"/virksomhed"} text={"Se partnere"}></Button>
        </div>
        <Image src={splash} width={300} height={300} alt="Flot billede af Gin flaske"></Image>
      </div>
      <div className="flex pt-20">
        <div>
          <Image src={splash} width={300} height={300} alt="Flot billede af Gin flaske"></Image>
          {/* <Image src={splash} width={300} height={300} alt="Flot billede af Gin flaske"></Image> */}
        </div>
        <div>
          <h2 className="text-h2 font-ssort">Vores tilgang </h2>
          <p>
            Plateau Spirits' mission er at skabe spiritus med kant ved at blande usædvanlige ingredienser og samarbejde med de bedste mulige destillatører for at opnå det perfekte resultat. Derfor vil
            du finde usædvanlige ingredienser som dragefrugt, columbiansk kaffe og mørk lakridssirup blandet med klassiske ingredienser som orrisrod, angelikarod, enebær, frisk lime og appelsin.
          </p>
        </div>
      </div>
      <div className="pt-20">
        <h1 className="text-h1 font-ssort">Awards</h1>
        <div className="flex">
          <div>
            <h4>Great evaluation of 94 out of 100.</h4>
            <p>
              La luna - Light green with intense wormwood and anise notes in the scent. Very elegant in expression with beautiful spicy notes. Full-bodied and at the end you feel the high alcohol that
              actually clothes it and highlights the spices. Long, warm finish. Impressive absinthe.
            </p>
          </div>
          <div>
            <h4>Silver Award at Las Vegas Global Spirits Awards</h4>
            <p>
              Plateau Spirits Akvavit “Touche” & “Tranquillité Gin awarded SILVER in first competition in Las Vegas. We are very proud of the resultat in our first competetion and it shows the quality
              of our spirits.
            </p>
          </div>
          <div>
            <h4>Double Gold in New York at 50 Best.</h4>
            <p>
              Touché Akvavit – The Fifty Best is very pleased to announce that Touchè Aquavit was awarded a Double Gold medal. Using professional criteria, the pre-qualified panel of judges
              blind-tasted the aquavits and rated them individually on a 1-5.
            </p>
          </div>
        </div>
      </div>
      <div className="pt-20">
        <h3>BESØG OS PÅ FLÆSKETORVET 6 - KØDBYEN BESØG OS PÅ FLÆSKETORVET 6 - KØDBYEN</h3>
      </div>
    </div>
  );
}
