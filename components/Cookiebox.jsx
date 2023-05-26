import React from "react";
import Button from "../components/Button";
import Link from "next/link";

function Cookiebox() {
  const url = "/shop";
  return (
    <div className="  h-[450px] overflow-x-hidden  bg-clay">
      <p className=" px-6 pt-6 font-tyk  text-mobileH2  text-black ">
        Cookies og velsmagende dråber
      </p>
      <p className="px-6 pt-6 font-tyk  text-mobileP  text-black">
        Dette site benytter cookies.
      </p>
      <Link href={url} className="px-6 pt-2 text-mobilexs underline">
        Se mere om hvordan vi bruger cookies.
      </Link>
      <div className=" flex w-full flex-col gap-2 px-6 pt-16 text-center font-tyk  text-mobileH3">
        <Button href={"/shop"} text={"Accepter cookies"}></Button>
        <Button href={"/shop"} text={"Afvis cookies"}></Button>
      </div>
      <div className=" flex gap-4  px-6 pb-4 pt-4 text-right">
        <div>
          <input type="checkbox" checked />
        </div>
        <p className="  text-mobilexs">Marketing & analytics</p>
      </div>
    </div>
  );
}

export default Cookiebox;
