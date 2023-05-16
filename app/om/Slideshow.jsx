import Image from "next/image";
import splash from "../../public/images/splash_filler.png";

function Slideshow() {
  return (
    <div>
      <Image src={splash} width={150} height={150} alt="Flot billede af Gin flaske"></Image>
      <Image src={splash} width={150} height={150} alt="Flot billede af Gin flaske"></Image>
      <Image src={splash} width={150} height={150} alt="Flot billede af Gin flaske"></Image>
      <Image src={splash} width={150} height={150} alt="Flot billede af Gin flaske"></Image>
      <Image src={splash} width={150} height={150} alt="Flot billede af Gin flaske"></Image>
    </div>
  );
}

export default Slideshow;
