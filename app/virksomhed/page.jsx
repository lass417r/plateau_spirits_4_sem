import Image from "next/image";
import Button from "../../components/Button";

import filler from "../../public/images/splash_filler.png";

export default function Shop() {
  return (
    <>
      <section className="mx-20 flex md:mt-20">
        <div className="basis-1/2">
          <Image className="fotoinview z-0" src={filler} width={500} height={500} alt="Billede af ejerne" />
        </div>
        <div className="flex basis-1/2 flex-col items-start gap-5">
          <h1 className="font-tyk text-wh1 text-blackbase">Designet til din virksomhed!</h1>
          <p className="font-copy text-copy text-blackbase">
            Vi tilbyder private label, til din virksomhed. Få dit navn på flasken og server premium alkohol for dine gæste r. Vi har lavet private label for flere restauranter, hoteller samt andre
            virksomhedstyper.
          </p>
          <Button href="/kontakt" text="Kontakt os"></Button>
        </div>
      </section>
      <section className="mx-20 flex items-center justify-center gap-20 md:mt-28">
        <div className="flex basis-1/2 flex-col items-start gap-5">
          <h2 className="font-tyk text-wh1 text-blackbase">Hør om Gorilla’s oplevelse</h2>
          <p className="font-copy text-copy text-blackbase">
            Vi havde fornøjelsen af at arbejde sammen med Plateau Spirits, da vi ønskede at få en unik chartreuse udviklet til vores restaurant. Vi tog kontakt til Tonny Svensson og forklarede vores
            ønsker og idéer til vores chartreuse. Tonny gjorde hvad han gør bedst og skabte den perfekte chartreuse til vores restaurant Gorilla. Det er nu blevet fast inventar i vores restaurant og
            vores gæster elsker, når vi serverer den for dem.
            <br />
            <br />
            Restaurantchef Gorilla, Hans Hansen
          </p>
        </div>
        <div className="basis-1/2">
          <iframe
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
      <section className="mx-20 flex items-center justify-center gap-20 md:my-28">
        <div className="basis-1/2">
          <Image className="fotoinview z-0" src={filler} width={500} height={500} alt="Billede af ejerne" />
        </div>
        <div className="flex basis-1/2 flex-col items-start gap-5">
          <h2 className="font-tyk text-wh1 text-blackbase">Events til din virksomhed</h2>
          <p className="font-copy text-copy text-blackbase">
            Vi afholder jævnligt gin-smagninger, foredrag og stiller anderledes mødelokaler til rådighed. Vi stræber efter at give jer en unik og mindeværdig oplevelse, der vil styrke jeres team og
            samarbejde. Kontakt os for at lære mere om vores skræddersyede events.
          </p>
          <Button href="/events" text="Events"></Button>
        </div>
      </section>
    </>
  );
}
