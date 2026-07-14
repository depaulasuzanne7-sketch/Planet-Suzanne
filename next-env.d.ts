import Link from "next/link";
import PlanetMark from "./PlanetMark";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-brand">
        <PlanetMark compact />
        <div>
          <strong>Planet Suzanne Explorers</strong>
          <p>Collect Moments. Not Things.</p>
        </div>
      </div>
      <div className="footer-links">
        <Link href="/about">About</Link>
        <Link href="/discoveries">Discoveries</Link>
        <Link href="/explorer-kit">Explorer Kit</Link>
        <Link href="/join">Join</Link>
      </div>
      <p className="copyright">© 2026 DePaula Discoveries. Founder Edition.</p>
    </footer>
  );
}
