import Image from "next/image";
import Link from "next/link";
import logohvid from "../../public/assets/logohvid.svg";
import footerpic from "../../public/images/pic3.jpg";

function Footer() {
  return (
    <div>
      <Image src={footerpic}></Image>
      <div className="flex pt-10 pb-10">
        <div className="flex basis-2/5 justify-evenly">
          <Image src={logohvid} width={217} height={271} alt="Logo"></Image>
        </div>
        <div className="links flex flex-col gap-2 basis-1/5 items-start">
          <h6 className="text-yellowbase text-wh6 font-megettyk">Links</h6>
          <Link className="text-copy font-copy text-yellowbase" href="/shop">
            &rarr; Shop
          </Link>
          <Link className="text-copy font-copy text-yellowbase" href="/om">
            &rarr; Om
          </Link>
          <Link className="text-copy font-copy text-yellowbase" href="/events">
            &rarr; Events
          </Link>
          <Link className="text-copy font-copy text-yellowbase" href="/virksomhed">
            &rarr; Virksomhed
          </Link>
          <Link className="text-copy font-copy text-yellowbase" href="/kontakt">
            &rarr; Kontakt
          </Link>
        </div>

        <div className="flex flex-col gap-2 basis-1/5 items-start">
          <h6 className="text-yellowbase text-wh6 font-megettyk">Find os</h6>
          <p className="text-copy font-copy text-yellowbase">
            Flæsketorvet 6 <br /> 1711 Copenhagen
          </p>
          <div>
            <p className="text-copy font-tyk text-yellowbase">Mail</p>
            <Link className="text-copy font-copy text-yellowbase" target="_blank" href="mailto:info@plateauspirits.com">
              Info@plateauspirits.com
            </Link>
          </div>
          <div>
            <p className="text-copy font-tyk text-yellowbase">Telefon</p>
            <Link className="text-copy font-copy text-yellowbase" href="tel:+4522422020">
              +45 22 42 20 20
            </Link>
          </div>
          <div className="text-copy font-copy text-yellowbase soMe"></div>
        </div>
        <div className="flex flex-col gap-2 basis-1/5 justify-start">
          <h6 className="text-yellowbase text-wh6 font-megettyk">Legal</h6>
          <p className="text-copy font-copy text-yellowbase">CVR 1234678</p>
          <Link className="text-copy font-copy text-yellowbase" href="/kontakt">
            E-Smiley
          </Link>
          <Link className="text-copy font-copy text-yellowbase" href="/kontakt">
            Vilkår & betingelser
          </Link>
          <Link className="text-copy font-copy text-yellowbase" href="/kontakt">
            Privatlivspolitik
          </Link>
          <Link className="text-copy font-copy text-yellowbase" href="/kontakt">
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
