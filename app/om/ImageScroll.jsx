import Image from "next/image";
import { animate, stagger, inView, scroll, timeline } from "motion";

function ImageScroll(props) {
  inView(".fotoinview", ({ target }) => {
    animate(target, { opacity: 1, transform: "none" }, { delay: 0.2, duration: 0.9, easing: [0.17, 0.55, 0.55, 1] });
  });

  return (
    <div className="">
      <Image className="fotoinview" src={props.src} width={props.width} height={props.height} alt={props.alt}></Image>
    </div>
  );
}

export default ImageScroll;
