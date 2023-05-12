import Image from "next/image";
import ginImg from "../public/images/gin1.jpg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono">
        <h1>PLATEAU SPIRITS</h1>
        <Image src={ginImg} width={1365} height={2048} alt="Picture of Gin bottle"></Image>
      </div>
    </main>
  );
}
