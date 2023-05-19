import Link from "next/link";
import Image from "next/image";
import { useRef, useState } from "react";
import { motion } from "framer-motion";

import logo from "../../public/assets/navnelogo.svg";
import ikoner from "../../public/assets/ikoner.svg";
import ikoner_kopi from "../../public/assets/ikoner-kopi.svg";
import luk from "../../public/assets/sort.svg";
import oopen from "../../public/assets/sort-kopi.svg";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const ref = useRef();

  const HamburgerIcon = () => (
    <div onClick={toggleCart}>
      <Image src={oopen} width={30} height={30} alt="Menu icon"></Image>
    </div>
  );
  const CloseIcon = () => (
    <div onClick={toggleCart}>
      <Image src={luk} width={30} height={30} alt="Menu icon"></Image>
    </div>
  );

  const toggleCart = () => {
    setMenuOpen(!menuOpen);
  };

  // set color on scroll
  const [color, setColor] = useState(false);
  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  window.addEventListener("scroll", changeColor);

  const menu = [
    {
      label: "SHOP",
      href: "/shop",
    },
    {
      label: "OM",
      href: "/om",
    },
    {
      label: "VIRKSOMHED",
      href: "/virksomhed",
    },
    {
      label: "EVENTS",
      href: "/events",
    },
    {
      label: "KONTAKT",
      href: "/kontakt",
    },
  ];

  return (
    <header className="body-font sticky top-0 z-50 text-gray-600  ">
      <div className={color ? "delay-50 drop-shadow-sm transition ease-in-out md:bg-greybase " : "delay-50 bg-transparent transition ease-in-out"}>
        <div className="container mx-auto flex flex-row items-center justify-between  bg-greybase p-7 ">
          <Link href="/" className="flex">
            {/*LOGO*/}
            <Image src={logo} alt="Logo" width={150} height={60} />
          </Link>
          <nav className="hidden items-center justify-center md:ml-auto md:flex ">
            {menu.map((item, index) => (
              <Link href={item.href} key={index} className=" mx-3 font-tyk text-blackbase hover:text-orangebase " target={item.external ? "_blank" : ""} rel={item.external ? "noopener" : ""}>
                {item.label}
              </Link>
            ))}
            <Link href="/kurv" className=" mx-3 font-tyk text-blackbase hover:text-orangebase ">
              <Image src={ikoner} alt="Cart icon" width={20} height={20} />
            </Link>
          </nav>
          {/*MOBILE ONLY*/}
          <div className="flex items-center justify-center space-x-4 md:hidden ">
            <div>
              <Link href="/kurv" className="flex">
                <Image src={ikoner_kopi} alt="Cart icon" width={30} height={30} />
              </Link>
            </div>
            <div className="text-2xl md:hidden">{menuOpen ? <CloseIcon onClick={toggleCart} /> : <HamburgerIcon onClick={toggleCart} />}</div>
          </div>
        </div>
      </div>
      <motion.div
        ref={ref}
        className={`absolute h-screen w-full transform bg-greybase p-10  ease-in-out ${menuOpen ? "block translate-x-0 " : "hidden translate-x-full"}`}
        style={{ transition: "transform 5s ease-in-out" }}
      >
        {/*MOBILE NAV*/}
        <nav className=" flex w-full flex-col items-start">
          {menu.map((item, index) => (
            <Link href={item.href} key={index} className=" my-3 font-tyk text-mobileH4 text-blackbase" target={item.external ? "_blank" : ""} rel={item.external ? "noopener" : ""}>
              {item.label}
            </Link>
          ))}
        </nav>
      </motion.div>
    </header>
  );
}
