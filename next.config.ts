import Link from "next/link";
import PlanetMark from "./PlanetMark";

export default function Header() {
  return (
    <header className="site-header">
      <Link href="/" className="brand-lockup" aria-label="Planet Suzanne home">
        <PlanetMark compact />
        <span>
          <strong>Planet Suzanne</strong>
          <small>Explorers</small>
        </span>
      </Link>
      <nav className="main-nav" aria-label="Main navigation">
        <Link href="/discoveries">Discoveries</Link>
        <Link href="/explorer-kit">Explorer Kit</Link>
        <Link href="/about">Our Story</Link>
        <Link href="/join" className="nav-cta">Join</Link>
      </nav>
    </header>
  );
}
