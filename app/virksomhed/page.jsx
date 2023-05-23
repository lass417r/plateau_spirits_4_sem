import Image from "next/image";
import Button from "../../components/Button";

import filler from "../../public/images/gorilla.png";
import pic13 from "../../public/images/pic13.png";

export default function Shop() {
  return (
    <>
      <section className="mx-20 flex md:mt-5">
        <div className="basis-1/2 ">
          <Image
            className="fotoinview z-0 -mt-20 pl-11"
            src={filler}
            width={800}
            height={800}
            alt="Billede af chartrøse"
          />
        </div>
        <div className="flex basis-1/2 flex-col items-start gap-5">
          <h1 className="font-tyk text-wh1 text-blackbase lg:pt-72 ">
            Designet til din <br /> virksomhed!
          </h1>
          <p className="font-copy text-copy text-blackbase lg:max-w-[60%]">
            Vi tilbyder private label, til din virksomhed. Få dit navn på
            flasken og server premium alkohol for dine gæster. Vi har lavet
            private label for flere restauranter, hoteller samt andre
            virksomhedstyper.
          </p>
          <div className="pt-6">
            <Button href="/kontakt" text="Kontakt os"></Button>
          </div>
        </div>
      </section>
      <section className="mx-20 flex items-center justify-center gap-20 md:mt-8">
        <div className="flex basis-1/2 lg:-mt-28 flex-col items-start gap-5">
          <h2 className="font-tyk text-wh2 text-blackbase lg:max-w-[90%]">
            Hør om Gorilla’s oplevelse
          </h2>
          <p className="font-copy text-copy text-blackbase lg:max-w-[80%]">
            Vi havde fornøjelsen af at arbejde sammen med Plateau Spirits, da vi
            ønskede at få en unik chartreuse udviklet til vores restaurant. Vi
            tog kontakt til Tonny Svensson og forklarede vores ønsker og idéer
            til vores chartreuse. Tonny gjorde hvad han gør bedst og skabte den
            perfekte chartreuse til vores restaurant Gorilla. Det er nu blevet
            fast inventar i vores restaurant og vores gæster elsker, når vi
            serverer den for dem.
            <br />
          </p>
          <p className="font-copy text-copy font-bold text-blackbase lg:max-w-[80%]">
            - Restaurantchef Gorilla, Hans Hansen
          </p>
        </div>
        <div className="basis-1/2">
          <iframe
            width="800"
            height="450"
            src="https://www.youtube.com/embed/HEUMrGoBeUs"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </section>
      <section className="mx-20 flex items-center justify-center gap-20 md:my-28">
        <div className="basis-1/2">
          <Image
            className=""
            src={pic13}
            width={800}
            height={100}
            alt="Billede af lokation"
          />
        </div>
        <div className="flex basis-1/2 flex-col items-start gap-5">
          <h2 className="font-tyk lg:-mt-20 text-wh2 text-blackbase">
            Events til din virksomhed
          </h2>
          <p className="font-copy text-copy text-blackbase lg:max-w-[80%]">
            Vi afholder jævnligt gin-smagninger, foredrag og stiller anderledes
            mødelokaler til rådighed. Vi stræber efter at give jer en unik og
            mindeværdig oplevelse, der vil styrke jeres team og samarbejde.
            Kontakt os for at lære mere om vores skræddersyede events.
          </p>
          <div className="pt-6">
            <Button href="/events" text="Events"></Button>
          </div>
        </div>
      </section>
    </>
  );
}
