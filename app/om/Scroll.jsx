// Photos from https://citizenofnowhe.re/lines-of-the-city
import "./styles.css";
import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";
import pic4 from "../../public/images/pic4.png";
import pic5 from "../../public/images/pic5.png";
import pic6 from "../../public/images/pic6.png";
import pic7 from "../../public/images/pic7.png";

function useParallax(value: MotionValue<number>, distance: number) {
  return useTransform(value, [0, 1], [-distance, distance]);
}

function Image({ id }) {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref });
  const y = useParallax(scrollYProgress, 300);

  return (
    <section>
      <div ref={ref}>
        <Image src={pic4} alt="A London skyscraper" />
      </div>
      <motion.h2 style={{ y }}>{`#00${id}`}</motion.h2>
    </section>
  );
}

export default function Scroll() {
  return (
    <>
      {[4, 5, 6, 7].map((image) => (
        <Image id={image} />
      ))}
    </>
  );
}
