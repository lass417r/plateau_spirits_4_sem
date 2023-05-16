import "../styles/globals.css";
import localFont from "next/font/local";
import { EB_Garamond } from "next/font/google";
import Header from "./components/Header";

const ebGaramond = EB_Garamond({
  weight: "400",
  style: "normal",
  variable: "--eb-regular",
  subsets: ["latin-ext"],
});

const rocaOneBlack = localFont({
  src: "../public/fonts/RocaOne-Bl.woff2",
  weight: "900",
  style: "normal",
  variable: "--rocaBl-black",
});

const rocaOneHeavy = localFont({
  src: "../public/fonts/RocaOne-Hv.woff2",
  weight: "900",
  style: "normal",
  variable: "--rocaHv-heavy",
});

const rocaOneBold = localFont({
  src: "../public/fonts/RocaOne-Bold.woff2",
  weight: "bold",
  style: "normal",
  variable: "--roca-bold",
});

const rocaOneRegular = localFont({
  src: "../public/fonts/RocaOne-Rg.woff2",
  weight: "normal",
  style: "normal",
  variable: "--roca-regular",
});

const rocaOneLight = localFont({
  src: "../public/fonts/RocaOne-Lt.woff2",
  weight: "300",
  style: "normal",
  variable: "--roca-light",
});

const rocaOneThin = localFont({
  src: "../public/fonts/RocaOne-Th.woff2",
  weight: "100",
  style: "normal",
  variable: "--roca-thin",
});

export const metadata = {
  title: "Plateau Spirits",
  description: "Local distilleri in Copenhagen",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="da"
      className={`${rocaOneBlack.variable} ${rocaOneRegular.variable} ${rocaOneBold.variable} ${rocaOneHeavy.variable} ${rocaOneThin.variable} ${rocaOneLight.variable}${ebGaramond.variable}`}
    >
      <body className="bg-greybase">
        <header>
          <Header></Header>
        </header>
        <main className="ml-10 mr-10">{children}</main>
        <footer></footer>
      </body>
    </html>
  );
}
