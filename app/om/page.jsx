"use client";
import Image from "next/image";
import Historie from "./Historie";
import { motion } from "framer-motion";
// import Slideshow from "./Slideshow";

import pic4 from "../../public/images/pic4.png";
import pic5 from "../../public/images/pic5.png";
import pic6 from "../../public/images/pic6.png";
import pic7 from "../../public/images/pic7.png";

export default function Om() {
  return (
    <>
      <div className="flex min-h-screen flex-row items-start justify-between md:mb-20">
        <div className="basis-1/2 sticky top-3">
          <Historie className=""></Historie>
        </div>
        <div className="basis-1/2 flex gap-5 flex-col items-start p-5 ml-20 mr-20">
          <motion.div initial={{ opacity: 0.2 }} whileInView={{ opacity: 1, transition: { duration: 1 } }}>
            <Image className="fotoinview" src={pic4} width={450} height={550} alt="Billede af ejerne" />
          </motion.div>
          <motion.div initial={{ opacity: 0.3 }} whileInView={{ opacity: 1, transition: { duration: 1.5 } }}>
            <Image className="fotoinview" src={pic7} width={450} height={550} alt="Billede af ejerne"></Image>
          </motion.div>
          <motion.div initial={{ opacity: 0.3 }} whileInView={{ opacity: 1, transition: { duration: 1.5 } }}>
            <Image className="fotoinview" src={pic6} width={550} height={450} alt="Billede af ejerne"></Image>
          </motion.div>
          <motion.div initial={{ opacity: 0.3 }} whileInView={{ opacity: 1, transition: { duration: 1.5 } }}>
            <Image className="fotoinview" src={pic5} width={450} height={550} alt="Billede af indgangen i kødbyen"></Image>
          </motion.div>
        </div>
      </div>
    </>
  );
}
