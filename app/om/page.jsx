"use client";
import Image from "next/image";
import Historie from "./Historie";
import { motion } from "framer-motion";
// import Slideshow from "./Slideshow";

import pic4 from "../../public/images/pic4.png";
import pic5 from "../../public/images/pic5.png";
import pic6 from "../../public/images/pic6.png";
import pic7 from "../../public/images/pic7.png";

import deksel from "../../public/assets/deksel_skrift.svg";
import buetekst from "../../public/assets/buetekst_2.svg";
import cirkel from "../../public/assets/ingredienser_cirkel.svg";

export default function Om() {
  return (
    <>
      <section className="flex min-h-screen flex-row items-start justify-between md:mb-20">
        <div className="basis-1/2 sticky top-3">
          <Historie className=""></Historie>
        </div>
        <div className="basis-1/2 flex gap-5 flex-col items-start p-5  mr-20">
          <motion.div className="relative inline-block md:mt-40" initial={{ opacity: 0.2 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}>
            <Image className="fotoinview absolute z-10 -right-40 -top-40" src={deksel} width={376} height={364} alt="Billede af ejerne" />
            <Image className="fotoinview z-0" src={pic4} width={450} height={550} alt="Billede af ejerne" />
          </motion.div>

          <motion.div className="relative inline-block -mt-20 self-end" initial={{ opacity: 0.2 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}>
            <Image className="fotoinview absolute -left-32 top-48" src={buetekst} width={184} height={261} alt="Billede af ejerne" />
            <Image className="fotoinview" src={pic7} width={450} height={550} alt="Billede af ejerne"></Image>
          </motion.div>

          <motion.div initial={{ opacity: 0.2 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}></motion.div>

          <motion.div className="-mt-20 z-10" initial={{ opacity: 0.2 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}>
            <Image className="fotoinview" src={pic6} width={550} height={450} alt="Billede af ejerne"></Image>
          </motion.div>

          <motion.div className="relative inline-block -mt-20 self-end z-20" initial={{ opacity: 0.2 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}>
            <Image className="fotoinview absolute -left-32 top-48" src={cirkel} width={250} height={250} alt="Billede af ejerne" />
            <Image className="fotoinview" src={pic5} width={450} height={550} alt="Billede af indgangen i kødbyen"></Image>
          </motion.div>
        </div>
      </section>
    </>
  );
}
