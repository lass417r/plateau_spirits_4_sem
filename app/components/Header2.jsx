import React from "react";
import Image from "next/image";
function Header2() {
  return (
    <>
      <div class="nysticky" id="my-header">
        <nav class="navbar flex items-center justify-between">
          <a href="/" class="logo p-space25">
            <Image class="w-[45px]" src="../img/logo.svg" alt="firma logo" />
          </a>
          <div class="navbar-links flex w-full font-text text-green400 justify-around font-bold">
            <a class="menu-item-nav-desk font-text" href="/shop">
              Shop
            </a>
            <a class="menu-item-nav-desk font-text" href="#">
              Abonnement
            </a>
            <a class="menu-item-nav-desk font-text" href="#">
              Arrangementer
            </a>
            <a class="menu-item-nav-desk font-text" href="/ciderskolen">
              Ciderskolen
            </a>
            <a class="menu-item-nav-desk font-text" href="#">
              Om os
            </a>
            <a class="menu-item-nav-desk font-text" href="#">
              For virksomheder
            </a>
          </div>
          <div class="nav-icon-wrapper gap-space40 flex">
            <a href="profil">
              <Image class="w-[37px]" src="../img/profil_groen.svg" alt="ikoner" />
            </a>
            <a href="/kurv">
              <Image class="w-[37px]" src="../img/kurv_groen.svg" alt="kurv" />
            </a>
          </div>
          <a aria-label="hamburger menu button" href="#" class="toggle-menu">
            <span class="bar"></span>
            <span class="bar"></span>
            <span class="bar"></span>
          </a>
        </nav>

        <nav id="full_screen_nav" class="bg-inherit relative">
          <div id="menu-items" class="z-30 text-green400">
            <a class="menu-item font-text" href="/">
              Forside
            </a>
            <a class="menu-item font-text" href="/shop">
              Shop
            </a>
            <a class="menu-item font-text" href="#">
              Abonnement
            </a>
            <a class="menu-item font-text" href="#">
              Arrangementer
            </a>
            <a class="menu-item font-text" href="/ciderskolen">
              Ciderskolen
            </a>
            <a class="menu-item font-text" href="#">
              Om os
            </a>
            <a class="menu-item font-text" href="#">
              For virksomheder
            </a>
          </div>
          <div class="logo_full_nav z-20 opacity-70">
            <a href="/">
              <Image class="w-[200px]" src="../img/logo.svg" alt="firma logo" />
            </a>
          </div>
        </nav>
      </div>
    </>
  );
}

export default Header2;
