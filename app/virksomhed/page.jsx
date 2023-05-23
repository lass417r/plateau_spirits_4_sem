import Image from "next/image";
import Button from "../../components/Button";

import filler from "../../public/images/gorilla.png";
import pic9 from "../../public/images/pic9.png";

export default function Shop() {
  return (
    <>
      <section className="flex flex-col p-5 md:mx-20 md:mt-20 md:flex-row">
        <div className="basis-1/2 ">
          <Image className="fotoinview z-0" src={filler} width={500} height={500} alt="Billede af ejerne" />
        </div>
        <div className="flex basis-1/2 flex-col items-start gap-5 ">
          <h1 className="font-tyk text-wh1 text-blackbase lg:pt-20 ">Designet til din virksomhed!</h1>
          <p className="font-copy text-copy text-blackbase lg:max-w-[80%]">
            Vi tilbyder private label, til din virksomhed. Få dit navn på flasken og server premium alkohol for dine gæste r. Vi har lavet private label for flere restauranter, hoteller samt andre
            virksomhedstyper.
          </p>
          <div className="pt-6">
            <Button href="/kontakt" text="Kontakt os"></Button>
          </div>
        </div>
      </section>
      <section className="my-10 flex flex-col items-center justify-center gap-10 p-5 md:mx-20 md:my-28 md:flex-row md:gap-20">
        <div className="flex basis-1/2 flex-col items-start gap-5">
          <h2 className="font-tyk text-wh2 text-blackbase lg:max-w-[80%]">Hør om Gorilla’s oplevelse</h2>
          <p className="font-copy text-copy text-blackbase lg:max-w-[80%]">
            Vi havde fornøjelsen af at arbejde sammen med Plateau Spirits, da vi ønskede at få en unik chartreuse udviklet til vores restaurant. Vi tog kontakt til Tonny Svensson og forklarede vores
            ønsker og idéer til vores chartreuse. Tonny gjorde hvad han gør bedst og skabte den perfekte chartreuse til vores restaurant Gorilla. Det er nu blevet fast inventar i vores restaurant og
            vores gæster elsker, når vi serverer den for dem.
            <br />
          </p>
          <p className="font-copy text-copy font-bold text-blackbase lg:max-w-[80%]">- Restaurantchef Gorilla, Hans Hansen</p>
        </div>
        <div className="h-full w-full">
          <iframe
            className="aspect-video h-full hover:aspect-square"
            width="560"
            height="315"
            src="https://www.youtube.com/embed/HEUMrGoBeUs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </section>
      <section className="my-10 flex flex-col items-center justify-center gap-10 p-5 md:mx-20 md:my-28 md:flex-row md:gap-20">
        <div className="md:basis-1/2">
          <Image className="" src={pic9} width={500} height={500} alt="Billede af lokation" />
        </div>
        <div className="flex flex-col items-start gap-5 md:basis-1/2">
          <h2 className="font-tyk text-wh2 text-blackbase">Events til din virksomhed</h2>
          <p className="font-copy text-copy text-blackbase lg:max-w-[80%]">
            Vi afholder jævnligt gin-smagninger, foredrag og stiller anderledes mødelokaler til rådighed. Vi stræber efter at give jer en unik og mindeværdig oplevelse, der vil styrke jeres team og
            samarbejde. Kontakt os for at lære mere om vores skræddersyede events.
          </p>
          <div className="pt-6">
            <Button href="/events" text="Events"></Button>
          </div>
        </div>
      </section>
    </>
  );
}
