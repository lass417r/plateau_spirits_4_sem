"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Button from "../../components/Button";
import TextBanner from "../../components/TextBanner";
import KontaktEvents from "../../components/KontaktEvents";

import pic8 from "../../public/images/pic8.png";
import pic9 from "../../public/images/pic9.png";
import pic10 from "../../public/images/pic10.png";
import pic11 from "../../public/images/pic11.png";

import grid from "../../public/assets/grid.svg";
import events from "../../public/assets/events.svg";
import deksel from "../../public/assets/deksel_skrift.svg";

export default function Shop() {
  return (
    <>
      <section className="mx-20 flex min-h-screen flex-row items-start justify-between md:mb-20">
        <div className="sticky top-3 basis-1/2">
          <div className="flex flex-col items-start gap-5 p-5">
            <h1 className="font-tyk text-wh1 text-orangebase">
              Plateau Events{" "}
            </h1>
            <h2 className="font-tyk text-wh2">Events & Smagninger</h2>
            <p className="font-copy text-copy lg:max-w-[80%]">
              Vi tilbyder muligheden for at afholde events og arrangementer i
              vores showroom i Kødbyen.
              <br /> <br />
              Vores lokaler er velegnede til både private og erhvervsmæssige
              arrangementer, hvor I kan nyde vores unikke spiritus produkter
              under arrangementet. Vi tilpasser gerne arrangementet til jeres
              ønsker og behov og tilbyder også muligheden for at inkludere en
              rundvisning i vores destilleri og en præsentation af
              destillationsprocessen.
            </p>
            <Button href="/shop" text="Book Event"></Button>
          </div>
        </div>
        <div className="relative flex basis-1/2 flex-col items-center gap-5 p-5">
          <Image
            className=" absolute  z-0 "
            src={grid}
            width={835}
            height={1106}
            alt="Illustrativt element"
          />
          <motion.div
            className="relative inline-block md:mt-32"
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
          >
            <Image
              className=" absolute -right-16 -top-28 z-10"
              src={events}
              width={318}
              height={456}
              alt="Illustrativt element"
            />
            <Image
              className=" z-0 md:mt-5"
              src={pic8}
              width={500}
              height={500}
              alt="Billede af lokation"
            />
          </motion.div>
          <motion.div
            className="z-10 md:-mt-20 md:ml-20"
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
          >
            <Image
              className="z-10"
              src={pic11}
              width={500}
              height={500}
              alt="Billede af lokation"
            />
          </motion.div>
          <motion.div
            className="z-10 md:-mt-20 md:mr-20"
            initial={{ opacity: 0.2 }}
            whileInView={{ opacity: 1, transition: { duration: 1 } }}
          >
            <Image
              className="fotoinview z-0"
              src={pic10}
              width={500}
              height={500}
              alt="Billede af lokation"
            />
          </motion.div>
        </div>
      </section>
      <section className="mx-20 mt-32 flex flex-row items-start gap-20 md:mb-20">
        <motion.div
          className="flex basis-1/2 justify-end"
          initial={{ opacity: 0.2 }}
          whileInView={{ opacity: 1, transition: { duration: 1 } }}
        >
          <Image
            className=""
            src={pic9}
            width={500}
            height={500}
            alt="Billede af lokation"
          />
        </motion.div>
        <div className="basis-1/2 lg:max-w-[80%]">
          <h3 className="font-tyk text-wh3">Typer af events</h3>
          <p className="lg:max-w-[80%]">
            <br />
            Vi tilbyder forskellige typer af events, og er altid fleksible for
            at imødekomme jeres ønsker.
            <br />
            <br />
            Her ses et bud på hvordan et event kan struktureres i vores
            showroom.
            <br />
            <br />
            Arrangementet starter med velkomstdrinks og en introduktion til
            programmet. Derefter er der en rundvisning i vores showroom og en
            gennemgang af destillationsprocessen.
            <br />
            <br />
            Efterfølgende afholder vi en cocktailworkshop eller en gin-smagning,
            hvor vores produkter kan smages og udforskes af jer.
            <br />
            <br />
            Vi runder aftenen af med mad serveret fra en af restauranterne i
            Kødbyen.
          </p>
        </div>
      </section>
      <section className=" flex min-h-screen flex-col items-center justify-between  bg-matte200">
        <div className="z w-full">
          <TextBanner text="BOOK DIT NÆSTE EVENT! &nbsp; - &nbsp; BOOK DIT NÆSTE EVENT!  &nbsp; - &nbsp; BOOK DIT NÆSTE EVENT!"></TextBanner>
        </div>
        <div className=" flex">
          <div className="kontaktformular  mx-20 flex basis-1/2 flex-col gap-5 md:my-20">
            <h3 className="font-tyk text-wh3 text-yellowbase ">Book her</h3>
            <KontaktEvents className="z-10"></KontaktEvents>
          </div>
          <Image
            className="basis-1/2"
            src={events}
            alt="Illustrativt element"
            width={400}
            height={400}
          ></Image>
        </div>
      </section>
    </>
  );
}
