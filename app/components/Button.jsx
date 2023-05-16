import Link from "next/link";

function Button({ href, text }) {
  return (
    <Link href={href} className="voresKnap px-5 py-3 border-2 border-black400  bg-white100 text-black400 text-deskButtonPrimary tracking-wider font-ssort">
      {text}
    </Link>
  );
}

export default Button;
