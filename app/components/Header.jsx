import Link from "next/link";

function Header() {
  return (
    <div>
      <div>
        <Link href="/">LOGO</Link>
      </div>
      <nav className="topnav font-copy">
        <Link href="/shop">SHOP</Link>
        <Link href="/om">OM</Link>
        <Link href="/virksomhed">VIRKSOMHED</Link>
        <Link href="/events">EVENTS</Link>
        <Link href="/kontakt">KONTAKT</Link>
        <Link href="/kurv">KURV</Link>
      </nav>
    </div>
  );
}

export default Header;
