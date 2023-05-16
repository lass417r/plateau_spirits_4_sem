import React from "react";
import Button from "../components/Button";

function Historie() {
  return (
    <div>
      <h2 className="text-h2 font-tyk">Vores historie</h2>
      <p className="font-copy text-copy">
        Plateau Spirits er grundlagt af fætrene Tonny Svensson og Jan Bay. Tonny havde brugt en del af sin fritid på at udvikle sin egen gin. Da han havde endelig havde udviklet en opskrift han var
        tilfreds med, havde han nu brug for at få den destilleret i et passende antal flasker af et professionelt destilleri. Tonny kontaktede flere danske destillerier, men ingen var interesserede i
        at producere hans gin, medmindre han bestilte en større levering, hvilket han ikke havde råd til. Til sidst lykkedes det ham, da han kontaktede Jonas Larsson fra Tevsjö Distillery i Sverige.
        Jonas synes hans produkt var unikt og interessant, og så blev de første 50 flasker gin skabt. I 2018 tog vi på en “herre tur” til Los Angeles, hvor vi lejede en cabriolet og kørte rundt i byen
        og lyttede til høj musik. Udover at se forskellige koncerter var en af vores planer at besøge spændende barer og destillerier. Ambitionen var at skabe et produkt, hvor både det visuelle og
        kvaliteten var i fokus. Et premium produkt, produceret bæredygtigt fra bunden med de bedste ingredienser. Vi havde besøgt mange gin-barer gennem årene og tænkt, at alle labels så ens ud, så vi
        ville gøre det anderledes. Men det er ret svært både at skille sig ud og passe ind i en bestemt produktkategori. En visuel udtryk kan også komme så langt væk fra produktets sfære, at det ikke
        længere er appellerende.
      </p>
      <p className="font-tyk text-h6">
        I Plateau Spirits verden er der ingen grænser for, hvad en spiritus kan blive. Vi blander tradition og nysgerrighed for at skabe dråber, der overrasker og begejstrer vores kunder.
      </p>
      <p className="font-copy text-copy">- Tony Svensson og Jan Bay, stiftere af Plateau Spirits</p>
      <Button href="/shop" text="Se vores produkter"></Button>
    </div>
  );
}

export default Historie;
