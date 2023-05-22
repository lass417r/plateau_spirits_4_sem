"use client";
import Kurv from "../../components/Kurv";
import Button from "../../components/Button";

export default function page() {
  return (
    <div>
      <section className="lg:mx-40 lg:mb-20 lg:mt-40">
        <Button href={"/shop"} text={"←  Fortsæt med at handle"}></Button>
      </section>
      <section className="lg:mx-40 lg:mb-20">
        <h1 className="font-tyk text-titlem text-orangebase">Kurv</h1>
        <Kurv />
      </section>
    </div>
  );
}
