import Image from "next/image";
import cocktailpic from "../../../public/images/cocktailpic.png";
export default function Cocktail() {
  return (
    <div className="mx-16 mb-20 mt-40 p-5">
      <div className="relative z-10">
        <h2 className=" font-ssort text-titlexl text-orangebase">Cocktail</h2>
      </div>
      <div className="flex gap-10  ">
        <div className="basis-1/3">
          <h3 className=" font-ssort text-wh3 text-yellowbase">Rosemary me up</h3>
          <div className=" mt-12 flex flex-col gap-3 text-yellowbase">
            <h5 className="font-tyk text-wh5">Fremgangsmåde</h5>
            <p className="font-copy text-copy">
              Knus et par kviste frisk rosmarin i bunden af et cocktailglas. Tilsæt gin, rosmarinsirup og friskpresset citronsaft i en shaker sammen med isterninger.
              <br />
              <br />
              Ryst godt i ca. 10 sekunder og hæld forsigtigt cocktailen over i glasset.
              <br />
              <br />
              Valgfri: pynt med en kvist frisk rosmarin
            </p>
          </div>
          <div className=" mt-12 flex flex-col gap-3 text-yellowbase">
            <h5 className="font-tyk text-wh5">Ingredienser</h5>
            <ul className="font-copy text-copy"></ul>
            <li>5 cl gin</li>
            <li>2 cl rosmarinsirup</li>
            <li>2 cl friskpresset citronsaft</li>
            <li>Et par kviste frisk rosmarin</li>
            <li>Isterninger</li>
          </div>
        </div>
        <div className="relative -right-24 -top-28 z-0 flex aspect-[1/1] h-auto w-full basis-2/3 flex-col gap-3  md:mb-24">
          <Image src={cocktailpic} alt="billede af cocktail" fill className="object-cover object-center"></Image>
        </div>
      </div>
    </div>
  );
}
