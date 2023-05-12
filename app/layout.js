import "./globals.css";
import localFont from "next/font/local";
import { EB_Garamond } from "@next/font/google";
import Link from "next/link";

const ebGaramond = EB_Garamond({
  weight: "400",
  style: "normal",
  variable: "--eb-regular",
  subsets: ["latin-ext"],
});

const RocaOne = localFont({
  src: [
    {
      path: "../public/fonts/RocaOne-Bl.woff2",
      weight: "900",
      style: "normal",
      variable: "--rocaBl-black",
    },
    {
      path: "../public/fonts/RocaOne-Hv.woff2",
      weight: "900",
      style: "normal",
      variable: "--rocaHv-heavy",
    },
    {
      path: "../public/fonts/RocaOne-Th.woff2",
      weight: "100",
      style: "normal",
      variable: "--roca-thin",
    },
    {
      path: "../public/fonts/RocaOne-Lt.woff2",
      weight: "300",
      style: "normal",
      variable: "--roca-light",
    },
    {
      path: "../public/fonts/RocaOne-Bold.woff2",
      weight: "bold",
      style: "normal",
      variable: "--roca-bold",
    },
    {
      path: "../public/fonts/RocaOne-Rg.woff2",
      weight: "normal",
      style: "normal",
      variable: "--roca-regular",
    },
  ],
});

export const metadata = {
  title: "Plateau Spirits",
  description: "Local distilleri in Copenhagen",
};

export default function RootLayout({ children }) {
  return (
    <html lang="da">
      <body className={RocaOne.className}>
        <header>
          <div>
            <Link href="/">LOGO</Link>
          </div>
          <nav className="topnav">
            <Link href="/shop">SHOP</Link>
            <Link href="/om">OM</Link>
            <Link href="/virksomhed">VIRKSOMHED</Link>
            <Link href="/events">EVENTS</Link>
            <Link href="/kontakt">KONTAKT</Link>
            <Link href="/kurv">KURV</Link>
          </nav>
        </header>
        <main>{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
