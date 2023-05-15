import Image from "next/image";
import Historie from "./historie";
import Slideshow from "./slideshow";

export default function Shop() {
  return (
    <>
      <Historie></Historie>
      <Slideshow></Slideshow>
    </>
  );
}
// How can I make a page where the text in the left div stays fixed and the pictures scroll on scroll, with MotionOne and tailwindCSS?
