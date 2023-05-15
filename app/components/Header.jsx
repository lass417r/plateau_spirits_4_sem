"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import logo from "../../public/assets/navnelogo.svg";
import luk from "../../public/assets/sort.svg";
import oopen from "../../public/assets/sort-kopi.svg";

const MenuIcon = () => <Image src={oopen} width={30} height={30} alt="Menu icon"></Image>;

const CloseIcon = () => <Image src={luk} width={30} height={30} alt="Menu icon"></Image>;

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="flex justify-between items-center md:px-10">
      <div className="flex items-center justify-between w-full md:w-auto p-4">
        <Link href="/">
          <Image src={logo} alt="Company Logo" width={100} height={40} />
        </Link>
        <div className="md:hidden">
          <button onClick={toggleMenu}>{isOpen ? <CloseIcon /> : <MenuIcon />}</button>
        </div>
      </div>
      <nav
        className={`transform ease-in-out transition-transform duration-200 ${isOpen ? "block" : "hidden"} md:block md:relative md:flex md:space-x-8 md:relative md:translate-x-0 md:flex md:space-x-8`}
      >
        <ul className="flex flex-col gap-4 space-y-4 py-4 px-4 bg-white md:space-y-0 md:flex-row md:bg-transparent">
          <li>
            <Link href="/shop">
              <button onClick={toggleMenu} className="font-normal">
                SHOP
              </button>
            </Link>
          </li>
          <li>
            <Link href="/om">
              <button onClick={toggleMenu} className="font-normal">
                OM
              </button>
            </Link>
          </li>
          <li>
            <Link href="/virksomhed">
              <button onClick={toggleMenu} className="font-normal">
                VIRKSOMHED
              </button>
            </Link>
          </li>
          <li>
            <Link href="/events">
              <button onClick={toggleMenu} className="font-normal">
                EVENTS
              </button>
            </Link>
          </li>
          <li>
            <Link href="/kontakt">
              <button onClick={toggleMenu} className="font-normal">
                KONTAKT
              </button>
            </Link>
          </li>
          <li>
            <Link href="/kurv">
              <button onClick={toggleMenu} className="font-normal">
                KURV
              </button>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
