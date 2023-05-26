import Button from "@/components/Button";

export default function NotFound() {
  return (
    <div className="mx-10 mt-10 flex min-h-screen justify-center md:mx-40 md:mt-20">
      <div className="flex flex-col gap-20">
        <h1>Not found – 404! eat a dick bro</h1>
        <div>
          <Button href={"/"} text={"Gå til forsiden"}></Button>
        </div>
      </div>
    </div>
  );
}
