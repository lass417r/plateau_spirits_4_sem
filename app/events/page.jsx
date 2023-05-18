"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../components/Button";
import TextBanner from "../components/TextBanner";
import KontaktEvents from "../components/KontaktEvents";

import pic8 from "../../public/images/pic8.png";
import pic9 from "../../public/images/pic9.png";
import pic10 from "../../public/images/pic10.png";
import pic11 from "../../public/images/pic11.png";

import grid from "../../public/assets/grid.svg";
import events from "../../public/assets/events.svg";

export default function Shop() {
  return (
    <>
      <section className="flex min-h-screen flex-row items-start mx-20 justify-between md:mb-20">
        <div className="basis-1/2 sticky top-3">
          <div className="flex gap-5 flex-col items-start p-5">
            <h1 className="text-wh1 font-tyk text-orangebase">Plateau Events </h1>
            <h2 className="text-wh2 font-tyk">Events & Smagninger</h2>
            <p className="font-copy text-copy">
              Vi tilbyder muligheden for at afholde events og arrangementer i vores showroom i Kødbyen.
              <br /> <br />
              Vores lokaler er velegnede til både private og erhvervsmæssige arrangementer, hvor I kan nyde vores unikke spiritus produkter under arrangementet. Vi tilpasser gerne arrangementet til
              jeres ønsker og behov og tilbyder også muligheden for at inkludere en rundvisning i vores destilleri og en præsentation af destillationsprocessen.
            </p>
            <Button href="/shop" text="Book Event"></Button>
          </div>
        </div>
        <div className="basis-1/2 flex gap-5 flex-col items-center p-5 relative">
          <Image className=" absolute  z-0 " src={grid} width={835} height={1106} alt="Illustrativt element" />
          <motion.div className="relative inline-block md:mt-32" initial={{ opacity: 0.2 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}>
            <Image className=" absolute z-10 -right-16 -top-28" src={events} width={318} height={456} alt="Illustrativt element" />
            <Image className=" z-0 md:mt-5" src={pic8} width={500} height={500} alt="Billede af lokation" />
          </motion.div>
          <motion.div className="z-10 md:-mt-20 md:ml-20" initial={{ opacity: 0.2 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}>
            <Image className="z-10" src={pic11} width={500} height={500} alt="Billede af lokation" />
          </motion.div>
          <motion.div className="z-10 md:-mt-20 md:mr-20" initial={{ opacity: 0.2 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}>
            <Image className="fotoinview z-0" src={pic10} width={500} height={500} alt="Billede af lokation" />
          </motion.div>
        </div>
      </section>
      <section className="flex md:mb-20 flex-row items-start mx-20 gap-20 mt-32">
        <motion.div className="basis-1/2 flex justify-end" initial={{ opacity: 0.2 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}>
          <Image className="" src={pic9} width={500} height={500} alt="Billede af lokation" />
        </motion.div>
        <div className="basis-1/2">
          <h3 className="text-wh3 font-tyk">Typer af events</h3>
          <p>
            <br />
            Vi tilbyder forskellige typer af events, og er altid fleksible for at imødekomme jeres ønsker.
            <br />
            <br />
            Her ses et bud på hvordan et event kan struktureres i vores showroom.
            <br />
            <br />
            Arrangementet starter med velkomstdrinks og en introduktion til programmet. Derefter er der en rundvisning i vores showroom og en gennemgang af destillationsprocessen.
            <br />
            <br />
            Efterfølgende afholder vi en cocktailworkshop eller en gin-smagning, hvor vores produkter kan smages og udforskes af jer.
            <br />
            <br />
            Vi runder aftenen af med mad serveret fra en af restauranterne i Kødbyen.
          </p>
        </div>
      </section>
      <section className="bg-matte200 flex min-h-screen flex-col items-center  justify-between">
        <div className="w-full z">
          <TextBanner text="BOOK DIT NÆSTE EVENT! &nbsp; - &nbsp; BOOK DIT NÆSTE EVENT!  &nbsp; - &nbsp; BOOK DIT NÆSTE EVENT!"></TextBanner>
        </div>
        <div className="kontaktformular mx-20 md:my-20 flex flex-col gap-5">
          <h3 className="text-wh3 font-tyk text-yellowbase">Book her</h3>
          <KontaktEvents></KontaktEvents>
        </div>
      </section>
    </>
  );
}
