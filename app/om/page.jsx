import Image from "next/image";
import Historie from "./Historie";
import Slideshow from "./Slideshow";
import { animate, stagger, inView, scroll, timeline } from "motion";

export default function Shop() {
  return (
    <>
      <div className="">
        <Historie></Historie>
        <Slideshow></Slideshow>
      </div>
    </>
  );
}
