"use client";

import Button from "../components/Button";
import Buttonw from "../components/Buttonw";
import Link from "next/link";
import { useState, useEffect } from "react";

function Cookiebox() {
  const url = "/";

  const [cookieClosed, setCookieClosed] = useState(true);

  useEffect(() => {
    const state = localStorage.getItem("cookieClicked");
    setCookieClosed(state || false);
  }, []);

  function btnClick() {
    localStorage.setItem("cookieClicked", "true");
    setCookieClosed(true);
  }

  return (
    <>
      {!cookieClosed && (
        <div className={`fixed inset-x-0 bottom-0 z-[300] mx-auto flex h-auto flex-col items-center justify-center bg-clay  md:w-[70%] md:flex-row `}>
          <div className="basis-2/3 ">
            <p className=" px-6 pt-6 font-tyk  text-mobileH2  text-black ">Cookies og velsmagende dråber</p>
            <p className="px-6 pt-6 font-tyk  text-mobileP  text-black">Dette site benytter cookies.</p>
            <Link href={url} className="px-6 pt-2 text-mobilexs underline">
              Se mere om hvordan vi bruger cookies.
            </Link>
          </div>
          <div className="flex w-full basis-1/3 flex-col gap-2 px-6 pt-5 text-center font-tyk text-mobileH3 md:pt-16">
            <Button onClick={btnClick} href={"/"} text={"Accepter cookies"}></Button>
            <Buttonw onClick={btnClick} href={"/"} text={"Afvis cookies"}></Buttonw>
            <div className=" mt-1 flex   gap-4 text-right">
              <div>
                <input type="checkbox" checked />
              </div>
              <p className="  pt-1 text-mobilexs">Marketing & analytics</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Cookiebox;
